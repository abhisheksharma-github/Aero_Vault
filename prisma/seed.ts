import {
  PrismaClient,
  AircraftCategory,
  AircraftGeneration,
  Era,
  StealthLevel,
  RadarType,
  ConfidenceLevel,
  WeaponType,
  AircraftStatus,
  MilitaryBranch,
  SitrepCategory,
  DomainType,
  NavalVesselType,
  GroundVehicleCategory,
} from '@prisma/client';
import {
  vaultCountries,
  vaultForceProfiles,
  vaultIntelligence,
  vaultAircraft,
  vaultNaval,
  vaultLand,
  vaultWeapons,
  vaultSitrep,
  vaultManufacturers,
} from '../src/data/vaultLoader.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🛡️ Starting AeroVault Seed via JSON Vault Loader...');

  // 1. Seed Countries and Military Branches
  console.log(`🌍 Seeding ${vaultCountries.length} Countries...`);
  for (const c of vaultCountries) {
    const country = await prisma.country.upsert({
      where: { name: c.name },
      update: {
        countryCode: c.countryCode,
        isoCode: c.isoCode,
        flag: c.flag,
        region: c.region,
        description: c.description,
      },
      create: {
        id: c.id,
        name: c.name,
        countryCode: c.countryCode,
        isoCode: c.isoCode,
        flag: c.flag,
        region: c.region,
        description: c.description,
      },
    });

    if (c.militaryBranches && c.militaryBranches.length > 0) {
      for (const b of c.militaryBranches) {
        await prisma.militaryBranchEntity.upsert({
          where: {
            countryId_branchName: {
              countryId: country.id,
              branchName: b.name,
            },
          },
          update: {
            branchType: b.type,
            officialName: b.officialName,
            description: b.description,
          },
          create: {
            countryId: country.id,
            branchName: b.name,
            branchType: b.type,
            officialName: b.officialName,
            description: b.description,
          },
        });
      }
    }
  }

  // 2. Seed Manufacturers
  console.log(`🏭 Seeding ${vaultManufacturers.length} Manufacturers...`);
  for (const m of vaultManufacturers) {
    await prisma.manufacturer.upsert({
      where: { name: m.name },
      update: {
        country: m.country,
        officialWebsite: m.officialWebsite,
        description: m.description,
      },
      create: {
        id: m.id,
        name: m.name,
        country: m.country,
        officialWebsite: m.officialWebsite,
        description: m.description,
      },
    });
  }

  // 3. Seed Weapons
  console.log(`🎯 Seeding ${vaultWeapons.length} Weapons...`);
  for (const w of vaultWeapons) {
    await prisma.weapon.upsert({
      where: { name: w.name },
      update: {
        type: w.type as WeaponType,
        manufacturer: w.manufacturer,
        originCountry: w.originCountry,
        guidance: w.guidance,
        maxRangeKm: w.maxRangeKm,
        speedMach: w.speedMach,
        warheadKg: w.warheadKg,
        description: w.description,
      },
      create: {
        id: w.id,
        name: w.name,
        type: w.type as WeaponType,
        manufacturer: w.manufacturer,
        originCountry: w.originCountry,
        guidance: w.guidance,
        maxRangeKm: w.maxRangeKm,
        speedMach: w.speedMach,
        warheadKg: w.warheadKg,
        description: w.description,
      },
    });
  }

  // 4. Seed Aircraft
  console.log(`✈️ Seeding ${vaultAircraft.length} Aircraft Airframes...`);
  for (const a of vaultAircraft) {
    await prisma.aircraft.upsert({
      where: { name: a.name },
      update: {
        commonName: a.commonName,
        officialDesignation: a.officialDesignation,
        natoReportingName: a.natoReportingName,
        family: a.family,
        variant: a.variant,
        block: a.block,
        manufacturer: a.manufacturer,
        originCountry: a.originCountry,
        country: a.country,
        affiliation: a.affiliation,
        militaryBranch: (a.militaryBranch as MilitaryBranch) || MilitaryBranch.AIR_FORCE,
        serviceStatus: (a.serviceStatus as AircraftStatus) || AircraftStatus.ACTIVE,
        category: a.category as AircraftCategory,
        generation: (a.generation as AircraftGeneration) || AircraftGeneration.GEN_4,
        era: (a.era as Era) || Era.MODERN,
        role: a.role,
        secondaryRoles: a.secondaryRoles || [],
        firstFlightYear: a.firstFlightYear,
        introductionYear: a.introductionYear,
        retirementYear: a.retirementYear,
        productionCount: a.productionCount,
        fleetCount: a.fleetCount,
        activeCount: a.activeCount,
        inactiveCount: a.inactiveCount,
        retiredCount: a.retiredCount,
        engineModel: a.engineModel,
        engineCount: a.engineCount || 1,
        engineType: a.engineType,
        hasAfterburner: a.hasAfterburner ?? false,
        thrustAfterburnerKn: a.thrustAfterburnerKn,
        thrustDryKn: a.thrustDryKn,
        topSpeedMach: a.topSpeedMach,
        topSpeedKmh: a.topSpeedKmh,
        serviceCeilingM: a.serviceCeilingM,
        rateOfClimbMs: a.rateOfClimbMs,
        gLimitPositive: a.gLimitPositive,
        combatRangeKm: a.combatRangeKm,
        ferryRangeKm: a.ferryRangeKm,
        emptyWeightKg: a.emptyWeightKg,
        maxTakeoffWeightKg: a.maxTakeoffWeightKg,
        payloadCapacityKg: a.payloadCapacityKg,
        radarType: (a.radarType as RadarType) || RadarType.MECHANICAL_PULSE_DOPPLER,
        radarModel: a.radarModel,
        radarRangeAirKm: a.radarRangeAirKm,
        hasAesa: a.hasAesa ?? false,
        hasIrst: a.hasIrst ?? false,
        hasSensorFusion: a.hasSensorFusion ?? false,
        hasDatalink: a.hasDatalink ?? false,
        hasHmd: a.hasHmd ?? false,
        stealthLevel: (a.stealthLevel as StealthLevel) || StealthLevel.LOW,
        rcsEstimatedM2: a.rcsEstimatedM2,
        hasRwr: a.hasRwr ?? true,
        hasEcm: a.hasEcm ?? true,
        hasMaws: a.hasMaws ?? false,
        ewScore: a.ewScore || 50.0,
        reliabilityScore: a.reliabilityScore || 75.0,
        maintenanceHoursPerFlightHour: a.maintenanceHoursPerFlightHour,
        costPerFlightHourUsd: a.costPerFlightHourUsd,
        tvrScore: a.tvrScore || 0.0,
        confidenceLevel: (a.confidenceLevel as ConfidenceLevel) || ConfidenceLevel.VERIFIED,
        confidenceScore: a.confidenceScore || 85.0,
        sourceCount: a.sourceCount || 1,
        description: a.description || '',
        imageUrl: a.imageUrl || '',
      },
      create: {
        id: a.id,
        name: a.name,
        commonName: a.commonName,
        officialDesignation: a.officialDesignation,
        natoReportingName: a.natoReportingName,
        family: a.family,
        variant: a.variant,
        block: a.block,
        manufacturer: a.manufacturer,
        originCountry: a.originCountry,
        country: a.country,
        affiliation: a.affiliation,
        militaryBranch: (a.militaryBranch as MilitaryBranch) || MilitaryBranch.AIR_FORCE,
        serviceStatus: (a.serviceStatus as AircraftStatus) || AircraftStatus.ACTIVE,
        category: a.category as AircraftCategory,
        generation: (a.generation as AircraftGeneration) || AircraftGeneration.GEN_4,
        era: (a.era as Era) || Era.MODERN,
        role: a.role,
        secondaryRoles: a.secondaryRoles || [],
        firstFlightYear: a.firstFlightYear,
        introductionYear: a.introductionYear,
        retirementYear: a.retirementYear,
        productionCount: a.productionCount,
        fleetCount: a.fleetCount,
        activeCount: a.activeCount,
        inactiveCount: a.inactiveCount,
        retiredCount: a.retiredCount,
        engineModel: a.engineModel,
        engineCount: a.engineCount || 1,
        engineType: a.engineType,
        hasAfterburner: a.hasAfterburner ?? false,
        thrustAfterburnerKn: a.thrustAfterburnerKn,
        thrustDryKn: a.thrustDryKn,
        topSpeedMach: a.topSpeedMach,
        topSpeedKmh: a.topSpeedKmh,
        serviceCeilingM: a.serviceCeilingM,
        rateOfClimbMs: a.rateOfClimbMs,
        gLimitPositive: a.gLimitPositive,
        combatRangeKm: a.combatRangeKm,
        ferryRangeKm: a.ferryRangeKm,
        emptyWeightKg: a.emptyWeightKg,
        maxTakeoffWeightKg: a.maxTakeoffWeightKg,
        payloadCapacityKg: a.payloadCapacityKg,
        radarType: (a.radarType as RadarType) || RadarType.MECHANICAL_PULSE_DOPPLER,
        radarModel: a.radarModel,
        radarRangeAirKm: a.radarRangeAirKm,
        hasAesa: a.hasAesa ?? false,
        hasIrst: a.hasIrst ?? false,
        hasSensorFusion: a.hasSensorFusion ?? false,
        hasDatalink: a.hasDatalink ?? false,
        hasHmd: a.hasHmd ?? false,
        stealthLevel: (a.stealthLevel as StealthLevel) || StealthLevel.LOW,
        rcsEstimatedM2: a.rcsEstimatedM2,
        hasRwr: a.hasRwr ?? true,
        hasEcm: a.hasEcm ?? true,
        hasMaws: a.hasMaws ?? false,
        ewScore: a.ewScore || 50.0,
        reliabilityScore: a.reliabilityScore || 75.0,
        maintenanceHoursPerFlightHour: a.maintenanceHoursPerFlightHour,
        costPerFlightHourUsd: a.costPerFlightHourUsd,
        tvrScore: a.tvrScore || 0.0,
        confidenceLevel: (a.confidenceLevel as ConfidenceLevel) || ConfidenceLevel.VERIFIED,
        confidenceScore: a.confidenceScore || 85.0,
        sourceCount: a.sourceCount || 1,
        description: a.description || '',
        imageUrl: a.imageUrl || '',
      },
    });
  }

  // 5. Seed CountryForceProfiles
  console.log(`📊 Seeding ${vaultForceProfiles.length} CountryForceProfiles...`);
  for (const fp of vaultForceProfiles) {
    await prisma.countryForceProfile.upsert({
      where: { countryCode: fp.countryCode },
      update: fp,
      create: fp,
    });
  }

  // 6. Seed SitrepEvents
  console.log(`📡 Seeding ${vaultSitrep.length} SitrepEvents...`);
  for (const ev of vaultSitrep) {
    await prisma.sitrepEvent.upsert({
      where: { id: ev.id },
      update: {
        eventType: ev.eventType as SitrepCategory,
        domain: ev.domain as DomainType,
        country: ev.country,
        countryCode: ev.countryCode,
        countryFlag: ev.countryFlag,
        entityName: ev.entityName,
        location: ev.location,
        summary: ev.summary,
        sourceUrl: ev.sourceUrl,
        confidence: ev.confidence as ConfidenceLevel,
        eventDate: new Date(ev.eventDate),
      },
      create: {
        id: ev.id,
        eventType: ev.eventType as SitrepCategory,
        domain: ev.domain as DomainType,
        country: ev.country,
        countryCode: ev.countryCode,
        countryFlag: ev.countryFlag,
        entityName: ev.entityName,
        location: ev.location,
        summary: ev.summary,
        sourceUrl: ev.sourceUrl,
        confidence: ev.confidence as ConfidenceLevel,
        eventDate: new Date(ev.eventDate),
      },
    });
  }

  // 7. Seed NavalVessels
  console.log(`⚓ Seeding ${vaultNaval.length} NavalVessels...`);
  for (const nv of vaultNaval) {
    await prisma.navalVessel.upsert({
      where: { name: nv.name },
      update: {
        shipClass: nv.shipClass,
        vesselType: nv.vesselType as NavalVesselType,
        country: nv.country,
        countryCode: nv.countryCode,
        militaryBranch: (nv.militaryBranch as MilitaryBranch) || MilitaryBranch.NAVAL_AVIATION,
        status: (nv.status as AircraftStatus) || AircraftStatus.ACTIVE,
        displacementTons: nv.displacementTons,
        maxSpeedKnots: nv.maxSpeedKnots,
        commissionedYear: nv.commissionedYear,
        crewComplement: nv.crewComplement,
        activeCount: nv.activeCount || 1,
        originCountry: nv.originCountry,
        pennantNumber: nv.pennantNumber,
        radarType: (nv.radarType as RadarType) || RadarType.AESA,
        hasAesa: nv.hasAesa ?? true,
        tvrScore: nv.tvrScore || 70.0,
        description: nv.description,
        imageUrl: nv.imageUrl,
      },
      create: {
        id: nv.id,
        name: nv.name,
        shipClass: nv.shipClass,
        vesselType: nv.vesselType as NavalVesselType,
        country: nv.country,
        countryCode: nv.countryCode,
        militaryBranch: (nv.militaryBranch as MilitaryBranch) || MilitaryBranch.NAVAL_AVIATION,
        status: (nv.status as AircraftStatus) || AircraftStatus.ACTIVE,
        displacementTons: nv.displacementTons,
        maxSpeedKnots: nv.maxSpeedKnots,
        commissionedYear: nv.commissionedYear,
        crewComplement: nv.crewComplement,
        activeCount: nv.activeCount || 1,
        originCountry: nv.originCountry,
        pennantNumber: nv.pennantNumber,
        radarType: (nv.radarType as RadarType) || RadarType.AESA,
        hasAesa: nv.hasAesa ?? true,
        tvrScore: nv.tvrScore || 70.0,
        description: nv.description,
        imageUrl: nv.imageUrl,
      },
    });
  }

  // 8. Seed GroundVehicles
  console.log(`🚜 Seeding ${vaultLand.length} GroundVehicles...`);
  for (const gv of vaultLand) {
    await prisma.groundVehicle.upsert({
      where: { name: gv.name },
      update: {
        category: gv.category as GroundVehicleCategory,
        country: gv.country,
        countryCode: gv.countryCode,
        militaryBranch: (gv.militaryBranch as MilitaryBranch) || MilitaryBranch.ARMY_AVIATION,
        status: (gv.status as AircraftStatus) || AircraftStatus.ACTIVE,
        activeCount: gv.activeCount || 0,
        reserveCount: gv.reserveCount || 0,
        generation: gv.generation,
        mainArmament: gv.mainArmament,
        enginePowerHp: gv.enginePowerHp,
        topSpeedKmh: gv.topSpeedKmh,
        weightTons: gv.weightTons,
        tvrScore: gv.tvrScore || 70.0,
        description: gv.description,
        imageUrl: gv.imageUrl,
      },
      create: {
        id: gv.id,
        name: gv.name,
        category: gv.category as GroundVehicleCategory,
        country: gv.country,
        countryCode: gv.countryCode,
        militaryBranch: (gv.militaryBranch as MilitaryBranch) || MilitaryBranch.ARMY_AVIATION,
        status: (gv.status as AircraftStatus) || AircraftStatus.ACTIVE,
        activeCount: gv.activeCount || 0,
        reserveCount: gv.reserveCount || 0,
        generation: gv.generation,
        mainArmament: gv.mainArmament,
        enginePowerHp: gv.enginePowerHp,
        topSpeedKmh: gv.topSpeedKmh,
        weightTons: gv.weightTons,
        tvrScore: gv.tvrScore || 70.0,
        description: gv.description,
        imageUrl: gv.imageUrl,
      },
    });
  }

  // 9. Seed NationIntelligence
  console.log(`🌐 Seeding ${vaultIntelligence.length} NationIntelligence Records...`);
  for (const ni of vaultIntelligence) {
    await prisma.nationIntelligence.upsert({
      where: { countryName: ni.countryName },
      update: ni,
      create: ni,
    });
  }

  console.log('✅ AeroVault Seed Complete via JSON Vault Loader.');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
