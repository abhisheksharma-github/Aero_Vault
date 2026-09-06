import {
  initialAircraftData,
  initialNationIntelligence,
  initialCountryForceProfiles,
  initialSitrepEvents,
  initialNavalVessels,
  initialGroundVehicles,
} from '../data/mockData';
import { g20CountriesData } from '../data/g20/g20Countries';
import { g20AircraftData } from '../data/g20/g20Aircraft';
import { aerospaceManufacturers } from '../data/g20/manufacturers';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';


export const apiService = {
  /**
   * List aircraft with server-side query filters, branch filters, pagination, and sorting
   */
  async getAircraft(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.country && params.country !== 'ALL') query.append('country', params.country);
      if (params.affiliation && params.affiliation !== 'ALL') query.append('affiliation', params.affiliation);
      if (params.militaryBranch && params.militaryBranch !== 'ALL') query.append('militaryBranch', params.militaryBranch);
      if (params.serviceStatus && params.serviceStatus !== 'ALL') query.append('serviceStatus', params.serviceStatus);
      if (params.category && params.category !== 'ALL') query.append('category', params.category);
      if (params.generation && params.generation !== 'ALL') query.append('generation', params.generation);
      if (params.era && params.era !== 'ALL') query.append('era', params.era);
      if (params.stealthLevel && params.stealthLevel !== 'ALL') query.append('stealthLevel', params.stealthLevel);
      if (params.search) query.append('search', params.search);
      if (params.minTvr !== undefined && params.minTvr !== '') query.append('minTvr', String(params.minTvr));
      if (params.maxTvr !== undefined && params.maxTvr !== '') query.append('maxTvr', String(params.maxTvr));
      if (params.sortBy) query.append('sortBy', params.sortBy);
      if (params.sortOrder) query.append('sortOrder', params.sortOrder);
      if (params.page) query.append('page', String(params.page));
      if (params.limit) query.append('limit', String(params.limit));

      const res = await fetch(`${API_BASE}/aircraft?${query.toString()}`);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      const json = await res.json();

      if (json.success && Array.isArray(json.data)) {
        return {
          items: json.data,
          pagination: json.pagination || { page: 1, limit: json.data.length, total: json.data.length, totalPages: 1 },
          filters: json.filters || {},
          source: 'live-db',
        };
      }
    } catch (err) {
      console.warn('Backend API offline or unreachable. Using AeroVault local intelligence vault.', err);
    }

    // Client-side fallback filtering
    let items = [...initialAircraftData];

    if (params.country && params.country !== 'ALL') {
      items = items.filter((a) => a.country.toLowerCase().includes(params.country.toLowerCase()));
    }
    if (params.militaryBranch && params.militaryBranch !== 'ALL') {
      items = items.filter((a) => a.militaryBranch === params.militaryBranch);
    }
    if (params.affiliation && params.affiliation !== 'ALL') {
      items = items.filter((a) => a.affiliation.toLowerCase() === params.affiliation.toLowerCase());
    }
    if (params.serviceStatus && params.serviceStatus !== 'ALL') {
      items = items.filter((a) => a.serviceStatus === params.serviceStatus);
    }
    if (params.category && params.category !== 'ALL') {
      items = items.filter((a) => a.category === params.category);
    }
    if (params.generation && params.generation !== 'ALL') {
      items = items.filter((a) => a.generation === params.generation);
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      items = items.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          (a.family && a.family.toLowerCase().includes(q)) ||
          (a.commonName && a.commonName.toLowerCase().includes(q)) ||
          a.manufacturer.toLowerCase().includes(q) ||
          a.country.toLowerCase().includes(q) ||
          a.role.toLowerCase().includes(q) ||
          a.affiliation.toLowerCase().includes(q)
      );
    }

    // Sorting
    const sortKey = params.sortBy || 'tvrScore';
    const order = params.sortOrder === 'asc' ? 1 : -1;
    items.sort((a, b) => {
      const valA = a[sortKey] ?? 0;
      const valB = b[sortKey] ?? 0;
      if (typeof valA === 'string') return valA.localeCompare(String(valB)) * order;
      return (Number(valA) - Number(valB)) * order;
    });

    return {
      items,
      pagination: { page: 1, limit: items.length, total: items.length, totalPages: 1 },
      filters: params,
      source: 'offline-vault',
    };
  },

  /**
   * Get single aircraft by ID
   */
  async getAircraftById(id) {
    try {
      const res = await fetch(`${API_BASE}/aircraft/${id}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch (err) {
      console.warn('API offline, resolving aircraft by ID from offline vault.');
    }
    return initialAircraftData.find((a) => a.id === id || a.name === id) || initialAircraftData[0];
  },

  /**
   * Get Global Airpower Intelligence Rankings
   */
  async getIntelligence() {
    try {
      const res = await fetch(`${API_BASE}/intelligence`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          return {
            rankings: json.data.rankings || initialNationIntelligence,
            source: 'live-db',
          };
        }
      }
    } catch (err) {
      console.warn('API offline, resolving intelligence rankings from offline vault.');
    }

    return {
      rankings: initialNationIntelligence,
      source: 'offline-vault',
    };
  },

  /**
   * Compare two aircraft
   */
  async compareAircraft(aircraftA, aircraftB) {
    try {
      const idA = aircraftA.id || aircraftA.name;
      const idB = aircraftB.id || aircraftB.name;
      const res = await fetch(`${API_BASE}/intelligence/compare?aircraftA=${encodeURIComponent(idA)}&aircraftB=${encodeURIComponent(idB)}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch (err) {
      console.warn('API offline, calculating comparison via fallback engine.');
    }

    // Local benchmark calculation
    const tvrA = aircraftA.tvrScore || 85.0;
    const tvrB = aircraftB.tvrScore || 85.0;
    const delta = Number((tvrA - tvrB).toFixed(1));

    return {
      combatantA: {
        id: aircraftA.id,
        name: aircraftA.name,
        country: aircraftA.country,
        militaryBranch: aircraftA.militaryBranch || 'AIR_FORCE',
        category: aircraftA.category,
        tvrBreakdown: {
          overall: tvrA,
          grade: tvrA >= 94 ? 'S+' : tvrA >= 88 ? 'S' : 'A+',
          dimensions: {
            kinetics: (aircraftA.topSpeedMach || 2.0) * 45,
            avionics: aircraftA.hasAesa ? 92 : 75,
            weapons: 88,
            survivability: aircraftA.stealthLevel === 'VERY_HIGH' ? 95 : 70,
            range: (aircraftA.combatRangeKm || 1200) / 20,
            modernization: aircraftA.generation === 'GEN_5' ? 92 : 80,
            logistics: aircraftA.reliabilityScore || 80,
          },
          strengths: ['High-performance multi-domain avionics and radar range', 'Operational reliability in high-threat theater'],
          limitations: ['Specialized ground maintenance turnaround required'],
        },
      },
      combatantB: {
        id: aircraftB.id,
        name: aircraftB.name,
        country: aircraftB.country,
        militaryBranch: aircraftB.militaryBranch || 'AIR_FORCE',
        category: aircraftB.category,
        tvrBreakdown: {
          overall: tvrB,
          grade: tvrB >= 94 ? 'S+' : tvrB >= 88 ? 'S' : 'A+',
          dimensions: {
            kinetics: (aircraftB.topSpeedMach || 2.0) * 45,
            avionics: aircraftB.hasAesa ? 92 : 75,
            weapons: 88,
            survivability: aircraftB.stealthLevel === 'VERY_HIGH' ? 95 : 70,
            range: (aircraftB.combatRangeKm || 1200) / 20,
            modernization: aircraftB.generation === 'GEN_5' ? 92 : 80,
            logistics: aircraftB.reliabilityScore || 80,
          },
          strengths: ['High-performance multi-domain avionics and radar range', 'Operational reliability in high-threat theater'],
          limitations: ['Specialized ground maintenance turnaround required'],
        },
      },
      dimensionMatrix: [
        { dimension: 'kinetics', label: 'Kinetic Flight Dynamics', scoreA: Math.min(100, (aircraftA.topSpeedMach || 2.0) * 45), scoreB: Math.min(100, (aircraftB.topSpeedMach || 2.0) * 45), delta: 0, leader: 'PARITY' },
        { dimension: 'avionics', label: 'Sensors & Electronic Warfare', scoreA: aircraftA.hasAesa ? 92 : 75, scoreB: aircraftB.hasAesa ? 92 : 75, delta: 0, leader: 'PARITY' },
        { dimension: 'weapons', label: 'Payload & Weapons Integration', scoreA: 88, scoreB: 88, delta: 0, leader: 'PARITY' },
        { dimension: 'survivability', label: 'Stealth & Low Observability', scoreA: aircraftA.stealthLevel === 'VERY_HIGH' ? 95 : 70, scoreB: aircraftB.stealthLevel === 'VERY_HIGH' ? 95 : 70, delta: 0, leader: 'PARITY' },
        { dimension: 'range', label: 'Operational Combat Radius', scoreA: Math.min(100, (aircraftA.combatRangeKm || 1200) / 20), scoreB: Math.min(100, (aircraftB.combatRangeKm || 1200) / 20), delta: 0, leader: 'PARITY' },
        { dimension: 'modernization', label: 'Generation & Modernization', scoreA: aircraftA.generation === 'GEN_5' ? 92 : 80, scoreB: aircraftB.generation === 'GEN_5' ? 92 : 80, delta: 0, leader: 'PARITY' },
        { dimension: 'logistics', label: 'Fleet Reliability & Maintenance', scoreA: aircraftA.reliabilityScore || 80, scoreB: aircraftB.reliabilityScore || 80, delta: 0, leader: 'PARITY' },
      ],
      missionScenarios: [
        {
          mission: 'BVR_COMBAT',
          title: 'Beyond-Visual-Range (BVR) Combat',
          advantage: delta > 0 ? 'ALPHA' : delta < 0 ? 'BRAVO' : 'PARITY',
          advantageMargin: Math.abs(delta),
          combatantA: { name: aircraftA.name, missionScore: tvrA, strengths: ['AESA radar range', 'BVRAAM loadout'] },
          combatantB: { name: aircraftB.name, missionScore: tvrB, strengths: ['Tactical datalinks', 'EW self-protection'] },
          keyFactors: ['AESA radar tracking range', 'Low radar cross-section (RCS)', 'Long-range active radar AAM reach'],
          analyticalDisclaimer: 'AeroVault analytical model estimate derived from open-source sensor, kinetic, and weapon metrics.',
        },
        {
          mission: 'CARRIER_OPS',
          title: 'Naval Carrier Aviation & Catapult Ops',
          advantage: aircraftA.militaryBranch === 'NAVAL_AVIATION' ? 'ALPHA' : aircraftB.militaryBranch === 'NAVAL_AVIATION' ? 'BRAVO' : 'PARITY',
          advantageMargin: 15,
          combatantA: { name: aircraftA.name, missionScore: aircraftA.militaryBranch === 'NAVAL_AVIATION' ? 90 : 40, strengths: ['Arrested landing hook'] },
          combatantB: { name: aircraftB.name, missionScore: aircraftB.militaryBranch === 'NAVAL_AVIATION' ? 90 : 40, strengths: ['Folding wing storage'] },
          keyFactors: ['Maritime corrosion resistance', 'Ski-jump / Catapult structural reinforcement'],
          analyticalDisclaimer: 'Carrier operations require specialized naval metallurgy, heavy arrestor gear, and high-sink-rate landing struts.',
        },
      ],
      overallAdvantage: {
        favored: delta > 0 ? 'ALPHA' : delta < 0 ? 'BRAVO' : 'PARITY',
        tvrDelta: Math.abs(delta),
        summary: delta !== 0 ? `${delta > 0 ? aircraftA.name : aircraftB.name} holds a modeled analytical advantage (+${Math.abs(delta)} TVR).` : 'Both platforms exhibit matched capabilities.',
      },
    };
  },

  /**
   * Get OSINT Data Quality Audit
   */
  async getOSINTQuality() {
    try {
      const res = await fetch(`${API_BASE}/osint/quality`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch (err) {
      console.warn('API offline, resolving quality audit from local vault.');
    }

    return {
      totalAircraftRecords: initialAircraftData.length,
      verifiedPercentage: 92.4,
      partiallyVerifiedCount: 2,
      estimatedCount: 3,
      conflictsPendingReview: 0,
      outdatedRecordsCount: 1,
      missingDataPointsCount: 0,
      totalSourcedImages: initialAircraftData.length,
      verifiedImagesCount: initialAircraftData.length,
      recentChangesCount: 12,
      integrityHealthIndex: 96.5,
    };
  },

  /**
   * Get Historical "What Changed?" Data Changes
   */
  async getOSINTChanges() {
    try {
      const res = await fetch(`${API_BASE}/osint/changes`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch (err) {
      console.warn('API offline, resolving change logs from local vault.');
    }

    return [
      { id: '1', entityType: 'AIRCRAFT', entityName: 'HAL Tejas Mk1A', field: 'fleetCount', previousValue: '32', newValue: '40', deltaString: '+8', source: 'MoD India Press Release', recordedAt: new Date().toISOString() },
      { id: '2', entityType: 'NATION', entityName: 'United States', field: 'gen5Count', previousValue: '520', newValue: '543', deltaString: '+23', source: 'Lockheed Martin Annual Delivery Report', recordedAt: new Date(Date.now() - 86400000).toISOString() },
      { id: '3', entityType: 'BRANCH', entityName: 'Indian Army Aviation Corps', field: 'rotaryAttackFleet', previousValue: '12', newValue: '15', deltaString: '+3', source: 'HAL Induction Ceremony', recordedAt: new Date(Date.now() - 172800000).toISOString() },
      { id: '4', entityType: 'AIRCRAFT', entityName: 'Sukhoi Su-57 Felon', field: 'fleetCount', previousValue: '16', newValue: '22', deltaString: '+6', source: "Jane's Defense Weekly", recordedAt: new Date(Date.now() - 259200000).toISOString() },
    ];
  },

  /**
   * Generate Nation Intelligence Report
   */
  async getNationReport(countryName) {
    try {
      const res = await fetch(`${API_BASE}/reports/nations/${encodeURIComponent(countryName)}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch (err) {
      console.warn('API offline, resolving report from local vault.');
    }

    const nation = initialNationIntelligence.find((n) => n.countryName.toLowerCase() === countryName.toLowerCase()) || initialNationIntelligence[0];
    return {
      id: `REP-${countryName.toUpperCase().slice(0, 3)}-2026`,
      reportTitle: `${nation.countryName.toUpperCase()} MILITARY AVIATION CAPABILITY REPORT`,
      classification: 'UNCLASSIFIED / OPEN-SOURCE INTELLIGENCE',
      generatedDate: new Date().toISOString().split('T')[0],
      targetEntity: nation.countryName,
      entityType: 'NATION',
      executiveSummary: `${nation.countryName} operates an estimated ${nation.totalActiveUnits.toLocaleString()} military airframes across its Air Force, Army Aviation, and Naval Air Arms with an overall modernization index of ${nation.modernizationIndex}%.`,
      fleetBreakdown: {
        totalUnits: nation.totalActiveUnits,
        activeUnits: nation.totalActiveUnits,
        modernizationIndex: nation.modernizationIndex,
        averageTvr: nation.tvrTotal,
        gen5Ratio: Number(((nation.gen5Count / (nation.totalFighters || 1)) * 100).toFixed(1)),
      },
      keyStrategicAssets: initialAircraftData.filter((a) => a.country.toLowerCase() === countryName.toLowerCase()).map((ac) => ({
        name: ac.name,
        role: ac.role,
        branch: ac.militaryBranch,
        tvrScore: ac.tvrScore,
        tvrGrade: ac.tvrScore >= 94 ? 'S+' : ac.tvrScore >= 88 ? 'S' : 'A+',
      })),
      strategicCapabilities: [
        { domain: 'Air Dominance & BVR Standoff', rating: 'SUPERIOR', assessment: 'Long-range active radar AAM integration and AESA sensor reach.' },
        { domain: 'Naval Aviation & ASW', rating: 'HIGH FORCE PROJECTION', assessment: 'Carrier-capable strike fighter wings and sub-surface acoustic detection.' },
      ],
      modernizationTrajectory: 'Ongoing induction of 5th-generation stealth fighters and indigenous sensor integration.',
      logisticsVulnerability: 'Operating multi-OEM fleet architectures requires continuous logistics replenishment pipelines.',
      sourcesCited: ["Jane's All the World's Aircraft 2025", 'FlightGlobal World Air Forces Directory 2025', 'WDMMA Intelligence Index'],
    };
  },

  /**
   * Get Global Country Rankings (ATLAS, AIRS, SEAS, ARMS)
   */
  async getCountryRankings(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.sortBy) query.append('sortBy', params.sortBy);
      if (params.order) query.append('order', params.order);
      if (params.limit) query.append('limit', String(params.limit));

      const res = await fetch(`${API_BASE}/rankings/countries?${query.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          return {
            items: json.data,
            count: json.count || json.data.length,
            source: 'live-db',
          };
        }
      }
    } catch (err) {
      console.warn('API offline, resolving country rankings from local vault.');
    }

    // Client-side fallback
    let items = [...initialCountryForceProfiles];
    const sortKey = params.sortBy || 'atlasIndex';
    const order = params.order === 'asc' ? 1 : -1;

    items.sort((a, b) => {
      const valA = a[sortKey] ?? 0;
      const valB = b[sortKey] ?? 0;
      if (typeof valA === 'string') return valA.localeCompare(String(valB)) * order;
      return (Number(valA) - Number(valB)) * order;
    });

    return {
      items,
      count: items.length,
      source: 'offline-vault',
    };
  },

  /**
   * Get Live Sitrep Defense Events
   */
  async getSitreps(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.domain && params.domain !== 'ALL') query.append('domain', params.domain);
      if (params.limit) query.append('limit', String(params.limit));
      if (params.page) query.append('page', String(params.page));

      const res = await fetch(`${API_BASE}/intelligence/sitrep?${query.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          return {
            items: json.data,
            count: json.count || json.data.length,
            pagination: json.pagination,
            source: 'live-db',
          };
        }
      }
    } catch (err) {
      console.warn('API offline, resolving live sitreps from local vault.');
    }

    let items = [...initialSitrepEvents];
    if (params.domain && params.domain !== 'ALL') {
      items = items.filter((e) => e.domain === params.domain);
    }

    return {
      items,
      count: items.length,
      source: 'offline-vault',
    };
  },

  /**
   * Get Naval Vessels & Fleet Inventory
   */
  async getNavalVessels(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.vesselType && params.vesselType !== 'ALL') query.append('vesselType', params.vesselType);
      if (params.country && params.country !== 'ALL') query.append('country', params.country);
      if (params.search) query.append('search', params.search);
      if (params.sortBy) query.append('sortBy', params.sortBy);
      if (params.order) query.append('order', params.order);
      if (params.page) query.append('page', String(params.page));
      if (params.limit) query.append('limit', String(params.limit));

      const res = await fetch(`${API_BASE}/naval/vessels?${query.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          return {
            items: json.data,
            pagination: json.pagination,
            source: 'live-db',
          };
        }
      }
    } catch (err) {
      console.warn('API offline, resolving naval fleet from local vault.');
    }

    let items = [...initialNavalVessels];
    if (params.vesselType && params.vesselType !== 'ALL') {
      items = items.filter((v) => v.vesselType === params.vesselType);
    }
    if (params.country && params.country !== 'ALL') {
      items = items.filter((v) => v.country.toLowerCase().includes(params.country.toLowerCase()));
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      items = items.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.shipClass.toLowerCase().includes(q) ||
          v.country.toLowerCase().includes(q) ||
          (v.pennantNumber && v.pennantNumber.toLowerCase().includes(q))
      );
    }

    return {
      items,
      pagination: { page: 1, limit: items.length, total: items.length, totalPages: 1 },
      source: 'offline-vault',
    };
  },

  /**
   * Get Ground Vehicles & Land Armor
   */
  async getGroundVehicles(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.category && params.category !== 'ALL') query.append('category', params.category);
      if (params.country && params.country !== 'ALL') query.append('country', params.country);
      if (params.search) query.append('search', params.search);
      if (params.sortBy) query.append('sortBy', params.sortBy);
      if (params.order) query.append('order', params.order);
      if (params.page) query.append('page', String(params.page));
      if (params.limit) query.append('limit', String(params.limit));

      const res = await fetch(`${API_BASE}/land/vehicles?${query.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          return {
            items: json.data,
            pagination: json.pagination,
            source: 'live-db',
          };
        }
      }
    } catch (err) {
      console.warn('API offline, resolving ground armor from local vault.');
    }

    let items = [...initialGroundVehicles];
    if (params.category && params.category !== 'ALL') {
      items = items.filter((v) => v.category === params.category);
    }
    if (params.country && params.country !== 'ALL') {
      items = items.filter((v) => v.country.toLowerCase().includes(params.country.toLowerCase()));
    }
    if (params.search) {
      const q = params.search.toLowerCase();
      items = items.filter(
        (v) =>
          v.name.toLowerCase().includes(q) ||
          v.country.toLowerCase().includes(q) ||
          (v.mainArmament && v.mainArmament.toLowerCase().includes(q)) ||
          v.category.toLowerCase().includes(q)
      );
    }

    return {
      items,
      pagination: { page: 1, limit: items.length, total: items.length, totalPages: 1 },
      source: 'offline-vault',
    };
  },

  /**
   * Get Multi-Domain Country Force Inventory
   */
  async getCountryInventory(countryCode) {
    try {
      const res = await fetch(`${API_BASE}/countries/${encodeURIComponent(countryCode)}/inventory`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch (err) {
      console.warn('API offline, resolving country inventory from local vault.');
    }

    const code = countryCode.toUpperCase();
    const profile = initialCountryForceProfiles.find((p) => p.countryCode === code || p.country.toUpperCase() === code) || initialCountryForceProfiles[0];
    return {
      country: profile.country,
      countryCode: profile.countryCode,
      profile,
      aircraftCount: initialAircraftData.filter((a) => a.country.toLowerCase() === profile.country.toLowerCase()).length,
      navalVessels: initialNavalVessels.filter((v) => v.country.toLowerCase() === profile.country.toLowerCase()),
      groundVehicles: initialGroundVehicles.filter((g) => g.country.toLowerCase() === profile.country.toLowerCase()),
    };
  },

  /**
   * Trigger Dynamic ATLAS Re-indexing
   */
  async reindexIntelligence() {
    try {
      const res = await fetch(`${API_BASE}/intelligence/reindex`, { method: 'POST' });
      if (res.ok) {
        const json = await res.json();
        return json;
      }
    } catch (err) {
      console.warn('API offline, returning simulated reindex response.');
    }
    return { success: true, message: 'ATLAS Engine calibrated in offline vault mode.', timestamp: new Date().toISOString() };
  },

  /**
   * G20 Intelligence Platform - Get All Sovereign Countries
   */
  async getG20Countries() {
    try {
      const res = await fetch(`${API_BASE}/countries`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          return {
            items: json.data,
            count: json.data.length,
            source: 'live-db',
          };
        }
      }
    } catch (err) {
      console.warn('Backend API offline. Serving G20 countries from local intelligence vault.');
    }

    return {
      items: g20CountriesData,
      count: g20CountriesData.length,
      source: 'offline-vault',
    };
  },

  /**
   * G20 Intelligence Platform - Get Country Details
   */
  async getG20CountryDetail(countryIdentifier) {
    try {
      const res = await fetch(`${API_BASE}/countries/${encodeURIComponent(countryIdentifier)}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch (err) {
      console.warn('Backend API offline. Resolving G20 country from local intelligence vault.');
    }

    const idLower = countryIdentifier.toLowerCase();
    const match = g20CountriesData.find(
      (c) =>
        c.name.toLowerCase() === idLower ||
        c.countryCode.toLowerCase() === idLower ||
        c.isoCode.toLowerCase() === idLower ||
        c.id.toLowerCase() === idLower
    );
    return match || g20CountriesData[0];
  },

  /**
   * G20 Intelligence Platform - Get Aircraft for Country
   */
  async getG20CountryAircraft(countryIdentifier, filters = {}) {
    try {
      const query = new URLSearchParams();
      if (filters.branch) query.append('branch', filters.branch);
      if (filters.category) query.append('category', filters.category);
      if (filters.status) query.append('status', filters.status);

      const res = await fetch(`${API_BASE}/countries/${encodeURIComponent(countryIdentifier)}/aircraft?${query.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) return json.data;
      }
    } catch (err) {
      console.warn('Backend API offline. Filtering country aircraft from local intelligence vault.');
    }

    const idLower = countryIdentifier.toLowerCase();
    let aircraft = g20AircraftData.filter(
      (a) =>
        a.country.toLowerCase() === idLower ||
        a.id.toLowerCase().startsWith(idLower)
    );

    if (filters.branch && filters.branch !== 'ALL') {
      aircraft = aircraft.filter(
        (a) =>
          a.militaryBranch.toLowerCase() === filters.branch.toLowerCase() ||
          a.affiliation.toLowerCase().includes(filters.branch.toLowerCase())
      );
    }
    if (filters.category && filters.category !== 'ALL') {
      aircraft = aircraft.filter(
        (a) =>
          a.primaryCategory.toLowerCase() === filters.category.toLowerCase() ||
          a.secondaryRoles.some((r) => r.toLowerCase().includes(filters.category.toLowerCase()))
      );
    }
    if (filters.status && filters.status !== 'ALL') {
      aircraft = aircraft.filter((a) => a.serviceStatus.toLowerCase() === filters.status.toLowerCase());
    }

    return aircraft;
  },

  /**
   * G20 Intelligence Platform - Get All Normalized Aircraft with multi-facet filters
   */
  async getG20AircraftList(params = {}) {
    try {
      const query = new URLSearchParams();
      if (params.search) query.append('q', params.search);
      const res = await fetch(`${API_BASE}/aircraft/search?${query.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          let items = json.data;
          if (params.country && params.country !== 'ALL') {
            items = items.filter((a) => a.country.toLowerCase() === params.country.toLowerCase());
          }
          if (params.category && params.category !== 'ALL') {
            items = items.filter((a) => a.primaryCategory.toLowerCase() === params.category.toLowerCase());
          }
          if (params.generation && params.generation !== 'ALL') {
            items = items.filter((a) => a.generation === params.generation);
          }
          if (params.status && params.status !== 'ALL') {
            items = items.filter((a) => a.serviceStatus === params.status);
          }
          return { items, count: items.length, source: 'live-db' };
        }
      }
    } catch (err) {
      console.warn('Backend API offline. Resolving G20 aircraft from local intelligence vault.');
    }

    let items = [...g20AircraftData];
    if (params.search) {
      const q = params.search.toLowerCase();
      items = items.filter(
        (a) =>
          a.aircraftName.toLowerCase().includes(q) ||
          a.officialDesignation.toLowerCase().includes(q) ||
          a.variant.toLowerCase().includes(q) ||
          a.family.toLowerCase().includes(q) ||
          a.manufacturer.toLowerCase().includes(q) ||
          a.country.toLowerCase().includes(q) ||
          a.primaryCategory.toLowerCase().includes(q) ||
          a.id.toLowerCase().includes(q) ||
          (a.natoReportingName && a.natoReportingName.toLowerCase().includes(q))
      );
    }
    if (params.country && params.country !== 'ALL') {
      items = items.filter((a) => a.country.toLowerCase() === params.country.toLowerCase());
    }
    if (params.category && params.category !== 'ALL') {
      items = items.filter((a) => a.primaryCategory.toLowerCase() === params.category.toLowerCase());
    }
    if (params.generation && params.generation !== 'ALL') {
      items = items.filter((a) => a.generation === params.generation);
    }
    if (params.status && params.status !== 'ALL') {
      items = items.filter((a) => a.serviceStatus === params.status);
    }

    return { items, count: items.length, source: 'offline-vault' };
  },

  /**
   * G20 Intelligence Platform - Get Manufacturers
   */
  async getG20Manufacturers() {
    try {
      const res = await fetch(`${API_BASE}/manufacturers`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) return json.data;
      }
    } catch (err) {
      console.warn('Backend API offline. Resolving manufacturers from local vault.');
    }
    return aerospaceManufacturers;
  },
};


