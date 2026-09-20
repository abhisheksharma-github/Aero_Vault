// ==============================================================================
// AeroVault Global Military Air Fleet Intelligence Dataset
// Covers Air Force, Army Aviation, and Naval Aviation across global powers
// ==============================================================================

export const initialAircraftData = [
  {
    "id": "ARG-FAA-A4AR-FIGHTINGHAWK",
    "aliases": [
      "ARG-FAA-A4AR-FIGHTINGHAWK",
      "arg-faa-a4ar-fightinghawk"
    ],
    "name": "Lockheed Martin A-4AR Fightinghawk",
    "commonName": "Douglas A-4 Skyhawk",
    "officialDesignation": "A-4AR Fightinghawk Tactical Strike Aircraft",
    "natoReportingName": null,
    "family": "Douglas A-4 Skyhawk",
    "variant": "A-4AR (F-16 Avionics Modernization)",
    "block": "Fightinghawk Standard Upgrade",
    "manufacturer": "Lockheed Martin / Douglas Aircraft",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "Argentina",
    "affiliation": "Fuerza Aérea Argentina (FAA V Brigada Aérea, Villa Reynolds)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "GROUND_ATTACK",
    "generation": "GEN_3",
    "era": "MODERN",
    "role": "Ground Attack",
    "secondaryRoles": [
      "Close Air Support",
      "Air Defense Interception",
      "Tactical Maritime Strike"
    ],
    "firstFlightYear": 1954,
    "introductionYear": 1997,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 12,
    "activeCount": 12,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "Pratt & Whitney",
    "engineModel": "Pratt & Whitney J52-P-408A Turbojet",
    "engineCount": 1,
    "engineType": "Turbojet",
    "hasAfterburner": false,
    "thrustDryKn": 50,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 800,
    "serviceCeilingM": 12800,
    "rateOfClimbMs": 43,
    "gLimitPositive": 8,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 520,
    "combatRadiusKm": 520,
    "ferryRangeKm": 3220,
    "emptyWeightKg": 4900,
    "maxTakeoffWeightKg": 11100,
    "payloadCapacityKg": 4500,
    "internalFuelKg": 2400,
    "lengthM": 12.3,
    "wingspanM": 8.38,
    "heightM": 4.57,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-01",
    "description": "Light attack and tactical fighter upgraded by Lockheed Martin with F-16 radar and digital avionics, currently serving as primary combat aviation asset of the Argentine Air Force.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 12.3,
        "wingspanM": 8.38,
        "heightM": 4.57
      },
      "weights": {
        "emptyWeightKg": 4900,
        "maxTakeoffWeightKg": 11100,
        "payloadCapacityKg": 4500,
        "internalFuelKg": 2400
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Pratt & Whitney J52-P-408A Turbojet",
        "engineManufacturer": "Pratt & Whitney",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 50
      },
      "performance": {
        "maxSpeedKmh": 1080,
        "maxSpeedMach": 0.88,
        "cruiseSpeedKmh": 800,
        "combatRadiusKm": 520,
        "ferryRangeKm": 3220,
        "serviceCeilingM": 12800,
        "serviceCeilingFt": 42000,
        "rateOfClimbMs": 43,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Northrop Grumman AN/APG-66V2 (ARG) Pulse-Doppler Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 80,
      "hasAesa": false,
      "hasIrst": false,
      "electronicWarfare": "AN/ALR-93 Radar Warning Receiver & AN/ALQ-162 Jammer",
      "ewScore": 72,
      "hasDatalink": false,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "internalGun": "20mm Colt Mk 12 Twin Autocannons (100 rounds each)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4500,
      "keyWeaponsIntegrated": [
        "AIM-9M Sidewinder Heat-Seeking AAM",
        "Mark 82 / Mark 84 General Purpose Bombs",
        "LAU-68 Rocket Pods",
        "Rockeye Cluster Munitions"
      ]
    },
    "fleet": {
      "confirmedQuantity": 12,
      "estimatedQuantity": 12,
      "quantityYear": 2026,
      "quantityNotes": "12 active A-4AR airframes in FAA service providing interim light strike and air policing capabilities while transitioning to newly purchased F-16AM/BM MLU fighters from Denmark.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-01",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Ground Attack",
    "aircraftName": "Lockheed Martin A-4AR Fightinghawk"
  },
  {
    "id": "BRA-FAB-F39-GRIPEN",
    "aliases": [
      "BRA-FAB-F39-GRIPEN",
      "bra-fab-f39-gripen"
    ],
    "name": "Saab F-39E/F Gripen",
    "commonName": "Saab JAS-39 Gripen",
    "officialDesignation": "F-39E Gripen (Single-Seat) / F-39F (Twin-Seat)",
    "natoReportingName": null,
    "family": "Saab JAS-39 Gripen",
    "variant": "F-39E/F Gripen (Brazil Custom WAD Avionics)",
    "block": "Serial Production Lot 1 (Embraer Assembly)",
    "manufacturer": "Saab Aeronautics / Embraer Defense & Security",
    "manufacturerCountry": "Sweden / Brazil",
    "originCountry": "Sweden / Brazil",
    "country": "Brazil",
    "affiliation": "Brazilian Air Force (Força Aérea Brasileira - 1º GDA Jaguar Squadron)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Multirole Fighter",
    "secondaryRoles": [
      "Air Superiority",
      "Close Air Support",
      "Maritime Strike",
      "Reconnaissance"
    ],
    "firstFlightYear": 2017,
    "introductionYear": 2022,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 10,
    "activeCount": 10,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "GE Aerospace",
    "engineModel": "General Electric F414-GE-39E Afterburning Turbofan",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 63.9,
    "thrustAfterburnerKn": 98,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1250,
    "serviceCeilingM": 16000,
    "rateOfClimbMs": 250,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1500,
    "combatRadiusKm": 1500,
    "ferryRangeKm": 4000,
    "emptyWeightKg": 8000,
    "maxTakeoffWeightKg": 16500,
    "payloadCapacityKg": 5300,
    "internalFuelKg": 3400,
    "lengthM": 15.2,
    "wingspanM": 8.6,
    "heightM": 4.5,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-11",
    "description": "Smart 4.5+ generation multirole fighter featuring Brazilian Wide Area Display (WAD) panoramic cockpit, Raven ES-05 swashplate AESA radar providing 200-degree field of regard, and Meteor BVRAAM long-range standoff combat capability.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 15.2,
        "wingspanM": 8.6,
        "heightM": 4.5
      },
      "weights": {
        "emptyWeightKg": 8000,
        "maxTakeoffWeightKg": 16500,
        "payloadCapacityKg": 5300,
        "internalFuelKg": 3400
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "General Electric F414-GE-39E Afterburning Turbofan",
        "engineManufacturer": "GE Aerospace",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 63.9,
        "thrustAfterburnerKn": 98
      },
      "performance": {
        "maxSpeedKmh": 2450,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1250,
        "combatRadiusKm": 1500,
        "ferryRangeKm": 4000,
        "serviceCeilingM": 16000,
        "serviceCeilingFt": 52500,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Leonardo Raven ES-05 Active Electronically Scanned Array (AESA) with Swashplate Repositioner",
      "radarType": "AESA",
      "radarArchitecture": "Wide-Field-of-View Repositioner GaN AESA (200° azimuth coverage)",
      "radarRangeAirKm": 165,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Leonardo Skyward-G Infrared Search and Track",
      "electronicWarfare": "Saab MFS-EW (Multi-Frequency System) Integrated EW with 360° coverage",
      "ewScore": 92,
      "targetingSystem": "Litening 5 / Reccelite Pods",
      "helmetMountedDisplay": "AEL Sistemas Wide Area Display (WAD) & Targo HMD",
      "hasDatalink": true,
      "datalinkProtocol": "Link BR2 Indigenous Encrypted Datalink & Link 16",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.1
    },
    "capabilities": {
      "internalGun": "27mm Mauser BK-27 Revolver Cannon (120 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 5300,
      "keyWeaponsIntegrated": [
        "MBDA Meteor Active Radar BVRAAM",
        "IRIS-T High-Off-Boresight AAM",
        "A-Darter 5th-Gen AAM",
        "Spice 1000 Precision Guided Bombs",
        "RBS-15F ER Anti-Ship Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 10,
      "estimatedQuantity": 36,
      "quantityYear": 2026,
      "quantityNotes": "36 aircraft contracted (28 F-39E, 8 F-39F) with assembly line operational at Embraer Gavião Peixoto plant.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-11",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Multirole Fighter",
    "aircraftName": "Saab F-39E/F Gripen"
  },
  {
    "id": "CAN-RCAF-CF188-HORNET",
    "aliases": [
      "CAN-RCAF-CF188-HORNET",
      "can-rcaf-cf188-hornet"
    ],
    "name": "McDonnell Douglas CF-188 Hornet",
    "commonName": "McDonnell Douglas F/A-18 Hornet",
    "officialDesignation": "CF-188A / CF-18 Hornet (Hornet Extension Project II)",
    "natoReportingName": null,
    "family": "McDonnell Douglas F/A-18 Hornet",
    "variant": "CF-188A Modernized (HEP II / AESA Upgrade)",
    "block": "Hornet Extension Project (HEP) Phase 2",
    "manufacturer": "McDonnell Douglas / Boeing",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "Canada",
    "affiliation": "Royal Canadian Air Force (3 Wing Bagotville / 4 Wing Cold Lake)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_4",
    "era": "MODERN",
    "role": "Multirole Fighter",
    "secondaryRoles": [
      "NORAD Air Defense Interception",
      "NATO Air Policing",
      "Close Air Support"
    ],
    "firstFlightYear": 1978,
    "introductionYear": 1982,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 76,
    "activeCount": 76,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "GE Aerospace",
    "engineModel": "General Electric F404-GE-400 Afterburning Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 98,
    "thrustAfterburnerKn": 144,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 950,
    "serviceCeilingM": 15240,
    "rateOfClimbMs": 254,
    "gLimitPositive": 7.5,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 537,
    "combatRadiusKm": 537,
    "ferryRangeKm": 3330,
    "emptyWeightKg": 10455,
    "maxTakeoffWeightKg": 23541,
    "payloadCapacityKg": 6200,
    "internalFuelKg": 4926,
    "lengthM": 17.07,
    "wingspanM": 12.31,
    "heightM": 4.66,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-03",
    "description": "Core frontline multirole fighter of the Royal Canadian Air Force guarding North American Arctic airspace under NORAD. Upgraded under HEP II with AN/APG-79(V)4 AESA radar and AIM-9X Block II missiles.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 17.07,
        "wingspanM": 12.31,
        "heightM": 4.66
      },
      "weights": {
        "emptyWeightKg": 10455,
        "maxTakeoffWeightKg": 23541,
        "payloadCapacityKg": 6200,
        "internalFuelKg": 4926
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F404-GE-400 Afterburning Turbofans",
        "engineManufacturer": "GE Aerospace",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 98,
        "thrustAfterburnerKn": 144
      },
      "performance": {
        "maxSpeedKmh": 1814,
        "maxSpeedMach": 1.7,
        "cruiseSpeedKmh": 950,
        "combatRadiusKm": 537,
        "ferryRangeKm": 3330,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 254,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Raytheon AN/APG-79(V)4 Scaled Active Electronically Scanned Array (AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Solid-State GaN/GaAs Scaled Array for Classic Hornet",
      "radarRangeAirKm": 140,
      "hasAesa": true,
      "hasIrst": false,
      "electronicWarfare": "AN/ALR-67(V)3 Radar Warning Receiver & AN/ALE-47 Countermeasures",
      "ewScore": 84,
      "helmetMountedDisplay": "Joint Helmet Mounted Cueing System (JHMCS)",
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & NORAD Air Defense Network",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3
    },
    "capabilities": {
      "internalGun": "20mm M61A1 Vulcan 6-Barrel Gatling Cannon (578 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 6200,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM BVRAAM",
        "AIM-9X Sidewinder Block II",
        "GBU-12 Paveway II Laser Guided Bomb",
        "GBU-38 JDAM GPS-Guided Bomb",
        "Sniper Advanced Targeting Pod"
      ]
    },
    "fleet": {
      "confirmedQuantity": 76,
      "estimatedQuantity": 76,
      "quantityYear": 2026,
      "quantityNotes": "76 operational CF-188 fighters upgraded with AN/APG-79(V)4 AESA radars bridging operations until entry into service of 88 contracted F-35A stealth fighters.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-03",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Multirole Fighter",
    "aircraftName": "McDonnell Douglas CF-188 Hornet"
  },
  {
    "id": "chn-z10-army",
    "aliases": [
      "chn-z10-army"
    ],
    "name": "Changhe Z-10 Fierce Thunderbolt",
    "commonName": "Z-10 Attack Helicopter",
    "officialDesignation": "Z-10ME Upgraded Export/Domestic Standard",
    "natoReportingName": null,
    "family": "Changhe Z-10 Series",
    "variant": "Z-10ME Upgraded Export/Domestic Standard",
    "block": "Batch 04",
    "manufacturer": "Changhe Aircraft Industries Corporation",
    "manufacturerCountry": "China",
    "originCountry": "China",
    "country": "China",
    "affiliation": "PLA Ground Force Aviation (PLAGFA)",
    "militaryBranch": "ARMY_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "ATTACK_HELICOPTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Dedicated Battlefield Attack & Anti-Armor Helicopter",
    "secondaryRoles": [
      "Close Combat Attack",
      "Air-to-Air Escort"
    ],
    "firstFlightYear": 2003,
    "introductionYear": 2012,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 180,
    "activeCount": 180,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "WZ-9G Turboshafts",
    "engineCount": 2,
    "engineType": "Turboshaft",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": 290,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 6400,
    "rateOfClimbMs": 12,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 800,
    "combatRadiusKm": null,
    "ferryRangeKm": null,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": 1500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Mast-Mounted Millimeter Wave Radar (Z-10ME)",
    "radarRangeAirKm": 15,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 86,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 78,
    "confidenceLevel": "ESTIMATED",
    "confidenceScore": 88,
    "sourceCount": 5,
    "lastVerified": null,
    "description": "PLA Army primary attack helicopter featuring stepped tandem cockpit, mast-mounted millimeter wave radar, 23mm revolving cannon turret, HJ-10 anti-tank missiles, and TY-90 dedicated helicopter dogfight AAMs.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/CAIC_WZ-10_in_flight_at_Airshow_China_2012.jpg/1280px-CAIC_WZ-10_in_flight_at_Airshow_China_2012.jpg",
    "tvrScore": 80.8,
    "weapons": [
      {
        "weapon": {
          "name": "HJ-10 Heavy ATGM",
          "type": "ANTI_TANK_MISSILE",
          "maxRangeKm": 10,
          "speedMach": 1,
          "guidance": "TV / MMW / Laser"
        }
      },
      {
        "weapon": {
          "name": "TY-90 Air-to-Air Missile",
          "type": "WVR_AAM",
          "maxRangeKm": 6,
          "speedMach": 2,
          "guidance": "All-Aspect Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "ATTACK_HELICOPTER",
    "aircraftName": "Changhe Z-10 Fierce Thunderbolt",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "chn-j20a-plaaf",
    "aliases": [
      "chn-j20a-plaaf",
      "CHN-PLAAF-J20-A",
      "chn-plaaf-j20-a"
    ],
    "name": "Chengdu J-20A Mighty Dragon",
    "commonName": "J-20A",
    "officialDesignation": "J-20A (WS-10C Engines)",
    "natoReportingName": null,
    "family": "Chengdu J-20 Mighty Dragon",
    "variant": "J-20A (WS-10C Engines)",
    "block": "Production Batch 03",
    "manufacturer": "Chengdu Aircraft Industry Group",
    "manufacturerCountry": "China",
    "originCountry": "China",
    "country": "China",
    "affiliation": "People's Liberation Army Air Force (PLAAF)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "5th-Gen Heavy Stealth Air Superiority & Long-Range Interceptor",
    "secondaryRoles": [
      "Deep Penetration Strike",
      "Anti-AWACS Interdiction"
    ],
    "firstFlightYear": 2011,
    "introductionYear": 2017,
    "retirementYear": null,
    "productionCount": 250,
    "fleetCount": 220,
    "activeCount": 220,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Shenyang WS-10C / WS-15 Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 180,
    "thrustAfterburnerKn": 294,
    "topSpeedMach": 2,
    "topSpeedKmh": 2130,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 20000,
    "rateOfClimbMs": 304,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1500,
    "combatRadiusKm": null,
    "ferryRangeKm": 4500,
    "emptyWeightKg": 17000,
    "maxTakeoffWeightKg": 37000,
    "payloadCapacityKg": 11000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Type 1475 (KLJ-5) GaN AESA Radar",
    "radarRangeAirKm": 250,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 94,
    "stealthLevel": "HIGH",
    "rcsEstimatedM2": 0.05,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 78,
    "confidenceLevel": "ESTIMATED",
    "confidenceScore": 88,
    "sourceCount": 6,
    "lastVerified": null,
    "description": "PLAAF flagship 5th-generation heavy stealth fighter featuring canard-delta configuration, internal weapons bay carrying long-range PL-15 and ultra-long PL-17 BVRAAMs, and electro-optical distributed aperture sensors.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Chengdu_J-20_at_Airshow_China_2018.jpg/1280px-Chengdu_J-20_at_Airshow_China_2018.jpg",
    "tvrScore": 93.2,
    "weapons": [
      {
        "weapon": {
          "name": "PL-15 BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 200,
          "speedMach": 4.5,
          "guidance": "Active Radar / Two-Way Datalink"
        }
      },
      {
        "weapon": {
          "name": "PL-10 SRAAM",
          "type": "WVR_AAM",
          "maxRangeKm": 20,
          "speedMach": 3.5,
          "guidance": "Imaging Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AIR_SUPERIORITY",
    "aircraftName": "Chengdu J-20A Mighty Dragon",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 21.2,
        "wingspanM": 13.01,
        "heightM": 4.69
      },
      "weights": {
        "emptyWeightKg": 17000,
        "maxTakeoffWeightKg": 37000,
        "payloadCapacityKg": 11000,
        "internalFuelKg": 12000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Shenyang WS-10C / WS-15 Afterburning Turbofans",
        "engineManufacturer": "Shenyang Liming Aero-Engine Group",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 180,
        "thrustAfterburnerKn": 294
      },
      "performance": {
        "maxSpeedKmh": 2130,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1200,
        "combatRadiusKm": 1500,
        "ferryRangeKm": 4500,
        "serviceCeilingM": 20000,
        "serviceCeilingFt": 65600,
        "rateOfClimbMs": 304,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Type 1475 (KLJ-5) Active Electronically Scanned Array (GaN AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Gallium Nitride (GaN) Solid-State Phased Array",
      "radarRangeAirKm": 250,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "EOTS-86 Electro-Optical Targeting & EORD-31 IRST Suite",
      "electronicWarfare": "Integrated Conformal Electronic Warfare & Multi-Spectral Jamming Array",
      "ewScore": 94,
      "helmetMountedDisplay": "Chinese Helmet Mounted Display and Sight (HMDS)",
      "hasDatalink": true,
      "datalinkProtocol": "PLA Joint Tactical Data System",
      "sensorFusion": true,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.05
    },
    "capabilities": {
      "internalGun": null,
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 11000,
      "keyWeaponsIntegrated": [
        "PL-15 Long-Range Active Radar BVRAAM (>200 km)",
        "PL-10 High-Off-Boresight Imaging IR AAM",
        "PL-17 Very-Long-Range Standoff AAM (>400 km)",
        "LT-2 / LS-6 Precision Guided Glide Bombs"
      ]
    },
    "fleet": {
      "confirmedQuantity": 220,
      "estimatedQuantity": 250,
      "quantityYear": 2026,
      "quantityNotes": "Estimated 220-250 J-20 airframes in active PLAAF service across multiple operational fighter brigades.",
      "dataConfidence": "MEDIUM",
      "lastVerified": "2026-01-15",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "chn-j15t-planaf",
    "aliases": [
      "chn-j15t-planaf"
    ],
    "name": "Shenyang J-15T Flying Shark",
    "commonName": "J-15T Flying Shark",
    "officialDesignation": "J-15T Catapult-Capable (CATOBAR)",
    "natoReportingName": null,
    "family": "Shenyang J-15 Carrier Fighter",
    "variant": "J-15T Catapult-Capable (CATOBAR)",
    "block": "Lot 02 Production",
    "manufacturer": "Shenyang Aircraft Corporation",
    "manufacturerCountry": "China",
    "originCountry": "China",
    "country": "China",
    "affiliation": "PLA Naval Air Force (PLAN-AF Fujian Carrier Wing)",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Carrier-Based Heavy Multirole Strike Fighter",
    "secondaryRoles": [
      "Fleet Air Defense",
      "Anti-Ship Strike"
    ],
    "firstFlightYear": 2016,
    "introductionYear": 2023,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 48,
    "activeCount": 48,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "WS-10B Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 178,
    "thrustAfterburnerKn": 280,
    "topSpeedMach": 2.1,
    "topSpeedKmh": 2200,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 18000,
    "rateOfClimbMs": 310,
    "gLimitPositive": 8.5,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1200,
    "combatRadiusKm": null,
    "ferryRangeKm": 3200,
    "emptyWeightKg": 17500,
    "maxTakeoffWeightKg": 33000,
    "payloadCapacityKg": 6500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "KLJ-7A Active Electronically Scanned Array",
    "radarRangeAirKm": 190,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 88,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 3.8,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 76,
    "confidenceLevel": "ESTIMATED",
    "confidenceScore": 86,
    "sourceCount": 5,
    "lastVerified": null,
    "description": "Catapult-assisted takeoff barrier-arrested recovery (CATOBAR) carrier fighter designed for the CNS Fujian (Type 003). Upgraded with AESA radar, WS-10B engines, and PL-15 BVR missile compatibility.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Shenyang_J-15_%28cropped%29.jpg/1280px-Shenyang_J-15_%28cropped%29.jpg",
    "tvrScore": 84.4,
    "weapons": [
      {
        "weapon": {
          "name": "YJ-12 Sea-Skimming AShM",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 300,
          "speedMach": 3,
          "guidance": "Active Radar / Satellite"
        }
      },
      {
        "weapon": {
          "name": "PL-15 BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 200,
          "speedMach": 4.5,
          "guidance": "Active Radar"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Shenyang J-15T Flying Shark",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "chn-plaaf-j16",
    "aliases": [
      "chn-plaaf-j16",
      "shenyang-j-16-hidden-dragon",
      "j-16-hidden-dragon"
    ],
    "name": "Shenyang J-16 Hidden Dragon",
    "commonName": "J-16 Hidden Dragon",
    "officialDesignation": "J-16 Flanker-L",
    "natoReportingName": "Flanker-L",
    "family": "Shenyang J-11/16 Flanker Series",
    "variant": "J-16 Heavy Strike Fighter",
    "block": "Serial Standard",
    "manufacturer": "Shenyang Aircraft Corporation",
    "manufacturerCountry": "China",
    "originCountry": "China",
    "country": "China",
    "affiliation": "People’s Liberation Army Air Force (PLAAF)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_4_5",
    "era": "MODERN",
    "role": "Tandem-Seat Heavy Multirole Strike Fighter",
    "secondaryRoles": [
      "Air Dominance",
      "SEAD (J-16D Electronic Attack)",
      "Maritime Strike"
    ],
    "firstFlightYear": 2011,
    "introductionYear": 2015,
    "retirementYear": null,
    "productionCount": 250,
    "fleetCount": 220,
    "activeCount": 220,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Shenyang WS-10B Taihang Afterburning Turbofans (Dual)",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 178,
    "thrustAfterburnerKn": 280,
    "topSpeedMach": 2.2,
    "topSpeedKmh": 2336,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17300,
    "rateOfClimbMs": 250,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1500,
    "combatRadiusKm": null,
    "ferryRangeKm": 3900,
    "emptyWeightKg": 17700,
    "maxTakeoffWeightKg": 35000,
    "payloadCapacityKg": 8000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Type 1493 GaN AESA Radar",
    "radarRangeAirKm": 250,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 92,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 2.5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 16,
    "costPerFlightHourUsd": 14000,
    "reliabilityScore": 86,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Indigenous twin-engine heavy multirole strike fighter. Equipped with Type 1493 GaN AESA radar, integrated EW self-protection pods, and capability to fire PL-15 (200 km) and ultra-long-range PL-17 (400 km) air-to-air missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Shenyang_J-16_PLAAF_in_flight.jpg/1200px-Shenyang_J-16_PLAAF_in_flight.jpg",
    "tvrScore": 85.1,
    "weapons": [
      {
        "weapon": {
          "name": "PL-15 Dual-Pulse BVRAAM",
          "type": "BVR_AAM",
          "maxRangeKm": 200,
          "speedMach": 4.5,
          "guidance": "Active Radar / AESA"
        }
      },
      {
        "weapon": {
          "name": "PL-10 High-Off-Boresight WVR",
          "type": "WVR_AAM",
          "maxRangeKm": 25,
          "speedMach": 3.5,
          "guidance": "IIR / HMS"
        }
      },
      {
        "weapon": {
          "name": "YJ-83K Anti-Ship Missile",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 200,
          "speedMach": 0.9,
          "guidance": "Active Radar"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 2011,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Shenyang J-16 Hidden Dragon conducted."
      },
      {
        "year": 2015,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with People’s Liberation Army Air Force (PLAAF)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Shenyang J-16 Hidden Dragon",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 17700,
        "maxTakeoffWeightKg": 35000,
        "payloadCapacityKg": 8000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Shenyang WS-10B Taihang Afterburning Turbofans (Dual)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 178,
        "thrustAfterburnerKn": 280
      },
      "performance": {
        "maxSpeedKmh": 2336,
        "maxSpeedMach": 2.2,
        "combatRadiusKm": 1500,
        "ferryRangeKm": 3900,
        "serviceCeilingM": 17300,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Type 1493 GaN AESA Radar",
      "radarType": "AESA",
      "radarRangeAirKm": 250,
      "hasAesa": true,
      "hasIrst": true,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 2.5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "PL-15 Dual-Pulse BVRAAM",
        "PL-10 High-Off-Boresight WVR",
        "YJ-83K Anti-Ship Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 220,
      "estimatedQuantity": 220,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 220, Retired: 0.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "chn-plaaf-j6-farmer",
    "aliases": [
      "chn-plaaf-j6-farmer",
      "shenyang-j-6-farmer-",
      "shenyang-j-6"
    ],
    "name": "Shenyang J-6 (Farmer)",
    "commonName": "Shenyang J-6",
    "officialDesignation": "J-6 / F-6 Fighter",
    "natoReportingName": "Farmer",
    "family": "Shenyang J-Series",
    "variant": "J-6A / J-6III Standard",
    "block": "PLAAF Mass Production",
    "manufacturer": "Shenyang Aircraft Corporation",
    "manufacturerCountry": "China",
    "originCountry": "China / Soviet Union (MiG-19)",
    "country": "China",
    "affiliation": "People’s Liberation Army Air Force (Historic 1964–2010)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "FIGHTER",
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "role": "Supersonic Day Interceptor & Air Combat Fighter",
    "secondaryRoles": [
      "Tactical Ground Attack",
      "Unmanned UCAV Conversion"
    ],
    "firstFlightYear": 1958,
    "introductionYear": 1964,
    "retirementYear": 2010,
    "productionCount": 4500,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 150,
    "retiredCount": 4350,
    "engineManufacturer": null,
    "engineModel": "Liming WP-6 Turbojets (Dual)",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 51,
    "thrustAfterburnerKn": 64,
    "topSpeedMach": 1.45,
    "topSpeedKmh": 1540,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17900,
    "rateOfClimbMs": 180,
    "gLimitPositive": 8,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 640,
    "combatRadiusKm": null,
    "ferryRangeKm": 2200,
    "emptyWeightKg": 5447,
    "maxTakeoffWeightKg": 10000,
    "payloadCapacityKg": 1000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "Range-only Radar Gunsight",
    "radarRangeAirKm": 5,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 35,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 3,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 8,
    "costPerFlightHourUsd": 2500,
    "reliabilityScore": 82,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The most produced supersonic jet fighter in Chinese aviation history (over 4,500 produced). Formed the numeric core of the PLAAF air defense throughout the Cold War, armed with heavy 30mm cannons.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Shenyang_J-6_PLAAF_Museum.jpg/1200px-Shenyang_J-6_PLAAF_Museum.jpg",
    "tvrScore": 51.3,
    "weapons": [
      {
        "weapon": {
          "name": "Three 30mm NR-30 Cannons",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Optical"
        }
      },
      {
        "weapon": {
          "name": "PL-2 Air-to-Air Missile",
          "type": "WVR_AAM",
          "maxRangeKm": 5,
          "speedMach": 2,
          "guidance": "Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1958,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Shenyang J-6 (Farmer) conducted."
      },
      {
        "year": 1964,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with People’s Liberation Army Air Force (Historic 1964–2010)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "Shenyang J-6 (Farmer)",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 5447,
        "maxTakeoffWeightKg": 10000,
        "payloadCapacityKg": 1000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Liming WP-6 Turbojets (Dual)",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 51,
        "thrustAfterburnerKn": 64
      },
      "performance": {
        "maxSpeedKmh": 1540,
        "maxSpeedMach": 1.45,
        "combatRadiusKm": 640,
        "ferryRangeKm": 2200,
        "serviceCeilingM": 17900,
        "rateOfClimbMs": 180,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Range-only Radar Gunsight",
      "radarType": "NONE",
      "radarRangeAirKm": 5,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Three 30mm NR-30 Cannons",
        "PL-2 Air-to-Air Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 4350.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "EU-COMMON-A400M-ATLAS",
    "aliases": [
      "EU-COMMON-A400M-ATLAS",
      "eu-common-a400m-atlas"
    ],
    "name": "Airbus A400M Atlas",
    "commonName": "Airbus Military A400M",
    "officialDesignation": "A400M Atlas Heavy Tactical & Strategic Transport",
    "natoReportingName": null,
    "family": "Airbus Military A400M",
    "variant": "A400M Tactical / Aerial Refueler",
    "block": "Standard SOC 3 Standard",
    "manufacturer": "Airbus Defence and Space",
    "manufacturerCountry": "European Union (Germany / France / Spain / UK / Belgium / Turkey)",
    "originCountry": "European Union",
    "country": "European Union",
    "affiliation": "European Air Transport Command (EATC) / Multilateral European Defense Fleet",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "STRATEGIC_TRANSPORT",
    "generation": "GEN_4",
    "era": "MODERN",
    "role": "Strategic Transport",
    "secondaryRoles": [
      "Aerial Refueling Tanker",
      "Tactical Airdrop",
      "Medical Evacuation (MEDEVAC)",
      "Humanitarian Strategic Airlift"
    ],
    "firstFlightYear": 2009,
    "introductionYear": 2013,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 125,
    "activeCount": 125,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "Europrop International (Rolls-Royce / Snecma / MTU / ITP)",
    "engineModel": "Europrop TP400-D6 Turboprops (8-Blade Scimitar Propellers)",
    "engineCount": 4,
    "engineType": "Turboprop",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 780,
    "serviceCeilingM": 12200,
    "rateOfClimbMs": 16,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 3300,
    "combatRadiusKm": 3300,
    "ferryRangeKm": 8700,
    "emptyWeightKg": 76500,
    "maxTakeoffWeightKg": 141000,
    "payloadCapacityKg": 37000,
    "internalFuelKg": 50500,
    "lengthM": 45.1,
    "wingspanM": 42.4,
    "heightM": 14.7,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-10",
    "description": "European high-capacity tactical and strategic airlifter bridging the payload gap between the C-130J and C-17, capable of landing on short unprepared rough runways with 37 tonnes of cargo and aerial refueling fighter jets in flight.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 45.1,
        "wingspanM": 42.4,
        "heightM": 14.7
      },
      "weights": {
        "emptyWeightKg": 76500,
        "maxTakeoffWeightKg": 141000,
        "payloadCapacityKg": 37000,
        "internalFuelKg": 50500
      },
      "crew": {
        "minimumCrew": 3,
        "maximumCrew": 4
      },
      "propulsion": {
        "engineCount": 4,
        "engineModel": "Europrop TP400-D6 Turboprops (8-Blade Scimitar Propellers)",
        "engineManufacturer": "Europrop International (Rolls-Royce / Snecma / MTU / ITP)",
        "engineType": "Turboprop",
        "hasAfterburner": false,
        "thrustDryKn": null
      },
      "performance": {
        "maxSpeedKmh": 889,
        "maxSpeedMach": 0.72,
        "cruiseSpeedKmh": 780,
        "combatRadiusKm": 3300,
        "ferryRangeKm": 8700,
        "serviceCeilingM": 12200,
        "serviceCeilingFt": 40000,
        "rateOfClimbMs": 16
      }
    },
    "avionics": {
      "radar": "Thales / Hensoldt Airborne Weather & Low-Level Terrain Following Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 100,
      "hasAesa": false,
      "hasIrst": false,
      "electronicWarfare": "Defensive Aids Sub-System (DASS) with Missile Warning (MWS) & Laser Warning",
      "ewScore": 89,
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & EU SatCom High-Data-Rate Network",
      "sensorFusion": true,
      "stealthLevel": "LOW"
    },
    "capabilities": {
      "internalGun": null,
      "airToAirCapable": false,
      "airToGroundCapable": false,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 37000,
      "keyWeaponsIntegrated": [
        "Non-Combat Strategic & Tactical Airlifter / Aerial Tanker"
      ]
    },
    "fleet": {
      "confirmedQuantity": 125,
      "estimatedQuantity": 125,
      "quantityYear": 2026,
      "quantityNotes": "Over 125 operational aircraft across European coalition forces (Germany 42, France 23, UK 22, Spain 14, Turkey 10, Belgium 7) coordinated via EATC Eindhoven.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-10",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Strategic Transport",
    "aircraftName": "Airbus A400M Atlas"
  },
  {
    "id": "fra-aae-mirage3",
    "aliases": [
      "fra-aae-mirage3",
      "dassault-mirage-iii-c-e",
      "mirage-iii"
    ],
    "name": "Dassault Mirage III C/E",
    "commonName": "Mirage III",
    "officialDesignation": "Mirage IIIE All-Weather Fighter",
    "natoReportingName": null,
    "family": "Dassault Mirage Family",
    "variant": "Mirage IIIE Multi-Role",
    "block": "Armée de l’Air Standard",
    "manufacturer": "Dassault Aviation",
    "manufacturerCountry": "France",
    "originCountry": "France",
    "country": "France",
    "affiliation": "French Air Force (Armée de l’Air 1961–1994)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "FIGHTER",
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "role": "Mach 2.2 Delta-Wing Multirole Fighter-Interceptor",
    "secondaryRoles": [
      "Tactical Nuclear Strike (AN-52)",
      "Reconnaissance"
    ],
    "firstFlightYear": 1956,
    "introductionYear": 1961,
    "retirementYear": 1994,
    "productionCount": 1422,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 1422,
    "engineManufacturer": null,
    "engineModel": "Snecma Atar 09C Afterburning Turbojet",
    "engineCount": 1,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 42,
    "thrustAfterburnerKn": 60.8,
    "topSpeedMach": 2.2,
    "topSpeedKmh": 2350,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17000,
    "rateOfClimbMs": 140,
    "gLimitPositive": 8.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1200,
    "combatRadiusKm": null,
    "ferryRangeKm": 4000,
    "emptyWeightKg": 7050,
    "maxTakeoffWeightKg": 13700,
    "payloadCapacityKg": 4000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Thomson-CSF Cyrano II Bis Radar",
    "radarRangeAirKm": 55,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 60,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 2,
    "hasRwr": true,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 15,
    "costPerFlightHourUsd": 6500,
    "reliabilityScore": 86,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The premier European Mach 2 delta-wing fighter exported across 20 countries. Decisive in 1967 and 1973 Middle East conflicts and French nuclear deterrent doctrine.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mirage_IIIE_French_Air_Force.jpg/1200px-Mirage_IIIE_French_Air_Force.jpg",
    "tvrScore": 58.6,
    "weapons": [
      {
        "weapon": {
          "name": "Matra R.530 BVR",
          "type": "BVR_AAM",
          "maxRangeKm": 20,
          "speedMach": 2.7,
          "guidance": "Semi-Active Radar / IR"
        }
      },
      {
        "weapon": {
          "name": "Matra Magic WVR",
          "type": "WVR_AAM",
          "maxRangeKm": 10,
          "speedMach": 2.7,
          "guidance": "Infrared"
        }
      },
      {
        "weapon": {
          "name": "Two 30mm DEFA 552 Cannons",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Optical"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1956,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Dassault Mirage III C/E conducted."
      },
      {
        "year": 1961,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with French Air Force (Armée de l’Air 1961–1994)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "Dassault Mirage III C/E",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 7050,
        "maxTakeoffWeightKg": 13700,
        "payloadCapacityKg": 4000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Snecma Atar 09C Afterburning Turbojet",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 42,
        "thrustAfterburnerKn": 60.8
      },
      "performance": {
        "maxSpeedKmh": 2350,
        "maxSpeedMach": 2.2,
        "combatRadiusKm": 1200,
        "ferryRangeKm": 4000,
        "serviceCeilingM": 17000,
        "rateOfClimbMs": 140,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Thomson-CSF Cyrano II Bis Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 55,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Matra R.530 BVR",
        "Matra Magic WVR",
        "Two 30mm DEFA 552 Cannons"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 1422.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "fra-aae-mirage4",
    "aliases": [
      "fra-aae-mirage4",
      "dassault-mirage-iv-a-p",
      "mirage-iv-bomber"
    ],
    "name": "Dassault Mirage IV A/P",
    "commonName": "Mirage IV Bomber",
    "officialDesignation": "Mirage IVP Nuclear Strategic Penetrator",
    "natoReportingName": null,
    "family": "Dassault Mirage Strategic Series",
    "variant": "Mirage IVP",
    "block": "ASMP Nuclear Standoff Standard",
    "manufacturer": "Dassault Aviation",
    "manufacturerCountry": "France",
    "originCountry": "France",
    "country": "France",
    "affiliation": "French Strategic Air Forces (FAS 1964–2005)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "BOMBER",
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "role": "Mach 2.2 Strategic Supersonic Nuclear Penetration Bomber",
    "secondaryRoles": [
      "Strategic Optical Reconnaissance"
    ],
    "firstFlightYear": 1959,
    "introductionYear": 1964,
    "retirementYear": 2005,
    "productionCount": 66,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 66,
    "engineManufacturer": null,
    "engineModel": "Snecma Atar 09K-50 Afterburning Turbojets (Dual)",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 98,
    "thrustAfterburnerKn": 140,
    "topSpeedMach": 2.2,
    "topSpeedKmh": 2340,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 20000,
    "rateOfClimbMs": 100,
    "gLimitPositive": 5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1240,
    "combatRadiusKm": null,
    "ferryRangeKm": 4000,
    "emptyWeightKg": 14500,
    "maxTakeoffWeightKg": 33475,
    "payloadCapacityKg": 5000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Thomson-CSF Cyrano 55 Navigation & Strike Radar",
    "radarRangeAirKm": 80,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 78,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 35,
    "costPerFlightHourUsd": 20000,
    "reliabilityScore": 84,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The core of the French nuclear triad (Force de Frappe) for over four decades. Flew sustained Mach 2 supersonic low-level penetration missions carrying the 300 km range ASMP nuclear standoff missile.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mirage_IV_French_Air_Force.jpg/1200px-Mirage_IV_French_Air_Force.jpg",
    "tvrScore": 61.4,
    "weapons": [
      {
        "weapon": {
          "name": "ASMP Nuclear Standoff ALCM (300 kt)",
          "type": "LAND_ATTACK_CRUISE_MISSILE",
          "maxRangeKm": 300,
          "speedMach": 3,
          "guidance": "INS/Terrain Matching"
        }
      },
      {
        "weapon": {
          "name": "AN-22 Freefall Thermonuclear Bomb",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": null,
          "speedMach": 1,
          "guidance": "Parachute Retarded"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1959,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Dassault Mirage IV A/P conducted."
      },
      {
        "year": 1964,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with French Strategic Air Forces (FAS 1964–2005)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "BOMBER",
    "aircraftName": "Dassault Mirage IV A/P",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 14500,
        "maxTakeoffWeightKg": 33475,
        "payloadCapacityKg": 5000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Snecma Atar 09K-50 Afterburning Turbojets (Dual)",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 98,
        "thrustAfterburnerKn": 140
      },
      "performance": {
        "maxSpeedKmh": 2340,
        "maxSpeedMach": 2.2,
        "combatRadiusKm": 1240,
        "ferryRangeKm": 4000,
        "serviceCeilingM": 20000,
        "rateOfClimbMs": 100,
        "gLimitPositive": 5
      }
    },
    "avionics": {
      "radar": "Thomson-CSF Cyrano 55 Navigation & Strike Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 80,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": true,
      "keyWeaponsIntegrated": [
        "ASMP Nuclear Standoff ALCM (300 kt)",
        "AN-22 Freefall Thermonuclear Bomb"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 66.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-navy-sea-harrier",
    "aliases": [
      "ind-navy-sea-harrier",
      "bae-sea-harrier-frs-51",
      "sea-harrier-white-tigers-"
    ],
    "name": "BAE Sea Harrier FRS.51",
    "commonName": "Sea Harrier (White Tigers)",
    "officialDesignation": "Sea Harrier FRS.Mk 51",
    "natoReportingName": null,
    "family": "Harrier Jump Jet",
    "variant": "FRS.51 (Indian Navy)",
    "block": "LUSH Upgraded Standard",
    "manufacturer": "BAE Systems / HAL",
    "manufacturerCountry": "UK / India",
    "originCountry": "UK",
    "country": "India",
    "affiliation": "Indian Navy (INAS 300 White Tigers, INS Vikrant / INS Viraat 1983–2016)",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "RETIRED",
    "category": "FIGHTER",
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "role": "Carrier-Borne V/STOL Fighter & Fleet Air Defense",
    "secondaryRoles": [
      "Anti-Ship Strike",
      "Close Air Support"
    ],
    "firstFlightYear": 1978,
    "introductionYear": 1983,
    "retirementYear": 2016,
    "productionCount": 30,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 30,
    "engineManufacturer": null,
    "engineModel": "Rolls-Royce Pegasus 104 Vectored-Thrust Turbofan",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": false,
    "thrustDryKn": 95.6,
    "thrustAfterburnerKn": 95.6,
    "topSpeedMach": 0.95,
    "topSpeedKmh": 1185,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15600,
    "rateOfClimbMs": 250,
    "gLimitPositive": 8,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 750,
    "combatRadiusKm": null,
    "ferryRangeKm": 3600,
    "emptyWeightKg": 6374,
    "maxTakeoffWeightKg": 11880,
    "payloadCapacityKg": 3630,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "ELTA EL/M-2032 Radar (LUSH Upgrade)",
    "radarRangeAirKm": 100,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 76,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 2,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 22,
    "costPerFlightHourUsd": 11000,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "V/STOL carrier jump-jet that guarded Indian maritime frontiers from the decks of aircraft carriers INS Vikrant (R11) and INS Viraat (R22) for 33 years. Upgraded under Project LUSH with EL/M-2032 radar and Derby BVRAAM missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sea_Harrier_INAS_300_White_Tigers.jpg/1200px-Sea_Harrier_INAS_300_White_Tigers.jpg",
    "tvrScore": 63.4,
    "weapons": [
      {
        "weapon": {
          "name": "Rafael Derby BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 50,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "Magic II WVR Missile",
          "type": "WVR_AAM",
          "maxRangeKm": 15,
          "speedMach": 2.7,
          "guidance": "Infrared"
        }
      },
      {
        "weapon": {
          "name": "Sea Eagle Anti-Ship Missile",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 110,
          "speedMach": 0.85,
          "guidance": "Active Radar"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1978,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the BAE Sea Harrier FRS.51 conducted."
      },
      {
        "year": 1983,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Navy (INAS 300 White Tigers, INS Vikrant / INS Viraat 1983–2016)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "BAE Sea Harrier FRS.51",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6374,
        "maxTakeoffWeightKg": 11880,
        "payloadCapacityKg": 3630
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Rolls-Royce Pegasus 104 Vectored-Thrust Turbofan",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 95.6,
        "thrustAfterburnerKn": 95.6
      },
      "performance": {
        "maxSpeedKmh": 1185,
        "maxSpeedMach": 0.95,
        "combatRadiusKm": 750,
        "ferryRangeKm": 3600,
        "serviceCeilingM": 15600,
        "rateOfClimbMs": 250,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "ELTA EL/M-2032 Radar (LUSH Upgrade)",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 100,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Rafael Derby BVR-AAM",
        "Magic II WVR Missile",
        "Sea Eagle Anti-Ship Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 30.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "IND-IAF-A50EI-PHALCON",
    "aliases": [
      "IND-IAF-A50EI-PHALCON",
      "ind-iaf-a50ei-phalcon"
    ],
    "name": "Beriev A-50EI Phalcon AWACS",
    "commonName": "Ilyushin Il-76 / Beriev A-50",
    "officialDesignation": "A-50EI Phalcon Airborne Warning and Control System",
    "natoReportingName": "Mainstay",
    "family": "Ilyushin Il-76 / Beriev A-50",
    "variant": "A-50EI (India Custom Aviadvigatel PS-90A Engines)",
    "block": "Indian Air Force Custom Spec",
    "manufacturer": "Beriev / IAI Elta / Ilyushin",
    "manufacturerCountry": "Russia / Israel / India",
    "originCountry": "Russia / Israel",
    "country": "India",
    "affiliation": "Indian Air Force (No. 50 Squadron, Agra AFS)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AEWC",
    "generation": "GEN_4",
    "era": "MODERN",
    "role": "AEW&C",
    "secondaryRoles": [
      "Airborne Battle Management",
      "C4ISR Command Post",
      "Electronic Surveillance"
    ],
    "firstFlightYear": 2007,
    "introductionYear": 2009,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 3,
    "activeCount": 3,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "Perm Engine Company",
    "engineModel": "Aviadvigatel PS-90A-76 High-Bypass Turbofans",
    "engineCount": 4,
    "engineType": "Turbofan",
    "hasAfterburner": false,
    "thrustDryKn": 142.2,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 750,
    "serviceCeilingM": 12000,
    "rateOfClimbMs": 15,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": 10,
    "combatRangeKm": 2500,
    "combatRadiusKm": 2500,
    "ferryRangeKm": 7500,
    "emptyWeightKg": 85000,
    "maxTakeoffWeightKg": 190000,
    "payloadCapacityKg": 40000,
    "internalFuelKg": 65000,
    "lengthM": 49.59,
    "wingspanM": 50.5,
    "heightM": 14.76,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-01-25",
    "description": "Premier strategic airborne early warning and command platform of the IAF. Integrates Israeli IAI Elta EL/W-2090 L-band AESA stationary rotodome on a heavy Il-76TD airframe powered by modern PS-90A engines.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 49.59,
        "wingspanM": 50.5,
        "heightM": 14.76
      },
      "weights": {
        "emptyWeightKg": 85000,
        "maxTakeoffWeightKg": 190000,
        "payloadCapacityKg": 40000,
        "internalFuelKg": 65000
      },
      "crew": {
        "minimumCrew": 5,
        "maximumCrew": 19
      },
      "propulsion": {
        "engineCount": 4,
        "engineModel": "Aviadvigatel PS-90A-76 High-Bypass Turbofans",
        "engineManufacturer": "Perm Engine Company",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 142.2
      },
      "performance": {
        "maxSpeedKmh": 850,
        "maxSpeedMach": 0.77,
        "cruiseSpeedKmh": 750,
        "combatRadiusKm": 2500,
        "ferryRangeKm": 7500,
        "serviceCeilingM": 12000,
        "serviceCeilingFt": 39370,
        "rateOfClimbMs": 15,
        "enduranceHours": 10
      }
    },
    "avionics": {
      "radar": "IAI Elta EL/W-2090 360-degree Active Electronically Scanned Array (AESA) Stationary Dome",
      "radarType": "AESA",
      "radarArchitecture": "Triangular 3-Array Solid-State L-Band AESA Dome",
      "radarRangeAirKm": 450,
      "hasAesa": true,
      "hasIrst": false,
      "electronicWarfare": "Integrated ELINT / ESM & Self-Protection Chaff/Flare Dispensers",
      "ewScore": 94,
      "hasDatalink": true,
      "datalinkProtocol": "AFNET, Secure Satellite Datalink, Link 16 Equivalent",
      "sensorFusion": true,
      "stealthLevel": "LOW"
    },
    "capabilities": {
      "internalGun": null,
      "airToAirCapable": false,
      "airToGroundCapable": false,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": null,
      "keyWeaponsIntegrated": [
        "Non-Combatant Strategic Sensor Platform"
      ]
    },
    "fleet": {
      "confirmedQuantity": 3,
      "estimatedQuantity": 3,
      "quantityYear": 2026,
      "quantityNotes": "3 operational strategic AWACS platforms stationed at Agra AFS providing 360-degree theater radar coverage out to 400+ km.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-25",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "AEW&C",
    "aircraftName": "Beriev A-50EI Phalcon AWACS"
  },
  {
    "id": "ind-apache-army",
    "aliases": [
      "ind-apache-army"
    ],
    "name": "Boeing AH-64E Apache Guardian (Army)",
    "commonName": "AH-64E Apache",
    "officialDesignation": "AH-64E Version 6",
    "natoReportingName": null,
    "family": "Boeing AH-64 Apache",
    "variant": "AH-64E Version 6",
    "block": "V6 Apache Guardian",
    "manufacturer": "Boeing",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "India",
    "affiliation": "Indian Army Aviation Corps",
    "militaryBranch": "ARMY_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "ATTACK_HELICOPTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Heavy Attack & Tank Interdiction Helicopter",
    "secondaryRoles": [
      "Armed Reconnaissance",
      "MUM-T Manned-Unmanned Teaming"
    ],
    "firstFlightYear": 1975,
    "introductionYear": 2024,
    "retirementYear": null,
    "productionCount": 6,
    "fleetCount": 6,
    "activeCount": 6,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "General Electric T700-GE-701D Turboshafts",
    "engineCount": 2,
    "engineType": "Turboshaft",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": 293,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 6400,
    "rateOfClimbMs": 14.2,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 480,
    "combatRadiusKm": null,
    "ferryRangeKm": null,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": 2000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "AN/APG-78 Longbow Mast-Mounted Fire Control Radar",
    "radarRangeAirKm": 12,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 92,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 96,
    "sourceCount": 6,
    "lastVerified": null,
    "description": "Premier heavy attack helicopter equipped with Longbow millimeter-wave fire control radar, AGM-114 Hellfire laser/RF missiles, Stinger air-to-air missiles, and 30mm M230 chain gun.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/AH-64D_Apache_Longbow.jpg/1280px-AH-64D_Apache_Longbow.jpg",
    "tvrScore": 86.2,
    "weapons": [
      {
        "weapon": {
          "name": "AGM-114L Longbow Hellfire",
          "type": "ANTI_TANK_MISSILE",
          "maxRangeKm": 8.5,
          "speedMach": 1.3,
          "guidance": "Millimeter Wave Radar"
        }
      },
      {
        "weapon": {
          "name": "FIM-92 Stinger",
          "type": "WVR_AAM",
          "maxRangeKm": 4.8,
          "speedMach": 2.2,
          "guidance": "Infrared / UV"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "ATTACK_HELICOPTER",
    "aircraftName": "Boeing AH-64E Apache Guardian (Army)",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-p8i-navy",
    "aliases": [
      "ind-p8i-navy",
      "IND-NAVY-P8I-NEPTUNE",
      "ind-navy-p8i-neptune"
    ],
    "name": "Boeing P-8I Neptune",
    "commonName": "P-8I Neptune",
    "officialDesignation": "P-8I (India Custom Acoustic / Radar)",
    "natoReportingName": null,
    "family": "Boeing 737 Maritime Multi-Mission",
    "variant": "P-8I (India Custom Acoustic / Radar)",
    "block": "Batch 1 & 2",
    "manufacturer": "Boeing",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "India",
    "affiliation": "Indian Naval Air Arm (INAS 312)",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "MARITIME_PATROL",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Long-Range Maritime Reconnaissance & Anti-Submarine Warfare (ASW)",
    "secondaryRoles": [
      "Anti-Surface Warfare",
      "Electronic Intelligence (ELINT)"
    ],
    "firstFlightYear": 2009,
    "introductionYear": 2013,
    "retirementYear": null,
    "productionCount": 12,
    "fleetCount": 12,
    "activeCount": 12,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "CFM International CFM56-7B Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": 0.79,
    "topSpeedKmh": 907,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 12500,
    "rateOfClimbMs": 25,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 2222,
    "combatRadiusKm": null,
    "ferryRangeKm": 8300,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": null,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Raytheon AN/APY-10 Multi-Mission Surface Radar",
    "radarRangeAirKm": 370,
    "hasAesa": true,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 94,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 90,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 98,
    "sourceCount": 7,
    "lastVerified": null,
    "description": "Premier maritime patrol and submarine hunting platform. Features aft Magnetic Anomaly Detector (MAD) boom, AN/APY-10 multi-mission radar, sonobuoys, Mk 54 lightweight torpedoes, and AGM-84L Harpoon anti-ship missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Boeing_P-8I_Poseidon_at_Aero_India_2013_%288484196144%29.jpg/1280px-Boeing_P-8I_Poseidon_at_Aero_India_2013_%288484196144%29.jpg",
    "tvrScore": 89.4,
    "weapons": [
      {
        "weapon": {
          "name": "AGM-84L Harpoon Block II",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 124,
          "speedMach": 0.71,
          "guidance": "Active Radar Homing"
        }
      },
      {
        "weapon": {
          "name": "Mk 54 Mod 0 ASW Torpedo",
          "type": "TORPEDO",
          "maxRangeKm": 15,
          "speedMach": 0.08,
          "guidance": "Active/Passive Acoustic Homing"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MARITIME_PATROL",
    "aircraftName": "Boeing P-8I Neptune",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 39.47,
        "wingspanM": 37.64,
        "heightM": 12.83
      },
      "weights": {
        "emptyWeightKg": 62730,
        "maxTakeoffWeightKg": 85820,
        "payloadCapacityKg": 10000,
        "internalFuelKg": 34096
      },
      "crew": {
        "minimumCrew": 9,
        "maximumCrew": 11
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "CFM International CFM56-7B27A High-Bypass Turbofans",
        "engineManufacturer": "CFM International",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 120
      },
      "performance": {
        "maxSpeedKmh": 907,
        "maxSpeedMach": 0.79,
        "cruiseSpeedKmh": 815,
        "combatRadiusKm": 2222,
        "ferryRangeKm": 8300,
        "serviceCeilingM": 12500,
        "serviceCeilingFt": 41000,
        "rateOfClimbMs": 25,
        "enduranceHours": 10
      }
    },
    "avionics": {
      "radar": "Raytheon AN/APY-10 Multi-Mission Maritime Surface Search & Synthetic Aperture Radar",
      "radarType": "AESA",
      "radarArchitecture": "Solid-State Surface Tracking and Inverse Synthetic Aperture (ISAR)",
      "radarRangeAirKm": 370,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "L3Harris WESCAM MX-20HD Electro-Optical / Infrared Sensor Turret",
      "electronicWarfare": "DRDO / Bharat Electronics Advanced Electronic Support Measures (ESM)",
      "ewScore": 95,
      "hasDatalink": true,
      "datalinkProtocol": "COMCASA Link-16, Tactical Datalink, Indian Navy SATCOM",
      "sensorFusion": true,
      "stealthLevel": "LOW"
    },
    "capabilities": {
      "internalGun": null,
      "airToAirCapable": false,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 10000,
      "keyWeaponsIntegrated": [
        "AGM-84L Harpoon Block II Anti-Ship Missile",
        "Mk 54 Mod 0 Lightweight ASW Torpedo",
        "Directional Sonobuoys (SSQ-53F / SSQ-62E)",
        "AN/ASQ-508A Magnetic Anomaly Detector (MAD) Boom"
      ]
    },
    "fleet": {
      "confirmedQuantity": 12,
      "estimatedQuantity": 12,
      "quantityYear": 2026,
      "quantityNotes": "12 operational aircraft stationed at INS Rajali (Arakkonam) and INS Hansa (Goa) with additional 6 airframes under procurement consideration.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-12",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-iaf-mirage2000",
    "aliases": [
      "ind-iaf-mirage2000",
      "dassault-mirage-2000h-th-vajra",
      "mirage-2000-vajra"
    ],
    "name": "Dassault Mirage 2000H/TH Vajra",
    "commonName": "Mirage 2000 Vajra",
    "officialDesignation": "Mirage 2000 I/TI (Upgraded)",
    "natoReportingName": null,
    "family": "Dassault Mirage 2000",
    "variant": "Mirage 2000-5 Mk2 Upgrade Standard",
    "block": "Vajra Upgrade",
    "manufacturer": "Dassault Aviation / HAL",
    "manufacturerCountry": "France / India",
    "originCountry": "France",
    "country": "India",
    "affiliation": "Indian Air Force (No. 1 Tigers / No. 7 Battleaxes / No. 9 Wolfpack)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_4_5",
    "era": "MODERN",
    "role": "Precision Strike & Air Defense Fighter",
    "secondaryRoles": [
      "Laser Guided Bombing",
      "Nuclear Standoff",
      "Air Superiority"
    ],
    "firstFlightYear": 1978,
    "introductionYear": 1985,
    "retirementYear": null,
    "productionCount": 50,
    "fleetCount": 48,
    "activeCount": 48,
    "inactiveCount": 0,
    "retiredCount": 2,
    "engineManufacturer": null,
    "engineModel": "Snecma M53-P2 Afterburning Turbofan",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 64.3,
    "thrustAfterburnerKn": 95.1,
    "topSpeedMach": 2.2,
    "topSpeedKmh": 2336,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17060,
    "rateOfClimbMs": 285,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1550,
    "combatRadiusKm": null,
    "ferryRangeKm": 3335,
    "emptyWeightKg": 7500,
    "maxTakeoffWeightKg": 17000,
    "payloadCapacityKg": 6300,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Thales RDY-2 Pulse-Doppler Multimode Radar",
    "radarRangeAirKm": 130,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 89,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 1.2,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 14,
    "costPerFlightHourUsd": 11000,
    "reliabilityScore": 86,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The hero of the 1999 Kargil War and the 2019 Balakot airstrikes. Upgraded with RDY-2 radar, glass cockpits, MICA missiles, and Spice 2000 precision standoff munitions.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mirage-2000_%28IAF%29.jpg/1200px-Mirage-2000_%28IAF%29.jpg",
    "tvrScore": 80.4,
    "weapons": [
      {
        "weapon": {
          "name": "MICA EM BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 80,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "MICA IR WVR-AAM",
          "type": "WVR_AAM",
          "maxRangeKm": 60,
          "speedMach": 4,
          "guidance": "Imaging Infrared"
        }
      },
      {
        "weapon": {
          "name": "Spice 2000 PG Munition",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 60,
          "speedMach": 0.9,
          "guidance": "EO/GPS Standoff"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1978,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Dassault Mirage 2000H/TH Vajra conducted."
      },
      {
        "year": 1985,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (No. 1 Tigers / No. 7 Battleaxes / No. 9 Wolfpack)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Dassault Mirage 2000H/TH Vajra",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 7500,
        "maxTakeoffWeightKg": 17000,
        "payloadCapacityKg": 6300
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Snecma M53-P2 Afterburning Turbofan",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 64.3,
        "thrustAfterburnerKn": 95.1
      },
      "performance": {
        "maxSpeedKmh": 2336,
        "maxSpeedMach": 2.2,
        "combatRadiusKm": 1550,
        "ferryRangeKm": 3335,
        "serviceCeilingM": 17060,
        "rateOfClimbMs": 285,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Thales RDY-2 Pulse-Doppler Multimode Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 130,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 1.2
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "MICA EM BVR-AAM",
        "MICA IR WVR-AAM",
        "Spice 2000 PG Munition"
      ]
    },
    "fleet": {
      "confirmedQuantity": 48,
      "estimatedQuantity": 48,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 48, Retired: 2.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-rafale",
    "aliases": [
      "ind-rafale",
      "IND-IAF-RAFALE-EH",
      "ind-iaf-rafale-eh",
      "FRA-AAE-RAFALE-C",
      "fra-aae-rafale-c"
    ],
    "name": "Dassault Rafale EH/DH",
    "commonName": "Rafale",
    "officialDesignation": "Rafale F3-R (India Specific Enhancements)",
    "natoReportingName": null,
    "family": "Dassault Rafale",
    "variant": "Rafale F3-R (India Specific Enhancements)",
    "block": "F3-R Standard",
    "manufacturer": "Dassault Aviation",
    "manufacturerCountry": "France",
    "originCountry": "France",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Omnirole Multirole Combat Fighter",
    "secondaryRoles": [
      "Deep Strike",
      "Nuclear Deterrence",
      "Reconnaissance"
    ],
    "firstFlightYear": 1986,
    "introductionYear": 2020,
    "retirementYear": null,
    "productionCount": 36,
    "fleetCount": 36,
    "activeCount": 36,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Snecma M88-4E Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 100,
    "thrustAfterburnerKn": 150,
    "topSpeedMach": 1.8,
    "topSpeedKmh": 1912,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15835,
    "rateOfClimbMs": 305,
    "gLimitPositive": 9,
    "gLimitNegative": -3.2,
    "enduranceHours": null,
    "combatRangeKm": 1850,
    "combatRadiusKm": null,
    "ferryRangeKm": 3700,
    "emptyWeightKg": 10300,
    "maxTakeoffWeightKg": 24500,
    "payloadCapacityKg": 9500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Thales RBE2-AA Active Electronically Scanned Array",
    "radarRangeAirKm": 180,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 96,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 0.75,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 10,
    "costPerFlightHourUsd": 16500,
    "reliabilityScore": 88,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 98,
    "sourceCount": 8,
    "lastVerified": null,
    "description": "Frontline omnirole fighter platform equipped with SPECTRA internal electronic warfare suite, Meteor ramjet-powered BVR missiles, SCALP standoff cruise missiles, and HAMMER precision munitions.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg",
    "tvrScore": 91.2,
    "weapons": [
      {
        "weapon": {
          "name": "Meteor BVRAAM",
          "type": "BVR_AAM",
          "maxRangeKm": 200,
          "speedMach": 4,
          "guidance": "Active Radar / Ramjet"
        }
      },
      {
        "weapon": {
          "name": "SCALP EG",
          "type": "LAND_ATTACK_CRUISE_MISSILE",
          "maxRangeKm": 560,
          "speedMach": 0.8,
          "guidance": "GPS/INS/IIR Terminal"
        }
      },
      {
        "weapon": {
          "name": "MICA EM/IR",
          "type": "WVR_AAM",
          "maxRangeKm": 80,
          "speedMach": 3,
          "guidance": "Dual Active Radar / IR"
        }
      },
      {
        "weapon": {
          "name": "HAMMER AASM",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 70,
          "speedMach": 1,
          "guidance": "GPS/INS/Laser"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Dassault Rafale EH/DH",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 15.27,
        "wingspanM": 10.9,
        "heightM": 5.34
      },
      "weights": {
        "emptyWeightKg": 9850,
        "maxTakeoffWeightKg": 24500,
        "payloadCapacityKg": 9500,
        "internalFuelKg": 4700
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Snecma M88-4E Turbofans",
        "engineManufacturer": "Safran Aircraft Engines",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 100,
        "thrustAfterburnerKn": 150
      },
      "performance": {
        "maxSpeedKmh": 2223,
        "maxSpeedMach": 1.8,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 1850,
        "ferryRangeKm": 3700,
        "serviceCeilingM": 15835,
        "serviceCeilingFt": 52000,
        "rateOfClimbMs": 305,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Thales RBE2-AA Active Electronically Scanned Array (AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Gallium Arsenide (GaAs) / GaN Hybrid",
      "radarRangeAirKm": 200,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Thales Optronique Sector Frontal (FSO) with dual IR/Laser channel",
      "electronicWarfare": "SPECTRA Integrated Electronic Warfare Suite with 3D multi-spectral jamming and radar warning",
      "ewScore": 97,
      "targetingSystem": "Thales TALIOS Advanced Targeting Pod & Contact 21 SDR",
      "helmetMountedDisplay": "Scorpion Helmet Mounted Cueing System",
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & Contact Tactical High-Data-Rate SDR",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.1
    },
    "capabilities": {
      "internalGun": "30mm GIAT 30/M791 Auto-cannon (125 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 9500,
      "keyWeaponsIntegrated": [
        "MBDA Meteor BVRAAM",
        "ASMP-A Nuclear Standoff Missile",
        "SCALP-EG Standoff Cruise Missile",
        "AASM HAMMER Precision Standoff Bomb",
        "MICA IR/EM AAM"
      ]
    },
    "fleet": {
      "confirmedQuantity": 102,
      "estimatedQuantity": 102,
      "quantityYear": 2026,
      "quantityNotes": "102 Rafale B/C fighters in active French Air & Space Force service undergoing F4.1 standard upgrades and integration with Syracuse IV satellite comms.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-14",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-iaf-dh-vampire",
    "aliases": [
      "ind-iaf-dh-vampire",
      "de-havilland-vampire-fb-52",
      "de-havilland-vampire"
    ],
    "name": "de Havilland Vampire FB.52",
    "commonName": "de Havilland Vampire",
    "officialDesignation": "Vampire FB.52 / T.55",
    "natoReportingName": null,
    "family": "de Havilland Vampire",
    "variant": "Vampire FB.52 Fighter-Bomber",
    "block": "IAF First Jet Standard",
    "manufacturer": "de Havilland / HAL Bangalore",
    "manufacturerCountry": "UK / India",
    "originCountry": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic 1st Jet Aircraft of India, Inducted 1948)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "FIGHTER",
    "generation": "GEN_1",
    "era": "VINTAGE",
    "role": "Pioneering Jet Fighter & Ground Attack Aircraft",
    "secondaryRoles": [
      "Air Defense",
      "Night Fighter"
    ],
    "firstFlightYear": 1943,
    "introductionYear": 1948,
    "retirementYear": 1975,
    "productionCount": 250,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 250,
    "engineManufacturer": null,
    "engineModel": "de Havilland Goblin 3 Centrifugal-Flow Turbojet",
    "engineCount": 1,
    "engineType": "Turbojet",
    "hasAfterburner": false,
    "thrustDryKn": 14.9,
    "thrustAfterburnerKn": 14.9,
    "topSpeedMach": 0.75,
    "topSpeedKmh": 882,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 13045,
    "rateOfClimbMs": 24,
    "gLimitPositive": 6.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 500,
    "combatRadiusKm": null,
    "ferryRangeKm": 1960,
    "emptyWeightKg": 3300,
    "maxTakeoffWeightKg": 5620,
    "payloadCapacityKg": 900,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": null,
    "radarRangeAirKm": 0,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 20,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 4,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 5,
    "costPerFlightHourUsd": 1500,
    "reliabilityScore": 85,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The aircraft that ushered the Indian Air Force into the Jet Age in November 1948. Distinctive twin-boom configuration with wooden fuselage construction. Fought in the 1965 Indo-Pak War and Goa liberation 1961.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/De_Havilland_Vampire_FB52_IAF.jpg/1200px-De_Havilland_Vampire_FB52_IAF.jpg",
    "tvrScore": 45.2,
    "weapons": [
      {
        "weapon": {
          "name": "Four 20mm Hispano Cannons",
          "type": "GUN_POD",
          "maxRangeKm": 1.5,
          "speedMach": 0.9,
          "guidance": "Optical"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1943,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the de Havilland Vampire FB.52 conducted."
      },
      {
        "year": 1948,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic 1st Jet Aircraft of India, Inducted 1948)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "de Havilland Vampire FB.52",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 3300,
        "maxTakeoffWeightKg": 5620,
        "payloadCapacityKg": 900
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "de Havilland Goblin 3 Centrifugal-Flow Turbojet",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 14.9,
        "thrustAfterburnerKn": 14.9
      },
      "performance": {
        "maxSpeedKmh": 882,
        "maxSpeedMach": 0.75,
        "combatRadiusKm": 500,
        "ferryRangeKm": 1960,
        "serviceCeilingM": 13045,
        "rateOfClimbMs": 24,
        "gLimitPositive": 6.5
      }
    },
    "avionics": {
      "radar": "Standard Suite",
      "radarType": "NONE",
      "radarRangeAirKm": 0,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 4
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Four 20mm Hispano Cannons"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 250.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-netra-aewc",
    "aliases": [
      "ind-netra-aewc"
    ],
    "name": "DRDO Netra AEW&C",
    "commonName": "Netra AEW&C",
    "officialDesignation": "Netra Mk1",
    "natoReportingName": null,
    "family": "Embraer ERJ-145 Airborne Surveillance",
    "variant": "Netra Mk1",
    "block": "Standard Block 2",
    "manufacturer": "DRDO / Embraer",
    "manufacturerCountry": "India / Brazil",
    "originCountry": "India / Brazil",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AEWC",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Airborne Early Warning & Control (AEW&C)",
    "secondaryRoles": [
      "Battlefield Management",
      "SIGINT / ELINT"
    ],
    "firstFlightYear": 2011,
    "introductionYear": 2017,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 3,
    "activeCount": 3,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Rolls-Royce AE 3007A Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": false,
    "thrustDryKn": 78,
    "thrustAfterburnerKn": null,
    "topSpeedMach": 0.78,
    "topSpeedKmh": 830,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 11500,
    "rateOfClimbMs": 35,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": 6,
    "combatRangeKm": 3000,
    "combatRadiusKm": null,
    "ferryRangeKm": null,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": null,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "DRDO Active Array Primary Radar (240° coverage)",
    "radarRangeAirKm": 375,
    "hasAesa": true,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 92,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 75,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": null,
    "description": "Indigenous AEW&C platform utilizing an active electronically scanned array antenna mounted atop an ERJ-145 airframe for 240-degree tactical air tracking and command-and-control datalinks.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/DRDO_AEW%26CS_Netra_at_Aero_India_2023.jpg/1280px-DRDO_AEW%26CS_Netra_at_Aero_India_2023.jpg",
    "tvrScore": 83.8,
    "weapons": [],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AEWC",
    "aircraftName": "DRDO Netra AEW&C",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-iaf-ee-canberra",
    "aliases": [
      "ind-iaf-ee-canberra",
      "english-electric-canberra-b-i-58-pr-57",
      "canberra-bomber"
    ],
    "name": "English Electric Canberra B(I).58 / PR.57",
    "commonName": "Canberra Bomber",
    "officialDesignation": "Canberra B(I).58 / PR.57",
    "natoReportingName": null,
    "family": "English Electric Canberra",
    "variant": "Canberra B(I).58 Interdictor / Bomber",
    "block": "IAF Standard",
    "manufacturer": "English Electric / HAL",
    "manufacturerCountry": "UK / India",
    "originCountry": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Strategic Bomber 1957–2007)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "BOMBER",
    "generation": "GEN_1",
    "era": "VINTAGE",
    "role": "Medium Jet Bomber & High-Altitude Photographic Reconnaissance",
    "secondaryRoles": [
      "Night Strike",
      "UN Peacekeeping Operations"
    ],
    "firstFlightYear": 1949,
    "introductionYear": 1957,
    "retirementYear": 2007,
    "productionCount": 110,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 110,
    "engineManufacturer": null,
    "engineModel": "Rolls-Royce Avon R.A.7 Turbojets (Dual)",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": false,
    "thrustDryKn": 33,
    "thrustAfterburnerKn": 33,
    "topSpeedMach": 0.88,
    "topSpeedKmh": 933,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 14600,
    "rateOfClimbMs": 20,
    "gLimitPositive": 5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1300,
    "combatRadiusKm": null,
    "ferryRangeKm": 5440,
    "emptyWeightKg": 9820,
    "maxTakeoffWeightKg": 25000,
    "payloadCapacityKg": 3600,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "Blue Shadow / Green Satin Navigation Radar",
    "radarRangeAirKm": 20,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 45,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 8,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 15,
    "costPerFlightHourUsd": 6000,
    "reliabilityScore": 85,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "First jet bomber of the Indian Air Force. Flew combat missions in 1961 Congo UN operations, 1965 and 1971 Indo-Pak wars, and provided strategic optical reconnaissance during the 1999 Kargil War.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/English_Electric_Canberra_B%28I%2958_IAF.jpg/1200px-English_Electric_Canberra_B%28I%2958_IAF.jpg",
    "tvrScore": 54.6,
    "weapons": [
      {
        "weapon": {
          "name": "30mm Hispano Cannons (Pack of 4)",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Optical"
        }
      },
      {
        "weapon": {
          "name": "6,000 lb Bomb Bay Payload",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": 2,
          "speedMach": 0.8,
          "guidance": "Freefall"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1949,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the English Electric Canberra B(I).58 / PR.57 conducted."
      },
      {
        "year": 1957,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic Strategic Bomber 1957–2007)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "BOMBER",
    "aircraftName": "English Electric Canberra B(I).58 / PR.57",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 9820,
        "maxTakeoffWeightKg": 25000,
        "payloadCapacityKg": 3600
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Rolls-Royce Avon R.A.7 Turbojets (Dual)",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 33,
        "thrustAfterburnerKn": 33
      },
      "performance": {
        "maxSpeedKmh": 933,
        "maxSpeedMach": 0.88,
        "combatRadiusKm": 1300,
        "ferryRangeKm": 5440,
        "serviceCeilingM": 14600,
        "rateOfClimbMs": 20,
        "gLimitPositive": 5
      }
    },
    "avionics": {
      "radar": "Blue Shadow / Green Satin Navigation Radar",
      "radarType": "NONE",
      "radarRangeAirKm": 20,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 8
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "30mm Hispano Cannons (Pack of 4)",
        "6,000 lb Bomb Bay Payload"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 110.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-iaf-folland-gnat",
    "aliases": [
      "ind-iaf-folland-gnat",
      "folland-gnat-hal-ajeet",
      "folland-gnat-sabre-slayer-"
    ],
    "name": "Folland Gnat / HAL Ajeet",
    "commonName": "Folland Gnat (Sabre Slayer)",
    "officialDesignation": "Gnat F.1 / HAL Ajeet",
    "natoReportingName": null,
    "family": "Folland Gnat",
    "variant": "Gnat F.1 / Ajeet Mk.1",
    "block": "HAL Production Series",
    "manufacturer": "Folland Aircraft / HAL Bangalore",
    "manufacturerCountry": "UK / India",
    "originCountry": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic \"Sabre Slayer\" 1958–1991)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "FIGHTER",
    "generation": "GEN_1",
    "era": "VINTAGE",
    "role": "Lightweight Transonic Point-Defense Interceptor",
    "secondaryRoles": [
      "Close Air Support",
      "Air-to-Air Combat"
    ],
    "firstFlightYear": 1955,
    "introductionYear": 1958,
    "retirementYear": 1991,
    "productionCount": 213,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 213,
    "engineManufacturer": null,
    "engineModel": "Bristol Siddeley Orpheus 701 Turbojet",
    "engineCount": 1,
    "engineType": "Turbojet",
    "hasAfterburner": false,
    "thrustDryKn": 20.9,
    "thrustAfterburnerKn": 20.9,
    "topSpeedMach": 0.98,
    "topSpeedKmh": 1120,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 14630,
    "rateOfClimbMs": 101,
    "gLimitPositive": 8.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 450,
    "combatRadiusKm": null,
    "ferryRangeKm": 1100,
    "emptyWeightKg": 2175,
    "maxTakeoffWeightKg": 4100,
    "payloadCapacityKg": 900,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "Ferranti Optical Gyro Gunsight",
    "radarRangeAirKm": 3,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 35,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 1.5,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 6,
    "costPerFlightHourUsd": 2500,
    "reliabilityScore": 88,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The legendary \"Sabre Slayer\" of the 1965 and 1971 Indo-Pak Wars. Renowned for its diminutive size, extraordinary roll rate, and supreme agility in dogfights. Flown by Flying Officer Nirmal Jit Singh Sekhon, PVC, defending Srinagar airfield in 1971.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Folland_Gnat_IAF_Museum_Palam.jpg/1200px-Folland_Gnat_IAF_Museum_Palam.jpg",
    "tvrScore": 46.3,
    "weapons": [
      {
        "weapon": {
          "name": "Twin 30mm ADEN Cannons",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Optical Gyro"
        }
      },
      {
        "weapon": {
          "name": "Unguided 68mm Rockets",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": 3,
          "speedMach": 1.2,
          "guidance": "Unguided"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1955,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Folland Gnat / HAL Ajeet conducted."
      },
      {
        "year": 1958,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic \"Sabre Slayer\" 1958–1991)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "Folland Gnat / HAL Ajeet",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 2175,
        "maxTakeoffWeightKg": 4100,
        "payloadCapacityKg": 900
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Bristol Siddeley Orpheus 701 Turbojet",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 20.9,
        "thrustAfterburnerKn": 20.9
      },
      "performance": {
        "maxSpeedKmh": 1120,
        "maxSpeedMach": 0.98,
        "combatRadiusKm": 450,
        "ferryRangeKm": 1100,
        "serviceCeilingM": 14630,
        "rateOfClimbMs": 101,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Ferranti Optical Gyro Gunsight",
      "radarType": "NONE",
      "radarRangeAirKm": 3,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 1.5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Twin 30mm ADEN Cannons",
        "Unguided 68mm Rockets"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 213.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-iaf-hf24-marut",
    "aliases": [
      "ind-iaf-hf24-marut",
      "hal-hf-24-marut",
      "hf-24-marut"
    ],
    "name": "HAL HF-24 Marut",
    "commonName": "HF-24 Marut",
    "officialDesignation": "HF-24 Marut Mk.1",
    "natoReportingName": null,
    "family": "HAL Marut",
    "variant": "Marut Mk.1 (Ground Attack Fighter)",
    "block": "Production Series",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "originCountry": "India",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Indigenous Jet Fighter 1964–1990)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "GROUND_ATTACK",
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "role": "Low-Level Ground Attack & Tactical Strike Fighter",
    "secondaryRoles": [
      "Close Air Support",
      "Air Defense"
    ],
    "firstFlightYear": 1961,
    "introductionYear": 1964,
    "retirementYear": 1990,
    "productionCount": 147,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 147,
    "engineManufacturer": null,
    "engineModel": "Bristol Siddeley Orpheus 703 Turbojets (Dual Non-Afterburning)",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": false,
    "thrustDryKn": 43.1,
    "thrustAfterburnerKn": 43.1,
    "topSpeedMach": 0.98,
    "topSpeedKmh": 1112,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 13750,
    "rateOfClimbMs": 110,
    "gLimitPositive": 8,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 600,
    "combatRadiusKm": null,
    "ferryRangeKm": 1400,
    "emptyWeightKg": 6195,
    "maxTakeoffWeightKg": 10908,
    "payloadCapacityKg": 1800,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "Gunsight Radar Rangefinder",
    "radarRangeAirKm": 5,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 40,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 3.5,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 10,
    "costPerFlightHourUsd": 4000,
    "reliabilityScore": 84,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "India's first indigenous jet fighter and the first indigenous supersonic-capable combat aircraft developed in Asia outside the USSR. Designed by Kurt Tank, the Marut saw heroic combat in the 1971 Indo-Pak War (including the Battle of Longewala) with zero air combat losses.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HF-24_Marut_IAF_Museum_Delhi.jpg/1200px-HF-24_Marut_IAF_Museum_Delhi.jpg",
    "tvrScore": 47.2,
    "weapons": [
      {
        "weapon": {
          "name": "Four 30mm ADEN Mk.2 Cannons",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Ballistic"
        }
      },
      {
        "weapon": {
          "name": "68mm Matra SNEB Rocket Pod",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": 4,
          "speedMach": 1.5,
          "guidance": "Unguided"
        }
      },
      {
        "weapon": {
          "name": "1,000 lb High Explosive Bombs",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": 2,
          "speedMach": 0.9,
          "guidance": "Freefall"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1961,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the HAL HF-24 Marut conducted."
      },
      {
        "year": 1964,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic Indigenous Jet Fighter 1964–1990)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "GROUND_ATTACK",
    "aircraftName": "HAL HF-24 Marut",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6195,
        "maxTakeoffWeightKg": 10908,
        "payloadCapacityKg": 1800
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Bristol Siddeley Orpheus 703 Turbojets (Dual Non-Afterburning)",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 43.1,
        "thrustAfterburnerKn": 43.1
      },
      "performance": {
        "maxSpeedKmh": 1112,
        "maxSpeedMach": 0.98,
        "combatRadiusKm": 600,
        "ferryRangeKm": 1400,
        "serviceCeilingM": 13750,
        "rateOfClimbMs": 110,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Gunsight Radar Rangefinder",
      "radarType": "NONE",
      "radarRangeAirKm": 5,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3.5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Four 30mm ADEN Mk.2 Cannons",
        "68mm Matra SNEB Rocket Pod",
        "1,000 lb High Explosive Bombs"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 147.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-lch-prachand",
    "aliases": [
      "ind-lch-prachand",
      "IND-ARMY-LCH-PRACHAND",
      "ind-army-lch-prachand"
    ],
    "name": "HAL LCH Prachand",
    "commonName": "Prachand",
    "officialDesignation": "LCH Series Production",
    "natoReportingName": null,
    "family": "Light Combat Helicopter",
    "variant": "LCH Series Production",
    "block": "Initial Operational Clearance (IOC)",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "originCountry": "India",
    "country": "India",
    "affiliation": "Indian Army Aviation Corps",
    "militaryBranch": "ARMY_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "ATTACK_HELICOPTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "High-Altitude Attack Helicopter",
    "secondaryRoles": [
      "Anti-Tank",
      "Counter-UAV",
      "Close Combat Attack"
    ],
    "firstFlightYear": 2010,
    "introductionYear": 2022,
    "retirementYear": null,
    "productionCount": 15,
    "fleetCount": 15,
    "activeCount": 15,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "HAL/Turbomeca Shakti Turboshafts",
    "engineCount": 2,
    "engineType": "Turboshaft",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": 268,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 6500,
    "rateOfClimbMs": 12,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 550,
    "combatRadiusKm": null,
    "ferryRangeKm": null,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": 1750,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 84,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 82,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 92,
    "sourceCount": 4,
    "lastVerified": null,
    "description": "The world’s only dedicated attack helicopter designed specifically for sustained combat operations above 5,000 meters in the Himalayas (Siachen / Ladakh sectors). Equipped with 20mm nose turret, Helina anti-tank missiles, and Mistral AAMs.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/HAL_Light_Combat_Helicopter_at_Aero_India_2017.jpg/1280px-HAL_Light_Combat_Helicopter_at_Aero_India_2017.jpg",
    "tvrScore": 78.5,
    "weapons": [
      {
        "weapon": {
          "name": "Helina / Dhruvastra ATGM",
          "type": "ANTI_TANK_MISSILE",
          "maxRangeKm": 8,
          "speedMach": 0.8,
          "guidance": "IIR Top Attack"
        }
      },
      {
        "weapon": {
          "name": "Mistral 2 ATAM",
          "type": "WVR_AAM",
          "maxRangeKm": 6.5,
          "speedMach": 2.5,
          "guidance": "Infrared Homing"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "ATTACK_HELICOPTER",
    "aircraftName": "HAL LCH Prachand",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 15.8,
        "wingspanM": 4.6,
        "heightM": 4.7
      },
      "weights": {
        "emptyWeightKg": 2250,
        "maxTakeoffWeightKg": 5800,
        "payloadCapacityKg": 1750,
        "internalFuelKg": 1300
      },
      "crew": {
        "minimumCrew": 2,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "HAL / Turbomeca Shakti-1H1 (Ardiden 1H1) Turboshafts",
        "engineManufacturer": "HAL Engine Division / Safran Helicopter Engines",
        "engineType": "Turboshaft",
        "hasAfterburner": false,
        "thrustDryKn": null
      },
      "performance": {
        "maxSpeedKmh": 268,
        "maxSpeedMach": 0.22,
        "cruiseSpeedKmh": 240,
        "combatRadiusKm": 350,
        "ferryRangeKm": 700,
        "serviceCeilingM": 6500,
        "serviceCeilingFt": 21300,
        "rateOfClimbMs": 12
      }
    },
    "avionics": {
      "radar": null,
      "radarType": "NONE",
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Elbit CoMPASS (Compact Multi-Purpose Advanced Stabilized System) Electro-Optical Turret",
      "electronicWarfare": "DRDO Integrated Helicopter EW Suite with Radar/Laser Warning Receiver (RWR/LWR) and Missile Approach Warning (MAWS)",
      "ewScore": 86,
      "helmetMountedDisplay": "Elbit Systems Integrated Helmet and Display Sighting System (I-HMDSS)",
      "hasDatalink": true,
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.8
    },
    "capabilities": {
      "internalGun": "20mm Nexter THL-20 Turret Gun (800 rounds/min)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1750,
      "keyWeaponsIntegrated": [
        "Helina / Dhruvastra Anti-Tank Guided Missiles (ATGM)",
        "Mistral-2 Air-to-Air Missiles",
        "70mm FZ231 Laser-Guided / Unguided Rocket Pods"
      ]
    },
    "fleet": {
      "confirmedQuantity": 15,
      "estimatedQuantity": 20,
      "quantityYear": 2026,
      "quantityNotes": "15 LSP helicopters inducted across Army Aviation and IAF, with procurement clearance for 156 additional series production helicopters (90 for Army, 66 for IAF).",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-14",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-iaf-tejas-mk1a",
    "aliases": [
      "ind-iaf-tejas-mk1a",
      "hal-tejas-mk1a",
      "tejas-mk1a"
    ],
    "name": "HAL Tejas Mk1A",
    "commonName": "Tejas Mk1A",
    "officialDesignation": "LCA Tejas Mk1A",
    "natoReportingName": null,
    "family": "HAL LCA Tejas Family",
    "variant": "Mk1A Enhanced Standard",
    "block": "Batch 1 Production Standard",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "originCountry": "India",
    "country": "India",
    "affiliation": "Indian Air Force (No. 45 Flying Daggers / No. 18 Flying Bullets)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_4_5",
    "era": "MODERN",
    "role": "Lightweight Supersonic Multirole Fighter",
    "secondaryRoles": [
      "Air Defense",
      "Precision Strike",
      "Reconnaissance"
    ],
    "firstFlightYear": 2024,
    "introductionYear": 2024,
    "retirementYear": null,
    "productionCount": 83,
    "fleetCount": 83,
    "activeCount": 38,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "General Electric F404-GE-IN20 Afterburning Turbofan",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 53.9,
    "thrustAfterburnerKn": 89.8,
    "topSpeedMach": 1.8,
    "topSpeedKmh": 2205,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 16000,
    "rateOfClimbMs": 280,
    "gLimitPositive": 8.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 850,
    "combatRadiusKm": null,
    "ferryRangeKm": 3000,
    "emptyWeightKg": 6560,
    "maxTakeoffWeightKg": 13500,
    "payloadCapacityKg": 5300,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "EL/M-2052 / DRDO Uttam GaN AESA Radar",
    "radarRangeAirKm": 150,
    "hasAesa": true,
    "hasIrst": false,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 92,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 0.5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 10,
    "costPerFlightHourUsd": 7000,
    "reliabilityScore": 88,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Indigenous Indian 4.5-generation lightweight supersonic multirole fighter. Features ELTA EL/M-2052 / Uttam AESA radar, integrated Angad EW suite, in-flight refueling probe, and Astra BVRAAM integration.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/HAL_Tejas_LA-5018_Aero_India_2021.jpg/1200px-HAL_Tejas_LA-5018_Aero_India_2021.jpg",
    "tvrScore": 82.4,
    "weapons": [
      {
        "weapon": {
          "name": "Astra Mk1 BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 110,
          "speedMach": 4.5,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "ASRAAM WVR",
          "type": "WVR_AAM",
          "maxRangeKm": 25,
          "speedMach": 3,
          "guidance": "Imaging Infrared"
        }
      },
      {
        "weapon": {
          "name": "Hammer Precision Bomb",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 70,
          "speedMach": 1.2,
          "guidance": "GPS/INS/Laser"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 2024,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the HAL Tejas Mk1A conducted."
      },
      {
        "year": 2024,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (No. 45 Flying Daggers / No. 18 Flying Bullets)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "HAL Tejas Mk1A",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6560,
        "maxTakeoffWeightKg": 13500,
        "payloadCapacityKg": 5300
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "General Electric F404-GE-IN20 Afterburning Turbofan",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 53.9,
        "thrustAfterburnerKn": 89.8
      },
      "performance": {
        "maxSpeedKmh": 2205,
        "maxSpeedMach": 1.8,
        "combatRadiusKm": 850,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 16000,
        "rateOfClimbMs": 280,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "EL/M-2052 / DRDO Uttam GaN AESA Radar",
      "radarType": "AESA",
      "radarRangeAirKm": 150,
      "hasAesa": true,
      "hasIrst": false,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Astra Mk1 BVR-AAM",
        "ASRAAM WVR",
        "Hammer Precision Bomb"
      ]
    },
    "fleet": {
      "confirmedQuantity": 38,
      "estimatedQuantity": 83,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 38, Retired: 0.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-tejas",
    "aliases": [
      "ind-tejas",
      "IND-IAF-TEJAS-MK1A",
      "ind-iaf-tejas-mk1a"
    ],
    "name": "HAL Tejas Mk1A",
    "commonName": "Tejas Mk1A",
    "officialDesignation": "Tejas Mk1A",
    "natoReportingName": null,
    "family": "Tejas Light Combat Aircraft",
    "variant": "Tejas Mk1A",
    "block": "Mk1A Enhanced Standard",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "originCountry": "India",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "LIGHT_ATTACK",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Lightweight Multirole Fighter",
    "secondaryRoles": [
      "Point Defense",
      "Air Combat Patrol"
    ],
    "firstFlightYear": 2020,
    "introductionYear": 2024,
    "retirementYear": null,
    "productionCount": 83,
    "fleetCount": 40,
    "activeCount": 40,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "General Electric F404-GE-IN20",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 53.9,
    "thrustAfterburnerKn": 85,
    "topSpeedMach": 1.6,
    "topSpeedKmh": 1980,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15200,
    "rateOfClimbMs": 250,
    "gLimitPositive": 8.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 850,
    "combatRadiusKm": null,
    "ferryRangeKm": 3000,
    "emptyWeightKg": 6560,
    "maxTakeoffWeightKg": 13500,
    "payloadCapacityKg": 4000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "EL/M-2052 / Uttam AESA",
    "radarRangeAirKm": 150,
    "hasAesa": true,
    "hasIrst": false,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 89,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 0.5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 9,
    "costPerFlightHourUsd": 8500,
    "reliabilityScore": 84,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 94,
    "sourceCount": 5,
    "lastVerified": null,
    "description": "Indigenous single-engine delta-wing light combat fighter featuring Uttam AESA radar, Astra Mk1 BVRAAM, self-protection EW jammer pod, and high-agility fly-by-wire flight control system.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg/1200px-HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg",
    "tvrScore": 81.4,
    "weapons": [
      {
        "weapon": {
          "name": "Astra Mk1 BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 110,
          "speedMach": 4.5,
          "guidance": "Active Radar Homing"
        }
      },
      {
        "weapon": {
          "name": "ASRAAM",
          "type": "WVR_AAM",
          "maxRangeKm": 50,
          "speedMach": 3.5,
          "guidance": "Imaging Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "LIGHT_ATTACK",
    "aircraftName": "HAL Tejas Mk1A",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 13.2,
        "wingspanM": 8.2,
        "heightM": 4.4
      },
      "weights": {
        "emptyWeightKg": 6560,
        "maxTakeoffWeightKg": 13500,
        "payloadCapacityKg": 4000,
        "internalFuelKg": 2458
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "General Electric F404-GE-IN20 Afterburning Turbofan",
        "engineManufacturer": "GE Aerospace / HAL License Assembly",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 53.9,
        "thrustAfterburnerKn": 84
      },
      "performance": {
        "maxSpeedKmh": 1975,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": 950,
        "combatRadiusKm": 500,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 280,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "ELTA EL/M-2052 AESA / Indigenous DRDO Uttam AESA Radar",
      "radarType": "AESA",
      "radarArchitecture": "Gallium Arsenide (GaAs) / GaN",
      "radarRangeAirKm": 150,
      "hasAesa": true,
      "hasIrst": false,
      "electronicWarfare": "DRDO Angad Internal EW Suite with digital RF memory (DRFM) jammer and advanced RWR",
      "ewScore": 88,
      "targetingSystem": "Litening 4I Advanced Electro-Optical Targeting Pod",
      "helmetMountedDisplay": "Elbit Systems TARGO II Helmet Mounted Cueing System",
      "hasDatalink": true,
      "datalinkProtocol": "Indigenous Software Defined Radio (SDR) & AFNET",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.5
    },
    "capabilities": {
      "internalGun": "23mm GSh-23 Twin-Barrel Autocannon (220 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4000,
      "keyWeaponsIntegrated": [
        "Astra Mk1 BVRAAM",
        "Python-5 High-Off-Boresight AAM",
        "Derby BVRAAM",
        "ASRAAM (Advanced Short Range AAM)",
        "BrahMos-NG (Future Standoff)",
        "Laser-Guided Bombs (Sudharshan)"
      ]
    },
    "fleet": {
      "confirmedQuantity": 38,
      "estimatedQuantity": 42,
      "quantityYear": 2026,
      "quantityNotes": "IAF has contracted 83 Tejas Mk1A aircraft (73 fighters, 10 trainers) with deliveries underway from HAL Bengaluru division, plus an additional order for 97 airframes cleared by the Defence Acquisition Council (DAC).",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-18",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-iaf-hawker-hunter",
    "aliases": [
      "ind-iaf-hawker-hunter",
      "hawker-hunter-f-56-t-66",
      "hawker-hunter"
    ],
    "name": "Hawker Hunter F.56 / T.66",
    "commonName": "Hawker Hunter",
    "officialDesignation": "Hunter F.56",
    "natoReportingName": null,
    "family": "Hawker Hunter",
    "variant": "Hunter F.56 / T.66",
    "block": "IAF Standard",
    "manufacturer": "Hawker Aircraft / HAL",
    "manufacturerCountry": "UK / India",
    "originCountry": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Battle of Longewala Hero 1957–2001)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "FIGHTER",
    "generation": "GEN_1",
    "era": "VINTAGE",
    "role": "Transonic Strike Fighter & Close Air Support",
    "secondaryRoles": [
      "Interception",
      "Trainer"
    ],
    "firstFlightYear": 1951,
    "introductionYear": 1957,
    "retirementYear": 2001,
    "productionCount": 213,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 213,
    "engineManufacturer": null,
    "engineModel": "Rolls-Royce Avon 207 Turbojet",
    "engineCount": 1,
    "engineType": "Turbojet",
    "hasAfterburner": false,
    "thrustDryKn": 45.1,
    "thrustAfterburnerKn": 45.1,
    "topSpeedMach": 0.94,
    "topSpeedKmh": 1150,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15240,
    "rateOfClimbMs": 87,
    "gLimitPositive": 7.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 715,
    "combatRadiusKm": null,
    "ferryRangeKm": 3060,
    "emptyWeightKg": 6405,
    "maxTakeoffWeightKg": 11158,
    "payloadCapacityKg": 3400,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "Range-only Radar Gunsight",
    "radarRangeAirKm": 5,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 40,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 3,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 10,
    "costPerFlightHourUsd": 3500,
    "reliabilityScore": 86,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The legendary British-designed transonic fighter famous for destroying Pakistani armor during the Battle of Longewala (1971). Served with distinction in 1965 and 1971 wars before serving as advanced trainers until 2001.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Hawker_Hunter_F56_IAF.jpg/1200px-Hawker_Hunter_F56_IAF.jpg",
    "tvrScore": 49.8,
    "weapons": [
      {
        "weapon": {
          "name": "Four 30mm ADEN Cannons",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Optical"
        }
      },
      {
        "weapon": {
          "name": "T-10 / SNEB Unguided Rockets",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": 4,
          "speedMach": 1.2,
          "guidance": "Unguided"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1951,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Hawker Hunter F.56 / T.66 conducted."
      },
      {
        "year": 1957,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic Battle of Longewala Hero 1957–2001)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "Hawker Hunter F.56 / T.66",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6405,
        "maxTakeoffWeightKg": 11158,
        "payloadCapacityKg": 3400
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Rolls-Royce Avon 207 Turbojet",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 45.1,
        "thrustAfterburnerKn": 45.1
      },
      "performance": {
        "maxSpeedKmh": 1150,
        "maxSpeedMach": 0.94,
        "combatRadiusKm": 715,
        "ferryRangeKm": 3060,
        "serviceCeilingM": 15240,
        "rateOfClimbMs": 87,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Range-only Radar Gunsight",
      "radarType": "NONE",
      "radarRangeAirKm": 5,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Four 30mm ADEN Cannons",
        "T-10 / SNEB Unguided Rockets"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 213.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-iaf-mig21-bison",
    "aliases": [
      "ind-iaf-mig21-bison",
      "mikoyan-mig-21-bison",
      "mig-21-bison"
    ],
    "name": "Mikoyan MiG-21 Bison",
    "commonName": "MiG-21 Bison",
    "officialDesignation": "MiG-21-93 / Bison Standard",
    "natoReportingName": "Fishbed",
    "family": "Mikoyan MiG-21",
    "variant": "MiG-21bis UPG Bison",
    "block": "Bison Final IAF Standard",
    "manufacturer": "HAL / Mikoyan-Gurevich",
    "manufacturerCountry": "India / Soviet Union",
    "originCountry": "Soviet Union",
    "country": "India",
    "affiliation": "Indian Air Force (Historic 1963–2025 Frontline Workhorse)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "INTERCEPTOR",
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "role": "Point Defense Supersonic Interceptor",
    "secondaryRoles": [
      "Tactical Strike",
      "Close Air Support"
    ],
    "firstFlightYear": 1955,
    "introductionYear": 1963,
    "retirementYear": 2025,
    "productionCount": 874,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 12,
    "retiredCount": 862,
    "engineManufacturer": null,
    "engineModel": "Tumansky R-25-300 Afterburning Turbojet",
    "engineCount": 1,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 40.2,
    "thrustAfterburnerKn": 70,
    "topSpeedMach": 2.05,
    "topSpeedKmh": 2230,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17500,
    "rateOfClimbMs": 225,
    "gLimitPositive": 8.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 650,
    "combatRadiusKm": null,
    "ferryRangeKm": 1470,
    "emptyWeightKg": 5895,
    "maxTakeoffWeightKg": 10400,
    "payloadCapacityKg": 1500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Phazotron Kopyo Lightweight Radar",
    "radarRangeAirKm": 57,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 70,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 2,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 12,
    "costPerFlightHourUsd": 5500,
    "reliabilityScore": 75,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The legendary supersonic delta-wing interceptor that formed the backbone of the IAF for 62 years (1963 to 2025). The Bison upgrade added Kopyo radar, helmet-mounted sights, and R-73 / R-77 BVR capability, famously engaging in the 2019 aerial duel.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/MiG-21_Bison_of_the_Indian_Air_Force.jpg/1200px-MiG-21_Bison_of_the_Indian_Air_Force.jpg",
    "tvrScore": 61.8,
    "weapons": [
      {
        "weapon": {
          "name": "R-73E Archer",
          "type": "WVR_AAM",
          "maxRangeKm": 30,
          "speedMach": 2.5,
          "guidance": "HMS/Infrared"
        }
      },
      {
        "weapon": {
          "name": "R-77 (RVV-AE)",
          "type": "BVR_AAM",
          "maxRangeKm": 80,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "23mm GSh-23L Cannon",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Ballistic"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1955,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Mikoyan MiG-21 Bison conducted."
      },
      {
        "year": 1963,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic 1963–2025 Frontline Workhorse)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "INTERCEPTOR",
    "aircraftName": "Mikoyan MiG-21 Bison",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 5895,
        "maxTakeoffWeightKg": 10400,
        "payloadCapacityKg": 1500
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Tumansky R-25-300 Afterburning Turbojet",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 40.2,
        "thrustAfterburnerKn": 70
      },
      "performance": {
        "maxSpeedKmh": 2230,
        "maxSpeedMach": 2.05,
        "combatRadiusKm": 650,
        "ferryRangeKm": 1470,
        "serviceCeilingM": 17500,
        "rateOfClimbMs": 225,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Phazotron Kopyo Lightweight Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 57,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "R-73E Archer",
        "R-77 (RVV-AE)",
        "23mm GSh-23L Cannon"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 862.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-iaf-mig25-foxbat",
    "aliases": [
      "ind-iaf-mig25-foxbat",
      "mikoyan-mig-25r-foxbat-trishul-",
      "mig-25-foxbat"
    ],
    "name": "Mikoyan MiG-25R Foxbat (Trishul)",
    "commonName": "MiG-25 Foxbat",
    "officialDesignation": "MiG-25RB / RU (Trishul)",
    "natoReportingName": "Foxbat-B",
    "family": "Mikoyan MiG-25",
    "variant": "MiG-25RB Stratospheric Reconnaissance",
    "block": "IAF No. 102 Trisonics Standard",
    "manufacturer": "Mikoyan-Gurevich",
    "manufacturerCountry": "Soviet Union",
    "originCountry": "Soviet Union",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Stratospheric Reconnaissance 1981–2006)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "RECONNAISSANCE",
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "role": "Mach 3.2 Stratospheric Strategic Reconnaissance",
    "secondaryRoles": [
      "High-Altitude Mapping",
      "ELINT"
    ],
    "firstFlightYear": 1964,
    "introductionYear": 1981,
    "retirementYear": 2006,
    "productionCount": 10,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 10,
    "engineManufacturer": null,
    "engineModel": "Tumansky R-15B-300 Afterburning Turbojets (Dual)",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 147,
    "thrustAfterburnerKn": 200,
    "topSpeedMach": 3.2,
    "topSpeedKmh": 3400,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 24400,
    "rateOfClimbMs": 208,
    "gLimitPositive": 4.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1730,
    "combatRadiusKm": null,
    "ferryRangeKm": 2575,
    "emptyWeightKg": 20000,
    "maxTakeoffWeightKg": 41200,
    "payloadCapacityKg": 0,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "SABIR High-Resolution Aerial Cameras & ELINT Suite",
    "radarRangeAirKm": 0,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 78,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 15,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 30,
    "costPerFlightHourUsd": 25000,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The fastest combat aircraft to ever fly in South Asian airspace. Operated by the secretive No. 102 Squadron \"Trisonics\" from Bareilly, the Foxbat routinely flew at Mach 2.8+ at 80,000 feet, untouchable by enemy interceptors or SAM batteries.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/MiG-25_Foxbat_IAF_Museum.jpg/1200px-MiG-25_Foxbat_IAF_Museum.jpg",
    "tvrScore": 55.8,
    "weapons": [],
    "dataSources": [],
    "milestones": [
      {
        "year": 1964,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Mikoyan MiG-25R Foxbat (Trishul) conducted."
      },
      {
        "year": 1981,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic Stratospheric Reconnaissance 1981–2006)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "RECONNAISSANCE",
    "aircraftName": "Mikoyan MiG-25R Foxbat (Trishul)",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 20000,
        "maxTakeoffWeightKg": 41200,
        "payloadCapacityKg": 0
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Tumansky R-15B-300 Afterburning Turbojets (Dual)",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 147,
        "thrustAfterburnerKn": 200
      },
      "performance": {
        "maxSpeedKmh": 3400,
        "maxSpeedMach": 3.2,
        "combatRadiusKm": 1730,
        "ferryRangeKm": 2575,
        "serviceCeilingM": 24400,
        "rateOfClimbMs": 208,
        "gLimitPositive": 4.5
      }
    },
    "avionics": {
      "radar": "SABIR High-Resolution Aerial Cameras & ELINT Suite",
      "radarType": "NONE",
      "radarRangeAirKm": 0,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 15
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": []
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 10.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-iaf-mig27-bahadur",
    "aliases": [
      "ind-iaf-mig27-bahadur",
      "mikoyan-mig-27ml-bahadur",
      "mig-27-bahadur"
    ],
    "name": "Mikoyan MiG-27ML Bahadur",
    "commonName": "MiG-27 Bahadur",
    "officialDesignation": "MiG-27ML Flogger-J",
    "natoReportingName": "Flogger-J",
    "family": "Mikoyan MiG-27",
    "variant": "MiG-27ML Bahadur",
    "block": "IAF Upgraded Bahadur",
    "manufacturer": "HAL Nashik / Mikoyan",
    "manufacturerCountry": "India / Soviet Union",
    "originCountry": "Soviet Union",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Kargil Strike Hero 1985–2019)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "GROUND_ATTACK",
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "role": "Variable-Geometry Ground Attack & Strike Fighter",
    "secondaryRoles": [
      "Close Air Support",
      "Interdiction"
    ],
    "firstFlightYear": 1970,
    "introductionYear": 1985,
    "retirementYear": 2019,
    "productionCount": 165,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 165,
    "engineManufacturer": null,
    "engineModel": "Khachaturov R-29B-300 Afterburning Turbojet",
    "engineCount": 1,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 78.4,
    "thrustAfterburnerKn": 112.8,
    "topSpeedMach": 1.77,
    "topSpeedKmh": 1885,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 14000,
    "rateOfClimbMs": 200,
    "gLimitPositive": 7.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 780,
    "combatRadiusKm": null,
    "ferryRangeKm": 2500,
    "emptyWeightKg": 11908,
    "maxTakeoffWeightKg": 20300,
    "payloadCapacityKg": 4000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "Klen-PRF Laser Rangefinder / Target Designator",
    "radarRangeAirKm": 10,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 65,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 3.5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 18,
    "costPerFlightHourUsd": 8500,
    "reliabilityScore": 76,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Variable-geometry swing-wing dedicated ground attack aircraft produced under license by HAL. Armed with a 30mm six-barrel Gatling cannon (GSh-6-30), the Bahadur was pivotal during Operation Safed Sagar in the 1999 Kargil War.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mikoyan-Gurevich_MiG-27ML_Bahadur_of_the_IAF.jpg/1200px-Mikoyan-Gurevich_MiG-27ML_Bahadur_of_the_IAF.jpg",
    "tvrScore": 55.1,
    "weapons": [
      {
        "weapon": {
          "name": "30mm GSh-6-30 Gatling Cannon",
          "type": "GUN_POD",
          "maxRangeKm": 3,
          "speedMach": 1.5,
          "guidance": "Ballistic"
        }
      },
      {
        "weapon": {
          "name": "KAB-500L Laser Guided Bomb",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 12,
          "speedMach": 0.9,
          "guidance": "Laser"
        }
      },
      {
        "weapon": {
          "name": "R-60M Air-to-Air Missile",
          "type": "WVR_AAM",
          "maxRangeKm": 8,
          "speedMach": 2.7,
          "guidance": "Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1970,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Mikoyan MiG-27ML Bahadur conducted."
      },
      {
        "year": 1985,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (Historic Kargil Strike Hero 1985–2019)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "GROUND_ATTACK",
    "aircraftName": "Mikoyan MiG-27ML Bahadur",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 11908,
        "maxTakeoffWeightKg": 20300,
        "payloadCapacityKg": 4000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Khachaturov R-29B-300 Afterburning Turbojet",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 78.4,
        "thrustAfterburnerKn": 112.8
      },
      "performance": {
        "maxSpeedKmh": 1885,
        "maxSpeedMach": 1.77,
        "combatRadiusKm": 780,
        "ferryRangeKm": 2500,
        "serviceCeilingM": 14000,
        "rateOfClimbMs": 200,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Klen-PRF Laser Rangefinder / Target Designator",
      "radarType": "NONE",
      "radarRangeAirKm": 10,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3.5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "30mm GSh-6-30 Gatling Cannon",
        "KAB-500L Laser Guided Bomb",
        "R-60M Air-to-Air Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 165.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-mig29k",
    "aliases": [
      "ind-mig29k",
      "IND-NAVY-MIG29K",
      "ind-navy-mig29k"
    ],
    "name": "Mikoyan MiG-29K Fulcrum-D",
    "commonName": "MiG-29K",
    "officialDesignation": "MiG-29K (Item 9.41)",
    "natoReportingName": null,
    "family": "MiG-29 Fulcrum Family",
    "variant": "MiG-29K (Item 9.41)",
    "block": "Carrier Operational Standard",
    "manufacturer": "RSK MiG",
    "manufacturerCountry": "Russia",
    "originCountry": "Russia",
    "country": "India",
    "affiliation": "Indian Naval Air Arm (INAS 300 / 303)",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "FIGHTER",
    "generation": "GEN_4_5",
    "era": "MODERN",
    "role": "Carrier-Borne Multirole Strike Fighter",
    "secondaryRoles": [
      "Fleet Air Defense",
      "Anti-Surface Warfare (ASuW)"
    ],
    "firstFlightYear": 1988,
    "introductionYear": 2010,
    "retirementYear": null,
    "productionCount": 45,
    "fleetCount": 40,
    "activeCount": 40,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Klimov RD-33MK Smokeless Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 106,
    "thrustAfterburnerKn": 176,
    "topSpeedMach": 2.2,
    "topSpeedKmh": 2200,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17500,
    "rateOfClimbMs": 330,
    "gLimitPositive": 8,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 850,
    "combatRadiusKm": null,
    "ferryRangeKm": 2000,
    "emptyWeightKg": 11000,
    "maxTakeoffWeightKg": 24500,
    "payloadCapacityKg": 5500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Zhuk-ME Pulse-Doppler Phased Array",
    "radarRangeAirKm": 120,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 78,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 3.5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 72,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 5,
    "lastVerified": null,
    "description": "Carrier-borne multirole fighter operating from INS Vikramaditya and INS Vikrant aircraft carriers with ski-jump launch (STOBAR) and arrested landing recovery. Armed with Kh-35 anti-ship missiles and R-77 BVR missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/MiG-29K_takes_off_from_INS_Vikramaditya.jpg/1200px-MiG-29K_takes_off_from_INS_Vikramaditya.jpg",
    "tvrScore": 77.8,
    "weapons": [
      {
        "weapon": {
          "name": "Kh-35E Uran",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 130,
          "speedMach": 0.8,
          "guidance": "Active Radar Terminal"
        }
      },
      {
        "weapon": {
          "name": "R-77 BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 80,
          "speedMach": 4,
          "guidance": "Active Radar Homing"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "Mikoyan MiG-29K Fulcrum-D",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 17.3,
        "wingspanM": 11.99,
        "heightM": 4.4
      },
      "weights": {
        "emptyWeightKg": 11000,
        "maxTakeoffWeightKg": 24500,
        "payloadCapacityKg": 5500,
        "internalFuelKg": 5200
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Klimov RD-33MK Smokeless Turbofans",
        "engineManufacturer": "Klimov",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 106,
        "thrustAfterburnerKn": 176
      },
      "performance": {
        "maxSpeedKmh": 2200,
        "maxSpeedMach": 2.2,
        "cruiseSpeedKmh": 950,
        "combatRadiusKm": 850,
        "ferryRangeKm": 2000,
        "serviceCeilingM": 17500,
        "serviceCeilingFt": 57400,
        "rateOfClimbMs": 330,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Zhuk-ME Multi-Mode Pulse-Doppler Phased Array Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 120,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "OLS-UEM Electro-Optical Infrared Search & Track",
      "electronicWarfare": "DRDO / Elisra Integrated Self-Protection Jammer and Chaff/Flare",
      "ewScore": 82,
      "helmetMountedDisplay": "TopSight-E Helmet Mounted Sight",
      "hasDatalink": true,
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3.5
    },
    "capabilities": {
      "internalGun": "30mm GSh-30-1 Autocannon (150 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 5500,
      "keyWeaponsIntegrated": [
        "Kh-35E Sea-Skimming Anti-Ship Missile",
        "Kh-31A/P Supersonic Anti-Ship/Anti-Radiation Missile",
        "R-77 (RVV-AE) Active Radar BVRAAM",
        "R-73 High-Off-Boresight AAM",
        "KAB-500Kr Precision Guided Bombs"
      ]
    },
    "fleet": {
      "confirmedQuantity": 40,
      "estimatedQuantity": 40,
      "quantityYear": 2026,
      "quantityNotes": "Operational carrier strike wing deployed aboard INS Vikrant (IAC-1) and INS Vikramaditya, based at INS Hansa, Goa.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-05",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-iaf-mig29upg",
    "aliases": [
      "ind-iaf-mig29upg",
      "mikoyan-mig-29upg-baaz",
      "mig-29upg"
    ],
    "name": "Mikoyan MiG-29UPG Baaz",
    "commonName": "MiG-29UPG",
    "officialDesignation": "MiG-29UPG Modernized Standard",
    "natoReportingName": null,
    "family": "Mikoyan MiG-29 Fulcrum",
    "variant": "UPG (Upgraded Baaz)",
    "block": "IAF Upgrade Standard",
    "manufacturer": "RSK MiG / 11 Base Repair Depot IAF",
    "manufacturerCountry": "Russia / India",
    "originCountry": "Russia",
    "country": "India",
    "affiliation": "Indian Air Force (No. 28 First Supersonics / No. 47 Black Archers / No. 223 Tridents)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_4_5",
    "era": "MODERN",
    "role": "Air Superiority & Multi-Role Interceptor",
    "secondaryRoles": [
      "Precision Ground Attack",
      "BVR Combat"
    ],
    "firstFlightYear": 1977,
    "introductionYear": 1986,
    "retirementYear": null,
    "productionCount": 66,
    "fleetCount": 60,
    "activeCount": 60,
    "inactiveCount": 0,
    "retiredCount": 6,
    "engineManufacturer": null,
    "engineModel": "Klimov RD-33 Series 3 Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 100,
    "thrustAfterburnerKn": 166,
    "topSpeedMach": 2.25,
    "topSpeedKmh": 2400,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 18000,
    "rateOfClimbMs": 330,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1430,
    "combatRadiusKm": null,
    "ferryRangeKm": 2100,
    "emptyWeightKg": 11000,
    "maxTakeoffWeightKg": 18000,
    "payloadCapacityKg": 4500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Phazotron Zhuk-M2E Slotted Array Radar",
    "radarRangeAirKm": 120,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 84,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 3,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 16,
    "costPerFlightHourUsd": 12000,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Upgraded IAF air superiority interceptor featuring Zhuk-M2E radar, enlarged dorsal fuel tank conformal spine, in-flight refueling probe, OLS-UEM IRST, and RVV-AE / R-77-1 BVR capability.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Indian_Air_Force_MiG-29UPG.jpg/1200px-Indian_Air_Force_MiG-29UPG.jpg",
    "tvrScore": 78,
    "weapons": [
      {
        "weapon": {
          "name": "R-77 (RVV-AE) BVR",
          "type": "BVR_AAM",
          "maxRangeKm": 100,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "R-73E WVR Missile",
          "type": "WVR_AAM",
          "maxRangeKm": 30,
          "speedMach": 2.5,
          "guidance": "Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1977,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Mikoyan MiG-29UPG Baaz conducted."
      },
      {
        "year": 1986,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (No. 28 First Supersonics / No. 47 Black Archers / No. 223 Tridents)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AIR_SUPERIORITY",
    "aircraftName": "Mikoyan MiG-29UPG Baaz",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 11000,
        "maxTakeoffWeightKg": 18000,
        "payloadCapacityKg": 4500
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Klimov RD-33 Series 3 Turbofans",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 100,
        "thrustAfterburnerKn": 166
      },
      "performance": {
        "maxSpeedKmh": 2400,
        "maxSpeedMach": 2.25,
        "combatRadiusKm": 1430,
        "ferryRangeKm": 2100,
        "serviceCeilingM": 18000,
        "rateOfClimbMs": 330,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Phazotron Zhuk-M2E Slotted Array Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 120,
      "hasAesa": false,
      "hasIrst": true,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "R-77 (RVV-AE) BVR",
        "R-73E WVR Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 60,
      "estimatedQuantity": 60,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 60, Retired: 6.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-iaf-jaguar-shamsher",
    "aliases": [
      "ind-iaf-jaguar-shamsher",
      "sepecat-jaguar-is-ib-im-shamsher",
      "jaguar-shamsher"
    ],
    "name": "SEPECAT Jaguar IS/IB/IM Shamsher",
    "commonName": "Jaguar Shamsher",
    "officialDesignation": "Jaguar DARIN III Standard",
    "natoReportingName": null,
    "family": "SEPECAT Jaguar",
    "variant": "Jaguar IS (Strike) / IM (Maritime) / IB (Trainer)",
    "block": "DARIN III Modernization Standard",
    "manufacturer": "HAL / SEPECAT (Breguet / BAC)",
    "manufacturerCountry": "India / UK / France",
    "originCountry": "UK / France",
    "country": "India",
    "affiliation": "Indian Air Force (No. 5 Tuskers / No. 14 Bulls / No. 16 Cobras / No. 6 Dragons)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "GROUND_ATTACK",
    "generation": "GEN_4",
    "era": "MODERN",
    "role": "Deep Penetration Strike & Maritime Interdiction",
    "secondaryRoles": [
      "Tactical Nuclear Delivery",
      "Anti-Ship Strike",
      "Low-Level Ingress"
    ],
    "firstFlightYear": 1969,
    "introductionYear": 1979,
    "retirementYear": null,
    "productionCount": 160,
    "fleetCount": 116,
    "activeCount": 116,
    "inactiveCount": 0,
    "retiredCount": 44,
    "engineManufacturer": null,
    "engineModel": "Rolls-Royce Turbomeca Adour Mk 811 / 821 Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 46,
    "thrustAfterburnerKn": 76,
    "topSpeedMach": 1.6,
    "topSpeedKmh": 1699,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 14000,
    "rateOfClimbMs": 120,
    "gLimitPositive": 8.6,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 900,
    "combatRadiusKm": null,
    "ferryRangeKm": 3524,
    "emptyWeightKg": 7000,
    "maxTakeoffWeightKg": 15700,
    "payloadCapacityKg": 4750,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "EL/M-2052 AESA Radar (DARIN III Maritime / Strike)",
    "radarRangeAirKm": 140,
    "hasAesa": true,
    "hasIrst": false,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 86,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 2.5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 15,
    "costPerFlightHourUsd": 9500,
    "reliabilityScore": 82,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Deep penetration strike aircraft with over-wing missile pylons, upgraded under the DARIN III program with EL/M-2052 AESA radar, dual-cockpit MFDs, ASRAAM missiles, and Harpoon anti-ship missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Indian_Air_Force_SEPECAT_Jaguar_IS.jpg/1200px-Indian_Air_Force_SEPECAT_Jaguar_IS.jpg",
    "tvrScore": 73,
    "weapons": [
      {
        "weapon": {
          "name": "AGM-84L Harpoon Block II",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 140,
          "speedMach": 0.85,
          "guidance": "Active Radar / GPS"
        }
      },
      {
        "weapon": {
          "name": "ASRAAM WVR",
          "type": "WVR_AAM",
          "maxRangeKm": 25,
          "speedMach": 3,
          "guidance": "Imaging Infrared"
        }
      },
      {
        "weapon": {
          "name": "CBU-105 Sensor Fuzed Weapon",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 15,
          "speedMach": 0.8,
          "guidance": "Smart Submunitions"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1969,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the SEPECAT Jaguar IS/IB/IM Shamsher conducted."
      },
      {
        "year": 1979,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Indian Air Force (No. 5 Tuskers / No. 14 Bulls / No. 16 Cobras / No. 6 Dragons)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "GROUND_ATTACK",
    "aircraftName": "SEPECAT Jaguar IS/IB/IM Shamsher",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 7000,
        "maxTakeoffWeightKg": 15700,
        "payloadCapacityKg": 4750
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Rolls-Royce Turbomeca Adour Mk 811 / 821 Turbofans",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 46,
        "thrustAfterburnerKn": 76
      },
      "performance": {
        "maxSpeedKmh": 1699,
        "maxSpeedMach": 1.6,
        "combatRadiusKm": 900,
        "ferryRangeKm": 3524,
        "serviceCeilingM": 14000,
        "rateOfClimbMs": 120,
        "gLimitPositive": 8.6
      }
    },
    "avionics": {
      "radar": "EL/M-2052 AESA Radar (DARIN III Maritime / Strike)",
      "radarType": "AESA",
      "radarRangeAirKm": 140,
      "hasAesa": true,
      "hasIrst": false,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2.5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "AGM-84L Harpoon Block II",
        "ASRAAM WVR",
        "CBU-105 Sensor Fuzed Weapon"
      ]
    },
    "fleet": {
      "confirmedQuantity": 116,
      "estimatedQuantity": 116,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 116, Retired: 44.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "ind-mh60r-navy",
    "aliases": [
      "ind-mh60r-navy"
    ],
    "name": "Sikorsky MH-60R Seahawk",
    "commonName": "MH-60R Seahawk",
    "officialDesignation": "MH-60R Romeo",
    "natoReportingName": null,
    "family": "Sikorsky S-70 Seahawk",
    "variant": "MH-60R Romeo",
    "block": "Production Lot 20",
    "manufacturer": "Lockheed Martin / Sikorsky",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "India",
    "affiliation": "Indian Naval Air Arm (INAS 334)",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "HELICOPTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Multi-Mission Naval ASW & Anti-Surface Helicopter",
    "secondaryRoles": [
      "Search & Rescue (SAR)",
      "Naval Special Warfare"
    ],
    "firstFlightYear": 2001,
    "introductionYear": 2022,
    "retirementYear": null,
    "productionCount": 24,
    "fleetCount": 24,
    "activeCount": 24,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "General Electric T700-GE-401C Turboshafts",
    "engineCount": 2,
    "engineType": "Turboshaft",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": 270,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 5200,
    "rateOfClimbMs": 8.4,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 830,
    "combatRadiusKm": null,
    "ferryRangeKm": null,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": 2700,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Telephonics AN/APS-153(V) Multi-Mode Radar with ARPDD",
    "radarRangeAirKm": 185,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 90,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 86,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 96,
    "sourceCount": 5,
    "lastVerified": null,
    "description": "Advanced naval helicopter deployed across Indian Navy destroyers and frigates. Features airborne low frequency dipping sonar (ALFS), Mk 54 ASW torpedoes, and Hellfire anti-surface precision missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MH-60R_of_HSM-77_in_flight_over_Pacific_Ocean_2013.JPG/1280px-MH-60R_of_HSM-77_in_flight_over_Pacific_Ocean_2013.JPG",
    "tvrScore": 84.8,
    "weapons": [
      {
        "weapon": {
          "name": "Mk 54 Mod 0 ASW Torpedo",
          "type": "TORPEDO",
          "maxRangeKm": 15,
          "speedMach": 0.08,
          "guidance": "Active/Passive Acoustic Homing"
        }
      },
      {
        "weapon": {
          "name": "AGM-114R Hellfire II",
          "type": "ANTI_TANK_MISSILE",
          "maxRangeKm": 8,
          "speedMach": 1.3,
          "guidance": "Semi-Active Laser"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "ANTI_SUBMARINE_HELICOPTER",
    "aircraftName": "Sikorsky MH-60R Seahawk",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "ind-su30mki",
    "aliases": [
      "ind-su30mki",
      "IND-IAF-SU30MKI",
      "ind-iaf-su30mki"
    ],
    "name": "Sukhoi Su-30MKI Flanker-H",
    "commonName": "Su-30MKI",
    "officialDesignation": "Su-30MKI Super Sukhoi",
    "natoReportingName": null,
    "family": "Su-30 Flanker Family",
    "variant": "Su-30MKI Super Sukhoi",
    "block": "Phase 3 / Super Sukhoi Upgrade",
    "manufacturer": "Hindustan Aeronautics Limited / Sukhoi",
    "manufacturerCountry": "Russia / India",
    "originCountry": "Russia / India",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Air Dominance & Long-Range Strike Fighter",
    "secondaryRoles": [
      "Maritime Strike",
      "SEAD",
      "Strategic Nuclear Delivery"
    ],
    "firstFlightYear": 2000,
    "introductionYear": 2002,
    "retirementYear": null,
    "productionCount": 272,
    "fleetCount": 260,
    "activeCount": 260,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "AL-31FP Thrust-Vectoring Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 150,
    "thrustAfterburnerKn": 246,
    "topSpeedMach": 2,
    "topSpeedKmh": 2120,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17300,
    "rateOfClimbMs": 300,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1500,
    "combatRadiusKm": null,
    "ferryRangeKm": 3000,
    "emptyWeightKg": 18400,
    "maxTakeoffWeightKg": 38800,
    "payloadCapacityKg": 8130,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "PESA",
    "radarModel": "N011M Bars PESA (Upgrading to Uttam AESA)",
    "radarRangeAirKm": 140,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 88,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 4,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 18,
    "costPerFlightHourUsd": 14500,
    "reliabilityScore": 78,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 96,
    "sourceCount": 6,
    "lastVerified": null,
    "description": "The backbone of the Indian Air Force. Twin-engine, two-seat air superiority fighter featuring 2D thrust-vectoring engines and compatibility with BrahMos-A supersonic cruise missiles and Astra Mk1/Mk2 BVR missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg/1200px-Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg",
    "tvrScore": 84.6,
    "weapons": [
      {
        "weapon": {
          "name": "BrahMos-A ALCM",
          "type": "LAND_ATTACK_CRUISE_MISSILE",
          "maxRangeKm": 450,
          "speedMach": 3,
          "guidance": "Active Radar / INS / GPS"
        }
      },
      {
        "weapon": {
          "name": "Astra Mk1 BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 110,
          "speedMach": 4.5,
          "guidance": "Active Radar Homing"
        }
      },
      {
        "weapon": {
          "name": "R-77-1",
          "type": "BVR_AAM",
          "maxRangeKm": 110,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "R-73E",
          "type": "WVR_AAM",
          "maxRangeKm": 30,
          "speedMach": 2.5,
          "guidance": "All-Aspect Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Sukhoi Su-30MKI Flanker-H",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 21.93,
        "wingspanM": 14.7,
        "heightM": 6.36
      },
      "weights": {
        "emptyWeightKg": 18400,
        "maxTakeoffWeightKg": 38800,
        "payloadCapacityKg": 8000,
        "internalFuelKg": 9400
      },
      "crew": {
        "minimumCrew": 2,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "NPO Saturn AL-31FP Thrust-Vectoring Turbofans",
        "engineManufacturer": "Saturn / HAL Koraput Engine Division",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 150,
        "thrustAfterburnerKn": 245.2
      },
      "performance": {
        "maxSpeedKmh": 2120,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1050,
        "combatRadiusKm": 1500,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 17300,
        "serviceCeilingFt": 56800,
        "rateOfClimbMs": 300,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "NIIP N011M Bars PESA (Upgrading to Indigenous DRDO Virupaksha AESA)",
      "radarType": "PESA",
      "radarArchitecture": "Passive Electronically Scanned Array / GaN AESA Upgrade",
      "radarRangeAirKm": 350,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "OLS-30 Infrared Search and Track System",
      "electronicWarfare": "DRDO Tarang RWR, Elta EL/M-8222 Jamming Pod, D-29 Internal EW",
      "ewScore": 89,
      "targetingSystem": "Rafael Litening Targeting Pod & OLS-30 Optical Locator",
      "helmetMountedDisplay": "Thales Topsight / Elbit DASH IV HMD",
      "hasDatalink": true,
      "datalinkProtocol": "IAF Tactical Datalink & AFNET Integration",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 4
    },
    "capabilities": {
      "internalGun": "30mm Gryazev-Shipunov GSh-30-1 Autocannon (150 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 8000,
      "keyWeaponsIntegrated": [
        "BrahMos-A Supersonic Cruise Missile (Mach 3.0, 450 km)",
        "Astra Mk1/Mk2 BVRAAM",
        "R-77 / RVV-AE BVRAAM",
        "Rudram-1 Anti-Radiation Missile",
        "Spice 2000 Precision Guided Bomb"
      ]
    },
    "fleet": {
      "confirmedQuantity": 260,
      "estimatedQuantity": 260,
      "quantityYear": 2026,
      "quantityNotes": "Backbone of IAF fighter fleet with 260+ operational aircraft produced under license by HAL Nashik Division. 84 airframes currently undergoing Super Sukhoi upgrade with Virupaksha AESA radar and indigenous avionics.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-10",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "IDN-TNI-AU-SU30MK2",
    "aliases": [
      "IDN-TNI-AU-SU30MK2",
      "idn-tni-au-su30mk2"
    ],
    "name": "Sukhoi Su-30MK2 Flanker-G",
    "commonName": "Sukhoi Su-27/30 Flanker",
    "officialDesignation": "Su-30MK2 Heavy Multi-Role Fighter",
    "natoReportingName": "Flanker-G",
    "family": "Sukhoi Su-27/30 Flanker",
    "variant": "Su-30MK2 Multi-Role Fighter",
    "block": "Export Standard Indonesia Series",
    "manufacturer": "Komsomolsk-on-Amur Aircraft Plant (KnAAZ) / Sukhoi",
    "manufacturerCountry": "Russia",
    "originCountry": "Russia",
    "country": "Indonesia",
    "affiliation": "Tentara Nasional Indonesia Angkatan Udara (TNI-AU Skadron Udara 11 Sultan Hasanuddin Air Base)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_4",
    "era": "MODERN",
    "role": "Multirole Fighter",
    "secondaryRoles": [
      "Maritime Strike",
      "Air Superiority",
      "Long-Range Archipelagic Patrol"
    ],
    "firstFlightYear": 2002,
    "introductionYear": 2008,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 11,
    "activeCount": 11,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "Saturn",
    "engineModel": "NPO Saturn AL-31F Afterburning Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 150,
    "thrustAfterburnerKn": 245,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1000,
    "serviceCeilingM": 17300,
    "rateOfClimbMs": 230,
    "gLimitPositive": 8.5,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1500,
    "combatRadiusKm": 1500,
    "ferryRangeKm": 3000,
    "emptyWeightKg": 17700,
    "maxTakeoffWeightKg": 34500,
    "payloadCapacityKg": 8000,
    "internalFuelKg": 9720,
    "lengthM": 21.9,
    "wingspanM": 14.7,
    "heightM": 6.36,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-02",
    "description": "Heavy twin-engine multirole fighter providing long-range maritime and archipelagic air defense for Indonesia vast island territories, armed with supersonic Kh-31 anti-ship missiles.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 21.9,
        "wingspanM": 14.7,
        "heightM": 6.36
      },
      "weights": {
        "emptyWeightKg": 17700,
        "maxTakeoffWeightKg": 34500,
        "payloadCapacityKg": 8000,
        "internalFuelKg": 9720
      },
      "crew": {
        "minimumCrew": 2,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "NPO Saturn AL-31F Afterburning Turbofans",
        "engineManufacturer": "Saturn",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 150,
        "thrustAfterburnerKn": 245
      },
      "performance": {
        "maxSpeedKmh": 2120,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 1500,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 17300,
        "serviceCeilingFt": 56800,
        "rateOfClimbMs": 230,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "NIIP N001VEP Myech Pulse-Doppler Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 150,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "OEPS-30 Optical Electronic Targeting Sight",
      "electronicWarfare": "L-150 Pastel RWR & Gardeniya Jamming Pods",
      "ewScore": 78,
      "hasDatalink": true,
      "datalinkProtocol": "TNI-AU C2 Tactical Network",
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "internalGun": "30mm GSh-30-1 Autocannon (150 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8000,
      "keyWeaponsIntegrated": [
        "Kh-31P Supersonic Anti-Radiation Missile",
        "Kh-31A Anti-Ship Missile",
        "Kh-29T TV-Guided Missile",
        "R-77 Active Radar BVRAAM",
        "R-73 Heat-Seeking AAM"
      ]
    },
    "fleet": {
      "confirmedQuantity": 11,
      "estimatedQuantity": 11,
      "quantityYear": 2026,
      "quantityNotes": "11 Su-30MK2 fighters in active service alongside 5 Su-27SKM airframes stationed at Hasanuddin Air Base, Makassar.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-02",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Multirole Fighter",
    "aircraftName": "Sukhoi Su-30MK2 Flanker-G"
  },
  {
    "id": "JPN-JASDF-F2-A",
    "aliases": [
      "JPN-JASDF-F2-A",
      "jpn-jasdf-f2-a"
    ],
    "name": "Mitsubishi F-2A Viper Zero",
    "commonName": "Mitsubishi F-2 / General Dynamics F-16",
    "officialDesignation": "Mitsubishi F-2A Multi-Role Support Fighter",
    "natoReportingName": null,
    "family": "Mitsubishi F-2 / General Dynamics F-16",
    "variant": "F-2A Single-Seat Modernized",
    "block": "Production Series with J/APG-2 AESA & AAM-4 Integration",
    "manufacturer": "Mitsubishi Heavy Industries / Lockheed Martin",
    "manufacturerCountry": "Japan / United States",
    "originCountry": "Japan / United States",
    "country": "Japan",
    "affiliation": "Japan Air Self-Defense Force (JASDF 3rd, 6th, and 8th Tactical Fighter Squadrons)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Multirole Fighter",
    "secondaryRoles": [
      "Maritime Anti-Ship Strike",
      "Air Defense Interception",
      "Close Air Support"
    ],
    "firstFlightYear": 1995,
    "introductionYear": 2000,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 91,
    "activeCount": 91,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "IHI Corporation / GE Aerospace",
    "engineModel": "General Electric F110-IHI-129 Turbofan",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 76,
    "thrustAfterburnerKn": 131,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1000,
    "serviceCeilingM": 18000,
    "rateOfClimbMs": 250,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 834,
    "combatRadiusKm": 834,
    "ferryRangeKm": 3200,
    "emptyWeightKg": 9633,
    "maxTakeoffWeightKg": 22100,
    "payloadCapacityKg": 8085,
    "internalFuelKg": 3848,
    "lengthM": 15.52,
    "wingspanM": 11.13,
    "heightM": 4.96,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-04",
    "description": "Japanese multirole fighter evolved from the F-16 with a 25% larger carbon-composite wing area, J/APG-2 AESA radar, and specialized long-range anti-ship strike capabilities.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 15.52,
        "wingspanM": 11.13,
        "heightM": 4.96
      },
      "weights": {
        "emptyWeightKg": 9633,
        "maxTakeoffWeightKg": 22100,
        "payloadCapacityKg": 8085,
        "internalFuelKg": 3848
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "General Electric F110-IHI-129 Turbofan",
        "engineManufacturer": "IHI Corporation / GE Aerospace",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 76,
        "thrustAfterburnerKn": 131
      },
      "performance": {
        "maxSpeedKmh": 2124,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 834,
        "ferryRangeKm": 3200,
        "serviceCeilingM": 18000,
        "serviceCeilingFt": 59000,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Mitsubishi Electric J/APG-2 Active Electronically Scanned Array (AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Gallium Arsenide (GaAs) Active Phased Array (First Operational Fighter AESA World History)",
      "radarRangeAirKm": 170,
      "hasAesa": true,
      "hasIrst": false,
      "electronicWarfare": "Integrated Electronic Warfare System (IEWS) with J/APR-4A RWR",
      "ewScore": 88,
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & JASDF Fighter Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.8
    },
    "capabilities": {
      "internalGun": "20mm JM61A1 Vulcan 6-Barrel Gatling Gun (512 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 8085,
      "keyWeaponsIntegrated": [
        "Type 93 (ASM-2) Anti-Ship Missile",
        "ASM-3 Supersonic Anti-Ship Missile",
        "Type 99 (AAM-4B) AESA-Guided BVRAAM",
        "Type 04 (AAM-5) High-Off-Boresight AAM",
        "JDAM GPS-Guided Bombs"
      ]
    },
    "fleet": {
      "confirmedQuantity": 91,
      "estimatedQuantity": 91,
      "quantityYear": 2026,
      "quantityNotes": "91 active F-2A/B fighters stationed at Misawa, Hyakuri, and Tsuiki air bases, specialized in long-range maritime anti-ship strike with Type 12 and ASM-3 supersonic missiles.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-04",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Multirole Fighter",
    "aircraftName": "Mitsubishi F-2A Viper Zero"
  },
  {
    "id": "MEX-FAM-F5E-TIGER2",
    "aliases": [
      "MEX-FAM-F5E-TIGER2",
      "mex-fam-f5e-tiger2"
    ],
    "name": "Northrop F-5E Tiger II",
    "commonName": "Northrop F-5 Freedom Fighter",
    "officialDesignation": "F-5E / F-5F Tiger II Supersonic Interceptor",
    "natoReportingName": null,
    "family": "Northrop F-5 Freedom Fighter",
    "variant": "F-5E Single-Seat / F-5F Twin-Seat",
    "block": "Production Series FAM Standard",
    "manufacturer": "Northrop Corporation",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "Mexico",
    "affiliation": "Fuerza Aérea Mexicana (FAM Escuadrón Aéreo 401, Base Aérea Militar No. 1 Santa Lucía)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "FIGHTER",
    "generation": "GEN_3",
    "era": "MODERN",
    "role": "Fighter",
    "secondaryRoles": [
      "Air Defense Interception",
      "Air Policing",
      "Close Air Support"
    ],
    "firstFlightYear": 1972,
    "introductionYear": 1982,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 4,
    "activeCount": 4,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "GE Aerospace",
    "engineModel": "General Electric J85-GE-21B Afterburning Turbojets",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 44,
    "thrustAfterburnerKn": 66,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 900,
    "serviceCeilingM": 15790,
    "rateOfClimbMs": 175,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 370,
    "combatRadiusKm": 370,
    "ferryRangeKm": 2480,
    "emptyWeightKg": 4410,
    "maxTakeoffWeightKg": 11214,
    "payloadCapacityKg": 3200,
    "internalFuelKg": 2563,
    "lengthM": 14.45,
    "wingspanM": 8.13,
    "heightM": 4.08,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-01-28",
    "description": "Lightweight supersonic air defense fighter of the Mexican Air Force, providing fast interception and border security missions.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 14.45,
        "wingspanM": 8.13,
        "heightM": 4.08
      },
      "weights": {
        "emptyWeightKg": 4410,
        "maxTakeoffWeightKg": 11214,
        "payloadCapacityKg": 3200,
        "internalFuelKg": 2563
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric J85-GE-21B Afterburning Turbojets",
        "engineManufacturer": "GE Aerospace",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 44,
        "thrustAfterburnerKn": 66
      },
      "performance": {
        "maxSpeedKmh": 1700,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": 900,
        "combatRadiusKm": 370,
        "ferryRangeKm": 2480,
        "serviceCeilingM": 15790,
        "serviceCeilingFt": 51800,
        "rateOfClimbMs": 175,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Emerson AN/APQ-159 Pulse-Doppler Air-to-Air Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 37,
      "hasAesa": false,
      "hasIrst": false,
      "electronicWarfare": "AN/ALR-46 Radar Warning Receiver",
      "ewScore": 65,
      "hasDatalink": false,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 1.5
    },
    "capabilities": {
      "internalGun": "20mm M39A2 Twin Autocannons (280 rounds each)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 3200,
      "keyWeaponsIntegrated": [
        "AIM-9P Sidewinder Heat-Seeking AAM",
        "Mark 82 General Purpose 500 lb Bombs",
        "LAU-32 Rocket Launchers"
      ]
    },
    "fleet": {
      "confirmedQuantity": 4,
      "estimatedQuantity": 5,
      "quantityYear": 2026,
      "quantityNotes": "4-5 operational F-5E/F fighters maintained by Escuadrón Aéreo 401 at BAM 1 Santa Lucía for national airspace surveillance and parade ceremonial escort.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-28",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Fighter",
    "aircraftName": "Northrop F-5E Tiger II"
  },
  {
    "id": "rus-ka52m-vks",
    "aliases": [
      "rus-ka52m-vks"
    ],
    "name": "Kamov Ka-52M Alligator",
    "commonName": "Ka-52M Alligator",
    "officialDesignation": "Ka-52M Modernized",
    "natoReportingName": null,
    "family": "Kamov Ka-50/52 Hokum Family",
    "variant": "Ka-52M Modernized",
    "block": "Modernized 2022 Spec",
    "manufacturer": "Progress Arsenyev Aviation Company / Russian Helicopters",
    "manufacturerCountry": "Russia",
    "originCountry": "Russia",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS) Army Aviation",
    "militaryBranch": "ARMY_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "ATTACK_HELICOPTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "All-Weather Heavy Attack & Reconnaissance Helicopter",
    "secondaryRoles": [
      "Anti-Armor",
      "Battlefield Air Interdiction"
    ],
    "firstFlightYear": 1997,
    "introductionYear": 2011,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 110,
    "activeCount": 110,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Klimov VK-2500P Turboshafts",
    "engineCount": 2,
    "engineType": "Turboshaft",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": 315,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 5500,
    "rateOfClimbMs": 16,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 470,
    "combatRadiusKm": null,
    "ferryRangeKm": null,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": 2000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "V006 Rezets AESA Radar",
    "radarRangeAirKm": 32,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 88,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 75,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 92,
    "sourceCount": 5,
    "lastVerified": null,
    "description": "Heavy twin-seat coaxial rotor combat helicopter. Modernized with V006 AESA radar, GOES-451M electro-optical turret, and integration of LMUR (Izdeliye 305) long-range precision-guided anti-tank missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kamov_Ka-52_at_MAKS-2019_%28cropped%29.jpg/1280px-Kamov_Ka-52_at_MAKS-2019_%28cropped%29.jpg",
    "tvrScore": 83.4,
    "weapons": [
      {
        "weapon": {
          "name": "LMUR / Izdeliye 305",
          "type": "ANTI_TANK_MISSILE",
          "maxRangeKm": 14.5,
          "speedMach": 0.8,
          "guidance": "Thermal Imaging / Two-Way Datalink"
        }
      },
      {
        "weapon": {
          "name": "9M120-1 Ataka-T",
          "type": "ANTI_TANK_MISSILE",
          "maxRangeKm": 6,
          "speedMach": 1.5,
          "guidance": "Radio Command SACLOS"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "ATTACK_HELICOPTER",
    "aircraftName": "Kamov Ka-52M Alligator",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "rus-vks-mig31bm",
    "aliases": [
      "rus-vks-mig31bm",
      "mikoyan-mig-31bm-foxhound",
      "mig-31bm"
    ],
    "name": "Mikoyan MiG-31BM Foxhound",
    "commonName": "MiG-31BM",
    "officialDesignation": "MiG-31BM Modernized Interceptor",
    "natoReportingName": "Foxhound",
    "family": "Mikoyan MiG-25/31 Series",
    "variant": "MiG-31BM Multirole Interceptor",
    "block": "BM Upgrade Standard",
    "manufacturer": "RSK MiG / Sokol Plant",
    "manufacturerCountry": "Russia / Soviet Union",
    "originCountry": "Soviet Union",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS / Naval Aviation)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "INTERCEPTOR",
    "generation": "GEN_4",
    "era": "MODERN",
    "role": "Mach 2.83 High-Altitude Supersonic Strategic Interceptor",
    "secondaryRoles": [
      "Kinzhal Hypersonic Launch Platform",
      "Cruise Missile Defense"
    ],
    "firstFlightYear": 1975,
    "introductionYear": 1981,
    "retirementYear": null,
    "productionCount": 519,
    "fleetCount": 130,
    "activeCount": 130,
    "inactiveCount": 20,
    "retiredCount": 200,
    "engineManufacturer": null,
    "engineModel": "Soloviev D-30F6 Afterburning Turbofans (Dual)",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 190,
    "thrustAfterburnerKn": 304,
    "topSpeedMach": 2.83,
    "topSpeedKmh": 3000,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 20600,
    "rateOfClimbMs": 288,
    "gLimitPositive": 5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1450,
    "combatRadiusKm": null,
    "ferryRangeKm": 3300,
    "emptyWeightKg": 21820,
    "maxTakeoffWeightKg": 46200,
    "payloadCapacityKg": 9000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "PESA",
    "radarModel": "Phazotron Zaslon-AM PESA Phased Array Radar",
    "radarRangeAirKm": 320,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 88,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 10,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 28,
    "costPerFlightHourUsd": 22000,
    "reliabilityScore": 82,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The world's heaviest and fastest operational combat interceptor. Zaslon-AM PESA radar enables simultaneous tracking of 24 aerial targets and engaging 6 with Mach 6 R-37M ultra-long-range missiles. Specialized MiG-31K variants carry the Kh-47M2 Kinzhal hypersonic aero-ballistic missile.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/MiG-31BM_in_flight_2016.jpg/1200px-MiG-31BM_in_flight_2016.jpg",
    "tvrScore": 79,
    "weapons": [
      {
        "weapon": {
          "name": "R-37M Ultra BVR (Mach 6)",
          "type": "BVR_AAM",
          "maxRangeKm": 398,
          "speedMach": 6,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "R-33 Long-Range Missile",
          "type": "BVR_AAM",
          "maxRangeKm": 160,
          "speedMach": 4.5,
          "guidance": "Semi-Active Radar"
        }
      },
      {
        "weapon": {
          "name": "Kh-47M2 Kinzhal Hypersonic",
          "type": "LAND_ATTACK_CRUISE_MISSILE",
          "maxRangeKm": 2000,
          "speedMach": 10,
          "guidance": "GLONASS / Optical"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1975,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Mikoyan MiG-31BM Foxhound conducted."
      },
      {
        "year": 1981,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Russian Aerospace Forces (VKS / Naval Aviation)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "INTERCEPTOR",
    "aircraftName": "Mikoyan MiG-31BM Foxhound",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 21820,
        "maxTakeoffWeightKg": 46200,
        "payloadCapacityKg": 9000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Soloviev D-30F6 Afterburning Turbofans (Dual)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 190,
        "thrustAfterburnerKn": 304
      },
      "performance": {
        "maxSpeedKmh": 3000,
        "maxSpeedMach": 2.83,
        "combatRadiusKm": 1450,
        "ferryRangeKm": 3300,
        "serviceCeilingM": 20600,
        "rateOfClimbMs": 288,
        "gLimitPositive": 5
      }
    },
    "avionics": {
      "radar": "Phazotron Zaslon-AM PESA Phased Array Radar",
      "radarType": "PESA",
      "radarRangeAirKm": 320,
      "hasAesa": false,
      "hasIrst": true,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 10
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": true,
      "keyWeaponsIntegrated": [
        "R-37M Ultra BVR (Mach 6)",
        "R-33 Long-Range Missile",
        "Kh-47M2 Kinzhal Hypersonic"
      ]
    },
    "fleet": {
      "confirmedQuantity": 130,
      "estimatedQuantity": 130,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 130, Retired: 200.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "rus-vks-su35s",
    "aliases": [
      "rus-vks-su35s",
      "sukhoi-su-35s-flanker-e",
      "su-35s"
    ],
    "name": "Sukhoi Su-35S Flanker-E",
    "commonName": "Su-35S",
    "officialDesignation": "Su-35S Flanker-E+",
    "natoReportingName": "Flanker-E",
    "family": "Sukhoi Su-27/35 Family",
    "variant": "Su-35S Serial Production",
    "block": "VKS Standard",
    "manufacturer": "Sukhoi / KnAAZ",
    "manufacturerCountry": "Russia",
    "originCountry": "Russia",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_4_5",
    "era": "MODERN",
    "role": "Super-Maneuverable Air Superiority Fighter",
    "secondaryRoles": [
      "SEAD",
      "Precision Strike",
      "Long-Range Interception"
    ],
    "firstFlightYear": 2008,
    "introductionYear": 2014,
    "retirementYear": null,
    "productionCount": 154,
    "fleetCount": 110,
    "activeCount": 110,
    "inactiveCount": 0,
    "retiredCount": 14,
    "engineManufacturer": null,
    "engineModel": "Saturn AL-41F1S 3D Thrust-Vectoring Turbofans (Dual)",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 176,
    "thrustAfterburnerKn": 284,
    "topSpeedMach": 2.25,
    "topSpeedKmh": 2400,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 18000,
    "rateOfClimbMs": 280,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1600,
    "combatRadiusKm": null,
    "ferryRangeKm": 3600,
    "emptyWeightKg": 19000,
    "maxTakeoffWeightKg": 34500,
    "payloadCapacityKg": 8000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "PESA",
    "radarModel": "Tikhomirov NIIP Irbis-E PESA Radar",
    "radarRangeAirKm": 400,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 90,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 2,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 18,
    "costPerFlightHourUsd": 14000,
    "reliabilityScore": 84,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Premier 4.5++ generation air dominance fighter equipped with Irbis-E passive electronically scanned array radar (detecting targets up to 400 km away) and 3D thrust-vectoring AL-41F1S engines enabling super-maneuverability.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sukhoi_Su-35S_in_flight_2017.jpg/1200px-Sukhoi_Su-35S_in_flight_2017.jpg",
    "tvrScore": 85,
    "weapons": [
      {
        "weapon": {
          "name": "R-37M (RVV-BD) Mach 6 BVR",
          "type": "BVR_AAM",
          "maxRangeKm": 300,
          "speedMach": 6,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "R-77-1 BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 110,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "Kh-31P Anti-Radiation",
          "type": "ANTI_RADIATION_MISSILE",
          "maxRangeKm": 110,
          "speedMach": 3.5,
          "guidance": "Passive Radar"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 2008,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Sukhoi Su-35S Flanker-E conducted."
      },
      {
        "year": 2014,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Russian Aerospace Forces (VKS)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AIR_SUPERIORITY",
    "aircraftName": "Sukhoi Su-35S Flanker-E",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 19000,
        "maxTakeoffWeightKg": 34500,
        "payloadCapacityKg": 8000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Saturn AL-41F1S 3D Thrust-Vectoring Turbofans (Dual)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 176,
        "thrustAfterburnerKn": 284
      },
      "performance": {
        "maxSpeedKmh": 2400,
        "maxSpeedMach": 2.25,
        "combatRadiusKm": 1600,
        "ferryRangeKm": 3600,
        "serviceCeilingM": 18000,
        "rateOfClimbMs": 280,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Tikhomirov NIIP Irbis-E PESA Radar",
      "radarType": "PESA",
      "radarRangeAirKm": 400,
      "hasAesa": false,
      "hasIrst": true,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": true,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "R-37M (RVV-BD) Mach 6 BVR",
        "R-77-1 BVR-AAM",
        "Kh-31P Anti-Radiation"
      ]
    },
    "fleet": {
      "confirmedQuantity": 110,
      "estimatedQuantity": 110,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 110, Retired: 14.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "rus-su57-vks",
    "aliases": [
      "rus-su57-vks",
      "RUS-VKS-SU57-FELON",
      "rus-vks-su57-felon"
    ],
    "name": "Sukhoi Su-57 Felon",
    "commonName": "Su-57 Felon",
    "officialDesignation": "Su-57 Production (Stage 1 / AL-41F1)",
    "natoReportingName": null,
    "family": "PAK FA / Su-57 Felon",
    "variant": "Su-57 Production (Stage 1 / AL-41F1)",
    "block": "Batch 2023",
    "manufacturer": "Komsomolsk-on-Amur Aircraft Plant (KnAAZ) / Sukhoi",
    "manufacturerCountry": "Russia",
    "originCountry": "Russia",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "5th-Generation Heavy Multirole Stealth Air Superiority Fighter",
    "secondaryRoles": [
      "Deep Penetration Strike",
      "SEAD / Electronic Warfare"
    ],
    "firstFlightYear": 2010,
    "introductionYear": 2020,
    "retirementYear": null,
    "productionCount": 30,
    "fleetCount": 22,
    "activeCount": 22,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "AL-41F1 3D Thrust-Vectoring Turbofans (Upgrading to Izdeliye 30)",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 176,
    "thrustAfterburnerKn": 294,
    "topSpeedMach": 2,
    "topSpeedKmh": 2135,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 20000,
    "rateOfClimbMs": 360,
    "gLimitPositive": 9.5,
    "gLimitNegative": -3.5,
    "enduranceHours": null,
    "combatRangeKm": 1750,
    "combatRadiusKm": null,
    "ferryRangeKm": 4500,
    "emptyWeightKg": 18000,
    "maxTakeoffWeightKg": 35000,
    "payloadCapacityKg": 7500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Sh121 Byelka Multi-Band AESA (X-band Nose + Cheek arrays + L-band Slats)",
    "radarRangeAirKm": 230,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 92,
    "stealthLevel": "HIGH",
    "rcsEstimatedM2": 0.1,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 70,
    "confidenceLevel": "ESTIMATED",
    "confidenceScore": 85,
    "sourceCount": 6,
    "lastVerified": null,
    "description": "Russia’s 5th-gen combat platform. Features 3D thrust vectoring, distributed multi-band X/L-band radar arrays, internal weapon bays carrying R-77M and R-37M extreme-range missiles, and 101KS Atoll optical suite.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg/1280px-Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg",
    "tvrScore": 92.6,
    "weapons": [
      {
        "weapon": {
          "name": "R-37M / RVV-BD",
          "type": "BVR_AAM",
          "maxRangeKm": 300,
          "speedMach": 6,
          "guidance": "Active Radar / Hypersonic"
        }
      },
      {
        "weapon": {
          "name": "R-77M BVR-AAM",
          "type": "BVR_AAM",
          "maxRangeKm": 160,
          "speedMach": 4.5,
          "guidance": "Active Phased Array Seeker"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AIR_SUPERIORITY",
    "aircraftName": "Sukhoi Su-57 Felon",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 20.1,
        "wingspanM": 14.1,
        "heightM": 4.6
      },
      "weights": {
        "emptyWeightKg": 18000,
        "maxTakeoffWeightKg": 35000,
        "payloadCapacityKg": 7500,
        "internalFuelKg": 10300
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Saturn AL-41F1 3D Thrust-Vectoring Turbofans (Upgrading to Izdeliye 30)",
        "engineManufacturer": "UEC Saturn",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 176,
        "thrustAfterburnerKn": 294
      },
      "performance": {
        "maxSpeedKmh": 2135,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1300,
        "combatRadiusKm": 1750,
        "ferryRangeKm": 4500,
        "serviceCeilingM": 20000,
        "serviceCeilingFt": 65600,
        "rateOfClimbMs": 360,
        "gLimitPositive": 9.5
      }
    },
    "avionics": {
      "radar": "Sh121 Byelka Multi-Band AESA Radar System (X-Band Nose + Cheek Arrays + L-Band Wing Slats)",
      "radarType": "MULTI_BAND_AESA",
      "radarArchitecture": "Multi-Band Distributed Active Phased Arrays",
      "radarRangeAirKm": 230,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "101KS-V Atoll Infrared Search and Track",
      "electronicWarfare": "L402 Gimalay Electronic Countermeasure Suite",
      "ewScore": 92,
      "helmetMountedDisplay": "NSTsI-V Helmet Mounted Cueing Sight",
      "hasDatalink": true,
      "datalinkProtocol": "S-111 Secure Battlefield Datalink",
      "sensorFusion": true,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.1
    },
    "capabilities": {
      "internalGun": "30mm Gryazev-Shipunov GSh-30-1 Autocannon (150 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 7500,
      "keyWeaponsIntegrated": [
        "R-37M / RVV-BD Extreme-Range BVRAAM (300 km, Mach 6)",
        "R-77M Active Phased Array AAM",
        "Kh-59MK2 Standoff Stealth Cruise Missile",
        "Kh-38M Precision Standoff Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 22,
      "estimatedQuantity": 28,
      "quantityYear": 2026,
      "quantityNotes": "Estimated 22-28 production aircraft delivered to VKS fighter regiments, with contracted target of 76 aircraft by 2027.",
      "dataConfidence": "MEDIUM",
      "lastVerified": "2026-01-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "SAU-RSAF-F15SA-ADVANCED",
    "aliases": [
      "SAU-RSAF-F15SA-ADVANCED",
      "sau-rsaf-f15sa-advanced"
    ],
    "name": "Boeing F-15SA Advanced Eagle",
    "commonName": "McDonnell Douglas / Boeing F-15 Eagle",
    "officialDesignation": "F-15SA Advanced Strike Eagle",
    "natoReportingName": null,
    "family": "McDonnell Douglas / Boeing F-15 Eagle",
    "variant": "F-15SA (Saudi Advanced)",
    "block": "Digital Fly-By-Wire Production Standard",
    "manufacturer": "Boeing Defense, Space & Security",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "Saudi Arabia",
    "affiliation": "Royal Saudi Air Force (RSAF King Khalid / King Fahd Air Bases)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Strike Aircraft",
    "secondaryRoles": [
      "Air Superiority",
      "Deep Penetration Strike",
      "Anti-Ship Strike",
      "Long-Range Interception"
    ],
    "firstFlightYear": 2013,
    "introductionYear": 2016,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 154,
    "activeCount": 154,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "GE Aerospace",
    "engineModel": "General Electric F110-GE-129 Afterburning Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 152,
    "thrustAfterburnerKn": 260,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1100,
    "serviceCeilingM": 18288,
    "rateOfClimbMs": 254,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1800,
    "combatRadiusKm": 1800,
    "ferryRangeKm": 4800,
    "emptyWeightKg": 14300,
    "maxTakeoffWeightKg": 36700,
    "payloadCapacityKg": 13300,
    "internalFuelKg": 6100,
    "lengthM": 19.45,
    "wingspanM": 13.05,
    "heightM": 5.63,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-09",
    "description": "Heavy multirole strike fighter with immense 13,300 kg payload capacity across 12 external weapon stations, fly-by-wire flight control system, AN/APG-63(V)3 AESA radar, and DEWS digital electronic warfare suite.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 19.45,
        "wingspanM": 13.05,
        "heightM": 5.63
      },
      "weights": {
        "emptyWeightKg": 14300,
        "maxTakeoffWeightKg": 36700,
        "payloadCapacityKg": 13300,
        "internalFuelKg": 6100
      },
      "crew": {
        "minimumCrew": 2,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F110-GE-129 Afterburning Turbofans",
        "engineManufacturer": "GE Aerospace",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 152,
        "thrustAfterburnerKn": 260
      },
      "performance": {
        "maxSpeedKmh": 2655,
        "maxSpeedMach": 2.5,
        "cruiseSpeedKmh": 1100,
        "combatRadiusKm": 1800,
        "ferryRangeKm": 4800,
        "serviceCeilingM": 18288,
        "serviceCeilingFt": 60000,
        "rateOfClimbMs": 254,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Raytheon AN/APG-63(V)3 Active Electronically Scanned Array (AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Solid-State Active Phased Array",
      "radarRangeAirKm": 220,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Lockheed Martin AN/AAS-42 Tiger Eyes IRST suite",
      "electronicWarfare": "BAE Systems DEWS (Digital Electronic Warfare System)",
      "ewScore": 94,
      "helmetMountedDisplay": "Joint Helmet Mounted Cueing System II (JHMCS II)",
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & Saudi Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "internalGun": "20mm M61A1 Vulcan 6-Barrel Gatling Cannon (510 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 13300,
      "keyWeaponsIntegrated": [
        "AIM-120C-7 AMRAAM BVRAAM",
        "AIM-9X Sidewinder Block II",
        "AGM-84L Harpoon Anti-Ship Missile",
        "AGM-88 HARM Anti-Radiation",
        "GBU-39 Small Diameter Bomb (SDB)"
      ]
    },
    "fleet": {
      "confirmedQuantity": 154,
      "estimatedQuantity": 154,
      "quantityYear": 2026,
      "quantityNotes": "84 newly built F-15SA airframes and 70 modernized F-15S aircraft converted to SA standard, equipped with digital fly-by-wire and 12 weapon stations.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-09",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Strike Aircraft",
    "aircraftName": "Boeing F-15SA Advanced Eagle"
  },
  {
    "id": "ZAF-SAAF-GRIPEN-C",
    "aliases": [
      "ZAF-SAAF-GRIPEN-C",
      "zaf-saaf-gripen-c"
    ],
    "name": "Saab JAS-39C Gripen",
    "commonName": "Saab JAS-39 Gripen",
    "officialDesignation": "JAS-39C Gripen Single-Seat Multi-Role Fighter",
    "natoReportingName": null,
    "family": "Saab JAS-39 Gripen",
    "variant": "Gripen C Single-Seat SAAF Standard",
    "block": "South Africa Custom Configuration",
    "manufacturer": "Saab Aeronautics",
    "manufacturerCountry": "Sweden",
    "originCountry": "Sweden",
    "country": "South Africa",
    "affiliation": "South African Air Force (SAAF 2 Squadron \"Flying Cheetahs\", AFB Makhado)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_4",
    "era": "MODERN",
    "role": "Multirole Fighter",
    "secondaryRoles": [
      "Air Defense Interception",
      "Close Air Support",
      "Tactical Reconnaissance"
    ],
    "firstFlightYear": 1988,
    "introductionYear": 2008,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 26,
    "activeCount": 26,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "Volvo Aero / GE Aerospace",
    "engineModel": "Volvo Aero RM12 (GE F404 derivative) Afterburning Turbofan",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 54,
    "thrustAfterburnerKn": 80.5,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1000,
    "serviceCeilingM": 15240,
    "rateOfClimbMs": 250,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 800,
    "combatRadiusKm": 800,
    "ferryRangeKm": 3200,
    "emptyWeightKg": 6800,
    "maxTakeoffWeightKg": 14000,
    "payloadCapacityKg": 5300,
    "internalFuelKg": 3000,
    "lengthM": 14.1,
    "wingspanM": 8.4,
    "heightM": 4.5,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-01-24",
    "description": "Frontline delta-canard multirole combat fighter of the South African Air Force, operating from AFB Makhado armed with indigenous A-Darter and IRIS-T air-to-air missiles.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 14.1,
        "wingspanM": 8.4,
        "heightM": 4.5
      },
      "weights": {
        "emptyWeightKg": 6800,
        "maxTakeoffWeightKg": 14000,
        "payloadCapacityKg": 5300,
        "internalFuelKg": 3000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Volvo Aero RM12 (GE F404 derivative) Afterburning Turbofan",
        "engineManufacturer": "Volvo Aero / GE Aerospace",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 54,
        "thrustAfterburnerKn": 80.5
      },
      "performance": {
        "maxSpeedKmh": 2200,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 800,
        "ferryRangeKm": 3200,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Ericsson PS-05/A Mk3 Pulse-Doppler Multimode Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 120,
      "hasAesa": false,
      "hasIrst": false,
      "electronicWarfare": "EWS 39 Integrated Electronic Warfare Suite",
      "ewScore": 84,
      "helmetMountedDisplay": "Cobra Integrated Helmet Mounted Display",
      "hasDatalink": true,
      "datalinkProtocol": "TIDLS & Link 16 Equivalent",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.5
    },
    "capabilities": {
      "internalGun": "27mm Mauser BK-27 Revolver Cannon (120 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 5300,
      "keyWeaponsIntegrated": [
        "IRIS-T High-Off-Boresight AAM",
        "A-Darter 5th-Gen Infrared AAM",
        "GBU-12 Paveway II Laser-Guided Bombs",
        "V3E Agile Darter WVR AAM",
        "Litening III Targeting Pod"
      ]
    },
    "fleet": {
      "confirmedQuantity": 26,
      "estimatedQuantity": 26,
      "quantityYear": 2026,
      "quantityNotes": "26 Gripen C/D aircraft (17 single-seat C, 9 dual-seat D) on inventory under active maintenance contract with Saab at AFB Makhado.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-24",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Multirole Fighter",
    "aircraftName": "Saab JAS-39C Gripen"
  },
  {
    "id": "KOR-ROKAF-KF21-BORAMAE",
    "aliases": [
      "KOR-ROKAF-KF21-BORAMAE",
      "kor-rokaf-kf21-boramae"
    ],
    "name": "KAI KF-21 Boramae",
    "commonName": "KAI KF-21 Boramae",
    "officialDesignation": "KF-21 Boramae Block 1 / Block 2",
    "natoReportingName": null,
    "family": "KAI KF-21 Boramae",
    "variant": "KF-21 Block 1 (Air Dominance / Serial Production)",
    "block": "Block 1 Standard (2024-2028 Batch 1)",
    "manufacturer": "Korea Aerospace Industries (KAI)",
    "manufacturerCountry": "South Korea",
    "originCountry": "South Korea",
    "country": "South Korea",
    "affiliation": "Republic of Korea Air Force (ROKAF)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ORDERED",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Air Superiority",
    "secondaryRoles": [
      "Multirole Strike",
      "Maritime Interdiction",
      "Precision Guided Standoff Attack"
    ],
    "firstFlightYear": 2022,
    "introductionYear": 2026,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 20,
    "activeCount": 20,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "Hanwha Aerospace (Licensed GE)",
    "engineModel": "Hanwha Aerospace / GE F414-GE-400K Afterburning Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 125,
    "thrustAfterburnerKn": 195,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1100,
    "serviceCeilingM": 16764,
    "rateOfClimbMs": 270,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1000,
    "combatRadiusKm": 1000,
    "ferryRangeKm": 2900,
    "emptyWeightKg": 11800,
    "maxTakeoffWeightKg": 25600,
    "payloadCapacityKg": 7700,
    "internalFuelKg": 5400,
    "lengthM": 16.9,
    "wingspanM": 11.2,
    "heightM": 4.7,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-12",
    "description": "South Korea 4.5+ generation indigenous supersonic fighter featuring 5th-gen stealth airframe shaping, Hanwha GaN AESA radar, twin F414 turbofans, and Meteor BVRAAM long-range missile integration.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 16.9,
        "wingspanM": 11.2,
        "heightM": 4.7
      },
      "weights": {
        "emptyWeightKg": 11800,
        "maxTakeoffWeightKg": 25600,
        "payloadCapacityKg": 7700,
        "internalFuelKg": 5400
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Hanwha Aerospace / GE F414-GE-400K Afterburning Turbofans",
        "engineManufacturer": "Hanwha Aerospace (Licensed GE)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 125,
        "thrustAfterburnerKn": 195
      },
      "performance": {
        "maxSpeedKmh": 2200,
        "maxSpeedMach": 1.8,
        "cruiseSpeedKmh": 1100,
        "combatRadiusKm": 1000,
        "ferryRangeKm": 2900,
        "serviceCeilingM": 16764,
        "serviceCeilingFt": 55000,
        "rateOfClimbMs": 270,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Hanwha Systems Active Electronically Scanned Array (GaN AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Gallium Nitride (GaN) Solid-State Phased Array (1,088 T/R modules)",
      "radarRangeAirKm": 180,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Hanwha Systems / Leonardo Electro-Optical Infrared Search & Track",
      "electronicWarfare": "LIG Nex1 Integrated EW Suite (ALQ-200K Derivative)",
      "ewScore": 91,
      "helmetMountedDisplay": "BAE Systems Striker II / Custom ROKAF HMD",
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & Korean Tactical Data Link System (K-TDLS)",
      "sensorFusion": true,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.1
    },
    "capabilities": {
      "internalGun": "20mm M61A2 Vulcan 6-Barrel Gatling Cannon (480 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 7700,
      "keyWeaponsIntegrated": [
        "MBDA Meteor Active Radar BVRAAM",
        "Diehl IRIS-T Within-Visual-Range AAM",
        "Korean Long-Range Air-to-Ground Missile (Cheonryong)",
        "KGGB GPS-Guided Glide Bomb",
        "JDAM"
      ]
    },
    "fleet": {
      "confirmedQuantity": 20,
      "estimatedQuantity": 40,
      "quantityYear": 2026,
      "quantityNotes": "Initial production batch of 20 Block 1 fighters under delivery to ROKAF with full program requirement of 120 aircraft by 2032.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-12",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Air Superiority",
    "aircraftName": "KAI KF-21 Boramae"
  },
  {
    "id": "TUR-TAF-KAAN-TF",
    "aliases": [
      "TUR-TAF-KAAN-TF",
      "tur-taf-kaan-tf"
    ],
    "name": "TAI TF Kaan",
    "commonName": "TAI TF Kaan",
    "officialDesignation": "TAI Kaan 5th-Generation Air Dominance Stealth Fighter",
    "natoReportingName": null,
    "family": "TAI TF Kaan",
    "variant": "TAI Kaan Block 0 Prototype / Block 10 Production",
    "block": "Block 0 (Development) / Block 10 (Initial Serial)",
    "manufacturer": "Turkish Aerospace Industries (TAI / TUSAŞ)",
    "manufacturerCountry": "Türkiye",
    "originCountry": "Türkiye",
    "country": "Türkiye",
    "affiliation": "Turkish Air Force (Türk Hava Kuvvetleri)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "TESTING",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Air Superiority",
    "secondaryRoles": [
      "Multirole Strike",
      "Electronic Attack",
      "Loyal Wingman Collaborative Combat Aircraft (CCA) Command"
    ],
    "firstFlightYear": 2024,
    "introductionYear": 2028,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 2,
    "activeCount": 2,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "GE Aerospace / TRMotor",
    "engineModel": "General Electric F110-GE-129 (Initial) / Indigenous TRMotor Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 152,
    "thrustAfterburnerKn": 260,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1100,
    "serviceCeilingM": 16764,
    "rateOfClimbMs": 290,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1100,
    "combatRadiusKm": 1100,
    "ferryRangeKm": 3200,
    "emptyWeightKg": 18000,
    "maxTakeoffWeightKg": 35000,
    "payloadCapacityKg": 8000,
    "internalFuelKg": 9500,
    "lengthM": 21,
    "wingspanM": 14,
    "heightM": 6,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-01-30",
    "description": "Indigenous Turkish 5th-generation heavy stealth multirole fighter. Features twin engines, internal weapons bays, all-aspect radar cross section reduction, Aselsan MURAD GaN AESA radar, and loyal wingman drone teaming capability with Bayraktar Kizilelma and ANKA-3.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 21,
        "wingspanM": 14,
        "heightM": 6
      },
      "weights": {
        "emptyWeightKg": 18000,
        "maxTakeoffWeightKg": 35000,
        "payloadCapacityKg": 8000,
        "internalFuelKg": 9500
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F110-GE-129 (Initial) / Indigenous TRMotor Turbofans",
        "engineManufacturer": "GE Aerospace / TRMotor",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 152,
        "thrustAfterburnerKn": 260
      },
      "performance": {
        "maxSpeedKmh": 2220,
        "maxSpeedMach": 1.8,
        "cruiseSpeedKmh": 1100,
        "combatRadiusKm": 1100,
        "ferryRangeKm": 3200,
        "serviceCeilingM": 16764,
        "serviceCeilingFt": 55000,
        "rateOfClimbMs": 290,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Aselsan MURAD Active Electronically Scanned Array (GaN AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Gallium Nitride (GaN) Solid-State Phased Array",
      "radarRangeAirKm": 200,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Aselsan KARAT Infrared Search and Track System & TOYGUN EOTS",
      "electronicWarfare": "Aselsan Integrated EW Suite with Digital Radio Frequency Memory (DRFM)",
      "ewScore": 92,
      "helmetMountedDisplay": "Aselsan TULGAR Helmet Mounted Display System",
      "hasDatalink": true,
      "sensorFusion": true,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.01
    },
    "capabilities": {
      "internalGun": "Internal Autocannon",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 8000,
      "keyWeaponsIntegrated": [
        "TÜBİTAK SAGE Gökdoğan BVRAAM",
        "Bozdoğan WVR AAM",
        "SOM Standoff Cruise Missile",
        "Tolun Miniature Precision Bomb",
        "Kuzgun Modular Standoff Missile"
      ]
    },
    "fleet": {
      "confirmedQuantity": 2,
      "estimatedQuantity": 4,
      "quantityYear": 2026,
      "quantityNotes": "Flight test prototypes undergoing flight envelope expansion following successful maiden flights in 2024 with planned delivery of initial Block 10 fighters to the Turkish Air Force by 2028.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-30",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Air Superiority",
    "aircraftName": "TAI TF Kaan"
  },
  {
    "id": "gbr-raf-avro-vulcan",
    "aliases": [
      "gbr-raf-avro-vulcan",
      "avro-vulcan-b-2",
      "avro-vulcan"
    ],
    "name": "Avro Vulcan B.2",
    "commonName": "Avro Vulcan",
    "officialDesignation": "Vulcan B.2 Strategic Bomber",
    "natoReportingName": null,
    "family": "Avro V-Bomber Force",
    "variant": "Vulcan B.2",
    "block": "RAF Strategic Standard",
    "manufacturer": "A.V. Roe and Company (Avro)",
    "manufacturerCountry": "United Kingdom",
    "originCountry": "United Kingdom",
    "country": "United Kingdom",
    "affiliation": "Royal Air Force (V-Bomber Nuclear Strike Force 1956–1984)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "BOMBER",
    "generation": "GEN_1",
    "era": "COLD_WAR",
    "role": "Delta-Wing Strategic Nuclear & Conventional Bomber",
    "secondaryRoles": [
      "Operation Black Buck Long-Range Strike",
      "Maritime Reconnaissance"
    ],
    "firstFlightYear": 1952,
    "introductionYear": 1956,
    "retirementYear": 1984,
    "productionCount": 136,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 136,
    "engineManufacturer": null,
    "engineModel": "Bristol Olympus 301 Turbojets (Quad)",
    "engineCount": 4,
    "engineType": "Turbojet",
    "hasAfterburner": false,
    "thrustDryKn": 356,
    "thrustAfterburnerKn": 356,
    "topSpeedMach": 0.96,
    "topSpeedKmh": 1038,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 17000,
    "rateOfClimbMs": 80,
    "gLimitPositive": 4,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 4184,
    "combatRadiusKm": null,
    "ferryRangeKm": 7600,
    "emptyWeightKg": 37140,
    "maxTakeoffWeightKg": 92986,
    "payloadCapacityKg": 9500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "H2S Mk.IXA Radar & Navigation System",
    "radarRangeAirKm": 70,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 78,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 45,
    "costPerFlightHourUsd": 30000,
    "reliabilityScore": 84,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The iconic tailless delta-wing strategic bomber that served as Britain's airborne nuclear deterrent. Famed for the historic 1982 'Operation Black Buck' bombing raids during the Falklands War, flying 12,000 km return from Ascension Island with complex aerial refueling.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Avro_Vulcan_XH558_in_flight.jpg/1200px-Avro_Vulcan_XH558_in_flight.jpg",
    "tvrScore": 67.9,
    "weapons": [
      {
        "weapon": {
          "name": "Yellow Sun Mk.2 Thermonuclear",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": null,
          "speedMach": 0.9,
          "guidance": "Nuclear Freefall"
        }
      },
      {
        "weapon": {
          "name": "Twenty-One 1,000 lb HE Bombs",
          "type": "UNGUIDED_BOMB",
          "maxRangeKm": 5,
          "speedMach": 0.9,
          "guidance": "Freefall"
        }
      },
      {
        "weapon": {
          "name": "AGM-45 Shrike Anti-Radiation",
          "type": "ANTI_RADIATION_MISSILE",
          "maxRangeKm": 40,
          "speedMach": 2,
          "guidance": "Passive Radar"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1952,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Avro Vulcan B.2 conducted."
      },
      {
        "year": 1956,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Royal Air Force (V-Bomber Nuclear Strike Force 1956–1984)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "BOMBER",
    "aircraftName": "Avro Vulcan B.2",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 37140,
        "maxTakeoffWeightKg": 92986,
        "payloadCapacityKg": 9500
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 4,
        "engineModel": "Bristol Olympus 301 Turbojets (Quad)",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 356,
        "thrustAfterburnerKn": 356
      },
      "performance": {
        "maxSpeedKmh": 1038,
        "maxSpeedMach": 0.96,
        "combatRadiusKm": 4184,
        "ferryRangeKm": 7600,
        "serviceCeilingM": 17000,
        "rateOfClimbMs": 80,
        "gLimitPositive": 4
      }
    },
    "avionics": {
      "radar": "H2S Mk.IXA Radar & Navigation System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 70,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": true,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Yellow Sun Mk.2 Thermonuclear",
        "Twenty-One 1,000 lb HE Bombs",
        "AGM-45 Shrike Anti-Radiation"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 136.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "gbr-raf-ee-lightning",
    "aliases": [
      "gbr-raf-ee-lightning",
      "english-electric-lightning-f-6",
      "ee-lightning"
    ],
    "name": "English Electric Lightning F.6",
    "commonName": "EE Lightning",
    "officialDesignation": "Lightning F.6 Point Defense Interceptor",
    "natoReportingName": null,
    "family": "English Electric Lightning",
    "variant": "Lightning F.6",
    "block": "RAF Final Standard",
    "manufacturer": "English Electric / British Aircraft Corporation",
    "manufacturerCountry": "United Kingdom",
    "originCountry": "United Kingdom",
    "country": "United Kingdom",
    "affiliation": "Royal Air Force (Fighter Command / Strike Command 1959–1988)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "INTERCEPTOR",
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "role": "Mach 2.27 Vertical-Climb Point Defense Interceptor",
    "secondaryRoles": [
      "Supersonic QRA Interception"
    ],
    "firstFlightYear": 1954,
    "introductionYear": 1959,
    "retirementYear": 1988,
    "productionCount": 337,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 337,
    "engineManufacturer": null,
    "engineModel": "Rolls-Royce Avon 302 Afterburning Turbojets (Vertically Stacked Dual)",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 108,
    "thrustAfterburnerKn": 145,
    "topSpeedMach": 2.27,
    "topSpeedKmh": 2414,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 18000,
    "rateOfClimbMs": 250,
    "gLimitPositive": 7,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 600,
    "combatRadiusKm": null,
    "ferryRangeKm": 1370,
    "emptyWeightKg": 12700,
    "maxTakeoffWeightKg": 20750,
    "payloadCapacityKg": 1500,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Ferranti AI.23 AIRPASS Radar",
    "radarRangeAirKm": 50,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 50,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 5,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 25,
    "costPerFlightHourUsd": 12000,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Britain's only Mach 2 supersonic jet fighter developed entirely indigenously. Unique stacked engine configuration and exceptional climb rate (up to 50,000 ft in under 2.5 minutes), designed to intercept high-altitude Soviet nuclear bombers.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/English_Electric_Lightning_F6_XR770.jpg/1200px-English_Electric_Lightning_F6_XR770.jpg",
    "tvrScore": 54.8,
    "weapons": [
      {
        "weapon": {
          "name": "Red Top AAM",
          "type": "WVR_AAM",
          "maxRangeKm": 12,
          "speedMach": 3.2,
          "guidance": "Infrared"
        }
      },
      {
        "weapon": {
          "name": "Firestreak AAM",
          "type": "WVR_AAM",
          "maxRangeKm": 6,
          "speedMach": 3,
          "guidance": "Infrared"
        }
      },
      {
        "weapon": {
          "name": "Two 30mm ADEN Cannons",
          "type": "GUN_POD",
          "maxRangeKm": 2,
          "speedMach": 1,
          "guidance": "Optical"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1954,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the English Electric Lightning F.6 conducted."
      },
      {
        "year": 1959,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with Royal Air Force (Fighter Command / Strike Command 1959–1988)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "INTERCEPTOR",
    "aircraftName": "English Electric Lightning F.6",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 12700,
        "maxTakeoffWeightKg": 20750,
        "payloadCapacityKg": 1500
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Rolls-Royce Avon 302 Afterburning Turbojets (Vertically Stacked Dual)",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 108,
        "thrustAfterburnerKn": 145
      },
      "performance": {
        "maxSpeedKmh": 2414,
        "maxSpeedMach": 2.27,
        "combatRadiusKm": 600,
        "ferryRangeKm": 1370,
        "serviceCeilingM": 18000,
        "rateOfClimbMs": 250,
        "gLimitPositive": 7
      }
    },
    "avionics": {
      "radar": "Ferranti AI.23 AIRPASS Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 50,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "Red Top AAM",
        "Firestreak AAM",
        "Two 30mm ADEN Cannons"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 337.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "GBR-RAF-TYPHOON-FGR4",
    "aliases": [
      "GBR-RAF-TYPHOON-FGR4",
      "gbr-raf-typhoon-fgr4"
    ],
    "name": "Eurofighter Typhoon FGR4",
    "commonName": "Eurofighter Typhoon",
    "officialDesignation": "Typhoon FGR4 (Centurion Multi-Role Standard)",
    "natoReportingName": null,
    "family": "Eurofighter Typhoon",
    "variant": "Typhoon FGR4 (Tranche 2 / 3 Upgrade)",
    "block": "Phase 2 / Phase 3 Enhancement (P2E/P3E)",
    "manufacturer": "BAE Systems / Airbus / Leonardo (Eurofighter GmbH)",
    "manufacturerCountry": "United Kingdom / Germany / Italy / Spain",
    "originCountry": "United Kingdom / Germany / Italy / Spain",
    "country": "United Kingdom",
    "affiliation": "Royal Air Force (RAF Coningsby / RAF Lossiemouth)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Multirole Fighter",
    "secondaryRoles": [
      "Air Superiority",
      "Deep Precision Strike",
      "Quick Reaction Alert (QRA)",
      "Maritime Interdiction"
    ],
    "firstFlightYear": 1994,
    "introductionYear": 2003,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 137,
    "activeCount": 137,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": "Eurojet Turbo GmbH (Rolls-Royce / MTU / ITP / Avio)",
    "engineModel": "Eurojet EJ200 Afterburning Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 120,
    "thrustAfterburnerKn": 180,
    "topSpeedMach": null,
    "topSpeedKmh": null,
    "cruiseSpeedKmh": 1200,
    "serviceCeilingM": 19812,
    "rateOfClimbMs": 315,
    "gLimitPositive": 9,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1389,
    "combatRadiusKm": 1389,
    "ferryRangeKm": 3790,
    "emptyWeightKg": 11000,
    "maxTakeoffWeightKg": 23500,
    "payloadCapacityKg": 9000,
    "internalFuelKg": 4996,
    "lengthM": 15.96,
    "wingspanM": 10.95,
    "heightM": 5.28,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": null,
    "radarRangeAirKm": null,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": false,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 90,
    "sourceCount": 1,
    "lastVerified": "2026-02-08",
    "description": "Premier agile delta-canard swing-role combat aircraft of the Royal Air Force and European NATO air arms. Renowned for extreme thrust-to-weight ratio, supercruise, Meteor BVRAAM reach, and Storm Shadow deep standoff strike.",
    "imageUrl": "",
    "tvrScore": 0,
    "weapons": [],
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ],
    "specifications": {
      "dimensions": {
        "lengthM": 15.96,
        "wingspanM": 10.95,
        "heightM": 5.28
      },
      "weights": {
        "emptyWeightKg": 11000,
        "maxTakeoffWeightKg": 23500,
        "payloadCapacityKg": 9000,
        "internalFuelKg": 4996
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Eurojet EJ200 Afterburning Turbofans",
        "engineManufacturer": "Eurojet Turbo GmbH (Rolls-Royce / MTU / ITP / Avio)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 120,
        "thrustAfterburnerKn": 180
      },
      "performance": {
        "maxSpeedKmh": 2495,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": 1200,
        "combatRadiusKm": 1389,
        "ferryRangeKm": 3790,
        "serviceCeilingM": 19812,
        "serviceCeilingFt": 65000,
        "rateOfClimbMs": 315,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Euroradar CAPTOR-M / ECRS Mk2 Active Electronically Scanned Array (AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Wide-Band Electronic Attack & Surveillance AESA",
      "radarRangeAirKm": 200,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "PIRATE (Passive Infra-Red Airborne Tracking Equipment) Dual-Band IRST",
      "electronicWarfare": "Praetorian Defensive Aids Sub-System (DASS) with wingtip EW pods and towed radar decoy",
      "ewScore": 96,
      "helmetMountedDisplay": "BAE Systems Striker II Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & Multi-Domain C2",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.5
    },
    "capabilities": {
      "internalGun": "27mm Mauser BK-27 Revolver Cannon (150 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 9000,
      "keyWeaponsIntegrated": [
        "MBDA Meteor BVRAAM",
        "Storm Shadow Standoff Cruise Missile",
        "Brimstone Precision Guided Missile",
        "ASRAAM Within-Visual-Range AAM",
        "Paveway IV Precision Guided Bomb"
      ]
    },
    "fleet": {
      "confirmedQuantity": 137,
      "estimatedQuantity": 137,
      "quantityYear": 2026,
      "quantityNotes": "137 Typhoon FGR4/T3 airframes in RAF inventory undergoing ECRS Mk2 AESA radar integration.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-08",
      "freshnessStatus": "CURRENT"
    },
    "primaryCategory": "Multirole Fighter",
    "aircraftName": "Eurofighter Typhoon FGR4"
  },
  {
    "id": "usa-usaf-f15ex-eagle",
    "aliases": [
      "usa-usaf-f15ex-eagle",
      "boeing-f-15ex-eagle-ii",
      "f-15ex-eagle-ii"
    ],
    "name": "Boeing F-15EX Eagle II",
    "commonName": "F-15EX Eagle II",
    "officialDesignation": "F-15EX Eagle II",
    "natoReportingName": null,
    "family": "McDonnell Douglas / Boeing F-15 Eagle",
    "variant": "F-15EX Advanced Strike",
    "block": "Lot 1 Production",
    "manufacturer": "Boeing Defense, Space & Security",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Air Force (Air Combat Command / ANG)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_4_5",
    "era": "MODERN",
    "role": "Heavy Air Superiority & Deep Standoff Strike Missile Carrier",
    "secondaryRoles": [
      "Hypersonic Weapon Delivery",
      "Homeland Defense",
      "BVR Dominance"
    ],
    "firstFlightYear": 2021,
    "introductionYear": 2021,
    "retirementYear": null,
    "productionCount": 104,
    "fleetCount": 8,
    "activeCount": 8,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "General Electric F110-GE-129 Afterburning Turbofans (Dual)",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 152,
    "thrustAfterburnerKn": 262,
    "topSpeedMach": 2.5,
    "topSpeedKmh": 2655,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 18288,
    "rateOfClimbMs": 254,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1270,
    "combatRadiusKm": null,
    "ferryRangeKm": 4815,
    "emptyWeightKg": 14300,
    "maxTakeoffWeightKg": 36700,
    "payloadCapacityKg": 13300,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "Raytheon AN/APG-82(V)1 AESA Radar",
    "radarRangeAirKm": 280,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 95,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 2,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 15,
    "costPerFlightHourUsd": 27000,
    "reliabilityScore": 90,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The most advanced iteration of the undefeated F-15 air superiority fighter (104-0 combat record). Features AN/APG-82(V)1 AESA radar, EPAWSS electronic warfare suite, fly-by-wire controls, and an astounding 29,500 lb (13,300 kg) payload capacity carrying up to 12 AIM-120 missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/F-15EX_Eagle_II_first_flight.jpg/1200px-F-15EX_Eagle_II_first_flight.jpg",
    "tvrScore": 86,
    "weapons": [
      {
        "weapon": {
          "name": "AIM-120D AMRAAM",
          "type": "BVR_AAM",
          "maxRangeKm": 160,
          "speedMach": 4,
          "guidance": "Active Radar / GPS"
        }
      },
      {
        "weapon": {
          "name": "AGM-158 JASSM-ER",
          "type": "LAND_ATTACK_CRUISE_MISSILE",
          "maxRangeKm": 925,
          "speedMach": 0.85,
          "guidance": "GPS/INS/IIR"
        }
      },
      {
        "weapon": {
          "name": "AIM-9X Sidewinder Block II",
          "type": "WVR_AAM",
          "maxRangeKm": 35,
          "speedMach": 2.5,
          "guidance": "HMS/Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 2021,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Boeing F-15EX Eagle II conducted."
      },
      {
        "year": 2021,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with United States Air Force (Air Combat Command / ANG)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AIR_SUPERIORITY",
    "aircraftName": "Boeing F-15EX Eagle II",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 14300,
        "maxTakeoffWeightKg": 36700,
        "payloadCapacityKg": 13300
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F110-GE-129 Afterburning Turbofans (Dual)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 152,
        "thrustAfterburnerKn": 262
      },
      "performance": {
        "maxSpeedKmh": 2655,
        "maxSpeedMach": 2.5,
        "combatRadiusKm": 1270,
        "ferryRangeKm": 4815,
        "serviceCeilingM": 18288,
        "rateOfClimbMs": 254,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Raytheon AN/APG-82(V)1 AESA Radar",
      "radarType": "AESA",
      "radarRangeAirKm": 280,
      "hasAesa": true,
      "hasIrst": true,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": "Operational HMD",
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": true,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM",
        "AGM-158 JASSM-ER",
        "AIM-9X Sidewinder Block II"
      ]
    },
    "fleet": {
      "confirmedQuantity": 8,
      "estimatedQuantity": 8,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: ACTIVE. Active: 8, Retired: 0.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "usa-fa18f-navy",
    "aliases": [
      "usa-fa18f-navy",
      "AUS-RAAF-FA18F-SUPERHORNET",
      "aus-raaf-fa18f-superhornet"
    ],
    "name": "Boeing F/A-18F Super Hornet",
    "commonName": "F/A-18F Super Hornet",
    "officialDesignation": "F/A-18F Block III",
    "natoReportingName": null,
    "family": "F/A-18 Hornet Family",
    "variant": "F/A-18F Block III",
    "block": "Block III Advanced Capability",
    "manufacturer": "Boeing Defense, Space & Security",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Navy Carrier Air Wings",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Carrier-Based Multirole Strike Fighter",
    "secondaryRoles": [
      "Fleet Air Defense",
      "Aerial Tanker Recovery",
      "SEAD Escort"
    ],
    "firstFlightYear": 1995,
    "introductionYear": 2001,
    "retirementYear": null,
    "productionCount": 600,
    "fleetCount": 420,
    "activeCount": 420,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "General Electric F414-GE-400 Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 130,
    "thrustAfterburnerKn": 196,
    "topSpeedMach": 1.6,
    "topSpeedKmh": 1915,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15240,
    "rateOfClimbMs": 228,
    "gLimitPositive": 7.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 900,
    "combatRadiusKm": null,
    "ferryRangeKm": 3300,
    "emptyWeightKg": 14552,
    "maxTakeoffWeightKg": 29937,
    "payloadCapacityKg": 8050,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "AN/APG-79 Active Electronically Scanned Array",
    "radarRangeAirKm": 160,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 90,
    "stealthLevel": "REDUCED",
    "rcsEstimatedM2": 1,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 14,
    "costPerFlightHourUsd": 24000,
    "reliabilityScore": 85,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 97,
    "sourceCount": 8,
    "lastVerified": null,
    "description": "Workhorse of US Navy CATOBAR supercarriers. Block III upgrade adds conformal fuel tanks (CFTs), advanced cockpit system (ACS), TTNT networking, and APG-79 AESA radar integration.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/FA-18F_Super_Hornet_of_VFA-103_in_flight_in_2015.JPG/1280px-FA-18F_Super_Hornet_of_VFA-103_in_flight_in_2015.JPG",
    "tvrScore": 88.5,
    "weapons": [
      {
        "weapon": {
          "name": "AIM-120D AMRAAM",
          "type": "BVR_AAM",
          "maxRangeKm": 160,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "AGM-88E AARGM",
          "type": "ANTI_RADIATION_MISSILE",
          "maxRangeKm": 150,
          "speedMach": 3.5,
          "guidance": "Dual Active Radar / Passive"
        }
      },
      {
        "weapon": {
          "name": "AGM-158C LRASM",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 560,
          "speedMach": 0.85,
          "guidance": "Passive RF / Multimode IIR"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Boeing F/A-18F Super Hornet",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 18.31,
        "wingspanM": 13.62,
        "heightM": 4.88
      },
      "weights": {
        "emptyWeightKg": 14552,
        "maxTakeoffWeightKg": 29937,
        "payloadCapacityKg": 8050,
        "internalFuelKg": 6530
      },
      "crew": {
        "minimumCrew": 2,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F414-GE-400 Afterburning Turbofans",
        "engineManufacturer": "GE Aerospace",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 125,
        "thrustAfterburnerKn": 196
      },
      "performance": {
        "maxSpeedKmh": 1915,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 722,
        "ferryRangeKm": 3330,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 228,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Raytheon AN/APG-79 Active Electronically Scanned Array (AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Solid-State Gallium Arsenide Active Phased Array",
      "radarRangeAirKm": 180,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "AN/ASQ-228 ATFLIR & Block II IRST21 Sensor Pod",
      "electronicWarfare": "AN/ALQ-214 Integrated Defensive Electronic Countermeasures (IDECM)",
      "ewScore": 92,
      "helmetMountedDisplay": "Joint Helmet Mounted Cueing System (JHMCS)",
      "hasDatalink": true,
      "datalinkProtocol": "Link 16 & Tactical Targeting Network Technology (TTNT)",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.8
    },
    "capabilities": {
      "internalGun": "20mm M61A2 Vulcan 6-Barrel Gatling Cannon (412 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 8050,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM BVRAAM",
        "AIM-9X Sidewinder Block II",
        "AGM-158C LRASM Long-Range Anti-Ship Missile",
        "AGM-158A JASSM Standoff Missile",
        "Joint Direct Attack Munition (JDAM)"
      ]
    },
    "fleet": {
      "confirmedQuantity": 24,
      "estimatedQuantity": 24,
      "quantityYear": 2026,
      "quantityNotes": "24 F/A-18F Super Hornets operating alongside 12 EA-18G Growler electronic attack aircraft at RAAF Base Amberley.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-07",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "usa-mq9a-usaf",
    "aliases": [
      "usa-mq9a-usaf"
    ],
    "name": "General Atomics MQ-9A Reaper",
    "commonName": "MQ-9A Reaper",
    "officialDesignation": "MQ-9A Extended Range (ER)",
    "natoReportingName": null,
    "family": "General Atomics Predator B / Reaper",
    "variant": "MQ-9A Extended Range (ER)",
    "block": "Block 5",
    "manufacturer": "General Atomics Aeronautical Systems",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Air Force",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MALE_UAV",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Medium-Altitude Long-Endurance (MALE) Armed Strike UAV",
    "secondaryRoles": [
      "Target Acquisition",
      "Over-the-Horizon Surveillance"
    ],
    "firstFlightYear": 2001,
    "introductionYear": 2007,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 280,
    "activeCount": 280,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Honeywell TPE331-10 Turboprop",
    "engineCount": 1,
    "engineType": "Turboprop",
    "hasAfterburner": false,
    "thrustDryKn": null,
    "thrustAfterburnerKn": null,
    "topSpeedMach": null,
    "topSpeedKmh": 482,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15400,
    "rateOfClimbMs": null,
    "gLimitPositive": null,
    "gLimitNegative": null,
    "enduranceHours": 27,
    "combatRangeKm": 1850,
    "combatRadiusKm": null,
    "ferryRangeKm": null,
    "emptyWeightKg": null,
    "maxTakeoffWeightKg": null,
    "payloadCapacityKg": 1700,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "AN/APY-8 Lynx Synthetic Aperture Radar",
    "radarRangeAirKm": 80,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": false,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 75,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": null,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 75,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 96,
    "sourceCount": 7,
    "lastVerified": null,
    "description": "Armed MALE unmanned aircraft system executing continuous hunter-killer ISR operations. Capable of 27 hours endurance armed with GBU-12 Paveway laser-guided bombs and AGM-114 Hellfire missiles.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/MQ-9_Reaper_in_flight_%282007%29.jpg/1280px-MQ-9_Reaper_in_flight_%282007%29.jpg",
    "tvrScore": 82.5,
    "weapons": [
      {
        "weapon": {
          "name": "AGM-114 Hellfire",
          "type": "ANTI_TANK_MISSILE",
          "maxRangeKm": 8,
          "speedMach": 1.3,
          "guidance": "Semi-Active Laser"
        }
      },
      {
        "weapon": {
          "name": "GBU-12 Paveway II",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 15,
          "speedMach": 0.9,
          "guidance": "Laser Guided"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MALE_UAV",
    "aircraftName": "General Atomics MQ-9A Reaper",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "usa-navy-f14-tomcat",
    "aliases": [
      "usa-navy-f14-tomcat",
      "grumman-f-14d-super-tomcat",
      "f-14-tomcat"
    ],
    "name": "Grumman F-14D Super Tomcat",
    "commonName": "F-14 Tomcat",
    "officialDesignation": "F-14D Super Tomcat",
    "natoReportingName": null,
    "family": "Grumman F-14",
    "variant": "F-14D Super Tomcat",
    "block": "Super Tomcat Final Standard",
    "manufacturer": "Grumman Aerospace Corporation",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Navy (Carrier Air Wings 1974–2006)",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "RETIRED",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_4",
    "era": "COLD_WAR",
    "role": "Variable-Geometry Fleet Air Defense Interceptor",
    "secondaryRoles": [
      "Precision Strike (Bombcat)",
      "Tactical Reconnaissance"
    ],
    "firstFlightYear": 1970,
    "introductionYear": 1974,
    "retirementYear": 2006,
    "productionCount": 712,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 712,
    "engineManufacturer": null,
    "engineModel": "General Electric F110-GE-400 Afterburning Turbofans (Dual)",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 124,
    "thrustAfterburnerKn": 216,
    "topSpeedMach": 2.34,
    "topSpeedKmh": 2485,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 16000,
    "rateOfClimbMs": 230,
    "gLimitPositive": 7.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 926,
    "combatRadiusKm": null,
    "ferryRangeKm": 3220,
    "emptyWeightKg": 19838,
    "maxTakeoffWeightKg": 33720,
    "payloadCapacityKg": 6600,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Hughes AN/APG-71 Digital Radar",
    "radarRangeAirKm": 230,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 82,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 5,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 40,
    "costPerFlightHourUsd": 18000,
    "reliabilityScore": 74,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "Iconic carrier-borne twin-engine variable-sweep wing air superiority fighter. Armed with the 190 km range AIM-54 Phoenix missile and AWG-9 / APG-71 radar capable of tracking 24 targets and engaging 6 simultaneously.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/F-14D_VF-31_landing_USS_Theodore_Roosevelt_%28CVN-71%29.jpg/1200px-F-14D_VF-31_landing_USS_Theodore_Roosevelt_%28CVN-71%29.jpg",
    "tvrScore": 74,
    "weapons": [
      {
        "weapon": {
          "name": "AIM-54C Phoenix",
          "type": "BVR_AAM",
          "maxRangeKm": 190,
          "speedMach": 5,
          "guidance": "Semi-Active / Active Radar"
        }
      },
      {
        "weapon": {
          "name": "AIM-7M Sparrow",
          "type": "BVR_AAM",
          "maxRangeKm": 70,
          "speedMach": 4,
          "guidance": "Semi-Active Radar"
        }
      },
      {
        "weapon": {
          "name": "AIM-9M Sidewinder",
          "type": "WVR_AAM",
          "maxRangeKm": 18,
          "speedMach": 2.5,
          "guidance": "Infrared"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1970,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Grumman F-14D Super Tomcat conducted."
      },
      {
        "year": 1974,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with United States Navy (Carrier Air Wings 1974–2006)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AIR_SUPERIORITY",
    "aircraftName": "Grumman F-14D Super Tomcat",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 19838,
        "maxTakeoffWeightKg": 33720,
        "payloadCapacityKg": 6600
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F110-GE-400 Afterburning Turbofans (Dual)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 124,
        "thrustAfterburnerKn": 216
      },
      "performance": {
        "maxSpeedKmh": 2485,
        "maxSpeedMach": 2.34,
        "combatRadiusKm": 926,
        "ferryRangeKm": 3220,
        "serviceCeilingM": 16000,
        "rateOfClimbMs": 230,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Hughes AN/APG-71 Digital Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 230,
      "hasAesa": false,
      "hasIrst": true,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "AIM-54C Phoenix",
        "AIM-7M Sparrow",
        "AIM-9M Sidewinder"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 712.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "usa-usaf-f117a-nighthawk",
    "aliases": [
      "usa-usaf-f117a-nighthawk",
      "lockheed-f-117a-nighthawk",
      "f-117-nighthawk-stealth-fighter-"
    ],
    "name": "Lockheed F-117A Nighthawk",
    "commonName": "F-117 Nighthawk (Stealth Fighter)",
    "officialDesignation": "F-117A Nighthawk",
    "natoReportingName": null,
    "family": "Lockheed Stealth Series",
    "variant": "F-117A Production Standard",
    "block": "Senior Trend Standard",
    "manufacturer": "Lockheed Corporation (Skunk Works)",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Air Force (4450th Tactical Group / 49th FW 1983–2008)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "STRIKE",
    "generation": "GEN_4",
    "era": "COLD_WAR",
    "role": "Low-Observable Precision Ground Attack Stealth Aircraft",
    "secondaryRoles": [
      "Deep Penetration Night Strike"
    ],
    "firstFlightYear": 1981,
    "introductionYear": 1983,
    "retirementYear": 2008,
    "productionCount": 64,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 12,
    "retiredCount": 52,
    "engineManufacturer": null,
    "engineModel": "General Electric F404-F1D2 Non-Afterburning Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": false,
    "thrustDryKn": 96,
    "thrustAfterburnerKn": 96,
    "topSpeedMach": 0.92,
    "topSpeedKmh": 1100,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 13716,
    "rateOfClimbMs": 80,
    "gLimitPositive": 6,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 900,
    "combatRadiusKm": null,
    "ferryRangeKm": 2110,
    "emptyWeightKg": 13380,
    "maxTakeoffWeightKg": 23814,
    "payloadCapacityKg": 2000,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "NONE",
    "radarModel": "Forward-Looking Infrared (FLIR) & DLIR Laser Designation",
    "radarRangeAirKm": 0,
    "hasAesa": false,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 90,
    "stealthLevel": "VERY_HIGH",
    "rcsEstimatedM2": 0.001,
    "hasRwr": true,
    "hasEcm": false,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 55,
    "costPerFlightHourUsd": 22000,
    "reliabilityScore": 82,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The world's first operational stealth combat aircraft, developed in secret by Lockheed's Skunk Works. Its revolutionary faceted surface design delivered a micro radar cross-section, penetrating Baghdad's dense air defenses during Operation Desert Storm in 1991 without detection.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/F-117_Nighthawk_Front.jpg/1200px-F-117_Nighthawk_Front.jpg",
    "tvrScore": 65.5,
    "weapons": [
      {
        "weapon": {
          "name": "GBU-27 Paveway III",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 19,
          "speedMach": 0.9,
          "guidance": "Laser Bunker Buster"
        }
      },
      {
        "weapon": {
          "name": "GBU-10 Paveway II",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 15,
          "speedMach": 0.9,
          "guidance": "Semi-Active Laser"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1981,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Lockheed F-117A Nighthawk conducted."
      },
      {
        "year": 1983,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with United States Air Force (4450th Tactical Group / 49th FW 1983–2008)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "STRIKE",
    "aircraftName": "Lockheed F-117A Nighthawk",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 13380,
        "maxTakeoffWeightKg": 23814,
        "payloadCapacityKg": 2000
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F404-F1D2 Non-Afterburning Turbofans",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 96,
        "thrustAfterburnerKn": 96
      },
      "performance": {
        "maxSpeedKmh": 1100,
        "maxSpeedMach": 0.92,
        "combatRadiusKm": 900,
        "ferryRangeKm": 2110,
        "serviceCeilingM": 13716,
        "rateOfClimbMs": 80,
        "gLimitPositive": 6
      }
    },
    "avionics": {
      "radar": "Forward-Looking Infrared (FLIR) & DLIR Laser Designation",
      "radarType": "NONE",
      "radarRangeAirKm": 0,
      "hasAesa": false,
      "hasIrst": true,
      "hasSensorFusion": true,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "VERY_HIGH",
      "rcsEstimatedM2": 0.001
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "GBU-27 Paveway III",
        "GBU-10 Paveway II"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 52.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "usa-f22a",
    "aliases": [
      "usa-f22a",
      "USA-USAF-F22-A",
      "usa-usaf-f22-a"
    ],
    "name": "Lockheed Martin F-22A Raptor",
    "commonName": "F-22A Raptor",
    "officialDesignation": "F-22A Block 30/35",
    "natoReportingName": null,
    "family": "F-22 Raptor",
    "variant": "F-22A Block 30/35",
    "block": "Increment 3.2B",
    "manufacturer": "Lockheed Martin / Boeing",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Air Force",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "AIR_SUPERIORITY",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Stealth Air Dominance Fighter",
    "secondaryRoles": [
      "Electronic Attack",
      "Precision Standoff Attack"
    ],
    "firstFlightYear": 1997,
    "introductionYear": 2005,
    "retirementYear": null,
    "productionCount": 195,
    "fleetCount": 183,
    "activeCount": 183,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Pratt & Whitney F119-PW-100 Supercruising Turbofans",
    "engineCount": 2,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 210,
    "thrustAfterburnerKn": 312,
    "topSpeedMach": 2.25,
    "topSpeedKmh": 2414,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 20000,
    "rateOfClimbMs": 350,
    "gLimitPositive": 9.5,
    "gLimitNegative": -3.5,
    "enduranceHours": null,
    "combatRangeKm": 1100,
    "combatRadiusKm": null,
    "ferryRangeKm": 3220,
    "emptyWeightKg": 19700,
    "maxTakeoffWeightKg": 38000,
    "payloadCapacityKg": 9100,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "AN/APG-77(V)1 Active Electronically Scanned Array",
    "radarRangeAirKm": 240,
    "hasAesa": true,
    "hasIrst": false,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 98,
    "stealthLevel": "VERY_HIGH",
    "rcsEstimatedM2": 0.0001,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 30,
    "costPerFlightHourUsd": 68000,
    "reliabilityScore": 74,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 98,
    "sourceCount": 9,
    "lastVerified": null,
    "description": "The world benchmark for stealth air dominance. Combines extreme low-observability shaping, Mach 1.82 supercruise without afterburners, 2D thrust-vectoring agility, and advanced AN/APG-77 AESA radar.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/1280px-F-22_Raptor_edit1_%28cropped%29.jpg",
    "tvrScore": 95.8,
    "weapons": [
      {
        "weapon": {
          "name": "AIM-120D AMRAAM",
          "type": "BVR_AAM",
          "maxRangeKm": 160,
          "speedMach": 4,
          "guidance": "Active Radar / Two-Way Datalink"
        }
      },
      {
        "weapon": {
          "name": "AIM-9X Sidewinder Block II",
          "type": "WVR_AAM",
          "maxRangeKm": 35,
          "speedMach": 2.7,
          "guidance": "High-Off-Boresight Imaging IR"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "AIR_SUPERIORITY",
    "aircraftName": "Lockheed Martin F-22A Raptor",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 18.92,
        "wingspanM": 13.56,
        "heightM": 5.08
      },
      "weights": {
        "emptyWeightKg": 19700,
        "maxTakeoffWeightKg": 38000,
        "payloadCapacityKg": 9100,
        "internalFuelKg": 8200
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Pratt & Whitney F119-PW-100 Supercruising Turbofans",
        "engineManufacturer": "Pratt & Whitney",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 210,
        "thrustAfterburnerKn": 312
      },
      "performance": {
        "maxSpeedKmh": 2414,
        "maxSpeedMach": 2.25,
        "cruiseSpeedKmh": 1960,
        "combatRadiusKm": 1100,
        "ferryRangeKm": 3220,
        "serviceCeilingM": 20000,
        "serviceCeilingFt": 65000,
        "rateOfClimbMs": 350,
        "gLimitPositive": 9.5
      }
    },
    "avionics": {
      "radar": "Northrop Grumman AN/APG-77(V)1 Active Electronically Scanned Array",
      "radarType": "AESA",
      "radarArchitecture": "Solid-State Active Phased Array (1,956 Transmit/Receive Modules)",
      "radarRangeAirKm": 240,
      "hasAesa": true,
      "hasIrst": false,
      "electronicWarfare": "AN/ALR-94 Radar Warning Receiver & AN/AAR-56 Missile Launch Detector",
      "ewScore": 98.5,
      "hasDatalink": true,
      "datalinkProtocol": "Intra-Flight Data Link (IFDL) & Link-16 Receiver",
      "sensorFusion": true,
      "stealthLevel": "VERY_HIGH",
      "rcsEstimatedM2": 0.0001
    },
    "capabilities": {
      "internalGun": "20mm M61A2 Vulcan 6-Barrel Gatling Cannon (480 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 9100,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM BVRAAM",
        "AIM-9X Sidewinder Block II High-Off-Boresight AAM",
        "GBU-39 Small Diameter Bomb (SDB)",
        "GBU-32 JDAM (1,000 lb)"
      ]
    },
    "fleet": {
      "confirmedQuantity": 183,
      "estimatedQuantity": 183,
      "quantityYear": 2026,
      "quantityNotes": "183 aircraft in USAF inventory (145 combat-coded frontline airframes) undergoing continuous sensory upgrades and AIM-260 JATM missile integration.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-01",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "usa-f35a",
    "aliases": [
      "usa-f35a",
      "USA-USAF-F35-A",
      "usa-usaf-f35-a"
    ],
    "name": "Lockheed Martin F-35A Lightning II",
    "commonName": "F-35A Lightning II",
    "officialDesignation": "F-35A Conventional Takeoff & Landing (CTOL)",
    "natoReportingName": null,
    "family": "F-35 Joint Strike Fighter",
    "variant": "F-35A Conventional Takeoff & Landing (CTOL)",
    "block": "Block 4 Standard",
    "manufacturer": "Lockheed Martin",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Air Force",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "5th-Generation Multi-Role Stealth Strike Fighter",
    "secondaryRoles": [
      "Electronic Attack",
      "Intelligence Surveillance Reconnaissance (ISR)",
      "SEAD"
    ],
    "firstFlightYear": 2006,
    "introductionYear": 2016,
    "retirementYear": null,
    "productionCount": 1000,
    "fleetCount": 360,
    "activeCount": 360,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Pratt & Whitney F135-PW-100",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 125,
    "thrustAfterburnerKn": 191,
    "topSpeedMach": 1.6,
    "topSpeedKmh": 1960,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15240,
    "rateOfClimbMs": 230,
    "gLimitPositive": 9,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 1200,
    "combatRadiusKm": null,
    "ferryRangeKm": 2800,
    "emptyWeightKg": 13290,
    "maxTakeoffWeightKg": 31800,
    "payloadCapacityKg": 8160,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "AN/APG-81 (Upgrading to APG-85 GaN AESA)",
    "radarRangeAirKm": 220,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 99,
    "stealthLevel": "VERY_HIGH",
    "rcsEstimatedM2": 0.001,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": 15,
    "costPerFlightHourUsd": 33000,
    "reliabilityScore": 82,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 99,
    "sourceCount": 12,
    "lastVerified": null,
    "description": "Premier networked 5th-generation strike fighter. Features all-aspect stealth, automated sensor fusion combining AN/APG-81 AESA radar, AN/AAQ-37 Electro-Optical Distributed Aperture System (DAS), and MADL secure datalink.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1200px-F-35A_flight_%28cropped%29.jpg",
    "tvrScore": 94.2,
    "weapons": [
      {
        "weapon": {
          "name": "AIM-120D AMRAAM",
          "type": "BVR_AAM",
          "maxRangeKm": 160,
          "speedMach": 4,
          "guidance": "Active Radar Homing"
        }
      },
      {
        "weapon": {
          "name": "GBU-39 Small Diameter Bomb",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 110,
          "speedMach": 0.9,
          "guidance": "GPS/INS Standoff"
        }
      },
      {
        "weapon": {
          "name": "JSM Joint Strike Missile",
          "type": "ANTI_SHIP_MISSILE",
          "maxRangeKm": 550,
          "speedMach": 0.9,
          "guidance": "IIR / Passive RF"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Lockheed Martin F-35A Lightning II",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": 15.67,
        "wingspanM": 10.7,
        "heightM": 4.33
      },
      "weights": {
        "emptyWeightKg": 13290,
        "maxTakeoffWeightKg": 31800,
        "payloadCapacityKg": 8160,
        "internalFuelKg": 8278
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Pratt & Whitney F135-PW-100 Afterburning Turbofan",
        "engineManufacturer": "Pratt & Whitney",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 125,
        "thrustAfterburnerKn": 191
      },
      "performance": {
        "maxSpeedKmh": 1960,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": 1050,
        "combatRadiusKm": 1200,
        "ferryRangeKm": 2800,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 230,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Northrop Grumman AN/APG-81 (Upgrading to AN/APG-85 GaN AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Gallium Arsenide (GaAs) / GaN Upgrade",
      "radarRangeAirKm": 220,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "AN/AAQ-40 Electro-Optical Targeting System (EOTS) & AN/AAQ-37 DAS 360-degree IR suite",
      "electronicWarfare": "BAE Systems AN/ASQ-239 Electronic Warfare / Countermeasures System",
      "ewScore": 99,
      "helmetMountedDisplay": "Collins Aerospace Gen III Helmet Mounted Display System (HMDS)",
      "hasDatalink": true,
      "datalinkProtocol": "Multifunction Advanced Data Link (MADL) & Link 16",
      "sensorFusion": true,
      "stealthLevel": "VERY_HIGH",
      "rcsEstimatedM2": 0.001
    },
    "capabilities": {
      "internalGun": "25mm GAU-22/A 4-Barrel Rotary Cannon (182 rounds)",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": true,
      "antiRadiationCapable": true,
      "guidedBombCapable": true,
      "cruiseMissileCapable": true,
      "maximumPayloadKg": 8160,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM BVRAAM",
        "AIM-9X Sidewinder Block II",
        "GBU-39 Small Diameter Bomb (SDB I/II)",
        "AGM-158 JASSM / LRASM Standoff Missiles",
        "Joint Strike Missile (JSM)"
      ]
    },
    "fleet": {
      "confirmedQuantity": 360,
      "estimatedQuantity": 380,
      "quantityYear": 2026,
      "quantityNotes": "Over 360 operational F-35A airframes in USAF active service with full-rate production exceeding 140 jets annually across international programs.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-10",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "usa-f35c-navy",
    "aliases": [
      "usa-f35c-navy"
    ],
    "name": "Lockheed Martin F-35C Lightning II",
    "commonName": "F-35C Lightning II",
    "officialDesignation": "F-35C Carrier Variant (CV)",
    "natoReportingName": null,
    "family": "F-35 Joint Strike Fighter",
    "variant": "F-35C Carrier Variant (CV)",
    "block": "Block 4 Standard",
    "manufacturer": "Lockheed Martin",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Navy / Marine Corps",
    "militaryBranch": "NAVAL_AVIATION",
    "serviceStatus": "ACTIVE",
    "category": "MULTIROLE_FIGHTER",
    "generation": "GEN_5",
    "era": "MODERN",
    "role": "Carrier-Based 5th-Gen Stealth Strike Fighter",
    "secondaryRoles": [
      "Fleet Defense",
      "Electronic Attack",
      "First-Day-of-War Penetration"
    ],
    "firstFlightYear": 2010,
    "introductionYear": 2019,
    "retirementYear": null,
    "productionCount": null,
    "fleetCount": 110,
    "activeCount": 110,
    "inactiveCount": 0,
    "retiredCount": 0,
    "engineManufacturer": null,
    "engineModel": "Pratt & Whitney F135-PW-400",
    "engineCount": 1,
    "engineType": "Turbofan",
    "hasAfterburner": true,
    "thrustDryKn": 125,
    "thrustAfterburnerKn": 191,
    "topSpeedMach": 1.6,
    "topSpeedKmh": 1960,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 15240,
    "rateOfClimbMs": 220,
    "gLimitPositive": 7.5,
    "gLimitNegative": null,
    "enduranceHours": null,
    "combatRangeKm": 1240,
    "combatRadiusKm": null,
    "ferryRangeKm": 2900,
    "emptyWeightKg": 15686,
    "maxTakeoffWeightKg": 31800,
    "payloadCapacityKg": 8160,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "AESA",
    "radarModel": "AN/APG-81 Active Electronically Scanned Array",
    "radarRangeAirKm": 220,
    "hasAesa": true,
    "hasIrst": true,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": true,
    "electronicWarfare": null,
    "ewScore": 99,
    "stealthLevel": "VERY_HIGH",
    "rcsEstimatedM2": 0.001,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": true,
    "maintenanceHoursPerFlightHour": null,
    "costPerFlightHourUsd": null,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 98,
    "sourceCount": 8,
    "lastVerified": null,
    "description": "First catapult-capable 5th-generation stealth aircraft. Features enlarged folding wings, strengthened landing gear with heavy catapult bar and arrestor hook, and internal bays for stealth standoff ordnance.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/F-35C_CF-1_flight.jpg/1280px-F-35C_CF-1_flight.jpg",
    "tvrScore": 93.8,
    "weapons": [
      {
        "weapon": {
          "name": "AIM-120D AMRAAM",
          "type": "BVR_AAM",
          "maxRangeKm": 160,
          "speedMach": 4,
          "guidance": "Active Radar"
        }
      },
      {
        "weapon": {
          "name": "AGM-154 JSOW",
          "type": "PRECISION_GUIDED_BOMB",
          "maxRangeKm": 130,
          "speedMach": 0.9,
          "guidance": "GPS/INS/IIR"
        }
      }
    ],
    "dataSources": [],
    "milestones": [],
    "snapshots": [],
    "images": [],
    "primaryCategory": "MULTIROLE_FIGHTER",
    "aircraftName": "Lockheed Martin F-35C Lightning II",
    "hardpoints": null,
    "sources": [
      {
        "name": "Official DoD/MoD Technical Specs & Flight Manual",
        "url": "https://www.defense.gov",
        "retrievedAt": "2025-01-10"
      },
      {
        "name": "Jane's All the World's Aircraft 2024-2025",
        "url": "https://www.janes.com",
        "retrievedAt": "2025-01-15"
      }
    ]
  },
  {
    "id": "usa-usaf-sr71-blackbird",
    "aliases": [
      "usa-usaf-sr71-blackbird",
      "lockheed-sr-71a-blackbird",
      "sr-71-blackbird"
    ],
    "name": "Lockheed SR-71A Blackbird",
    "commonName": "SR-71 Blackbird",
    "officialDesignation": "SR-71A Strategic Reconnaissance",
    "natoReportingName": null,
    "family": "Lockheed Blackbird Family",
    "variant": "SR-71A",
    "block": "USAF Strategic Reconnaissance",
    "manufacturer": "Lockheed Corporation (Skunk Works)",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Air Force / 9th Strategic Reconnaissance Wing (1966–1998)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "RECONNAISSANCE",
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "role": "Mach 3.3+ Stratospheric Strategic Reconnaissance",
    "secondaryRoles": [
      "High-Altitude Optical/ELINT Survey"
    ],
    "firstFlightYear": 1964,
    "introductionYear": 1966,
    "retirementYear": 1998,
    "productionCount": 32,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 32,
    "engineManufacturer": null,
    "engineModel": "Pratt & Whitney J58-1 Continuous-Bleed Afterburning Turbojets",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 220,
    "thrustAfterburnerKn": 290,
    "topSpeedMach": 3.32,
    "topSpeedKmh": 3540,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 25900,
    "rateOfClimbMs": 60,
    "gLimitPositive": 3.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 2000,
    "combatRadiusKm": null,
    "ferryRangeKm": 5400,
    "emptyWeightKg": 30600,
    "maxTakeoffWeightKg": 78000,
    "payloadCapacityKg": 1600,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "PESA",
    "radarModel": "Advanced Synthetic Aperture Radar System (ASARS-1)",
    "radarRangeAirKm": 160,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": true,
    "hasDatalink": true,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 94,
    "stealthLevel": "HIGH",
    "rcsEstimatedM2": 0.1,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 65,
    "costPerFlightHourUsd": 85000,
    "reliabilityScore": 84,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The fastest and highest-flying air-breathing manned operational aircraft ever built. Designed by Kelly Johnson's Skunk Works, the SR-71 outflew over 4,000 surface-to-air missiles fired at it throughout its operational life, with zero losses to enemy action.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lockheed_SR-71_Blackbird.jpg/1200px-Lockheed_SR-71_Blackbird.jpg",
    "tvrScore": 83.2,
    "weapons": [],
    "dataSources": [],
    "milestones": [
      {
        "year": 1964,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the Lockheed SR-71A Blackbird conducted."
      },
      {
        "year": 1966,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with United States Air Force / 9th Strategic Reconnaissance Wing (1966–1998)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "RECONNAISSANCE",
    "aircraftName": "Lockheed SR-71A Blackbird",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 30600,
        "maxTakeoffWeightKg": 78000,
        "payloadCapacityKg": 1600
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Pratt & Whitney J58-1 Continuous-Bleed Afterburning Turbojets",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 220,
        "thrustAfterburnerKn": 290
      },
      "performance": {
        "maxSpeedKmh": 3540,
        "maxSpeedMach": 3.32,
        "combatRadiusKm": 2000,
        "ferryRangeKm": 5400,
        "serviceCeilingM": 25900,
        "rateOfClimbMs": 60,
        "gLimitPositive": 3.5
      }
    },
    "avionics": {
      "radar": "Advanced Synthetic Aperture Radar System (ASARS-1)",
      "radarType": "PESA",
      "radarRangeAirKm": 160,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": true,
      "hasDatalink": true,
      "helmetMountedDisplay": null,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.1
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": []
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 32.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  },
  {
    "id": "usa-usaf-f4-phantom",
    "aliases": [
      "usa-usaf-f4-phantom",
      "mcdonnell-douglas-f-4e-phantom-ii",
      "f-4-phantom-ii"
    ],
    "name": "McDonnell Douglas F-4E Phantom II",
    "commonName": "F-4 Phantom II",
    "officialDesignation": "F-4E Phantom II",
    "natoReportingName": null,
    "family": "McDonnell Douglas F-4 Phantom",
    "variant": "F-4E Advanced Fighter-Bomber",
    "block": "USAF Standard",
    "manufacturer": "McDonnell Douglas",
    "manufacturerCountry": "United States",
    "originCountry": "United States",
    "country": "United States",
    "affiliation": "United States Air Force / US Navy / USMC (1960–1996)",
    "militaryBranch": "AIR_FORCE",
    "serviceStatus": "RETIRED",
    "category": "FIGHTER",
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "role": "All-Weather Supersonic Fighter-Bomber & Interceptor",
    "secondaryRoles": [
      "Wild Weasel (SEAD)",
      "Tactical Reconnaissance"
    ],
    "firstFlightYear": 1958,
    "introductionYear": 1960,
    "retirementYear": 1996,
    "productionCount": 5195,
    "fleetCount": 0,
    "activeCount": 0,
    "inactiveCount": 0,
    "retiredCount": 5195,
    "engineManufacturer": null,
    "engineModel": "General Electric J79-GE-17A Turbojets (Dual)",
    "engineCount": 2,
    "engineType": "Turbojet",
    "hasAfterburner": true,
    "thrustDryKn": 105.8,
    "thrustAfterburnerKn": 156,
    "topSpeedMach": 2.23,
    "topSpeedKmh": 2370,
    "cruiseSpeedKmh": null,
    "serviceCeilingM": 18300,
    "rateOfClimbMs": 210,
    "gLimitPositive": 8.5,
    "gLimitNegative": -3,
    "enduranceHours": null,
    "combatRangeKm": 680,
    "combatRadiusKm": null,
    "ferryRangeKm": 2600,
    "emptyWeightKg": 13757,
    "maxTakeoffWeightKg": 28030,
    "payloadCapacityKg": 8480,
    "internalFuelKg": null,
    "lengthM": null,
    "wingspanM": null,
    "heightM": null,
    "radarType": "MECHANICAL_PULSE_DOPPLER",
    "radarModel": "Westinghouse AN/APQ-120 Radar",
    "radarRangeAirKm": 75,
    "hasAesa": false,
    "hasIrst": false,
    "hasSensorFusion": false,
    "hasDatalink": false,
    "hasHmd": false,
    "electronicWarfare": null,
    "ewScore": 72,
    "stealthLevel": "LOW",
    "rcsEstimatedM2": 7,
    "hasRwr": true,
    "hasEcm": true,
    "hasMaws": false,
    "maintenanceHoursPerFlightHour": 25,
    "costPerFlightHourUsd": 9000,
    "reliabilityScore": 80,
    "confidenceLevel": "VERIFIED",
    "confidenceScore": 95,
    "sourceCount": 5,
    "lastVerified": "2026-09-20",
    "description": "The defining twin-engine supersonic tactical fighter-bomber of the Cold War. Set 15 world speed and altitude records and served as the premier frontline multirole combat aircraft across the USAF, US Navy, and 11 allied nations.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/F-4E_Phantom_II_USAF.jpg/1200px-F-4E_Phantom_II_USAF.jpg",
    "tvrScore": 63.9,
    "weapons": [
      {
        "weapon": {
          "name": "AIM-7F Sparrow",
          "type": "BVR_AAM",
          "maxRangeKm": 70,
          "speedMach": 4,
          "guidance": "Semi-Active Radar"
        }
      },
      {
        "weapon": {
          "name": "AIM-9L Sidewinder",
          "type": "WVR_AAM",
          "maxRangeKm": 18,
          "speedMach": 2.5,
          "guidance": "All-Aspect Infrared"
        }
      },
      {
        "weapon": {
          "name": "AGM-88 HARM",
          "type": "ANTI_RADIATION_MISSILE",
          "maxRangeKm": 150,
          "speedMach": 2,
          "guidance": "Passive Radar Homing"
        }
      }
    ],
    "dataSources": [],
    "milestones": [
      {
        "year": 1958,
        "eventType": "FIRST_FLIGHT",
        "title": "Initial Prototype Maiden Flight",
        "description": "Official first flight of the McDonnell Douglas F-4E Phantom II conducted."
      },
      {
        "year": 1960,
        "eventType": "COMMISSIONED",
        "title": "Squadron Induction & Operational Service",
        "description": "Commissioned into frontline operational service with United States Air Force / US Navy / USMC (1960–1996)."
      }
    ],
    "snapshots": [],
    "images": [],
    "primaryCategory": "FIGHTER",
    "aircraftName": "McDonnell Douglas F-4E Phantom II",
    "hardpoints": null,
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 13757,
        "maxTakeoffWeightKg": 28030,
        "payloadCapacityKg": 8480
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric J79-GE-17A Turbojets (Dual)",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 105.8,
        "thrustAfterburnerKn": 156
      },
      "performance": {
        "maxSpeedKmh": 2370,
        "maxSpeedMach": 2.23,
        "combatRadiusKm": 680,
        "ferryRangeKm": 2600,
        "serviceCeilingM": 18300,
        "rateOfClimbMs": 210,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Westinghouse AN/APQ-120 Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarRangeAirKm": 75,
      "hasAesa": false,
      "hasIrst": false,
      "hasSensorFusion": false,
      "hasDatalink": false,
      "helmetMountedDisplay": null,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 7
    },
    "capabilities": {
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": true,
      "guidedBombCapable": false,
      "cruiseMissileCapable": false,
      "keyWeaponsIntegrated": [
        "AIM-7F Sparrow",
        "AIM-9L Sidewinder",
        "AGM-88 HARM"
      ]
    },
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2026,
      "quantityNotes": "Service Status: RETIRED. Active: 0, Retired: 5195.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-20",
      "freshnessStatus": "CURRENT"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ]
  }
];

export const initialNationIntelligence = [
  {
    countryName: 'United States',
    countryCode: 'USA',
    flag: '🇺🇸',
    airForceName: 'United States Air Force',
    armyAviationName: 'US Army Aviation Branch',
    navalAviationName: 'US Naval Air Forces',
    globalRanking: 1,
    tvrTotal: 96.4,
    combatPowerScore: 98.2,
    strikeScore: 96.5,
    mobilityScore: 95.0,
    aewcScore: 97.4,
    tankerScore: 99.1,
    uavScore: 96.0,
    navalAirScore: 98.0,
    armyAirScore: 94.5,
    modernizationIndex: 89.2,
    logisticsScore: 94.0,
    forceReadiness: 92.0,
    totalActiveUnits: 5209,
    airForceUnits: 3100,
    armyAviationUnits: 1200,
    navalAviationUnits: 909,
    marineUnits: 450,
    totalFighters: 1950,
    totalBombers: 140,
    totalTransports: 680,
    totalHelicopters: 1450,
    totalUAVs: 480,
    totalAEWC: 32,
    totalTankers: 470,
    totalTrainers: 1100,
    gen5Count: 543,
    gen45Count: 650,
    gen4Count: 757,
    legacyCount: 0,
    threatAssessment: 'Full-Spectrum Global Air Dominance & Strategic Expeditionary Reach',
    primaryFighter: 'F-22A Raptor / F-35A/C Lightning II',
    primaryStrengths: [
      'Largest operational 5th-generation stealth fighter fleet (>500 F-22 & F-35)',
      'Unrivaled aerial refueling and strategic tanker force multiplier fleet (KC-46 / KC-135)',
      'Global carrier strike group aviation dominance with 11 active supercarriers',
    ],
    primaryLimitations: [
      'High per-hour flight operating costs across aging airframes',
      'Pilot recruitment and conversion backlog across tactical squadrons',
    ],
  },
  {
    countryName: 'China',
    countryCode: 'CHN',
    flag: '🇨🇳',
    airForceName: 'People\'s Liberation Army Air Force (PLAAF)',
    armyAviationName: 'PLA Ground Force Aviation',
    navalAviationName: 'PLA Naval Air Force (PLAN-AF)',
    globalRanking: 2,
    tvrTotal: 89.8,
    combatPowerScore: 92.4,
    strikeScore: 89.0,
    mobilityScore: 84.5,
    aewcScore: 91.0,
    tankerScore: 78.0,
    uavScore: 94.0,
    navalAirScore: 86.5,
    armyAirScore: 88.0,
    modernizationIndex: 84.5,
    logisticsScore: 87.0,
    forceReadiness: 88.0,
    totalActiveUnits: 3166,
    airForceUnits: 2200,
    armyAviationUnits: 550,
    navalAviationUnits: 416,
    totalFighters: 1550,
    totalBombers: 120,
    totalTransports: 280,
    totalHelicopters: 820,
    totalUAVs: 350,
    totalAEWC: 35,
    totalTankers: 30,
    totalTrainers: 650,
    gen5Count: 250,
    gen45Count: 600,
    gen4Count: 500,
    legacyCount: 200,
    threatAssessment: 'Rapid Indo-Pacific Anti-Access / Area-Denial (A2/AD) Superiority',
    primaryFighter: 'Chengdu J-20A Mighty Dragon / Shenyang J-16',
    primaryStrengths: [
      'Aggressive domestic aerospace manufacturing and J-20 stealth mass production',
      'Advanced long-range BVR active radar missile reach (PL-15 / PL-17)',
      'Extensive domestic UAV reconnaissance and combat drone development program',
    ],
    primaryLimitations: [
      'Relatively small aerial tanker fleet restricting unrefueled expeditionary range',
      'Limited combat-tested operational sortie doctrine in high-intensity contested airspace',
    ],
  },
  {
    countryName: 'Russia',
    countryCode: 'RUS',
    flag: '🇷🇺',
    airForceName: 'Russian Aerospace Forces (VKS)',
    armyAviationName: 'VKS Army Aviation Branch',
    navalAviationName: 'Russian Naval Aviation',
    globalRanking: 3,
    tvrTotal: 84.2,
    combatPowerScore: 86.5,
    strikeScore: 88.0,
    mobilityScore: 80.0,
    aewcScore: 74.0,
    tankerScore: 72.0,
    uavScore: 76.0,
    navalAirScore: 72.0,
    armyAirScore: 86.0,
    modernizationIndex: 72.0,
    logisticsScore: 74.0,
    forceReadiness: 78.0,
    totalActiveUnits: 3652,
    airForceUnits: 2500,
    armyAviationUnits: 750,
    navalAviationUnits: 402,
    totalFighters: 980,
    totalBombers: 130,
    totalTransports: 390,
    totalHelicopters: 1350,
    totalUAVs: 200,
    totalAEWC: 15,
    totalTankers: 19,
    totalTrainers: 520,
    gen5Count: 22,
    gen45Count: 320,
    gen4Count: 540,
    legacyCount: 100,
    threatAssessment: 'Heavy Strategic Bomber Standoff Strike & Dense Tactical Frontline Air Power',
    primaryFighter: 'Sukhoi Su-35S / Su-30SM2 / Su-57 Felon',
    primaryStrengths: [
      'Heavy strategic standoff bomber fleet (Tu-160M / Tu-95MS / Tu-22M3M)',
      'High supermaneuverability and heavy missile carriage capacity on Flanker airframes',
      'Advanced hypersonic and ultra-long-range missile integration (R-37M / Kinzhal)',
    ],
    primaryLimitations: [
      'Severe shortages of modern AEW&C force multiplier platforms (A-50U fleet attrition)',
      'Slow serial production rate of 5th-generation Su-57 stealth fighters',
    ],
  },
  {
    countryName: 'India',
    countryCode: 'IND',
    flag: '🇮🇳',
    airForceName: 'Indian Air Force (IAF)',
    armyAviationName: 'Indian Army Aviation Corps',
    navalAviationName: 'Indian Naval Air Arm',
    globalRanking: 4,
    tvrTotal: 81.6,
    combatPowerScore: 84.8,
    strikeScore: 82.0,
    mobilityScore: 81.0,
    aewcScore: 78.0,
    tankerScore: 74.0,
    uavScore: 76.0,
    navalAirScore: 80.0,
    armyAirScore: 78.0,
    modernizationIndex: 76.5,
    logisticsScore: 76.0,
    forceReadiness: 85.0,
    totalActiveUnits: 1645,
    airForceUnits: 1100,
    armyAviationUnits: 340,
    navalAviationUnits: 205,
    totalFighters: 620,
    totalBombers: 0,
    totalTransports: 250,
    totalHelicopters: 520,
    totalUAVs: 110,
    totalAEWC: 6,
    totalTankers: 6,
    totalTrainers: 310,
    gen5Count: 0,
    gen45Count: 296,
    gen4Count: 280,
    legacyCount: 44,
    threatAssessment: 'Multi-Front Deterrence & High-Altitude Himalayan Operational Mastery',
    primaryFighter: 'Sukhoi Su-30MKI / Dassault Rafale / Tejas Mk1A',
    primaryStrengths: [
      'High combat readiness and unmatched high-altitude combat experience in Siachen / Ladakh',
      'Formidable long-range precision strike pairing Rafale (Meteor/SCALP) with Su-30MKI (BrahMos-A)',
      'Diverse multi-spectrum naval aviation with operational STOBAR carriers and P-8I ASW dominance',
    ],
    primaryLimitations: [
      'Fighter squadron strength deficit against authorized 42-squadron mandate',
      'Complex multi-origin supply chain logistics across Russian, French, Israeli, and US hardware',
    ],
  },
];

// ==============================================================================
// Multi-Domain Global Military Force Profiles (ATLAS Model 2026)
// ==============================================================================
export const initialCountryForceProfiles = [
  {
    id: 'cfp-usa',
    country: 'United States',
    countryCode: 'USA',
    flagEmoji: '🇺🇸',
    region: 'North America',
    atlasIndex: 98.5,
    airsIndex: 99.2,
    seasIndex: 97.8,
    armsIndex: 91.4,
    activeTroops: 1328000,
    reserveTroops: 799500,
    paramilitary: 0,
    defenseBudgetUsd: 877.0,
    totalAircraft: 13200,
    totalWarships: 480,
    totalVehicles: 45000,
    nuclearWarheads: 5244,
    aircraftCarriers: 11,
    submarines: 67,
  },
  {
    id: 'cfp-chn',
    country: 'China',
    countryCode: 'CHN',
    flagEmoji: '🇨🇳',
    region: 'Asia-Pacific',
    atlasIndex: 92.1,
    airsIndex: 88.4,
    seasIndex: 91.2,
    armsIndex: 94.0,
    activeTroops: 2035000,
    reserveTroops: 510000,
    paramilitary: 660000,
    defenseBudgetUsd: 292.0,
    totalAircraft: 3300,
    totalWarships: 730,
    totalVehicles: 35000,
    nuclearWarheads: 500,
    aircraftCarriers: 3,
    submarines: 61,
  },
  {
    id: 'cfp-rus',
    country: 'Russia',
    countryCode: 'RUS',
    flagEmoji: '🇷🇺',
    region: 'Eurasia',
    atlasIndex: 84.3,
    airsIndex: 81.0,
    seasIndex: 78.5,
    armsIndex: 89.2,
    activeTroops: 1320000,
    reserveTroops: 2000000,
    paramilitary: 250000,
    defenseBudgetUsd: 86.4,
    totalAircraft: 4100,
    totalWarships: 590,
    totalVehicles: 30000,
    nuclearWarheads: 5580,
    aircraftCarriers: 1,
    submarines: 58,
  },
  {
    id: 'cfp-ind',
    country: 'India',
    countryCode: 'IND',
    flagEmoji: '🇮🇳',
    region: 'South Asia',
    atlasIndex: 81.7,
    airsIndex: 79.5,
    seasIndex: 76.2,
    armsIndex: 85.0,
    activeTroops: 1455000,
    reserveTroops: 1155000,
    paramilitary: 2527000,
    defenseBudgetUsd: 81.4,
    totalAircraft: 2210,
    totalWarships: 295,
    totalVehicles: 12000,
    nuclearWarheads: 172,
    aircraftCarriers: 2,
    submarines: 18,
  },
  {
    id: 'cfp-gbr',
    country: 'United Kingdom',
    countryCode: 'GBR',
    flagEmoji: '🇬🇧',
    region: 'Europe / NATO',
    atlasIndex: 74.2,
    airsIndex: 72.0,
    seasIndex: 75.8,
    armsIndex: 68.0,
    activeTroops: 184800,
    reserveTroops: 78400,
    paramilitary: 0,
    defenseBudgetUsd: 68.5,
    totalAircraft: 660,
    totalWarships: 75,
    totalVehicles: 1500,
    nuclearWarheads: 225,
    aircraftCarriers: 2,
    submarines: 10,
  },
  {
    id: 'cfp-fra',
    country: 'France',
    countryCode: 'FRA',
    flagEmoji: '🇫🇷',
    region: 'Europe / NATO',
    atlasIndex: 73.8,
    airsIndex: 73.5,
    seasIndex: 74.1,
    armsIndex: 69.5,
    activeTroops: 200000,
    reserveTroops: 41000,
    paramilitary: 175000,
    defenseBudgetUsd: 56.6,
    totalAircraft: 970,
    totalWarships: 120,
    totalVehicles: 2500,
    nuclearWarheads: 290,
    aircraftCarriers: 1,
    submarines: 10,
  },
];

// ==============================================================================
// Live Sitrep Defense Events Feed
// ==============================================================================
export const initialSitrepEvents = [
  {
    id: 'sitrep-1',
    eventType: 'DELIVERED',
    domain: 'AIR',
    country: 'India',
    countryCode: 'IND',
    countryFlag: '🇮🇳',
    entityName: 'Tejas Mk1A',
    location: 'Sulur AFS, Tamil Nadu',
    summary: 'Indian Air Force officially accepts delivery of batch Tejas Mk1A fighters fitted with Uttam AESA radar at Sulur AFS.',
    sourceUrl: 'https://mod.gov.in',
    confidence: 'VERIFIED',
    eventDate: '2025-02-15T00:00:00.000Z',
  },
  {
    id: 'sitrep-2',
    eventType: 'COMMISSIONED',
    domain: 'NAVY',
    country: 'India',
    countryCode: 'IND',
    countryFlag: '🇮🇳',
    entityName: 'INS Arighat',
    location: 'Visakhapatnam Naval Base',
    summary: 'Indian Navy commissions second Arihant-class nuclear ballistic missile submarine (SSBN) INS Arighat into service at Visakhapatnam.',
    sourceUrl: 'https://indiannavy.nic.in',
    confidence: 'VERIFIED',
    eventDate: '2024-08-29T00:00:00.000Z',
  },
  {
    id: 'sitrep-3',
    eventType: 'RETIRED',
    domain: 'AIR',
    country: 'United States',
    countryCode: 'USA',
    countryFlag: '🇺🇸',
    entityName: 'EC-130H Compass Call',
    location: 'Davis-Monthan AFB, Arizona',
    summary: 'USAF completes final operational retirement flight of EC-130H Compass Call electronic warfare airframe from Davis-Monthan AFB.',
    sourceUrl: 'https://af.mil',
    confidence: 'VERIFIED',
    eventDate: '2024-11-10T00:00:00.000Z',
  },
  {
    id: 'sitrep-4',
    eventType: 'COMMISSIONED',
    domain: 'NAVY',
    country: 'United States',
    countryCode: 'USA',
    countryFlag: '🇺🇸',
    entityName: 'USS New Jersey (SSN-796)',
    location: 'Naval Weapons Station Earle, NJ',
    summary: 'US Navy commissions Virginia-class fast attack submarine USS New Jersey into the fleet.',
    sourceUrl: 'https://navy.mil',
    confidence: 'VERIFIED',
    eventDate: '2024-09-14T00:00:00.000Z',
  },
  {
    id: 'sitrep-5',
    eventType: 'DELIVERED',
    domain: 'LAND',
    country: 'India',
    countryCode: 'IND',
    countryFlag: '🇮🇳',
    entityName: 'T-90M Bhishma',
    location: 'Heavy Vehicles Factory (HVF), Avadi',
    summary: 'Indian Army receives upgraded T-90M Bhishma main battle tanks with thermal imaging and localized explosive reactive armor (ERA).',
    sourceUrl: 'https://drdo.gov.in',
    confidence: 'VERIFIED',
    eventDate: '2025-01-20T00:00:00.000Z',
  },
  {
    id: 'sitrep-6',
    eventType: 'SHOT_DOWN',
    domain: 'AIR',
    country: 'Russia',
    countryCode: 'RUS',
    countryFlag: '🇷🇺',
    entityName: 'Su-34 Fullback',
    location: 'Eastern Operational Theater',
    summary: 'Visual OSINT confirms tactical fighter-bomber loss over eastern operational theater.',
    sourceUrl: 'https://aviation-safety.net',
    confidence: 'VERIFIED',
    eventDate: '2024-12-05T00:00:00.000Z',
  },
];

// ==============================================================================
// Naval Combatant Fleets Dataset
// ==============================================================================
export const initialNavalVessels = [
  {
    id: 'nv-1',
    name: 'INS Vikrant (IAC-1)',
    shipClass: 'Vikrant-class Aircraft Carrier',
    vesselType: 'AIRCRAFT_CARRIER',
    country: 'India',
    countryCode: 'IND',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 45000,
    maxSpeedKnots: 28.0,
    commissionedYear: 2022,
    crewComplement: 1645,
    activeCount: 1,
    originCountry: 'India (Cochin Shipyard)',
    pennantNumber: 'R11',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 88.5,
    description: 'Indigenous aircraft carrier operating STOBAR ski-jump ski configurations with MiG-29K, Rafale-M, and MH-60R Seahawk air wings.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/INS_Vikrant_underway_during_sea_trials.jpg/1200px-INS_Vikrant_underway_during_sea_trials.jpg',
    weapons: 'Barak-8 LRSAM, AK-630 CIWS, Otobreda 76mm Gun',
    propulsion: '4x GE LM2500+ Gas Turbines (88 MW)',
  },
  {
    id: 'nv-2',
    name: 'USS Gerald R. Ford (CVN-78)',
    shipClass: 'Gerald R. Ford-class Supercarrier',
    vesselType: 'AIRCRAFT_CARRIER',
    country: 'United States',
    countryCode: 'USA',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 100000,
    maxSpeedKnots: 30.0,
    commissionedYear: 2017,
    crewComplement: 4539,
    activeCount: 1,
    originCountry: 'United States (Huntington Ingalls)',
    pennantNumber: 'CVN-78',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 98.4,
    description: 'Premier nuclear-powered supercarrier equipped with Electromagnetic Aircraft Launch System (EMALS), AAG arresting gear, and Dual Band Radar.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_8_April_2017_%28170408-N-WJ386-067%29.jpg/1200px-USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_8_April_2017_%28170408-N-WJ386-067%29.jpg',
    weapons: 'RIM-162 ESSM, RIM-116 RAM, Phalanx CIWS',
    propulsion: '2x A1B Nuclear Reactors',
  },
  {
    id: 'nv-3',
    name: 'CNS Fujian (Type 003)',
    shipClass: 'Type 003 Aircraft Carrier',
    vesselType: 'AIRCRAFT_CARRIER',
    country: 'China',
    countryCode: 'CHN',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 80000,
    maxSpeedKnots: 30.0,
    commissionedYear: 2024,
    crewComplement: 3200,
    activeCount: 1,
    originCountry: 'China (Jiangnan Shipyard)',
    pennantNumber: '18',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 93.5,
    description: 'First Chinese catapult-equipped (EMALS CATOBAR) supercarrier carrying J-15T, J-35 stealth fighters, and KJ-600 AEW&C aircraft.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/INS_Visakhapatnam_%28D66%29.jpg/1200px-INS_Visakhapatnam_%28D66%29.jpg',
    weapons: 'HQ-10 SAM, Type 1130 11-barrel 30mm CIWS',
    propulsion: 'Integrated Electric Propulsion (IEP) Steam Turbines',
  },
  {
    id: 'nv-4',
    name: 'INS Surat (D69)',
    shipClass: 'Visakhapatnam-class Guided Missile Destroyer (Project 15B)',
    vesselType: 'GUIDED_MISSILE_DESTROYER',
    country: 'India',
    countryCode: 'IND',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 7400,
    maxSpeedKnots: 30.0,
    commissionedYear: 2024,
    crewComplement: 312,
    activeCount: 1,
    originCountry: 'India (Mazagon Dock Shipbuilders)',
    pennantNumber: 'D69',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 89.2,
    description: 'Next-generation stealth guided-missile destroyer armed with BrahMos supersonic cruise missiles and Barak-8 long-range surface-to-air missiles.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chinese_aircraft_carrier_Fujian.jpg/1200px-Chinese_aircraft_carrier_Fujian.jpg',
    weapons: '16x BrahMos VLS, 32x Barak-8 ER SAM, 76mm Super Rapid Gun',
    propulsion: 'COGAG 2x Zorya M36N Gas Turbines',
  },
  {
    id: 'nv-5',
    name: 'USS Arleigh Burke (DDG-51 Flight III)',
    shipClass: 'Arleigh Burke Flight III Destroyer',
    vesselType: 'GUIDED_MISSILE_DESTROYER',
    country: 'United States',
    countryCode: 'USA',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 9700,
    maxSpeedKnots: 31.0,
    commissionedYear: 2023,
    crewComplement: 329,
    activeCount: 14,
    originCountry: 'United States (General Dynamics Bath Iron Works)',
    pennantNumber: 'DDG-125',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 94.6,
    description: 'Aegis Baseline 10 combat system with AN/SPY-6(V)1 Air and Missile Defense Radar (AMDR) delivering ballistic missile defense capabilities.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Admiral_Flota_Sovetskogo_Soyuza_Gorshkov_underway.jpg/1200px-Admiral_Flota_Sovetskogo_Soyuza_Gorshkov_underway.jpg',
    weapons: '96-cell Mk 41 VLS (SM-2, SM-6, SM-3 BMD, Tomahawk), Mk 45 5-inch gun',
    propulsion: '4x GE LM2500 Gas Turbines',
  },
  {
    id: 'nv-6',
    name: 'CNS Nanchang (Type 055)',
    shipClass: 'Type 055 Renhai-class Guided Missile Destroyer',
    vesselType: 'GUIDED_MISSILE_DESTROYER',
    country: 'China',
    countryCode: 'CHN',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 13000,
    maxSpeedKnots: 30.0,
    commissionedYear: 2020,
    crewComplement: 300,
    activeCount: 8,
    originCountry: 'China (Jiangnan / Dalian)',
    pennantNumber: '101',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 93.8,
    description: 'Heavy stealth guided-missile cruiser/destroyer equipped with dual-band AESA radar and 112 universal vertical launch cells.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HMS_Queen_Elizabeth_%28R08%29_underway_in_the_Atlantic_Ocean_on_20_August_2018.jpg/1200px-HMS_Queen_Elizabeth_%28R08%29_underway_in_the_Atlantic_Ocean_on_20_August_2018.jpg',
    weapons: '112-cell VLS (YJ-21 Hypersonic AShM, HQ-9B SAM, YJ-18)',
    propulsion: '4x QC-280 Gas Turbines (112 MW)',
  },
  {
    id: 'nv-7',
    name: 'INS Arihant (SSBN-80)',
    shipClass: 'Arihant-class Nuclear Ballistic Submarine',
    vesselType: 'BALLISTIC_MISSILE_SUBMARINE',
    country: 'India',
    countryCode: 'IND',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 6000,
    maxSpeedKnots: 24.0,
    commissionedYear: 2016,
    crewComplement: 95,
    activeCount: 2,
    originCountry: 'India (Ship Building Centre, Visakhapatnam)',
    pennantNumber: 'S73',
    radarType: 'AESA',
    hasAesa: false,
    tvrScore: 86.0,
    description: 'Lead ship of India nuclear-powered ballistic missile submarines completing the sea leg of India strategic nuclear triad.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Charles_de_Gaulle_in_Toulon.jpg/1200px-Charles_de_Gaulle_in_Toulon.jpg',
    weapons: '4x VLS tubes for 12x K-15 Sagarika SLBMs or 4x K-4 SLBMs',
    propulsion: '83 MW Pressurized Light-Water Nuclear Reactor',
  },
  {
    id: 'nv-8',
    name: 'USS Virginia (SSN-774 Block V)',
    shipClass: 'Virginia-class Nuclear Fast Attack Submarine',
    vesselType: 'ATTACK_SUBMARINE',
    country: 'United States',
    countryCode: 'USA',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 10200,
    maxSpeedKnots: 32.0,
    commissionedYear: 2024,
    crewComplement: 135,
    activeCount: 22,
    originCountry: 'United States (General Dynamics Electric Boat)',
    pennantNumber: 'SSN-802',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 96.2,
    description: 'Block V variant with Virginia Payload Module (VPM) expanding Tomahawk cruise missile capacity to 40 strike missiles.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/INS_Arihant.jpg/1200px-INS_Arihant.jpg',
    weapons: '4x 533mm Torpedo tubes (Mk 48 ADCAP), 28x VPM + 12x VPT Tomahawk strike missiles',
    propulsion: 'S9G Nuclear Reactor',
  },
  {
    id: 'nv-9',
    name: 'HMS Queen Elizabeth (R08)',
    shipClass: 'Queen Elizabeth-class Aircraft Carrier',
    vesselType: 'AIRCRAFT_CARRIER',
    country: 'United Kingdom',
    countryCode: 'GBR',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 65000,
    maxSpeedKnots: 26.0,
    commissionedYear: 2017,
    crewComplement: 1600,
    activeCount: 2,
    originCountry: 'United Kingdom (Rosyth Dockyard)',
    pennantNumber: 'R08',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 90.5,
    description: 'Twin-island STOVL aircraft carrier operating 24-36 F-35B Lightning II stealth jump-jets and Merlin Mk2 ASW helicopters.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/USS_Virginia_%28SSN-774%29_underway_in_the_Atlantic_Ocean_in_2004.jpg/1200px-USS_Virginia_%28SSN-774%29_underway_in_the_Atlantic_Ocean_in_2004.jpg',
    weapons: '3x Phalanx 20mm CIWS, 4x 30mm DS30M Mk2 guns',
    propulsion: '2x Rolls-Royce MT30 Gas Turbines + 4x Diesel Gens',
  },
  {
    id: 'nv-10',
    name: 'Charles de Gaulle (R91)',
    shipClass: 'Charles de Gaulle-class Nuclear Carrier',
    vesselType: 'AIRCRAFT_CARRIER',
    country: 'France',
    countryCode: 'FRA',
    militaryBranch: 'NAVAL_AVIATION',
    status: 'ACTIVE',
    displacementTons: 42500,
    maxSpeedKnots: 27.0,
    commissionedYear: 2001,
    crewComplement: 1350,
    activeCount: 1,
    originCountry: 'France (Naval Group)',
    pennantNumber: 'R91',
    radarType: 'AESA',
    hasAesa: true,
    tvrScore: 91.0,
    description: 'European nuclear-powered CATOBAR aircraft carrier deploying Rafale-M omnirole fighters and E-2C Hawkeye AEW&C aircraft.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/PLAN_Nanchang_101_20190423.jpg/1200px-PLAN_Nanchang_101_20190423.jpg',
    weapons: 'Aster 15 SAM (32-cell Sylver A43), Sadral Mistral SAM, 20mm cannons',
    propulsion: '2x K15 Pressurized Water Nuclear Reactors',
  },
];

// ==============================================================================
// Armored Ground Vehicles & Land Fleets Dataset
// ==============================================================================
export const initialGroundVehicles = [
  {
    id: 'gv-1',
    name: 'T-90M Bhishma',
    category: 'MAIN_BATTLE_TANK',
    country: 'India',
    countryCode: 'IND',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 1300,
    reserveCount: 350,
    generation: '3rd Gen MBT',
    mainArmament: '125mm 2A46M-5 Smoothbore Gun (Refleks ATGM capable)',
    enginePowerHp: 1000.0,
    topSpeedKmh: 60.0,
    weightTons: 46.5,
    tvrScore: 84.0,
    crew: 3,
    description: 'Main battle tank with third-generation composite armor, Kontakt-5 / Relikt explosive reactive armor, and automated fire control with Catherine-FC thermal sight.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/T-90M_Proryv-3_-_Armiya2021-36.jpg/1200px-T-90M_Proryv-3_-_Armiya2021-36.jpg',
    armorProtection: 'Relikt ERA + Composite Hull / Turret',
  },
  {
    id: 'gv-2',
    name: 'M1A2 SEPv3 Abrams',
    category: 'MAIN_BATTLE_TANK',
    country: 'United States',
    countryCode: 'USA',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 2500,
    reserveCount: 2000,
    generation: '3rd Gen MBT',
    mainArmament: '120mm M256 Smoothbore Cannon',
    enginePowerHp: 1500.0,
    topSpeedKmh: 67.0,
    weightTons: 66.8,
    tvrScore: 92.5,
    crew: 4,
    description: 'System Enhancement Package version 3 featuring Trophy Active Protection System (APS), joint tactical datalinks, and depleted uranium composite armor.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/M1A2_Abrams_SEPv3_tank_in_Grafenwoehr%2C_Germany%2C_2021.jpg/1200px-M1A2_Abrams_SEPv3_tank_in_Grafenwoehr%2C_Germany%2C_2021.jpg',
    armorProtection: 'Depleted Uranium Mesh + Trophy Hard-Kill APS',
  },
  {
    id: 'gv-3',
    name: 'Type 99A MBT',
    category: 'MAIN_BATTLE_TANK',
    country: 'China',
    countryCode: 'CHN',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 1200,
    reserveCount: 400,
    generation: '3rd Gen MBT',
    mainArmament: '125mm ZPT-98 Smoothbore Gun with ATGM',
    enginePowerHp: 1500.0,
    topSpeedKmh: 80.0,
    weightTons: 55.0,
    tvrScore: 90.0,
    crew: 3,
    description: 'China premier main battle tank featuring digital battlefield management system, laser active defense countermeasure suite, and FY-4 composite ERA.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Type_99A_tank_in_2015_Victory_Day_Parade.jpg/1200px-Type_99A_tank_in_2015_Victory_Day_Parade.jpg',
    armorProtection: 'FY-4 ERA + Laser Warning Active Countermeasure',
  },
  {
    id: 'gv-4',
    name: 'T-90M Proryv-3',
    category: 'MAIN_BATTLE_TANK',
    country: 'Russia',
    countryCode: 'RUS',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 400,
    reserveCount: 150,
    generation: '3rd Gen MBT',
    mainArmament: '125mm 2A46M-5 Smoothbore Cannon',
    enginePowerHp: 1130.0,
    topSpeedKmh: 60.0,
    weightTons: 48.0,
    tvrScore: 86.5,
    crew: 3,
    description: 'Modernized Russian frontline main battle tank with Relikt ERA, Kalina automated fire control system, and Afghanit-derived countermeasures.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/T-14_Armata_Alabino_2015_01.jpg/1200px-T-14_Armata_Alabino_2015_01.jpg',
    armorProtection: 'Relikt Modular ERA + Slat Cage Shields',
  },
  {
    id: 'gv-5',
    name: 'Challenger 3',
    category: 'MAIN_BATTLE_TANK',
    country: 'United Kingdom',
    countryCode: 'GBR',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 148,
    reserveCount: 50,
    generation: '3rd Gen MBT',
    mainArmament: '120mm Rheinmetall L55A1 Smoothbore Gun',
    enginePowerHp: 1500.0,
    topSpeedKmh: 60.0,
    weightTons: 64.0,
    tvrScore: 89.0,
    crew: 4,
    description: 'Next-generation digitized British MBT with Trophy APS, modular armor, and high-velocity kinetic energy APFSDS penetrators.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg/1200px-Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg',
    armorProtection: 'Farnham & Epsom Modular Armor + Trophy APS',
  },
  {
    id: 'gv-6',
    name: 'K9 Vajra-T',
    category: 'ARTILLERY',
    country: 'India',
    countryCode: 'IND',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 200,
    reserveCount: 100,
    generation: 'Tracked Self-Propelled Howitzer',
    mainArmament: '155mm / 52-calibre Long-Range Gun (40-50 km range)',
    enginePowerHp: 1000.0,
    topSpeedKmh: 67.0,
    weightTons: 47.0,
    tvrScore: 88.0,
    crew: 5,
    description: 'Self-propelled 155mm howitzer adapted for high-altitude Ladakh deployments and desert strike brigades with automated burst-firing capability.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/K9_Vajra-T_at_Republic_Day_Parade_2020.jpg/1200px-K9_Vajra-T_at_Republic_Day_Parade_2020.jpg',
    armorProtection: 'All-Welded Steel Armor (14.5mm AP protection)',
  },
  {
    id: 'gv-7',
    name: 'M2A4 Bradley IFV',
    category: 'IFV',
    country: 'United States',
    countryCode: 'USA',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 2800,
    reserveCount: 1200,
    generation: 'Infantry Fighting Vehicle',
    mainArmament: '25mm M242 Bushmaster Chain Gun + TOW-2B Missiles',
    enginePowerHp: 675.0,
    topSpeedKmh: 61.0,
    weightTons: 36.0,
    tvrScore: 87.0,
    crew: 3,
    description: 'Upgraded infantry fighting vehicle with high-bandwidth tactical computing, Iron Fist APS integration, and Bradley Urban Survivability Kit.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/M2A4_Bradley_Fighting_Vehicle.jpg/1200px-M2A4_Bradley_Fighting_Vehicle.jpg',
    armorProtection: 'Aluminum / Steel Laminate + Reactive Tiles',
  },
  {
    id: 'gv-8',
    name: 'S-400 Triumf (Transporter Erector Launcher)',
    category: 'AIR_DEFENSE',
    country: 'India',
    countryCode: 'IND',
    militaryBranch: 'ARMY_AVIATION',
    status: 'ACTIVE',
    activeCount: 5,
    reserveCount: 0,
    generation: 'Long-Range Surface-to-Air Missile System',
    mainArmament: '40N6E (400 km) & 48N6DM (250 km) Multi-Layer Interceptors',
    enginePowerHp: 500.0,
    topSpeedKmh: 60.0,
    weightTons: 33.0,
    tvrScore: 97.0,
    crew: 3,
    description: 'Multi-layer strategic air defense system capable of engaging stealth aircraft, cruise missiles, and intermediate ballistic targets up to 400 km.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/5P85TE2_TEL_of_S-400_system_-_ParkPatriot2015part1-39.jpg/1200px-5P85TE2_TEL_of_S-400_system_-_ParkPatriot2015part1-39.jpg',
    armorProtection: 'Mobile 8x8 All-Terrain Armored Chassis (BAZ-64022)',
  },
];

export const initialWeaponsData = [
  {
    id: 'w-1',
    name: 'Meteor BVRAAM',
    type: 'BVR_AAM',
    manufacturer: 'MBDA',
    originCountry: 'Europe',
    guidance: 'Active Radar Homing / Solid Fuel Ramjet',
    maxRangeKm: 200,
    speedMach: 4.0,
    warheadKg: 25,
    description: 'Beyond-visual-range air-to-air missile with throttleable ducted ramjet engine for unrivaled no-escape zone (>60 km).',
  },
  {
    id: 'w-2',
    name: 'BrahMos-A ALCM',
    type: 'LAND_ATTACK_CRUISE_MISSILE',
    manufacturer: 'BrahMos Aerospace (DRDO / NPO Mashinostroyeniya)',
    originCountry: 'India / Russia',
    guidance: 'Active Radar / GPS / G3OM Indian Satellite Navigation',
    maxRangeKm: 450,
    speedMach: 3.0,
    warheadKg: 300,
    description: 'Air-launched supersonic standoff cruise missile capable of Mach 3 sea-skimming and deep terminal dive.',
  },
  {
    id: 'w-3',
    name: 'Astra Mk1 BVRAAM',
    type: 'BVR_AAM',
    manufacturer: 'Bharat Dynamics Limited (DRDO)',
    originCountry: 'India',
    guidance: 'Active Radar Homing / Mid-Course Datalink',
    maxRangeKm: 110,
    speedMach: 4.5,
    warheadKg: 15,
    description: 'Indigenous all-weather beyond-visual-range air-to-air missile with smokeless solid propellant.',
  },
  {
    id: 'w-4',
    name: 'AIM-120D AMRAAM',
    type: 'BVR_AAM',
    manufacturer: 'Raytheon Technologies',
    originCountry: 'United States',
    guidance: 'Active Radar Homing / Two-Way GPS Datalink',
    maxRangeKm: 160,
    speedMach: 4.0,
    warheadKg: 20,
    description: 'Premier US BVR air-to-air missile featuring high-off-boresight capability and extended range envelope.',
  },
  {
    id: 'w-5',
    name: 'PL-15 BVRAAM',
    type: 'BVR_AAM',
    manufacturer: 'Aviation Industry Corporation of China (AVIC)',
    originCountry: 'China',
    guidance: 'Active AESA Radar Seeker / Two-Way Datalink',
    maxRangeKm: 200,
    speedMach: 4.5,
    warheadKg: 22,
    description: 'Dual-pulse solid rocket motor active-radar air-to-air missile equipping J-20A and J-16 fighters.',
  },
  {
    id: 'w-6',
    name: 'SCALP EG / Storm Shadow',
    type: 'LAND_ATTACK_CRUISE_MISSILE',
    manufacturer: 'MBDA',
    originCountry: 'France / United Kingdom',
    guidance: 'GPS / INS / Terrain Reference / IIR Terminal Seeker',
    maxRangeKm: 560,
    speedMach: 0.8,
    warheadKg: 450,
    description: 'Deep-penetration stealth cruise missile carrying BROACH multi-stage tandem warhead for hardened targets.',
  },
  {
    id: 'w-7',
    name: 'Rudram-1 NGARM',
    type: 'ANTI_RADIATION_MISSILE',
    manufacturer: 'DRDO',
    originCountry: 'India',
    guidance: 'Passive Radar Homing / Millimetric Wave Active Terminal',
    maxRangeKm: 140,
    speedMach: 2.0,
    warheadKg: 55,
    description: 'Next-generation anti-radiation missile designed to neutralize hostile air defense radars across multiple frequency bands.',
  },
];
