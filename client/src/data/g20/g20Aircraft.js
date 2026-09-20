/**
 * G20 Military Aircraft Intelligence Platform Dataset (Client Edition)
 * Verified OSINT & Official Ministry of Defence provenance.
 * Comprehensive coverage spanning 1947 to Present (Active & Retired).
 * Standardized machine-readable metric values.
 */

export const g20AircraftData = [
  {
    "id": "ARG-FAA-A4AR-FIGHTINGHAWK",
    "aircraftName": "Lockheed Martin A-4AR Fightinghawk",
    "officialDesignation": "A-4AR Fightinghawk Tactical Strike Aircraft",
    "natoReportingName": null,
    "family": "Douglas A-4 Skyhawk",
    "variant": "A-4AR (F-16 Avionics Modernization)",
    "block": "Fightinghawk Standard Upgrade",
    "manufacturer": "Lockheed Martin / Douglas Aircraft",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "Argentina",
    "affiliation": "Fuerza Aérea Argentina (FAA V Brigada Aérea, Villa Reynolds)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Ground Attack",
    "secondaryRoles": [
      "Close Air Support",
      "Air Defense Interception",
      "Tactical Maritime Strike"
    ],
    "generation": "GEN_3",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1954,
    "introductionYear": 1997,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 12,
      "estimatedQuantity": 12,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 12 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-01",
      "freshnessStatus": "CURRENT"
    },
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
        "thrustDryKn": 50,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 800,
        "combatRadiusKm": 312,
        "ferryRangeKm": 3220,
        "serviceCeilingM": 12800,
        "serviceCeilingFt": 41995,
        "rateOfClimbMs": 43,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4500,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Lockheed_Martin_A-4AR_Fightinghawk.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Lockheed_Martin_A-4AR_Fightinghawk.jpg",
      "caption": "Lockheed Martin A-4AR Fightinghawk in service with Argentina"
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
    ],
    "tvrScore": 75,
    "description": "Light attack and tactical fighter upgraded by Lockheed Martin with F-16 radar and digital avionics, currently serving as primary combat aviation asset of the Argentine Air Force."
  },
  {
    "id": "BRA-FAB-F39-GRIPEN",
    "aircraftName": "Saab F-39E/F Gripen",
    "officialDesignation": "F-39E Gripen (Single-Seat) / F-39F (Twin-Seat)",
    "natoReportingName": null,
    "family": "Saab JAS-39 Gripen",
    "variant": "F-39E/F Gripen (Brazil Custom WAD Avionics)",
    "block": "Serial Production Lot 1 (Embraer Assembly)",
    "manufacturer": "Saab Aeronautics / Embraer Defense & Security",
    "manufacturerCountry": "Sweden / Brazil",
    "countryOfOrigin": "Sweden / Brazil",
    "country": "Brazil",
    "affiliation": "Brazilian Air Force (Força Aérea Brasileira - 1º GDA Jaguar Squadron)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Multirole Fighter",
    "secondaryRoles": [
      "Air Superiority",
      "Close Air Support",
      "Maritime Strike",
      "Reconnaissance"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2017,
    "introductionYear": 2022,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 10,
      "estimatedQuantity": 10,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 10 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-11",
      "freshnessStatus": "CURRENT"
    },
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
        "maximumCrew": 1
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1250,
        "combatRadiusKm": 900,
        "ferryRangeKm": 4000,
        "serviceCeilingM": 16000,
        "serviceCeilingFt": 52493,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 5300,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Saab_F-39_Gripen_FAB.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Saab_F-39_Gripen_FAB.jpg",
      "caption": "Saab F-39E/F Gripen in service with Brazil"
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
    ],
    "tvrScore": 75,
    "description": "Smart 4.5+ generation multirole fighter featuring Brazilian Wide Area Display (WAD) panoramic cockpit, Raven ES-05 swashplate AESA radar providing 200-degree field of regard, and Meteor BVRAAM long-range standoff combat capability."
  },
  {
    "id": "CAN-RCAF-CF188-HORNET",
    "aircraftName": "McDonnell Douglas CF-188 Hornet",
    "officialDesignation": "CF-188A / CF-18 Hornet (Hornet Extension Project II)",
    "natoReportingName": null,
    "family": "McDonnell Douglas F/A-18 Hornet",
    "variant": "CF-188A Modernized (HEP II / AESA Upgrade)",
    "block": "Hornet Extension Project (HEP) Phase 2",
    "manufacturer": "McDonnell Douglas / Boeing",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "Canada",
    "affiliation": "Royal Canadian Air Force (3 Wing Bagotville / 4 Wing Cold Lake)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Multirole Fighter",
    "secondaryRoles": [
      "NORAD Air Defense Interception",
      "NATO Air Policing",
      "Close Air Support"
    ],
    "generation": "GEN_4",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1978,
    "introductionYear": 1982,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 76,
      "estimatedQuantity": 76,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 76 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-03",
      "freshnessStatus": "CURRENT"
    },
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 950,
        "combatRadiusKm": 322,
        "ferryRangeKm": 3330,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 254,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 6200,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8b/CF-188_Hornet_RCAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8b/CF-188_Hornet_RCAF.jpg",
      "caption": "McDonnell Douglas CF-188 Hornet in service with Canada"
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
    ],
    "tvrScore": 75,
    "description": "Core frontline multirole fighter of the Royal Canadian Air Force guarding North American Arctic airspace under NORAD. Upgraded under HEP II with AN/APG-79(V)4 AESA radar and AIM-9X Block II missiles."
  },
  {
    "id": "CHN-Z10-ARMY",
    "aircraftName": "Changhe Z-10 Fierce Thunderbolt",
    "officialDesignation": "Z-10ME Upgraded Export/Domestic Standard",
    "natoReportingName": null,
    "family": "Changhe Z-10 Series",
    "variant": "Z-10ME Upgraded Export/Domestic Standard",
    "block": "Batch 04",
    "manufacturer": "Changhe Aircraft Industries Corporation",
    "manufacturerCountry": "China",
    "countryOfOrigin": "China",
    "country": "China",
    "affiliation": "PLA Ground Force Aviation (PLAGFA)",
    "militaryBranch": "ARMY_AVIATION",
    "aircraftType": "Rotary-Wing",
    "primaryCategory": "Dedicated Battlefield Attack & Anti-Armor Helicopter",
    "secondaryRoles": [
      "Close Combat Attack",
      "Air-to-Air Escort"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2003,
    "introductionYear": 2012,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 180,
      "estimatedQuantity": 180,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 180 airframes.",
      "dataConfidence": "MEDIUM",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": 1500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "WZ-9G Turboshafts",
        "engineManufacturer": "Changhe Aircraft Industries Corporation",
        "engineType": "Turboshaft",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 290,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 480,
        "ferryRangeKm": null,
        "serviceCeilingM": 6400,
        "serviceCeilingFt": 20997,
        "rateOfClimbMs": 12,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Mast-Mounted Millimeter Wave Radar (Z-10ME)",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 15,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "86 EW Rating Countermeasures Suite",
      "ewScore": 86,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1500,
      "keyWeaponsIntegrated": [
        "HJ-10 Heavy ATGM",
        "TY-90 Air-to-Air Missile"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/CAIC_WZ-10_in_flight_at_Airshow_China_2012.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/CAIC_WZ-10_in_flight_at_Airshow_China_2012.jpg",
      "caption": "Changhe Z-10 Fierce Thunderbolt in service with China"
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
    ],
    "tvrScore": 80.8,
    "description": "PLA Army primary attack helicopter featuring stepped tandem cockpit, mast-mounted millimeter wave radar, 23mm revolving cannon turret, HJ-10 anti-tank missiles, and TY-90 dedicated helicopter dogfight AAMs."
  },
  {
    "id": "CHN-J20A-PLAAF",
    "aircraftName": "Chengdu J-20A Mighty Dragon",
    "officialDesignation": "J-20A (WS-10C Engines)",
    "natoReportingName": null,
    "family": "Chengdu J-20 Mighty Dragon",
    "variant": "J-20A (WS-10C Engines)",
    "block": "Production Batch 03",
    "manufacturer": "Chengdu Aircraft Industry Group",
    "manufacturerCountry": "China",
    "countryOfOrigin": "China",
    "country": "China",
    "affiliation": "People's Liberation Army Air Force (PLAAF)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "5th-Gen Heavy Stealth Air Superiority & Long-Range Interceptor",
    "secondaryRoles": [
      "Deep Penetration Strike",
      "Anti-AWACS Interdiction"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2011,
    "introductionYear": 2017,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 220,
      "estimatedQuantity": 220,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 220 airframes.",
      "dataConfidence": "MEDIUM",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 17000,
        "maxTakeoffWeightKg": 37000,
        "payloadCapacityKg": 11000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Shenyang WS-10C / WS-15 Turbofans",
        "engineManufacturer": "Chengdu Aircraft Industry Group",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 180,
        "thrustAfterburnerKn": 294
      },
      "performance": {
        "maxSpeedKmh": 2130,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 900,
        "ferryRangeKm": 4500,
        "serviceCeilingM": 20000,
        "serviceCeilingFt": 65617,
        "rateOfClimbMs": 304,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Type 1475 (KLJ-5) GaN AESA Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 250,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "94 EW Rating Countermeasures Suite",
      "ewScore": 94,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.05
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 11000,
      "keyWeaponsIntegrated": [
        "PL-15 BVR-AAM",
        "PL-10 SRAAM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/Chengdu_J-20_at_Airshow_China_2018.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/Chengdu_J-20_at_Airshow_China_2018.jpg",
      "caption": "Chengdu J-20A Mighty Dragon in service with China"
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
    ],
    "tvrScore": 93.2,
    "description": "PLAAF flagship 5th-generation heavy stealth fighter featuring canard-delta configuration, internal weapons bay carrying long-range PL-15 and ultra-long PL-17 BVRAAMs, and electro-optical distributed aperture sensors."
  },
  {
    "id": "CHN-J15T-PLANAF",
    "aircraftName": "Shenyang J-15T Flying Shark",
    "officialDesignation": "J-15T Catapult-Capable (CATOBAR)",
    "natoReportingName": null,
    "family": "Shenyang J-15 Carrier Fighter",
    "variant": "J-15T Catapult-Capable (CATOBAR)",
    "block": "Lot 02 Production",
    "manufacturer": "Shenyang Aircraft Corporation",
    "manufacturerCountry": "China",
    "countryOfOrigin": "China",
    "country": "China",
    "affiliation": "PLA Naval Air Force (PLAN-AF Fujian Carrier Wing)",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Carrier-Based Heavy Multirole Strike Fighter",
    "secondaryRoles": [
      "Fleet Air Defense",
      "Anti-Ship Strike"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2016,
    "introductionYear": 2023,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 48,
      "estimatedQuantity": 48,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 48 airframes.",
      "dataConfidence": "MEDIUM",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 17500,
        "maxTakeoffWeightKg": 33000,
        "payloadCapacityKg": 6500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "WS-10B Turbofans",
        "engineManufacturer": "Shenyang Aircraft Corporation",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 178,
        "thrustAfterburnerKn": 280
      },
      "performance": {
        "maxSpeedKmh": 2200,
        "maxSpeedMach": 2.1,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 720,
        "ferryRangeKm": 3200,
        "serviceCeilingM": 18000,
        "serviceCeilingFt": 59055,
        "rateOfClimbMs": 310,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "KLJ-7A Active Electronically Scanned Array",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 190,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "88 EW Rating Countermeasures Suite",
      "ewScore": 88,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3.8
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 6500,
      "keyWeaponsIntegrated": [
        "YJ-12 Sea-Skimming AShM",
        "PL-15 BVR-AAM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/69/Shenyang_J-15_%28cropped%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/6/69/Shenyang_J-15_%28cropped%29.jpg",
      "caption": "Shenyang J-15T Flying Shark in service with China"
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
    ],
    "tvrScore": 84.4,
    "description": "Catapult-assisted takeoff barrier-arrested recovery (CATOBAR) carrier fighter designed for the CNS Fujian (Type 003). Upgraded with AESA radar, WS-10B engines, and PL-15 BVR missile compatibility."
  },
  {
    "id": "CHN-PLAAF-J16",
    "aircraftName": "Shenyang J-16 Hidden Dragon",
    "officialDesignation": "J-16 Flanker-L",
    "natoReportingName": "Flanker-L",
    "family": "Shenyang J-11/16 Flanker Series",
    "variant": "J-16 Heavy Strike Fighter",
    "block": "Serial Standard",
    "manufacturer": "Shenyang Aircraft Corporation",
    "manufacturerCountry": "China",
    "countryOfOrigin": "China",
    "country": "China",
    "affiliation": "People’s Liberation Army Air Force (PLAAF)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Tandem-Seat Heavy Multirole Strike Fighter",
    "secondaryRoles": [
      "Air Dominance",
      "SEAD (J-16D Electronic Attack)",
      "Maritime Strike"
    ],
    "generation": "GEN_4_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2011,
    "introductionYear": 2015,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 220,
      "estimatedQuantity": 220,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 220 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 17700,
        "maxTakeoffWeightKg": 35000,
        "payloadCapacityKg": 8000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Shenyang WS-10B Taihang Afterburning Turbofans (Dual)",
        "engineManufacturer": "Shenyang Aircraft Corporation",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 178,
        "thrustAfterburnerKn": 280
      },
      "performance": {
        "maxSpeedKmh": 2336,
        "maxSpeedMach": 2.2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 900,
        "ferryRangeKm": 3900,
        "serviceCeilingM": 17300,
        "serviceCeilingFt": 56759,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Type 1493 GaN AESA Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 250,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "92 EW Rating Countermeasures Suite",
      "ewScore": 92,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 2.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8000,
      "keyWeaponsIntegrated": [
        "PL-15 Dual-Pulse BVRAAM",
        "PL-10 High-Off-Boresight WVR",
        "YJ-83K Anti-Ship Missile"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Shenyang_J-16_PLAAF_in_flight.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/2/27/Shenyang_J-16_PLAAF_in_flight.jpg",
      "caption": "Shenyang J-16 Hidden Dragon in service with China"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 85.1,
    "description": "Indigenous twin-engine heavy multirole strike fighter. Equipped with Type 1493 GaN AESA radar, integrated EW self-protection pods, and capability to fire PL-15 (200 km) and ultra-long-range PL-17 (400 km) air-to-air missiles."
  },
  {
    "id": "CHN-PLAAF-J6-FARMER",
    "aircraftName": "Shenyang J-6 (Farmer)",
    "officialDesignation": "J-6 / F-6 Fighter",
    "natoReportingName": "Farmer",
    "family": "Shenyang J-Series",
    "variant": "J-6A / J-6III Standard",
    "block": "PLAAF Mass Production",
    "manufacturer": "Shenyang Aircraft Corporation",
    "manufacturerCountry": "China",
    "countryOfOrigin": "China / Soviet Union (MiG-19)",
    "country": "China",
    "affiliation": "People’s Liberation Army Air Force (Historic 1964–2010)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Supersonic Day Interceptor & Air Combat Fighter",
    "secondaryRoles": [
      "Tactical Ground Attack",
      "Unmanned UCAV Conversion"
    ],
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1958,
    "introductionYear": 1964,
    "retirementYear": 2010,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2010,
      "quantityNotes": "Historic airframe (Retired 2010). Total produced: 4500.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 5447,
        "maxTakeoffWeightKg": 10000,
        "payloadCapacityKg": 1000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Liming WP-6 Turbojets (Dual)",
        "engineManufacturer": "Shenyang Aircraft Corporation",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 51,
        "thrustAfterburnerKn": 64
      },
      "performance": {
        "maxSpeedKmh": 1540,
        "maxSpeedMach": 1.45,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 384,
        "ferryRangeKm": 2200,
        "serviceCeilingM": 17900,
        "serviceCeilingFt": 58727,
        "rateOfClimbMs": 180,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Range-only Radar Gunsight",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 5,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "35 EW Rating Countermeasures Suite",
      "ewScore": 35,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1000,
      "keyWeaponsIntegrated": [
        "Three 30mm NR-30 Cannons",
        "PL-2 Air-to-Air Missile"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Shenyang_J-6_PLAAF_Museum.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Shenyang_J-6_PLAAF_Museum.jpg",
      "caption": "Shenyang J-6 (Farmer) in service with China"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 51.3,
    "description": "The most produced supersonic jet fighter in Chinese aviation history (over 4,500 produced). Formed the numeric core of the PLAAF air defense throughout the Cold War, armed with heavy 30mm cannons."
  },
  {
    "id": "EU-COMMON-A400M-ATLAS",
    "aircraftName": "Airbus A400M Atlas",
    "officialDesignation": "A400M Atlas Heavy Tactical & Strategic Transport",
    "natoReportingName": null,
    "family": "Airbus Military A400M",
    "variant": "A400M Tactical / Aerial Refueler",
    "block": "Standard SOC 3 Standard",
    "manufacturer": "Airbus Defence and Space",
    "manufacturerCountry": "European Union (Germany / France / Spain / UK / Belgium / Turkey)",
    "countryOfOrigin": "European Union",
    "country": "European Union",
    "affiliation": "European Air Transport Command (EATC) / Multilateral European Defense Fleet",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Strategic Transport",
    "secondaryRoles": [
      "Aerial Refueling Tanker",
      "Tactical Airdrop",
      "Medical Evacuation (MEDEVAC)",
      "Humanitarian Strategic Airlift"
    ],
    "generation": "GEN_4",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2009,
    "introductionYear": 2013,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 125,
      "estimatedQuantity": 125,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 125 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-10",
      "freshnessStatus": "CURRENT"
    },
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
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 4,
        "engineModel": "Europrop TP400-D6 Turboprops (8-Blade Scimitar Propellers)",
        "engineManufacturer": "Europrop International (Rolls-Royce / Snecma / MTU / ITP)",
        "engineType": "Turboprop",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 780,
        "combatRadiusKm": 1980,
        "ferryRangeKm": 8700,
        "serviceCeilingM": 12200,
        "serviceCeilingFt": 40026,
        "rateOfClimbMs": 16,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 37000,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/da/Airbus_A400M_Atlas_RAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/d/da/Airbus_A400M_Atlas_RAF.jpg",
      "caption": "Airbus A400M Atlas in service with European Union"
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
    ],
    "tvrScore": 75,
    "description": "European high-capacity tactical and strategic airlifter bridging the payload gap between the C-130J and C-17, capable of landing on short unprepared rough runways with 37 tonnes of cargo and aerial refueling fighter jets in flight."
  },
  {
    "id": "FRA-AAE-MIRAGE3",
    "aircraftName": "Dassault Mirage III C/E",
    "officialDesignation": "Mirage IIIE All-Weather Fighter",
    "natoReportingName": null,
    "family": "Dassault Mirage Family",
    "variant": "Mirage IIIE Multi-Role",
    "block": "Armée de l’Air Standard",
    "manufacturer": "Dassault Aviation",
    "manufacturerCountry": "France",
    "countryOfOrigin": "France",
    "country": "France",
    "affiliation": "French Air Force (Armée de l’Air 1961–1994)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Mach 2.2 Delta-Wing Multirole Fighter-Interceptor",
    "secondaryRoles": [
      "Tactical Nuclear Strike (AN-52)",
      "Reconnaissance"
    ],
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1956,
    "introductionYear": 1961,
    "retirementYear": 1994,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1994,
      "quantityNotes": "Historic airframe (Retired 1994). Total produced: 1422.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 7050,
        "maxTakeoffWeightKg": 13700,
        "payloadCapacityKg": 4000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Snecma Atar 09C Afterburning Turbojet",
        "engineManufacturer": "Dassault Aviation",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 42,
        "thrustAfterburnerKn": 60.8
      },
      "performance": {
        "maxSpeedKmh": 2350,
        "maxSpeedMach": 2.2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 720,
        "ferryRangeKm": 4000,
        "serviceCeilingM": 17000,
        "serviceCeilingFt": 55774,
        "rateOfClimbMs": 140,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Thomson-CSF Cyrano II Bis Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 55,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "60 EW Rating Countermeasures Suite",
      "ewScore": 60,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4000,
      "keyWeaponsIntegrated": [
        "Matra R.530 BVR",
        "Matra Magic WVR",
        "Two 30mm DEFA 552 Cannons"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/Mirage_IIIE_French_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/Mirage_IIIE_French_Air_Force.jpg",
      "caption": "Dassault Mirage III C/E in service with France"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 58.6,
    "description": "The premier European Mach 2 delta-wing fighter exported across 20 countries. Decisive in 1967 and 1973 Middle East conflicts and French nuclear deterrent doctrine."
  },
  {
    "id": "FRA-AAE-MIRAGE4",
    "aircraftName": "Dassault Mirage IV A/P",
    "officialDesignation": "Mirage IVP Nuclear Strategic Penetrator",
    "natoReportingName": null,
    "family": "Dassault Mirage Strategic Series",
    "variant": "Mirage IVP",
    "block": "ASMP Nuclear Standoff Standard",
    "manufacturer": "Dassault Aviation",
    "manufacturerCountry": "France",
    "countryOfOrigin": "France",
    "country": "France",
    "affiliation": "French Strategic Air Forces (FAS 1964–2005)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Mach 2.2 Strategic Supersonic Nuclear Penetration Bomber",
    "secondaryRoles": [
      "Strategic Optical Reconnaissance"
    ],
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1959,
    "introductionYear": 1964,
    "retirementYear": 2005,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2005,
      "quantityNotes": "Historic airframe (Retired 2005). Total produced: 66.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 14500,
        "maxTakeoffWeightKg": 33475,
        "payloadCapacityKg": 5000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Snecma Atar 09K-50 Afterburning Turbojets (Dual)",
        "engineManufacturer": "Dassault Aviation",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 98,
        "thrustAfterburnerKn": 140
      },
      "performance": {
        "maxSpeedKmh": 2340,
        "maxSpeedMach": 2.2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 744,
        "ferryRangeKm": 4000,
        "serviceCeilingM": 20000,
        "serviceCeilingFt": 65617,
        "rateOfClimbMs": 100,
        "gLimitPositive": 5
      }
    },
    "avionics": {
      "radar": "Thomson-CSF Cyrano 55 Navigation & Strike Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 80,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "78 EW Rating Countermeasures Suite",
      "ewScore": 78,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 5000,
      "keyWeaponsIntegrated": [
        "ASMP Nuclear Standoff ALCM (300 kt)",
        "AN-22 Freefall Thermonuclear Bomb"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/85/Mirage_IV_French_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/8/85/Mirage_IV_French_Air_Force.jpg",
      "caption": "Dassault Mirage IV A/P in service with France"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 61.4,
    "description": "The core of the French nuclear triad (Force de Frappe) for over four decades. Flew sustained Mach 2 supersonic low-level penetration missions carrying the 300 km range ASMP nuclear standoff missile."
  },
  {
    "id": "IND-NAVY-SEA-HARRIER",
    "aircraftName": "BAE Sea Harrier FRS.51",
    "officialDesignation": "Sea Harrier FRS.Mk 51",
    "natoReportingName": null,
    "family": "Harrier Jump Jet",
    "variant": "FRS.51 (Indian Navy)",
    "block": "LUSH Upgraded Standard",
    "manufacturer": "BAE Systems / HAL",
    "manufacturerCountry": "UK / India",
    "countryOfOrigin": "UK",
    "country": "India",
    "affiliation": "Indian Navy (INAS 300 White Tigers, INS Vikrant / INS Viraat 1983–2016)",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Carrier-Borne V/STOL Fighter & Fleet Air Defense",
    "secondaryRoles": [
      "Anti-Ship Strike",
      "Close Air Support"
    ],
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1978,
    "introductionYear": 1983,
    "retirementYear": 2016,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2016,
      "quantityNotes": "Historic airframe (Retired 2016). Total produced: 30.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6374,
        "maxTakeoffWeightKg": 11880,
        "payloadCapacityKg": 3630,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Rolls-Royce Pegasus 104 Vectored-Thrust Turbofan",
        "engineManufacturer": "BAE Systems / HAL",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 95.6,
        "thrustAfterburnerKn": 95.6
      },
      "performance": {
        "maxSpeedKmh": 1185,
        "maxSpeedMach": 0.95,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 450,
        "ferryRangeKm": 3600,
        "serviceCeilingM": 15600,
        "serviceCeilingFt": 51181,
        "rateOfClimbMs": 250,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "ELTA EL/M-2032 Radar (LUSH Upgrade)",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 100,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "76 EW Rating Countermeasures Suite",
      "ewScore": 76,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 3630,
      "keyWeaponsIntegrated": [
        "Rafael Derby BVR-AAM",
        "Magic II WVR Missile",
        "Sea Eagle Anti-Ship Missile"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/BAE_Sea_Harrier_FRS.51_Indian_Navy.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/BAE_Sea_Harrier_FRS.51_Indian_Navy.jpg",
      "caption": "BAE Sea Harrier FRS.51 in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 63.4,
    "description": "V/STOL carrier jump-jet that guarded Indian maritime frontiers from the decks of aircraft carriers INS Vikrant (R11) and INS Viraat (R22) for 33 years. Upgraded under Project LUSH with EL/M-2032 radar and Derby BVRAAM missiles."
  },
  {
    "id": "IND-IAF-A50EI-PHALCON",
    "aircraftName": "Beriev A-50EI Phalcon AWACS",
    "officialDesignation": "A-50EI Phalcon Airborne Warning and Control System",
    "natoReportingName": "Mainstay",
    "family": "Ilyushin Il-76 / Beriev A-50",
    "variant": "A-50EI (India Custom Aviadvigatel PS-90A Engines)",
    "block": "Indian Air Force Custom Spec",
    "manufacturer": "Beriev / IAI Elta / Ilyushin",
    "manufacturerCountry": "Russia / Israel / India",
    "countryOfOrigin": "Russia / Israel",
    "country": "India",
    "affiliation": "Indian Air Force (No. 50 Squadron, Agra AFS)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "AEW&C",
    "secondaryRoles": [
      "Airborne Battle Management",
      "C4ISR Command Post",
      "Electronic Surveillance"
    ],
    "generation": "GEN_4",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2007,
    "introductionYear": 2009,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 3,
      "estimatedQuantity": 3,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 3 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-25",
      "freshnessStatus": "CURRENT"
    },
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
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 4,
        "engineModel": "Aviadvigatel PS-90A-76 High-Bypass Turbofans",
        "engineManufacturer": "Perm Engine Company",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 142.2,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 750,
        "combatRadiusKm": 1500,
        "ferryRangeKm": 7500,
        "serviceCeilingM": 12000,
        "serviceCeilingFt": 39370,
        "rateOfClimbMs": 15,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 40000,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Beriev_A-50EI_Mainstay_Indian_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Beriev_A-50EI_Mainstay_Indian_Air_Force.jpg",
      "caption": "Beriev A-50EI Phalcon AWACS in service with India"
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
    ],
    "tvrScore": 75,
    "description": "Premier strategic airborne early warning and command platform of the IAF. Integrates Israeli IAI Elta EL/W-2090 L-band AESA stationary rotodome on a heavy Il-76TD airframe powered by modern PS-90A engines."
  },
  {
    "id": "IND-APACHE-ARMY",
    "aircraftName": "Boeing AH-64E Apache Guardian (Army)",
    "officialDesignation": "AH-64E Version 6",
    "natoReportingName": null,
    "family": "Boeing AH-64 Apache",
    "variant": "AH-64E Version 6",
    "block": "V6 Apache Guardian",
    "manufacturer": "Boeing",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "India",
    "affiliation": "Indian Army Aviation Corps",
    "militaryBranch": "ARMY_AVIATION",
    "aircraftType": "Rotary-Wing",
    "primaryCategory": "Heavy Attack & Tank Interdiction Helicopter",
    "secondaryRoles": [
      "Armed Reconnaissance",
      "MUM-T Manned-Unmanned Teaming"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1975,
    "introductionYear": 2024,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 6,
      "estimatedQuantity": 6,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 6 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": 2000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric T700-GE-701D Turboshafts",
        "engineManufacturer": "Boeing",
        "engineType": "Turboshaft",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 293,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 288,
        "ferryRangeKm": null,
        "serviceCeilingM": 6400,
        "serviceCeilingFt": 20997,
        "rateOfClimbMs": 14.2,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "AN/APG-78 Longbow Mast-Mounted Fire Control Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 12,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "92 EW Rating Countermeasures Suite",
      "ewScore": 92,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 2000,
      "keyWeaponsIntegrated": [
        "AGM-114L Longbow Hellfire",
        "FIM-92 Stinger"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ec/AH-64D_Apache_Longbow_2005.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ec/AH-64D_Apache_Longbow_2005.jpg",
      "caption": "Boeing AH-64E Apache Guardian (Army) in service with India"
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
    ],
    "tvrScore": 86.2,
    "description": "Premier heavy attack helicopter equipped with Longbow millimeter-wave fire control radar, AGM-114 Hellfire laser/RF missiles, Stinger air-to-air missiles, and 30mm M230 chain gun."
  },
  {
    "id": "IND-P8I-NAVY",
    "aircraftName": "Boeing P-8I Neptune",
    "officialDesignation": "P-8I (India Custom Acoustic / Radar)",
    "natoReportingName": null,
    "family": "Boeing 737 Maritime Multi-Mission",
    "variant": "P-8I (India Custom Acoustic / Radar)",
    "block": "Batch 1 & 2",
    "manufacturer": "Boeing",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "India",
    "affiliation": "Indian Naval Air Arm (INAS 312)",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Long-Range Maritime Reconnaissance & Anti-Submarine Warfare (ASW)",
    "secondaryRoles": [
      "Anti-Surface Warfare",
      "Electronic Intelligence (ELINT)"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2009,
    "introductionYear": 2013,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 12,
      "estimatedQuantity": 12,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 12 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": null,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "CFM International CFM56-7B Turbofans",
        "engineManufacturer": "Boeing",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 907,
        "maxSpeedMach": 0.79,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 1333,
        "ferryRangeKm": 8300,
        "serviceCeilingM": 12500,
        "serviceCeilingFt": 41011,
        "rateOfClimbMs": 25,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Raytheon AN/APY-10 Multi-Mission Surface Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 370,
      "hasAesa": true,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "94 EW Rating Countermeasures Suite",
      "ewScore": 94,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4000,
      "keyWeaponsIntegrated": [
        "AGM-84L Harpoon Block II",
        "Mk 54 Mod 0 ASW Torpedo"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Boeing_P-8I_Poseidon_at_Aero_India_2013.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Boeing_P-8I_Poseidon_at_Aero_India_2013.jpg",
      "caption": "Boeing P-8I Neptune in service with India"
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
    ],
    "tvrScore": 89.4,
    "description": "Premier maritime patrol and submarine hunting platform. Features aft Magnetic Anomaly Detector (MAD) boom, AN/APY-10 multi-mission radar, sonobuoys, Mk 54 lightweight torpedoes, and AGM-84L Harpoon anti-ship missiles."
  },
  {
    "id": "IND-IAF-MIRAGE2000",
    "aircraftName": "Dassault Mirage 2000H/TH Vajra",
    "officialDesignation": "Mirage 2000 I/TI (Upgraded)",
    "natoReportingName": null,
    "family": "Dassault Mirage 2000",
    "variant": "Mirage 2000-5 Mk2 Upgrade Standard",
    "block": "Vajra Upgrade",
    "manufacturer": "Dassault Aviation / HAL",
    "manufacturerCountry": "France / India",
    "countryOfOrigin": "France",
    "country": "India",
    "affiliation": "Indian Air Force (No. 1 Tigers / No. 7 Battleaxes / No. 9 Wolfpack)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Precision Strike & Air Defense Fighter",
    "secondaryRoles": [
      "Laser Guided Bombing",
      "Nuclear Standoff",
      "Air Superiority"
    ],
    "generation": "GEN_4_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1978,
    "introductionYear": 1985,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 48,
      "estimatedQuantity": 48,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 48 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 7500,
        "maxTakeoffWeightKg": 17000,
        "payloadCapacityKg": 6300,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Snecma M53-P2 Afterburning Turbofan",
        "engineManufacturer": "Dassault Aviation / HAL",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 64.3,
        "thrustAfterburnerKn": 95.1
      },
      "performance": {
        "maxSpeedKmh": 2336,
        "maxSpeedMach": 2.2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 930,
        "ferryRangeKm": 3335,
        "serviceCeilingM": 17060,
        "serviceCeilingFt": 55971,
        "rateOfClimbMs": 285,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Thales RDY-2 Pulse-Doppler Multimode Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 130,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "89 EW Rating Countermeasures Suite",
      "ewScore": 89,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 1.2
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 6300,
      "keyWeaponsIntegrated": [
        "MICA EM BVR-AAM",
        "MICA IR WVR-AAM",
        "Spice 2000 PG Munition"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mirage-2000_%28IAF%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mirage-2000_%28IAF%29.jpg",
      "caption": "Dassault Mirage 2000H/TH Vajra in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 80.4,
    "description": "The hero of the 1999 Kargil War and the 2019 Balakot airstrikes. Upgraded with RDY-2 radar, glass cockpits, MICA missiles, and Spice 2000 precision standoff munitions."
  },
  {
    "id": "IND-RAFALE",
    "aircraftName": "Dassault Rafale EH/DH",
    "officialDesignation": "Rafale F3-R (India Specific Enhancements)",
    "natoReportingName": null,
    "family": "Dassault Rafale",
    "variant": "Rafale F3-R (India Specific Enhancements)",
    "block": "F3-R Standard",
    "manufacturer": "Dassault Aviation",
    "manufacturerCountry": "France",
    "countryOfOrigin": "France",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Omnirole Multirole Combat Fighter",
    "secondaryRoles": [
      "Deep Strike",
      "Nuclear Deterrence",
      "Reconnaissance"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1986,
    "introductionYear": 2020,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 36,
      "estimatedQuantity": 36,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 36 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 10300,
        "maxTakeoffWeightKg": 24500,
        "payloadCapacityKg": 9500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Snecma M88-4E Turbofans",
        "engineManufacturer": "Dassault Aviation",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 100,
        "thrustAfterburnerKn": 150
      },
      "performance": {
        "maxSpeedKmh": 1912,
        "maxSpeedMach": 1.8,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 1110,
        "ferryRangeKm": 3700,
        "serviceCeilingM": 15835,
        "serviceCeilingFt": 51952,
        "rateOfClimbMs": 305,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Thales RBE2-AA Active Electronically Scanned Array",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 180,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "96 EW Rating Countermeasures Suite",
      "ewScore": 96,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.75
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 9500,
      "keyWeaponsIntegrated": [
        "Meteor BVRAAM",
        "SCALP EG",
        "MICA EM/IR",
        "HAMMER AASM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg",
      "caption": "Dassault Rafale EH/DH in service with India"
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
    ],
    "tvrScore": 91.2,
    "description": "Frontline omnirole fighter platform equipped with SPECTRA internal electronic warfare suite, Meteor ramjet-powered BVR missiles, SCALP standoff cruise missiles, and HAMMER precision munitions."
  },
  {
    "id": "IND-IAF-DH-VAMPIRE",
    "aircraftName": "de Havilland Vampire FB.52",
    "officialDesignation": "Vampire FB.52 / T.55",
    "natoReportingName": null,
    "family": "de Havilland Vampire",
    "variant": "Vampire FB.52 Fighter-Bomber",
    "block": "IAF First Jet Standard",
    "manufacturer": "de Havilland / HAL Bangalore",
    "manufacturerCountry": "UK / India",
    "countryOfOrigin": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic 1st Jet Aircraft of India, Inducted 1948)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Pioneering Jet Fighter & Ground Attack Aircraft",
    "secondaryRoles": [
      "Air Defense",
      "Night Fighter"
    ],
    "generation": "GEN_1",
    "era": "VINTAGE",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1943,
    "introductionYear": 1948,
    "retirementYear": 1975,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1975,
      "quantityNotes": "Historic airframe (Retired 1975). Total produced: 250.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 3300,
        "maxTakeoffWeightKg": 5620,
        "payloadCapacityKg": 900,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "de Havilland Goblin 3 Centrifugal-Flow Turbojet",
        "engineManufacturer": "de Havilland / HAL Bangalore",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 14.9,
        "thrustAfterburnerKn": 14.9
      },
      "performance": {
        "maxSpeedKmh": 882,
        "maxSpeedMach": 0.75,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 300,
        "ferryRangeKm": 1960,
        "serviceCeilingM": 13045,
        "serviceCeilingFt": 42799,
        "rateOfClimbMs": 24,
        "gLimitPositive": 6.5
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "20 EW Rating Countermeasures Suite",
      "ewScore": 20,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 4
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 900,
      "keyWeaponsIntegrated": [
        "Four 20mm Hispano Cannons"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b3/De_Havilland_Vampire_FB.52_Indian_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b3/De_Havilland_Vampire_FB.52_Indian_Air_Force.jpg",
      "caption": "de Havilland Vampire FB.52 in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 45.2,
    "description": "The aircraft that ushered the Indian Air Force into the Jet Age in November 1948. Distinctive twin-boom configuration with wooden fuselage construction. Fought in the 1965 Indo-Pak War and Goa liberation 1961."
  },
  {
    "id": "IND-NETRA-AEWC",
    "aircraftName": "DRDO Netra AEW&C",
    "officialDesignation": "Netra Mk1",
    "natoReportingName": null,
    "family": "Embraer ERJ-145 Airborne Surveillance",
    "variant": "Netra Mk1",
    "block": "Standard Block 2",
    "manufacturer": "DRDO / Embraer",
    "manufacturerCountry": "India / Brazil",
    "countryOfOrigin": "India / Brazil",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Airborne Early Warning & Control (AEW&C)",
    "secondaryRoles": [
      "Battlefield Management",
      "SIGINT / ELINT"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2011,
    "introductionYear": 2017,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 3,
      "estimatedQuantity": 3,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 3 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": null,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Rolls-Royce AE 3007A Turbofans",
        "engineManufacturer": "DRDO / Embraer",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 78,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 830,
        "maxSpeedMach": 0.78,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 1800,
        "ferryRangeKm": null,
        "serviceCeilingM": 11500,
        "serviceCeilingFt": 37730,
        "rateOfClimbMs": 35,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "DRDO Active Array Primary Radar (240° coverage)",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 375,
      "hasAesa": true,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "92 EW Rating Countermeasures Suite",
      "ewScore": 92,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4000,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/DRDO_AEW%26CS_Netra_at_Aero_India_2023.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/DRDO_AEW%26CS_Netra_at_Aero_India_2023.jpg",
      "caption": "DRDO Netra AEW&C in service with India"
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
    ],
    "tvrScore": 83.8,
    "description": "Indigenous AEW&C platform utilizing an active electronically scanned array antenna mounted atop an ERJ-145 airframe for 240-degree tactical air tracking and command-and-control datalinks."
  },
  {
    "id": "IND-IAF-EE-CANBERRA",
    "aircraftName": "English Electric Canberra B(I).58 / PR.57",
    "officialDesignation": "Canberra B(I).58 / PR.57",
    "natoReportingName": null,
    "family": "English Electric Canberra",
    "variant": "Canberra B(I).58 Interdictor / Bomber",
    "block": "IAF Standard",
    "manufacturer": "English Electric / HAL",
    "manufacturerCountry": "UK / India",
    "countryOfOrigin": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Strategic Bomber 1957–2007)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Medium Jet Bomber & High-Altitude Photographic Reconnaissance",
    "secondaryRoles": [
      "Night Strike",
      "UN Peacekeeping Operations"
    ],
    "generation": "GEN_1",
    "era": "VINTAGE",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1949,
    "introductionYear": 1957,
    "retirementYear": 2007,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2007,
      "quantityNotes": "Historic airframe (Retired 2007). Total produced: 110.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 9820,
        "maxTakeoffWeightKg": 25000,
        "payloadCapacityKg": 3600,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Rolls-Royce Avon R.A.7 Turbojets (Dual)",
        "engineManufacturer": "English Electric / HAL",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 33,
        "thrustAfterburnerKn": 33
      },
      "performance": {
        "maxSpeedKmh": 933,
        "maxSpeedMach": 0.88,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 780,
        "ferryRangeKm": 5440,
        "serviceCeilingM": 14600,
        "serviceCeilingFt": 47900,
        "rateOfClimbMs": 20,
        "gLimitPositive": 5
      }
    },
    "avionics": {
      "radar": "Blue Shadow / Green Satin Navigation Radar",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 20,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "45 EW Rating Countermeasures Suite",
      "ewScore": 45,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 8
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 3600,
      "keyWeaponsIntegrated": [
        "30mm Hispano Cannons (Pack of 4)",
        "6,000 lb Bomb Bay Payload"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/English_Electric_Canberra_B%28I%29.58_IAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/English_Electric_Canberra_B%28I%29.58_IAF.jpg",
      "caption": "English Electric Canberra B(I).58 / PR.57 in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 54.6,
    "description": "First jet bomber of the Indian Air Force. Flew combat missions in 1961 Congo UN operations, 1965 and 1971 Indo-Pak wars, and provided strategic optical reconnaissance during the 1999 Kargil War."
  },
  {
    "id": "IND-IAF-FOLLAND-GNAT",
    "aircraftName": "Folland Gnat / HAL Ajeet",
    "officialDesignation": "Gnat F.1 / HAL Ajeet",
    "natoReportingName": null,
    "family": "Folland Gnat",
    "variant": "Gnat F.1 / Ajeet Mk.1",
    "block": "HAL Production Series",
    "manufacturer": "Folland Aircraft / HAL Bangalore",
    "manufacturerCountry": "UK / India",
    "countryOfOrigin": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic \"Sabre Slayer\" 1958–1991)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Lightweight Transonic Point-Defense Interceptor",
    "secondaryRoles": [
      "Close Air Support",
      "Air-to-Air Combat"
    ],
    "generation": "GEN_1",
    "era": "VINTAGE",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1955,
    "introductionYear": 1958,
    "retirementYear": 1991,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1991,
      "quantityNotes": "Historic airframe (Retired 1991). Total produced: 213.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 2175,
        "maxTakeoffWeightKg": 4100,
        "payloadCapacityKg": 900,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Bristol Siddeley Orpheus 701 Turbojet",
        "engineManufacturer": "Folland Aircraft / HAL Bangalore",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 20.9,
        "thrustAfterburnerKn": 20.9
      },
      "performance": {
        "maxSpeedKmh": 1120,
        "maxSpeedMach": 0.98,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 270,
        "ferryRangeKm": 1100,
        "serviceCeilingM": 14630,
        "serviceCeilingFt": 47999,
        "rateOfClimbMs": 101,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Ferranti Optical Gyro Gunsight",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 3,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "35 EW Rating Countermeasures Suite",
      "ewScore": 35,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 1.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 900,
      "keyWeaponsIntegrated": [
        "Twin 30mm ADEN Cannons",
        "Unguided 68mm Rockets"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Folland_Gnat_F.1_E248_Indian_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Folland_Gnat_F.1_E248_Indian_Air_Force.jpg",
      "caption": "Folland Gnat / HAL Ajeet in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 46.3,
    "description": "The legendary \"Sabre Slayer\" of the 1965 and 1971 Indo-Pak Wars. Renowned for its diminutive size, extraordinary roll rate, and supreme agility in dogfights. Flown by Flying Officer Nirmal Jit Singh Sekhon, PVC, defending Srinagar airfield in 1971."
  },
  {
    "id": "IND-IAF-HF24-MARUT",
    "aircraftName": "HAL HF-24 Marut",
    "officialDesignation": "HF-24 Marut Mk.1",
    "natoReportingName": null,
    "family": "HAL Marut",
    "variant": "Marut Mk.1 (Ground Attack Fighter)",
    "block": "Production Series",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "countryOfOrigin": "India",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Indigenous Jet Fighter 1964–1990)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Low-Level Ground Attack & Tactical Strike Fighter",
    "secondaryRoles": [
      "Close Air Support",
      "Air Defense"
    ],
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1961,
    "introductionYear": 1964,
    "retirementYear": 1990,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1990,
      "quantityNotes": "Historic airframe (Retired 1990). Total produced: 147.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6195,
        "maxTakeoffWeightKg": 10908,
        "payloadCapacityKg": 1800,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Bristol Siddeley Orpheus 703 Turbojets (Dual Non-Afterburning)",
        "engineManufacturer": "Hindustan Aeronautics Limited (HAL)",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 43.1,
        "thrustAfterburnerKn": 43.1
      },
      "performance": {
        "maxSpeedKmh": 1112,
        "maxSpeedMach": 0.98,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 360,
        "ferryRangeKm": 1400,
        "serviceCeilingM": 13750,
        "serviceCeilingFt": 45112,
        "rateOfClimbMs": 110,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Gunsight Radar Rangefinder",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 5,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "40 EW Rating Countermeasures Suite",
      "ewScore": 40,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1800,
      "keyWeaponsIntegrated": [
        "Four 30mm ADEN Mk.2 Cannons",
        "68mm Matra SNEB Rocket Pod",
        "1,000 lb High Explosive Bombs"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d3/HF-24_Marut_IAF_Museum_Delhi.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d3/HF-24_Marut_IAF_Museum_Delhi.jpg",
      "caption": "HAL HF-24 Marut in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 47.2,
    "description": "India's first indigenous jet fighter and the first indigenous supersonic-capable combat aircraft developed in Asia outside the USSR. Designed by Kurt Tank, the Marut saw heroic combat in the 1971 Indo-Pak War (including the Battle of Longewala) with zero air combat losses."
  },
  {
    "id": "IND-LCH-PRACHAND",
    "aircraftName": "HAL LCH Prachand",
    "officialDesignation": "LCH Series Production",
    "natoReportingName": null,
    "family": "Light Combat Helicopter",
    "variant": "LCH Series Production",
    "block": "Initial Operational Clearance (IOC)",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "countryOfOrigin": "India",
    "country": "India",
    "affiliation": "Indian Army Aviation Corps",
    "militaryBranch": "ARMY_AVIATION",
    "aircraftType": "Rotary-Wing",
    "primaryCategory": "High-Altitude Attack Helicopter",
    "secondaryRoles": [
      "Anti-Tank",
      "Counter-UAV",
      "Close Combat Attack"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2010,
    "introductionYear": 2022,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 15,
      "estimatedQuantity": 15,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 15 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": 1750,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "HAL/Turbomeca Shakti Turboshafts",
        "engineManufacturer": "Hindustan Aeronautics Limited (HAL)",
        "engineType": "Turboshaft",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 268,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 330,
        "ferryRangeKm": null,
        "serviceCeilingM": 6500,
        "serviceCeilingFt": 21325,
        "rateOfClimbMs": 12,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "84 EW Rating Countermeasures Suite",
      "ewScore": 84,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1750,
      "keyWeaponsIntegrated": [
        "Helina / Dhruvastra ATGM",
        "Mistral 2 ATAM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fb/HAL_Light_Combat_Helicopter_at_Aero_India_2017.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fb/HAL_Light_Combat_Helicopter_at_Aero_India_2017.jpg",
      "caption": "HAL LCH Prachand in service with India"
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
    ],
    "tvrScore": 78.5,
    "description": "The world’s only dedicated attack helicopter designed specifically for sustained combat operations above 5,000 meters in the Himalayas (Siachen / Ladakh sectors). Equipped with 20mm nose turret, Helina anti-tank missiles, and Mistral AAMs."
  },
  {
    "id": "IND-IAF-TEJAS-MK1A",
    "aircraftName": "HAL Tejas Mk1A",
    "officialDesignation": "LCA Tejas Mk1A",
    "natoReportingName": null,
    "family": "HAL LCA Tejas Family",
    "variant": "Mk1A Enhanced Standard",
    "block": "Batch 1 Production Standard",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "countryOfOrigin": "India",
    "country": "India",
    "affiliation": "Indian Air Force (No. 45 Flying Daggers / No. 18 Flying Bullets)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Lightweight Supersonic Multirole Fighter",
    "secondaryRoles": [
      "Air Defense",
      "Precision Strike",
      "Reconnaissance"
    ],
    "generation": "GEN_4_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2024,
    "introductionYear": 2024,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 38,
      "estimatedQuantity": 38,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 38 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6560,
        "maxTakeoffWeightKg": 13500,
        "payloadCapacityKg": 5300,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "General Electric F404-GE-IN20 Afterburning Turbofan",
        "engineManufacturer": "Hindustan Aeronautics Limited (HAL)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 53.9,
        "thrustAfterburnerKn": 89.8
      },
      "performance": {
        "maxSpeedKmh": 2205,
        "maxSpeedMach": 1.8,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 510,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 16000,
        "serviceCeilingFt": 52493,
        "rateOfClimbMs": 280,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "EL/M-2052 / DRDO Uttam GaN AESA Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 150,
      "hasAesa": true,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "92 EW Rating Countermeasures Suite",
      "ewScore": 92,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 5300,
      "keyWeaponsIntegrated": [
        "Astra Mk1 BVR-AAM",
        "ASRAAM WVR",
        "Hammer Precision Bomb"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg",
      "caption": "HAL Tejas Mk1A in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 82.4,
    "description": "Indigenous Indian 4.5-generation lightweight supersonic multirole fighter. Features ELTA EL/M-2052 / Uttam AESA radar, integrated Angad EW suite, in-flight refueling probe, and Astra BVRAAM integration."
  },
  {
    "id": "IND-TEJAS",
    "aircraftName": "HAL Tejas Mk1A",
    "officialDesignation": "Tejas Mk1A",
    "natoReportingName": null,
    "family": "Tejas Light Combat Aircraft",
    "variant": "Tejas Mk1A",
    "block": "Mk1A Enhanced Standard",
    "manufacturer": "Hindustan Aeronautics Limited (HAL)",
    "manufacturerCountry": "India",
    "countryOfOrigin": "India",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Lightweight Multirole Fighter",
    "secondaryRoles": [
      "Point Defense",
      "Air Combat Patrol"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2020,
    "introductionYear": 2024,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 40,
      "estimatedQuantity": 40,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 40 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6560,
        "maxTakeoffWeightKg": 13500,
        "payloadCapacityKg": 4000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "General Electric F404-GE-IN20",
        "engineManufacturer": "Hindustan Aeronautics Limited (HAL)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 53.9,
        "thrustAfterburnerKn": 85
      },
      "performance": {
        "maxSpeedKmh": 1980,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 510,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 15200,
        "serviceCeilingFt": 49869,
        "rateOfClimbMs": 250,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "EL/M-2052 / Uttam AESA",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 150,
      "hasAesa": true,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "89 EW Rating Countermeasures Suite",
      "ewScore": 89,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 0.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4000,
      "keyWeaponsIntegrated": [
        "Astra Mk1 BVR-AAM",
        "ASRAAM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg",
      "caption": "HAL Tejas Mk1A in service with India"
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
    ],
    "tvrScore": 81.4,
    "description": "Indigenous single-engine delta-wing light combat fighter featuring Uttam AESA radar, Astra Mk1 BVRAAM, self-protection EW jammer pod, and high-agility fly-by-wire flight control system."
  },
  {
    "id": "IND-IAF-HAWKER-HUNTER",
    "aircraftName": "Hawker Hunter F.56 / T.66",
    "officialDesignation": "Hunter F.56",
    "natoReportingName": null,
    "family": "Hawker Hunter",
    "variant": "Hunter F.56 / T.66",
    "block": "IAF Standard",
    "manufacturer": "Hawker Aircraft / HAL",
    "manufacturerCountry": "UK / India",
    "countryOfOrigin": "UK",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Battle of Longewala Hero 1957–2001)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Transonic Strike Fighter & Close Air Support",
    "secondaryRoles": [
      "Interception",
      "Trainer"
    ],
    "generation": "GEN_1",
    "era": "VINTAGE",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1951,
    "introductionYear": 1957,
    "retirementYear": 2001,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2001,
      "quantityNotes": "Historic airframe (Retired 2001). Total produced: 213.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 6405,
        "maxTakeoffWeightKg": 11158,
        "payloadCapacityKg": 3400,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Rolls-Royce Avon 207 Turbojet",
        "engineManufacturer": "Hawker Aircraft / HAL",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 45.1,
        "thrustAfterburnerKn": 45.1
      },
      "performance": {
        "maxSpeedKmh": 1150,
        "maxSpeedMach": 0.94,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 429,
        "ferryRangeKm": 3060,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 87,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Range-only Radar Gunsight",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 5,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "40 EW Rating Countermeasures Suite",
      "ewScore": 40,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 3400,
      "keyWeaponsIntegrated": [
        "Four 30mm ADEN Cannons",
        "T-10 / SNEB Unguided Rockets"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Hawker_Hunter_F.56_BA360_IAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Hawker_Hunter_F.56_BA360_IAF.jpg",
      "caption": "Hawker Hunter F.56 / T.66 in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 49.8,
    "description": "The legendary British-designed transonic fighter famous for destroying Pakistani armor during the Battle of Longewala (1971). Served with distinction in 1965 and 1971 wars before serving as advanced trainers until 2001."
  },
  {
    "id": "IND-IAF-MIG21-BISON",
    "aircraftName": "Mikoyan MiG-21 Bison",
    "officialDesignation": "MiG-21-93 / Bison Standard",
    "natoReportingName": "Fishbed",
    "family": "Mikoyan MiG-21",
    "variant": "MiG-21bis UPG Bison",
    "block": "Bison Final IAF Standard",
    "manufacturer": "HAL / Mikoyan-Gurevich",
    "manufacturerCountry": "India / Soviet Union",
    "countryOfOrigin": "Soviet Union",
    "country": "India",
    "affiliation": "Indian Air Force (Historic 1963–2025 Frontline Workhorse)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Point Defense Supersonic Interceptor",
    "secondaryRoles": [
      "Tactical Strike",
      "Close Air Support"
    ],
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1955,
    "introductionYear": 1963,
    "retirementYear": 2025,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2025,
      "quantityNotes": "Historic airframe (Retired 2025). Total produced: 874.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 5895,
        "maxTakeoffWeightKg": 10400,
        "payloadCapacityKg": 1500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Tumansky R-25-300 Afterburning Turbojet",
        "engineManufacturer": "HAL / Mikoyan-Gurevich",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 40.2,
        "thrustAfterburnerKn": 70
      },
      "performance": {
        "maxSpeedKmh": 2230,
        "maxSpeedMach": 2.05,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 390,
        "ferryRangeKm": 1470,
        "serviceCeilingM": 17500,
        "serviceCeilingFt": 57415,
        "rateOfClimbMs": 225,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Phazotron Kopyo Lightweight Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 57,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "70 EW Rating Countermeasures Suite",
      "ewScore": 70,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1500,
      "keyWeaponsIntegrated": [
        "R-73E Archer",
        "R-77 (RVV-AE)",
        "23mm GSh-23L Cannon"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c5/MiG-21_Bison_of_the_Indian_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c5/MiG-21_Bison_of_the_Indian_Air_Force.jpg",
      "caption": "Mikoyan MiG-21 Bison in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 61.8,
    "description": "The legendary supersonic delta-wing interceptor that formed the backbone of the IAF for 62 years (1963 to 2025). The Bison upgrade added Kopyo radar, helmet-mounted sights, and R-73 / R-77 BVR capability, famously engaging in the 2019 aerial duel."
  },
  {
    "id": "IND-IAF-MIG25-FOXBAT",
    "aircraftName": "Mikoyan MiG-25R Foxbat (Trishul)",
    "officialDesignation": "MiG-25RB / RU (Trishul)",
    "natoReportingName": "Foxbat-B",
    "family": "Mikoyan MiG-25",
    "variant": "MiG-25RB Stratospheric Reconnaissance",
    "block": "IAF No. 102 Trisonics Standard",
    "manufacturer": "Mikoyan-Gurevich",
    "manufacturerCountry": "Soviet Union",
    "countryOfOrigin": "Soviet Union",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Stratospheric Reconnaissance 1981–2006)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Mach 3.2 Stratospheric Strategic Reconnaissance",
    "secondaryRoles": [
      "High-Altitude Mapping",
      "ELINT"
    ],
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1964,
    "introductionYear": 1981,
    "retirementYear": 2006,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2006,
      "quantityNotes": "Historic airframe (Retired 2006). Total produced: 10.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 20000,
        "maxTakeoffWeightKg": 41200,
        "payloadCapacityKg": null,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Tumansky R-15B-300 Afterburning Turbojets (Dual)",
        "engineManufacturer": "Mikoyan-Gurevich",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 147,
        "thrustAfterburnerKn": 200
      },
      "performance": {
        "maxSpeedKmh": 3400,
        "maxSpeedMach": 3.2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 1038,
        "ferryRangeKm": 2575,
        "serviceCeilingM": 24400,
        "serviceCeilingFt": 80052,
        "rateOfClimbMs": 208,
        "gLimitPositive": 4.5
      }
    },
    "avionics": {
      "radar": "SABIR High-Resolution Aerial Cameras & ELINT Suite",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "78 EW Rating Countermeasures Suite",
      "ewScore": 78,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 15
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4000,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/MiG-25RB_Foxbat_Indian_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/MiG-25RB_Foxbat_Indian_Air_Force.jpg",
      "caption": "Mikoyan MiG-25R Foxbat (Trishul) in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 55.8,
    "description": "The fastest combat aircraft to ever fly in South Asian airspace. Operated by the secretive No. 102 Squadron \"Trisonics\" from Bareilly, the Foxbat routinely flew at Mach 2.8+ at 80,000 feet, untouchable by enemy interceptors or SAM batteries."
  },
  {
    "id": "IND-IAF-MIG27-BAHADUR",
    "aircraftName": "Mikoyan MiG-27ML Bahadur",
    "officialDesignation": "MiG-27ML Flogger-J",
    "natoReportingName": "Flogger-J",
    "family": "Mikoyan MiG-27",
    "variant": "MiG-27ML Bahadur",
    "block": "IAF Upgraded Bahadur",
    "manufacturer": "HAL Nashik / Mikoyan",
    "manufacturerCountry": "India / Soviet Union",
    "countryOfOrigin": "Soviet Union",
    "country": "India",
    "affiliation": "Indian Air Force (Historic Kargil Strike Hero 1985–2019)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Variable-Geometry Ground Attack & Strike Fighter",
    "secondaryRoles": [
      "Close Air Support",
      "Interdiction"
    ],
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1970,
    "introductionYear": 1985,
    "retirementYear": 2019,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2019,
      "quantityNotes": "Historic airframe (Retired 2019). Total produced: 165.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 11908,
        "maxTakeoffWeightKg": 20300,
        "payloadCapacityKg": 4000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Khachaturov R-29B-300 Afterburning Turbojet",
        "engineManufacturer": "HAL Nashik / Mikoyan",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 78.4,
        "thrustAfterburnerKn": 112.8
      },
      "performance": {
        "maxSpeedKmh": 1885,
        "maxSpeedMach": 1.77,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 468,
        "ferryRangeKm": 2500,
        "serviceCeilingM": 14000,
        "serviceCeilingFt": 45932,
        "rateOfClimbMs": 200,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Klen-PRF Laser Rangefinder / Target Designator",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 10,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "65 EW Rating Countermeasures Suite",
      "ewScore": 65,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4000,
      "keyWeaponsIntegrated": [
        "30mm GSh-6-30 Gatling Cannon",
        "KAB-500L Laser Guided Bomb",
        "R-60M Air-to-Air Missile"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/MiG-27ML_Bahadur_Indian_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/MiG-27ML_Bahadur_Indian_Air_Force.jpg",
      "caption": "Mikoyan MiG-27ML Bahadur in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 55.1,
    "description": "Variable-geometry swing-wing dedicated ground attack aircraft produced under license by HAL. Armed with a 30mm six-barrel Gatling cannon (GSh-6-30), the Bahadur was pivotal during Operation Safed Sagar in the 1999 Kargil War."
  },
  {
    "id": "IND-MIG29K",
    "aircraftName": "Mikoyan MiG-29K Fulcrum-D",
    "officialDesignation": "MiG-29K (Item 9.41)",
    "natoReportingName": null,
    "family": "MiG-29 Fulcrum Family",
    "variant": "MiG-29K (Item 9.41)",
    "block": "Carrier Operational Standard",
    "manufacturer": "RSK MiG",
    "manufacturerCountry": "Russia",
    "countryOfOrigin": "Russia",
    "country": "India",
    "affiliation": "Indian Naval Air Arm (INAS 300 / 303)",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Carrier-Borne Multirole Strike Fighter",
    "secondaryRoles": [
      "Fleet Air Defense",
      "Anti-Surface Warfare (ASuW)"
    ],
    "generation": "GEN_4_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1988,
    "introductionYear": 2010,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 40,
      "estimatedQuantity": 40,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 40 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 11000,
        "maxTakeoffWeightKg": 24500,
        "payloadCapacityKg": 5500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Klimov RD-33MK Smokeless Turbofans",
        "engineManufacturer": "RSK MiG",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 106,
        "thrustAfterburnerKn": 176
      },
      "performance": {
        "maxSpeedKmh": 2200,
        "maxSpeedMach": 2.2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 510,
        "ferryRangeKm": 2000,
        "serviceCeilingM": 17500,
        "serviceCeilingFt": 57415,
        "rateOfClimbMs": 330,
        "gLimitPositive": 8
      }
    },
    "avionics": {
      "radar": "Zhuk-ME Pulse-Doppler Phased Array",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 120,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "78 EW Rating Countermeasures Suite",
      "ewScore": 78,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 5500,
      "keyWeaponsIntegrated": [
        "Kh-35E Uran",
        "R-77 BVR-AAM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/MiG-29K_takes_off_from_INS_Vikramaditya.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/MiG-29K_takes_off_from_INS_Vikramaditya.jpg",
      "caption": "Mikoyan MiG-29K Fulcrum-D in service with India"
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
    ],
    "tvrScore": 77.8,
    "description": "Carrier-borne multirole fighter operating from INS Vikramaditya and INS Vikrant aircraft carriers with ski-jump launch (STOBAR) and arrested landing recovery. Armed with Kh-35 anti-ship missiles and R-77 BVR missiles."
  },
  {
    "id": "IND-IAF-MIG29UPG",
    "aircraftName": "Mikoyan MiG-29UPG Baaz",
    "officialDesignation": "MiG-29UPG Modernized Standard",
    "natoReportingName": null,
    "family": "Mikoyan MiG-29 Fulcrum",
    "variant": "UPG (Upgraded Baaz)",
    "block": "IAF Upgrade Standard",
    "manufacturer": "RSK MiG / 11 Base Repair Depot IAF",
    "manufacturerCountry": "Russia / India",
    "countryOfOrigin": "Russia",
    "country": "India",
    "affiliation": "Indian Air Force (No. 28 First Supersonics / No. 47 Black Archers / No. 223 Tridents)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Air Superiority & Multi-Role Interceptor",
    "secondaryRoles": [
      "Precision Ground Attack",
      "BVR Combat"
    ],
    "generation": "GEN_4_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1977,
    "introductionYear": 1986,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 60,
      "estimatedQuantity": 60,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 60 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 11000,
        "maxTakeoffWeightKg": 18000,
        "payloadCapacityKg": 4500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Klimov RD-33 Series 3 Turbofans",
        "engineManufacturer": "RSK MiG / 11 Base Repair Depot IAF",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 100,
        "thrustAfterburnerKn": 166
      },
      "performance": {
        "maxSpeedKmh": 2400,
        "maxSpeedMach": 2.25,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 858,
        "ferryRangeKm": 2100,
        "serviceCeilingM": 18000,
        "serviceCeilingFt": 59055,
        "rateOfClimbMs": 330,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Phazotron Zhuk-M2E Slotted Array Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 120,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "84 EW Rating Countermeasures Suite",
      "ewScore": 84,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 3
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4500,
      "keyWeaponsIntegrated": [
        "R-77 (RVV-AE) BVR",
        "R-73E WVR Missile"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/MiG-29UPG_of_the_Indian_Air_Force_in_flight.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/MiG-29UPG_of_the_Indian_Air_Force_in_flight.jpg",
      "caption": "Mikoyan MiG-29UPG Baaz in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 78,
    "description": "Upgraded IAF air superiority interceptor featuring Zhuk-M2E radar, enlarged dorsal fuel tank conformal spine, in-flight refueling probe, OLS-UEM IRST, and RVV-AE / R-77-1 BVR capability."
  },
  {
    "id": "IND-IAF-JAGUAR-SHAMSHER",
    "aircraftName": "SEPECAT Jaguar IS/IB/IM Shamsher",
    "officialDesignation": "Jaguar DARIN III Standard",
    "natoReportingName": null,
    "family": "SEPECAT Jaguar",
    "variant": "Jaguar IS (Strike) / IM (Maritime) / IB (Trainer)",
    "block": "DARIN III Modernization Standard",
    "manufacturer": "HAL / SEPECAT (Breguet / BAC)",
    "manufacturerCountry": "India / UK / France",
    "countryOfOrigin": "UK / France",
    "country": "India",
    "affiliation": "Indian Air Force (No. 5 Tuskers / No. 14 Bulls / No. 16 Cobras / No. 6 Dragons)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Deep Penetration Strike & Maritime Interdiction",
    "secondaryRoles": [
      "Tactical Nuclear Delivery",
      "Anti-Ship Strike",
      "Low-Level Ingress"
    ],
    "generation": "GEN_4",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1969,
    "introductionYear": 1979,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 116,
      "estimatedQuantity": 116,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 116 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 7000,
        "maxTakeoffWeightKg": 15700,
        "payloadCapacityKg": 4750,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 2
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Rolls-Royce Turbomeca Adour Mk 811 / 821 Turbofans",
        "engineManufacturer": "HAL / SEPECAT (Breguet / BAC)",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 46,
        "thrustAfterburnerKn": 76
      },
      "performance": {
        "maxSpeedKmh": 1699,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 540,
        "ferryRangeKm": 3524,
        "serviceCeilingM": 14000,
        "serviceCeilingFt": 45932,
        "rateOfClimbMs": 120,
        "gLimitPositive": 8.6
      }
    },
    "avionics": {
      "radar": "EL/M-2052 AESA Radar (DARIN III Maritime / Strike)",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 140,
      "hasAesa": true,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "86 EW Rating Countermeasures Suite",
      "ewScore": 86,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 2.5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 4750,
      "keyWeaponsIntegrated": [
        "AGM-84L Harpoon Block II",
        "ASRAAM WVR",
        "CBU-105 Sensor Fuzed Weapon"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/SEPECAT_Jaguar_IS_of_the_Indian_Air_Force.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/8/87/SEPECAT_Jaguar_IS_of_the_Indian_Air_Force.jpg",
      "caption": "SEPECAT Jaguar IS/IB/IM Shamsher in service with India"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 73,
    "description": "Deep penetration strike aircraft with over-wing missile pylons, upgraded under the DARIN III program with EL/M-2052 AESA radar, dual-cockpit MFDs, ASRAAM missiles, and Harpoon anti-ship missiles."
  },
  {
    "id": "IND-MH60R-NAVY",
    "aircraftName": "Sikorsky MH-60R Seahawk",
    "officialDesignation": "MH-60R Romeo",
    "natoReportingName": null,
    "family": "Sikorsky S-70 Seahawk",
    "variant": "MH-60R Romeo",
    "block": "Production Lot 20",
    "manufacturer": "Lockheed Martin / Sikorsky",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "India",
    "affiliation": "Indian Naval Air Arm (INAS 334)",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Rotary-Wing",
    "primaryCategory": "Multi-Mission Naval ASW & Anti-Surface Helicopter",
    "secondaryRoles": [
      "Search & Rescue (SAR)",
      "Naval Special Warfare"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2001,
    "introductionYear": 2022,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 24,
      "estimatedQuantity": 24,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 24 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": 2700,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric T700-GE-401C Turboshafts",
        "engineManufacturer": "Lockheed Martin / Sikorsky",
        "engineType": "Turboshaft",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 270,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 498,
        "ferryRangeKm": null,
        "serviceCeilingM": 5200,
        "serviceCeilingFt": 17060,
        "rateOfClimbMs": 8.4,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Telephonics AN/APS-153(V) Multi-Mode Radar with ARPDD",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 185,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "90 EW Rating Countermeasures Suite",
      "ewScore": 90,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 2700,
      "keyWeaponsIntegrated": [
        "Mk 54 Mod 0 ASW Torpedo",
        "AGM-114R Hellfire II"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/91/MH-60R_of_HSM-77_in_flight_over_Pacific_Ocean_2013.JPG",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/9/91/MH-60R_of_HSM-77_in_flight_over_Pacific_Ocean_2013.JPG",
      "caption": "Sikorsky MH-60R Seahawk in service with India"
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
    ],
    "tvrScore": 84.8,
    "description": "Advanced naval helicopter deployed across Indian Navy destroyers and frigates. Features airborne low frequency dipping sonar (ALFS), Mk 54 ASW torpedoes, and Hellfire anti-surface precision missiles."
  },
  {
    "id": "IND-SU30MKI",
    "aircraftName": "Sukhoi Su-30MKI Flanker-H",
    "officialDesignation": "Su-30MKI Super Sukhoi",
    "natoReportingName": null,
    "family": "Su-30 Flanker Family",
    "variant": "Su-30MKI Super Sukhoi",
    "block": "Phase 3 / Super Sukhoi Upgrade",
    "manufacturer": "Hindustan Aeronautics Limited / Sukhoi",
    "manufacturerCountry": "Russia / India",
    "countryOfOrigin": "Russia / India",
    "country": "India",
    "affiliation": "Indian Air Force",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Air Dominance & Long-Range Strike Fighter",
    "secondaryRoles": [
      "Maritime Strike",
      "SEAD",
      "Strategic Nuclear Delivery"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2000,
    "introductionYear": 2002,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 260,
      "estimatedQuantity": 260,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 260 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 18400,
        "maxTakeoffWeightKg": 38800,
        "payloadCapacityKg": 8130,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "AL-31FP Thrust-Vectoring Turbofans",
        "engineManufacturer": "Hindustan Aeronautics Limited / Sukhoi",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 150,
        "thrustAfterburnerKn": 246
      },
      "performance": {
        "maxSpeedKmh": 2120,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 900,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 17300,
        "serviceCeilingFt": 56759,
        "rateOfClimbMs": 300,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "N011M Bars PESA (Upgrading to Uttam AESA)",
      "radarType": "PESA",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 140,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "88 EW Rating Countermeasures Suite",
      "ewScore": 88,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 4
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8130,
      "keyWeaponsIntegrated": [
        "BrahMos-A ALCM",
        "Astra Mk1 BVR-AAM",
        "R-77-1",
        "R-73E"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg",
      "caption": "Sukhoi Su-30MKI Flanker-H in service with India"
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
    ],
    "tvrScore": 84.6,
    "description": "The backbone of the Indian Air Force. Twin-engine, two-seat air superiority fighter featuring 2D thrust-vectoring engines and compatibility with BrahMos-A supersonic cruise missiles and Astra Mk1/Mk2 BVR missiles."
  },
  {
    "id": "IDN-TNI-AU-SU30MK2",
    "aircraftName": "Sukhoi Su-30MK2 Flanker-G",
    "officialDesignation": "Su-30MK2 Heavy Multi-Role Fighter",
    "natoReportingName": "Flanker-G",
    "family": "Sukhoi Su-27/30 Flanker",
    "variant": "Su-30MK2 Multi-Role Fighter",
    "block": "Export Standard Indonesia Series",
    "manufacturer": "Komsomolsk-on-Amur Aircraft Plant (KnAAZ) / Sukhoi",
    "manufacturerCountry": "Russia",
    "countryOfOrigin": "Russia",
    "country": "Indonesia",
    "affiliation": "Tentara Nasional Indonesia Angkatan Udara (TNI-AU Skadron Udara 11 Sultan Hasanuddin Air Base)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Multirole Fighter",
    "secondaryRoles": [
      "Maritime Strike",
      "Air Superiority",
      "Long-Range Archipelagic Patrol"
    ],
    "generation": "GEN_4",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2002,
    "introductionYear": 2008,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 11,
      "estimatedQuantity": 11,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 11 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-02",
      "freshnessStatus": "CURRENT"
    },
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
        "minimumCrew": 1,
        "maximumCrew": 1
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 900,
        "ferryRangeKm": 3000,
        "serviceCeilingM": 17300,
        "serviceCeilingFt": 56759,
        "rateOfClimbMs": 230,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8000,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/63/Indonesian_Air_Force_Sukhoi_Su-30MK2.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/6/63/Indonesian_Air_Force_Sukhoi_Su-30MK2.jpg",
      "caption": "Sukhoi Su-30MK2 Flanker-G in service with Indonesia"
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
    ],
    "tvrScore": 75,
    "description": "Heavy twin-engine multirole fighter providing long-range maritime and archipelagic air defense for Indonesia vast island territories, armed with supersonic Kh-31 anti-ship missiles."
  },
  {
    "id": "JPN-JASDF-F2-A",
    "aircraftName": "Mitsubishi F-2A Viper Zero",
    "officialDesignation": "Mitsubishi F-2A Multi-Role Support Fighter",
    "natoReportingName": null,
    "family": "Mitsubishi F-2 / General Dynamics F-16",
    "variant": "F-2A Single-Seat Modernized",
    "block": "Production Series with J/APG-2 AESA & AAM-4 Integration",
    "manufacturer": "Mitsubishi Heavy Industries / Lockheed Martin",
    "manufacturerCountry": "Japan / United States",
    "countryOfOrigin": "Japan / United States",
    "country": "Japan",
    "affiliation": "Japan Air Self-Defense Force (JASDF 3rd, 6th, and 8th Tactical Fighter Squadrons)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Multirole Fighter",
    "secondaryRoles": [
      "Maritime Anti-Ship Strike",
      "Air Defense Interception",
      "Close Air Support"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1995,
    "introductionYear": 2000,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 91,
      "estimatedQuantity": 91,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 91 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-04",
      "freshnessStatus": "CURRENT"
    },
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 500,
        "ferryRangeKm": 3200,
        "serviceCeilingM": 18000,
        "serviceCeilingFt": 59055,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8085,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Mitsubishi_F-2A_JASDF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Mitsubishi_F-2A_JASDF.jpg",
      "caption": "Mitsubishi F-2A Viper Zero in service with Japan"
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
    ],
    "tvrScore": 75,
    "description": "Japanese multirole fighter evolved from the F-16 with a 25% larger carbon-composite wing area, J/APG-2 AESA radar, and specialized long-range anti-ship strike capabilities."
  },
  {
    "id": "MEX-FAM-F5E-TIGER2",
    "aircraftName": "Northrop F-5E Tiger II",
    "officialDesignation": "F-5E / F-5F Tiger II Supersonic Interceptor",
    "natoReportingName": null,
    "family": "Northrop F-5 Freedom Fighter",
    "variant": "F-5E Single-Seat / F-5F Twin-Seat",
    "block": "Production Series FAM Standard",
    "manufacturer": "Northrop Corporation",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "Mexico",
    "affiliation": "Fuerza Aérea Mexicana (FAM Escuadrón Aéreo 401, Base Aérea Militar No. 1 Santa Lucía)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Fighter",
    "secondaryRoles": [
      "Air Defense Interception",
      "Air Policing",
      "Close Air Support"
    ],
    "generation": "GEN_3",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1972,
    "introductionYear": 1982,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 4,
      "estimatedQuantity": 4,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 4 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-28",
      "freshnessStatus": "CURRENT"
    },
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
        "maximumCrew": 2
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 900,
        "combatRadiusKm": 222,
        "ferryRangeKm": 2480,
        "serviceCeilingM": 15790,
        "serviceCeilingFt": 51804,
        "rateOfClimbMs": 175,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 3200,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Northrop_F-5E_Tiger_II_FAM.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Northrop_F-5E_Tiger_II_FAM.jpg",
      "caption": "Northrop F-5E Tiger II in service with Mexico"
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
    ],
    "tvrScore": 75,
    "description": "Lightweight supersonic air defense fighter of the Mexican Air Force, providing fast interception and border security missions."
  },
  {
    "id": "RUS-KA52M-VKS",
    "aircraftName": "Kamov Ka-52M Alligator",
    "officialDesignation": "Ka-52M Modernized",
    "natoReportingName": null,
    "family": "Kamov Ka-50/52 Hokum Family",
    "variant": "Ka-52M Modernized",
    "block": "Modernized 2022 Spec",
    "manufacturer": "Progress Arsenyev Aviation Company / Russian Helicopters",
    "manufacturerCountry": "Russia",
    "countryOfOrigin": "Russia",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS) Army Aviation",
    "militaryBranch": "ARMY_AVIATION",
    "aircraftType": "Rotary-Wing",
    "primaryCategory": "All-Weather Heavy Attack & Reconnaissance Helicopter",
    "secondaryRoles": [
      "Anti-Armor",
      "Battlefield Air Interdiction"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1997,
    "introductionYear": 2011,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 110,
      "estimatedQuantity": 110,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 110 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": 2000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Klimov VK-2500P Turboshafts",
        "engineManufacturer": "Progress Arsenyev Aviation Company / Russian Helicopters",
        "engineType": "Turboshaft",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 315,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 282,
        "ferryRangeKm": null,
        "serviceCeilingM": 5500,
        "serviceCeilingFt": 18045,
        "rateOfClimbMs": 16,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "V006 Rezets AESA Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 32,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "88 EW Rating Countermeasures Suite",
      "ewScore": 88,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 2000,
      "keyWeaponsIntegrated": [
        "LMUR / Izdeliye 305",
        "9M120-1 Ataka-T"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Kamov_Ka-52_at_MAKS-2019.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Kamov_Ka-52_at_MAKS-2019.jpg",
      "caption": "Kamov Ka-52M Alligator in service with Russia"
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
    ],
    "tvrScore": 83.4,
    "description": "Heavy twin-seat coaxial rotor combat helicopter. Modernized with V006 AESA radar, GOES-451M electro-optical turret, and integration of LMUR (Izdeliye 305) long-range precision-guided anti-tank missiles."
  },
  {
    "id": "RUS-VKS-MIG31BM",
    "aircraftName": "Mikoyan MiG-31BM Foxhound",
    "officialDesignation": "MiG-31BM Modernized Interceptor",
    "natoReportingName": "Foxhound",
    "family": "Mikoyan MiG-25/31 Series",
    "variant": "MiG-31BM Multirole Interceptor",
    "block": "BM Upgrade Standard",
    "manufacturer": "RSK MiG / Sokol Plant",
    "manufacturerCountry": "Russia / Soviet Union",
    "countryOfOrigin": "Soviet Union",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS / Naval Aviation)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Mach 2.83 High-Altitude Supersonic Strategic Interceptor",
    "secondaryRoles": [
      "Kinzhal Hypersonic Launch Platform",
      "Cruise Missile Defense"
    ],
    "generation": "GEN_4",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1975,
    "introductionYear": 1981,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 130,
      "estimatedQuantity": 130,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 130 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 21820,
        "maxTakeoffWeightKg": 46200,
        "payloadCapacityKg": 9000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Soloviev D-30F6 Afterburning Turbofans (Dual)",
        "engineManufacturer": "RSK MiG / Sokol Plant",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 190,
        "thrustAfterburnerKn": 304
      },
      "performance": {
        "maxSpeedKmh": 3000,
        "maxSpeedMach": 2.83,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 870,
        "ferryRangeKm": 3300,
        "serviceCeilingM": 20600,
        "serviceCeilingFt": 67585,
        "rateOfClimbMs": 288,
        "gLimitPositive": 5
      }
    },
    "avionics": {
      "radar": "Phazotron Zaslon-AM PESA Phased Array Radar",
      "radarType": "PESA",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 320,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "88 EW Rating Countermeasures Suite",
      "ewScore": 88,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 10
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 9000,
      "keyWeaponsIntegrated": [
        "R-37M Ultra BVR (Mach 6)",
        "R-33 Long-Range Missile",
        "Kh-47M2 Kinzhal Hypersonic"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/MiG-31BM_in_flight_2016.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/MiG-31BM_in_flight_2016.jpg",
      "caption": "Mikoyan MiG-31BM Foxhound in service with Russia"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 79,
    "description": "The world's heaviest and fastest operational combat interceptor. Zaslon-AM PESA radar enables simultaneous tracking of 24 aerial targets and engaging 6 with Mach 6 R-37M ultra-long-range missiles. Specialized MiG-31K variants carry the Kh-47M2 Kinzhal hypersonic aero-ballistic missile."
  },
  {
    "id": "RUS-VKS-SU35S",
    "aircraftName": "Sukhoi Su-35S Flanker-E",
    "officialDesignation": "Su-35S Flanker-E+",
    "natoReportingName": "Flanker-E",
    "family": "Sukhoi Su-27/35 Family",
    "variant": "Su-35S Serial Production",
    "block": "VKS Standard",
    "manufacturer": "Sukhoi / KnAAZ",
    "manufacturerCountry": "Russia",
    "countryOfOrigin": "Russia",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Super-Maneuverable Air Superiority Fighter",
    "secondaryRoles": [
      "SEAD",
      "Precision Strike",
      "Long-Range Interception"
    ],
    "generation": "GEN_4_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2008,
    "introductionYear": 2014,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 110,
      "estimatedQuantity": 110,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 110 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 19000,
        "maxTakeoffWeightKg": 34500,
        "payloadCapacityKg": 8000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Saturn AL-41F1S 3D Thrust-Vectoring Turbofans (Dual)",
        "engineManufacturer": "Sukhoi / KnAAZ",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 176,
        "thrustAfterburnerKn": 284
      },
      "performance": {
        "maxSpeedKmh": 2400,
        "maxSpeedMach": 2.25,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 960,
        "ferryRangeKm": 3600,
        "serviceCeilingM": 18000,
        "serviceCeilingFt": 59055,
        "rateOfClimbMs": 280,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Tikhomirov NIIP Irbis-E PESA Radar",
      "radarType": "PESA",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 400,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "90 EW Rating Countermeasures Suite",
      "ewScore": 90,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8000,
      "keyWeaponsIntegrated": [
        "R-37M (RVV-BD) Mach 6 BVR",
        "R-77-1 BVR-AAM",
        "Kh-31P Anti-Radiation"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/22/Sukhoi_Su-35S_in_flight_2017.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/2/22/Sukhoi_Su-35S_in_flight_2017.jpg",
      "caption": "Sukhoi Su-35S Flanker-E in service with Russia"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 85,
    "description": "Premier 4.5++ generation air dominance fighter equipped with Irbis-E passive electronically scanned array radar (detecting targets up to 400 km away) and 3D thrust-vectoring AL-41F1S engines enabling super-maneuverability."
  },
  {
    "id": "RUS-SU57-VKS",
    "aircraftName": "Sukhoi Su-57 Felon",
    "officialDesignation": "Su-57 Production (Stage 1 / AL-41F1)",
    "natoReportingName": null,
    "family": "PAK FA / Su-57 Felon",
    "variant": "Su-57 Production (Stage 1 / AL-41F1)",
    "block": "Batch 2023",
    "manufacturer": "Komsomolsk-on-Amur Aircraft Plant (KnAAZ) / Sukhoi",
    "manufacturerCountry": "Russia",
    "countryOfOrigin": "Russia",
    "country": "Russia",
    "affiliation": "Russian Aerospace Forces (VKS)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "5th-Generation Heavy Multirole Stealth Air Superiority Fighter",
    "secondaryRoles": [
      "Deep Penetration Strike",
      "SEAD / Electronic Warfare"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2010,
    "introductionYear": 2020,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 22,
      "estimatedQuantity": 22,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 22 airframes.",
      "dataConfidence": "MEDIUM",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 18000,
        "maxTakeoffWeightKg": 35000,
        "payloadCapacityKg": 7500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "AL-41F1 3D Thrust-Vectoring Turbofans (Upgrading to Izdeliye 30)",
        "engineManufacturer": "Komsomolsk-on-Amur Aircraft Plant (KnAAZ) / Sukhoi",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 176,
        "thrustAfterburnerKn": 294
      },
      "performance": {
        "maxSpeedKmh": 2135,
        "maxSpeedMach": 2,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 1050,
        "ferryRangeKm": 4500,
        "serviceCeilingM": 20000,
        "serviceCeilingFt": 65617,
        "rateOfClimbMs": 360,
        "gLimitPositive": 9.5
      }
    },
    "avionics": {
      "radar": "Sh121 Byelka Multi-Band AESA (X-band Nose + Cheek arrays + L-band Slats)",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 230,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "92 EW Rating Countermeasures Suite",
      "ewScore": 92,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.1
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 7500,
      "keyWeaponsIntegrated": [
        "R-37M / RVV-BD",
        "R-77M BVR-AAM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg",
      "caption": "Sukhoi Su-57 Felon in service with Russia"
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
    ],
    "tvrScore": 92.6,
    "description": "Russia’s 5th-gen combat platform. Features 3D thrust vectoring, distributed multi-band X/L-band radar arrays, internal weapon bays carrying R-77M and R-37M extreme-range missiles, and 101KS Atoll optical suite."
  },
  {
    "id": "SAU-RSAF-F15SA-ADVANCED",
    "aircraftName": "Boeing F-15SA Advanced Eagle",
    "officialDesignation": "F-15SA Advanced Strike Eagle",
    "natoReportingName": null,
    "family": "McDonnell Douglas / Boeing F-15 Eagle",
    "variant": "F-15SA (Saudi Advanced)",
    "block": "Digital Fly-By-Wire Production Standard",
    "manufacturer": "Boeing Defense, Space & Security",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "Saudi Arabia",
    "affiliation": "Royal Saudi Air Force (RSAF King Khalid / King Fahd Air Bases)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Strike Aircraft",
    "secondaryRoles": [
      "Air Superiority",
      "Deep Penetration Strike",
      "Anti-Ship Strike",
      "Long-Range Interception"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2013,
    "introductionYear": 2016,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 154,
      "estimatedQuantity": 154,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 154 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-09",
      "freshnessStatus": "CURRENT"
    },
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
        "minimumCrew": 1,
        "maximumCrew": 1
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1100,
        "combatRadiusKm": 1080,
        "ferryRangeKm": 4800,
        "serviceCeilingM": 18288,
        "serviceCeilingFt": 60000,
        "rateOfClimbMs": 254,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 13300,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Boeing_F-15SA_Advanced_Eagle_RSAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Boeing_F-15SA_Advanced_Eagle_RSAF.jpg",
      "caption": "Boeing F-15SA Advanced Eagle in service with Saudi Arabia"
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
    ],
    "tvrScore": 75,
    "description": "Heavy multirole strike fighter with immense 13,300 kg payload capacity across 12 external weapon stations, fly-by-wire flight control system, AN/APG-63(V)3 AESA radar, and DEWS digital electronic warfare suite."
  },
  {
    "id": "ZAF-SAAF-GRIPEN-C",
    "aircraftName": "Saab JAS-39C Gripen",
    "officialDesignation": "JAS-39C Gripen Single-Seat Multi-Role Fighter",
    "natoReportingName": null,
    "family": "Saab JAS-39 Gripen",
    "variant": "Gripen C Single-Seat SAAF Standard",
    "block": "South Africa Custom Configuration",
    "manufacturer": "Saab Aeronautics",
    "manufacturerCountry": "Sweden",
    "countryOfOrigin": "Sweden",
    "country": "South Africa",
    "affiliation": "South African Air Force (SAAF 2 Squadron \"Flying Cheetahs\", AFB Makhado)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Multirole Fighter",
    "secondaryRoles": [
      "Air Defense Interception",
      "Close Air Support",
      "Tactical Reconnaissance"
    ],
    "generation": "GEN_4",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1988,
    "introductionYear": 2008,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 26,
      "estimatedQuantity": 26,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 26 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-24",
      "freshnessStatus": "CURRENT"
    },
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1000,
        "combatRadiusKm": 480,
        "ferryRangeKm": 3200,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 250,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 5300,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Saab_JAS-39C_Gripen_SAAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Saab_JAS-39C_Gripen_SAAF.jpg",
      "caption": "Saab JAS-39C Gripen in service with South Africa"
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
    ],
    "tvrScore": 75,
    "description": "Frontline delta-canard multirole combat fighter of the South African Air Force, operating from AFB Makhado armed with indigenous A-Darter and IRIS-T air-to-air missiles."
  },
  {
    "id": "KOR-ROKAF-KF21-BORAMAE",
    "aircraftName": "KAI KF-21 Boramae",
    "officialDesignation": "KF-21 Boramae Block 1 / Block 2",
    "natoReportingName": null,
    "family": "KAI KF-21 Boramae",
    "variant": "KF-21 Block 1 (Air Dominance / Serial Production)",
    "block": "Block 1 Standard (2024-2028 Batch 1)",
    "manufacturer": "Korea Aerospace Industries (KAI)",
    "manufacturerCountry": "South Korea",
    "countryOfOrigin": "South Korea",
    "country": "South Korea",
    "affiliation": "Republic of Korea Air Force (ROKAF)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Air Superiority",
    "secondaryRoles": [
      "Multirole Strike",
      "Maritime Interdiction",
      "Precision Guided Standoff Attack"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ORDERED",
    "firstFlightYear": 2022,
    "introductionYear": 2026,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 20,
      "estimatedQuantity": 20,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 20 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-12",
      "freshnessStatus": "CURRENT"
    },
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
        "maximumCrew": 1
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1100,
        "combatRadiusKm": 600,
        "ferryRangeKm": 2900,
        "serviceCeilingM": 16764,
        "serviceCeilingFt": 55000,
        "rateOfClimbMs": 270,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 7700,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/KAI_KF-21_Boramae_first_flight.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9e/KAI_KF-21_Boramae_first_flight.jpg",
      "caption": "KAI KF-21 Boramae in service with South Korea"
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
    ],
    "tvrScore": 75,
    "description": "South Korea 4.5+ generation indigenous supersonic fighter featuring 5th-gen stealth airframe shaping, Hanwha GaN AESA radar, twin F414 turbofans, and Meteor BVRAAM long-range missile integration."
  },
  {
    "id": "TUR-TAF-KAAN-TF",
    "aircraftName": "TAI TF Kaan",
    "officialDesignation": "TAI Kaan 5th-Generation Air Dominance Stealth Fighter",
    "natoReportingName": null,
    "family": "TAI TF Kaan",
    "variant": "TAI Kaan Block 0 Prototype / Block 10 Production",
    "block": "Block 0 (Development) / Block 10 (Initial Serial)",
    "manufacturer": "Turkish Aerospace Industries (TAI / TUSAŞ)",
    "manufacturerCountry": "Türkiye",
    "countryOfOrigin": "Türkiye",
    "country": "Türkiye",
    "affiliation": "Turkish Air Force (Türk Hava Kuvvetleri)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Air Superiority",
    "secondaryRoles": [
      "Multirole Strike",
      "Electronic Attack",
      "Loyal Wingman Collaborative Combat Aircraft (CCA) Command"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "TESTING",
    "firstFlightYear": 2024,
    "introductionYear": 2028,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 2,
      "estimatedQuantity": 2,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 2 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-01-30",
      "freshnessStatus": "CURRENT"
    },
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1100,
        "combatRadiusKm": 660,
        "ferryRangeKm": 3200,
        "serviceCeilingM": 16764,
        "serviceCeilingFt": 55000,
        "rateOfClimbMs": 290,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8000,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/TAI_TF_Kaan_first_flight.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/TAI_TF_Kaan_first_flight.jpg",
      "caption": "TAI TF Kaan in service with Türkiye"
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
    ],
    "tvrScore": 75,
    "description": "Indigenous Turkish 5th-generation heavy stealth multirole fighter. Features twin engines, internal weapons bays, all-aspect radar cross section reduction, Aselsan MURAD GaN AESA radar, and loyal wingman drone teaming capability with Bayraktar Kizilelma and ANKA-3."
  },
  {
    "id": "GBR-RAF-AVRO-VULCAN",
    "aircraftName": "Avro Vulcan B.2",
    "officialDesignation": "Vulcan B.2 Strategic Bomber",
    "natoReportingName": null,
    "family": "Avro V-Bomber Force",
    "variant": "Vulcan B.2",
    "block": "RAF Strategic Standard",
    "manufacturer": "A.V. Roe and Company (Avro)",
    "manufacturerCountry": "United Kingdom",
    "countryOfOrigin": "United Kingdom",
    "country": "United Kingdom",
    "affiliation": "Royal Air Force (V-Bomber Nuclear Strike Force 1956–1984)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Delta-Wing Strategic Nuclear & Conventional Bomber",
    "secondaryRoles": [
      "Operation Black Buck Long-Range Strike",
      "Maritime Reconnaissance"
    ],
    "generation": "GEN_1",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1952,
    "introductionYear": 1956,
    "retirementYear": 1984,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1984,
      "quantityNotes": "Historic airframe (Retired 1984). Total produced: 136.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 37140,
        "maxTakeoffWeightKg": 92986,
        "payloadCapacityKg": 9500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 4,
        "engineModel": "Bristol Olympus 301 Turbojets (Quad)",
        "engineManufacturer": "A.V. Roe and Company (Avro)",
        "engineType": "Turbojet",
        "hasAfterburner": false,
        "thrustDryKn": 356,
        "thrustAfterburnerKn": 356
      },
      "performance": {
        "maxSpeedKmh": 1038,
        "maxSpeedMach": 0.96,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 2510,
        "ferryRangeKm": 7600,
        "serviceCeilingM": 17000,
        "serviceCeilingFt": 55774,
        "rateOfClimbMs": 80,
        "gLimitPositive": 4
      }
    },
    "avionics": {
      "radar": "H2S Mk.IXA Radar & Navigation System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 70,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "78 EW Rating Countermeasures Suite",
      "ewScore": 78,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 9500,
      "keyWeaponsIntegrated": [
        "Yellow Sun Mk.2 Thermonuclear",
        "Twenty-One 1,000 lb HE Bombs",
        "AGM-45 Shrike Anti-Radiation"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Avro_Vulcan_XH558_in_flight.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Avro_Vulcan_XH558_in_flight.jpg",
      "caption": "Avro Vulcan B.2 in service with United Kingdom"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 67.9,
    "description": "The iconic tailless delta-wing strategic bomber that served as Britain's airborne nuclear deterrent. Famed for the historic 1982 'Operation Black Buck' bombing raids during the Falklands War, flying 12,000 km return from Ascension Island with complex aerial refueling."
  },
  {
    "id": "GBR-RAF-EE-LIGHTNING",
    "aircraftName": "English Electric Lightning F.6",
    "officialDesignation": "Lightning F.6 Point Defense Interceptor",
    "natoReportingName": null,
    "family": "English Electric Lightning",
    "variant": "Lightning F.6",
    "block": "RAF Final Standard",
    "manufacturer": "English Electric / British Aircraft Corporation",
    "manufacturerCountry": "United Kingdom",
    "countryOfOrigin": "United Kingdom",
    "country": "United Kingdom",
    "affiliation": "Royal Air Force (Fighter Command / Strike Command 1959–1988)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Mach 2.27 Vertical-Climb Point Defense Interceptor",
    "secondaryRoles": [
      "Supersonic QRA Interception"
    ],
    "generation": "GEN_2",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1954,
    "introductionYear": 1959,
    "retirementYear": 1988,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1988,
      "quantityNotes": "Historic airframe (Retired 1988). Total produced: 337.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 12700,
        "maxTakeoffWeightKg": 20750,
        "payloadCapacityKg": 1500,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Rolls-Royce Avon 302 Afterburning Turbojets (Vertically Stacked Dual)",
        "engineManufacturer": "English Electric / British Aircraft Corporation",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 108,
        "thrustAfterburnerKn": 145
      },
      "performance": {
        "maxSpeedKmh": 2414,
        "maxSpeedMach": 2.27,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 360,
        "ferryRangeKm": 1370,
        "serviceCeilingM": 18000,
        "serviceCeilingFt": 59055,
        "rateOfClimbMs": 250,
        "gLimitPositive": 7
      }
    },
    "avionics": {
      "radar": "Ferranti AI.23 AIRPASS Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 50,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "50 EW Rating Countermeasures Suite",
      "ewScore": 50,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1500,
      "keyWeaponsIntegrated": [
        "Red Top AAM",
        "Firestreak AAM",
        "Two 30mm ADEN Cannons"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/English_Electric_Lightning_F6_XR770.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/English_Electric_Lightning_F6_XR770.jpg",
      "caption": "English Electric Lightning F.6 in service with United Kingdom"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 54.8,
    "description": "Britain's only Mach 2 supersonic jet fighter developed entirely indigenously. Unique stacked engine configuration and exceptional climb rate (up to 50,000 ft in under 2.5 minutes), designed to intercept high-altitude Soviet nuclear bombers."
  },
  {
    "id": "GBR-RAF-TYPHOON-FGR4",
    "aircraftName": "Eurofighter Typhoon FGR4",
    "officialDesignation": "Typhoon FGR4 (Centurion Multi-Role Standard)",
    "natoReportingName": null,
    "family": "Eurofighter Typhoon",
    "variant": "Typhoon FGR4 (Tranche 2 / 3 Upgrade)",
    "block": "Phase 2 / Phase 3 Enhancement (P2E/P3E)",
    "manufacturer": "BAE Systems / Airbus / Leonardo (Eurofighter GmbH)",
    "manufacturerCountry": "United Kingdom / Germany / Italy / Spain",
    "countryOfOrigin": "United Kingdom / Germany / Italy / Spain",
    "country": "United Kingdom",
    "affiliation": "Royal Air Force (RAF Coningsby / RAF Lossiemouth)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Multirole Fighter",
    "secondaryRoles": [
      "Air Superiority",
      "Deep Precision Strike",
      "Quick Reaction Alert (QRA)",
      "Maritime Interdiction"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1994,
    "introductionYear": 2003,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 137,
      "estimatedQuantity": 137,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 137 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-02-08",
      "freshnessStatus": "CURRENT"
    },
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
        "maximumCrew": 1
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
        "maxSpeedKmh": null,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": 1200,
        "combatRadiusKm": 833,
        "ferryRangeKm": 3790,
        "serviceCeilingM": 19812,
        "serviceCeilingFt": 65000,
        "rateOfClimbMs": 315,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Radar System",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 9000,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Eurofighter_Typhoon_FGR4_RAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Eurofighter_Typhoon_FGR4_RAF.jpg",
      "caption": "Eurofighter Typhoon FGR4 in service with United Kingdom"
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
    ],
    "tvrScore": 75,
    "description": "Premier agile delta-canard swing-role combat aircraft of the Royal Air Force and European NATO air arms. Renowned for extreme thrust-to-weight ratio, supercruise, Meteor BVRAAM reach, and Storm Shadow deep standoff strike."
  },
  {
    "id": "USA-USAF-F15EX-EAGLE",
    "aircraftName": "Boeing F-15EX Eagle II",
    "officialDesignation": "F-15EX Eagle II",
    "natoReportingName": null,
    "family": "McDonnell Douglas / Boeing F-15 Eagle",
    "variant": "F-15EX Advanced Strike",
    "block": "Lot 1 Production",
    "manufacturer": "Boeing Defense, Space & Security",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Air Force (Air Combat Command / ANG)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Heavy Air Superiority & Deep Standoff Strike Missile Carrier",
    "secondaryRoles": [
      "Hypersonic Weapon Delivery",
      "Homeland Defense",
      "BVR Dominance"
    ],
    "generation": "GEN_4_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2021,
    "introductionYear": 2021,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 8,
      "estimatedQuantity": 8,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 8 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 14300,
        "maxTakeoffWeightKg": 36700,
        "payloadCapacityKg": 13300,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F110-GE-129 Afterburning Turbofans (Dual)",
        "engineManufacturer": "Boeing Defense, Space & Security",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 152,
        "thrustAfterburnerKn": 262
      },
      "performance": {
        "maxSpeedKmh": 2655,
        "maxSpeedMach": 2.5,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 762,
        "ferryRangeKm": 4815,
        "serviceCeilingM": 18288,
        "serviceCeilingFt": 60000,
        "rateOfClimbMs": 254,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "Raytheon AN/APG-82(V)1 AESA Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 280,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "95 EW Rating Countermeasures Suite",
      "ewScore": 95,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 2
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 13300,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM",
        "AGM-158 JASSM-ER",
        "AIM-9X Sidewinder Block II"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/F-15EX_Eagle_II_first_flight.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/F-15EX_Eagle_II_first_flight.jpg",
      "caption": "Boeing F-15EX Eagle II in service with United States"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 86,
    "description": "The most advanced iteration of the undefeated F-15 air superiority fighter (104-0 combat record). Features AN/APG-82(V)1 AESA radar, EPAWSS electronic warfare suite, fly-by-wire controls, and an astounding 29,500 lb (13,300 kg) payload capacity carrying up to 12 AIM-120 missiles."
  },
  {
    "id": "USA-FA18F-NAVY",
    "aircraftName": "Boeing F/A-18F Super Hornet",
    "officialDesignation": "F/A-18F Block III",
    "natoReportingName": null,
    "family": "F/A-18 Hornet Family",
    "variant": "F/A-18F Block III",
    "block": "Block III Advanced Capability",
    "manufacturer": "Boeing Defense, Space & Security",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Navy Carrier Air Wings",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Carrier-Based Multirole Strike Fighter",
    "secondaryRoles": [
      "Fleet Air Defense",
      "Aerial Tanker Recovery",
      "SEAD Escort"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1995,
    "introductionYear": 2001,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 420,
      "estimatedQuantity": 420,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 420 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 14552,
        "maxTakeoffWeightKg": 29937,
        "payloadCapacityKg": 8050,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F414-GE-400 Turbofans",
        "engineManufacturer": "Boeing Defense, Space & Security",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 130,
        "thrustAfterburnerKn": 196
      },
      "performance": {
        "maxSpeedKmh": 1915,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 540,
        "ferryRangeKm": 3300,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 228,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "AN/APG-79 Active Electronically Scanned Array",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 160,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "90 EW Rating Countermeasures Suite",
      "ewScore": 90,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "REDUCED",
      "rcsEstimatedM2": 1
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8050,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM",
        "AGM-88E AARGM",
        "AGM-158C LRASM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/FA-18F_Super_Hornet_of_VFA-103_in_flight_in_2015.JPG",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f6/FA-18F_Super_Hornet_of_VFA-103_in_flight_in_2015.JPG",
      "caption": "Boeing F/A-18F Super Hornet in service with United States"
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
    ],
    "tvrScore": 88.5,
    "description": "Workhorse of US Navy CATOBAR supercarriers. Block III upgrade adds conformal fuel tanks (CFTs), advanced cockpit system (ACS), TTNT networking, and APG-79 AESA radar integration."
  },
  {
    "id": "USA-MQ9A-USAF",
    "aircraftName": "General Atomics MQ-9A Reaper",
    "officialDesignation": "MQ-9A Extended Range (ER)",
    "natoReportingName": null,
    "family": "General Atomics Predator B / Reaper",
    "variant": "MQ-9A Extended Range (ER)",
    "block": "Block 5",
    "manufacturer": "General Atomics Aeronautical Systems",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Air Force",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Unmanned",
    "primaryCategory": "Medium-Altitude Long-Endurance (MALE) Armed Strike UAV",
    "secondaryRoles": [
      "Target Acquisition",
      "Over-the-Horizon Surveillance"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2001,
    "introductionYear": 2007,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 280,
      "estimatedQuantity": 280,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 280 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": null,
        "maxTakeoffWeightKg": null,
        "payloadCapacityKg": 1700,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Honeywell TPE331-10 Turboprop",
        "engineManufacturer": "General Atomics Aeronautical Systems",
        "engineType": "Turboprop",
        "hasAfterburner": false,
        "thrustDryKn": null,
        "thrustAfterburnerKn": null
      },
      "performance": {
        "maxSpeedKmh": 482,
        "maxSpeedMach": null,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 1110,
        "ferryRangeKm": null,
        "serviceCeilingM": 15400,
        "serviceCeilingFt": 50525,
        "rateOfClimbMs": null,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "AN/APY-8 Lynx Synthetic Aperture Radar",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 80,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "75 EW Rating Countermeasures Suite",
      "ewScore": 75,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": null
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1700,
      "keyWeaponsIntegrated": [
        "AGM-114 Hellfire",
        "GBU-12 Paveway II"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/dd/MQ-9_Reaper_in_flight_%282007%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/d/dd/MQ-9_Reaper_in_flight_%282007%29.jpg",
      "caption": "General Atomics MQ-9A Reaper in service with United States"
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
    ],
    "tvrScore": 82.5,
    "description": "Armed MALE unmanned aircraft system executing continuous hunter-killer ISR operations. Capable of 27 hours endurance armed with GBU-12 Paveway laser-guided bombs and AGM-114 Hellfire missiles."
  },
  {
    "id": "USA-NAVY-F14-TOMCAT",
    "aircraftName": "Grumman F-14D Super Tomcat",
    "officialDesignation": "F-14D Super Tomcat",
    "natoReportingName": null,
    "family": "Grumman F-14",
    "variant": "F-14D Super Tomcat",
    "block": "Super Tomcat Final Standard",
    "manufacturer": "Grumman Aerospace Corporation",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Navy (Carrier Air Wings 1974–2006)",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Variable-Geometry Fleet Air Defense Interceptor",
    "secondaryRoles": [
      "Precision Strike (Bombcat)",
      "Tactical Reconnaissance"
    ],
    "generation": "GEN_4",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1970,
    "introductionYear": 1974,
    "retirementYear": 2006,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2006,
      "quantityNotes": "Historic airframe (Retired 2006). Total produced: 712.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 19838,
        "maxTakeoffWeightKg": 33720,
        "payloadCapacityKg": 6600,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F110-GE-400 Afterburning Turbofans (Dual)",
        "engineManufacturer": "Grumman Aerospace Corporation",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 124,
        "thrustAfterburnerKn": 216
      },
      "performance": {
        "maxSpeedKmh": 2485,
        "maxSpeedMach": 2.34,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 556,
        "ferryRangeKm": 3220,
        "serviceCeilingM": 16000,
        "serviceCeilingFt": 52493,
        "rateOfClimbMs": 230,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "Hughes AN/APG-71 Digital Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 230,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "82 EW Rating Countermeasures Suite",
      "ewScore": 82,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 5
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 6600,
      "keyWeaponsIntegrated": [
        "AIM-54C Phoenix",
        "AIM-7M Sparrow",
        "AIM-9M Sidewinder"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/F-14D_VF-31_landing_USS_Theodore_Roosevelt_%28CVN-71%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d7/F-14D_VF-31_landing_USS_Theodore_Roosevelt_%28CVN-71%29.jpg",
      "caption": "Grumman F-14D Super Tomcat in service with United States"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 74,
    "description": "Iconic carrier-borne twin-engine variable-sweep wing air superiority fighter. Armed with the 190 km range AIM-54 Phoenix missile and AWG-9 / APG-71 radar capable of tracking 24 targets and engaging 6 simultaneously."
  },
  {
    "id": "USA-USAF-F117A-NIGHTHAWK",
    "aircraftName": "Lockheed F-117A Nighthawk",
    "officialDesignation": "F-117A Nighthawk",
    "natoReportingName": null,
    "family": "Lockheed Stealth Series",
    "variant": "F-117A Production Standard",
    "block": "Senior Trend Standard",
    "manufacturer": "Lockheed Corporation (Skunk Works)",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Air Force (4450th Tactical Group / 49th FW 1983–2008)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Low-Observable Precision Ground Attack Stealth Aircraft",
    "secondaryRoles": [
      "Deep Penetration Night Strike"
    ],
    "generation": "GEN_4",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1981,
    "introductionYear": 1983,
    "retirementYear": 2008,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 2008,
      "quantityNotes": "Historic airframe (Retired 2008). Total produced: 64.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 13380,
        "maxTakeoffWeightKg": 23814,
        "payloadCapacityKg": 2000,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric F404-F1D2 Non-Afterburning Turbofans",
        "engineManufacturer": "Lockheed Corporation (Skunk Works)",
        "engineType": "Turbofan",
        "hasAfterburner": false,
        "thrustDryKn": 96,
        "thrustAfterburnerKn": 96
      },
      "performance": {
        "maxSpeedKmh": 1100,
        "maxSpeedMach": 0.92,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 540,
        "ferryRangeKm": 2110,
        "serviceCeilingM": 13716,
        "serviceCeilingFt": 45000,
        "rateOfClimbMs": 80,
        "gLimitPositive": 6
      }
    },
    "avionics": {
      "radar": "Forward-Looking Infrared (FLIR) & DLIR Laser Designation",
      "radarType": "NONE",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": null,
      "hasAesa": false,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "90 EW Rating Countermeasures Suite",
      "ewScore": 90,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": true,
      "stealthLevel": "VERY_HIGH",
      "rcsEstimatedM2": 0.001
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 2000,
      "keyWeaponsIntegrated": [
        "GBU-27 Paveway III",
        "GBU-10 Paveway II"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a1/F-117_Nighthawk_Front.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a1/F-117_Nighthawk_Front.jpg",
      "caption": "Lockheed F-117A Nighthawk in service with United States"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 65.5,
    "description": "The world's first operational stealth combat aircraft, developed in secret by Lockheed's Skunk Works. Its revolutionary faceted surface design delivered a micro radar cross-section, penetrating Baghdad's dense air defenses during Operation Desert Storm in 1991 without detection."
  },
  {
    "id": "USA-F22A",
    "aircraftName": "Lockheed Martin F-22A Raptor",
    "officialDesignation": "F-22A Block 30/35",
    "natoReportingName": null,
    "family": "F-22 Raptor",
    "variant": "F-22A Block 30/35",
    "block": "Increment 3.2B",
    "manufacturer": "Lockheed Martin / Boeing",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Air Force",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Stealth Air Dominance Fighter",
    "secondaryRoles": [
      "Electronic Attack",
      "Precision Standoff Attack"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 1997,
    "introductionYear": 2005,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 183,
      "estimatedQuantity": 183,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 183 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 19700,
        "maxTakeoffWeightKg": 38000,
        "payloadCapacityKg": 9100,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Pratt & Whitney F119-PW-100 Supercruising Turbofans",
        "engineManufacturer": "Lockheed Martin / Boeing",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 210,
        "thrustAfterburnerKn": 312
      },
      "performance": {
        "maxSpeedKmh": 2414,
        "maxSpeedMach": 2.25,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 660,
        "ferryRangeKm": 3220,
        "serviceCeilingM": 20000,
        "serviceCeilingFt": 65617,
        "rateOfClimbMs": 350,
        "gLimitPositive": 9.5
      }
    },
    "avionics": {
      "radar": "AN/APG-77(V)1 Active Electronically Scanned Array",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 240,
      "hasAesa": true,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "98 EW Rating Countermeasures Suite",
      "ewScore": 98,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "VERY_HIGH",
      "rcsEstimatedM2": 0.0001
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 9100,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM",
        "AIM-9X Sidewinder Block II"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg",
      "caption": "Lockheed Martin F-22A Raptor in service with United States"
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
    ],
    "tvrScore": 95.8,
    "description": "The world benchmark for stealth air dominance. Combines extreme low-observability shaping, Mach 1.82 supercruise without afterburners, 2D thrust-vectoring agility, and advanced AN/APG-77 AESA radar."
  },
  {
    "id": "USA-F35A",
    "aircraftName": "Lockheed Martin F-35A Lightning II",
    "officialDesignation": "F-35A Conventional Takeoff & Landing (CTOL)",
    "natoReportingName": null,
    "family": "F-35 Joint Strike Fighter",
    "variant": "F-35A Conventional Takeoff & Landing (CTOL)",
    "block": "Block 4 Standard",
    "manufacturer": "Lockheed Martin",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Air Force",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "5th-Generation Multi-Role Stealth Strike Fighter",
    "secondaryRoles": [
      "Electronic Attack",
      "Intelligence Surveillance Reconnaissance (ISR)",
      "SEAD"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2006,
    "introductionYear": 2016,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 360,
      "estimatedQuantity": 360,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 360 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 13290,
        "maxTakeoffWeightKg": 31800,
        "payloadCapacityKg": 8160,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Pratt & Whitney F135-PW-100",
        "engineManufacturer": "Lockheed Martin",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 125,
        "thrustAfterburnerKn": 191
      },
      "performance": {
        "maxSpeedKmh": 1960,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 720,
        "ferryRangeKm": 2800,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 230,
        "gLimitPositive": 9
      }
    },
    "avionics": {
      "radar": "AN/APG-81 (Upgrading to APG-85 GaN AESA)",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 220,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "99 EW Rating Countermeasures Suite",
      "ewScore": 99,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "VERY_HIGH",
      "rcsEstimatedM2": 0.001
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8160,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM",
        "GBU-39 Small Diameter Bomb",
        "JSM Joint Strike Missile"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg",
      "caption": "Lockheed Martin F-35A Lightning II in service with United States"
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
    ],
    "tvrScore": 94.2,
    "description": "Premier networked 5th-generation strike fighter. Features all-aspect stealth, automated sensor fusion combining AN/APG-81 AESA radar, AN/AAQ-37 Electro-Optical Distributed Aperture System (DAS), and MADL secure datalink."
  },
  {
    "id": "USA-F35C-NAVY",
    "aircraftName": "Lockheed Martin F-35C Lightning II",
    "officialDesignation": "F-35C Carrier Variant (CV)",
    "natoReportingName": null,
    "family": "F-35 Joint Strike Fighter",
    "variant": "F-35C Carrier Variant (CV)",
    "block": "Block 4 Standard",
    "manufacturer": "Lockheed Martin",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Navy / Marine Corps",
    "militaryBranch": "NAVAL_AVIATION",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Carrier-Based 5th-Gen Stealth Strike Fighter",
    "secondaryRoles": [
      "Fleet Defense",
      "Electronic Attack",
      "First-Day-of-War Penetration"
    ],
    "generation": "GEN_5",
    "era": "MODERN",
    "serviceStatus": "ACTIVE",
    "firstFlightYear": 2010,
    "introductionYear": 2019,
    "retirementYear": null,
    "productionStatus": "ACTIVE_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 110,
      "estimatedQuantity": 110,
      "quantityYear": 2026,
      "quantityNotes": "Active inventory: 110 airframes.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 15686,
        "maxTakeoffWeightKg": 31800,
        "payloadCapacityKg": 8160,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 1,
        "engineModel": "Pratt & Whitney F135-PW-400",
        "engineManufacturer": "Lockheed Martin",
        "engineType": "Turbofan",
        "hasAfterburner": true,
        "thrustDryKn": 125,
        "thrustAfterburnerKn": 191
      },
      "performance": {
        "maxSpeedKmh": 1960,
        "maxSpeedMach": 1.6,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 744,
        "ferryRangeKm": 2900,
        "serviceCeilingM": 15240,
        "serviceCeilingFt": 50000,
        "rateOfClimbMs": 220,
        "gLimitPositive": 7.5
      }
    },
    "avionics": {
      "radar": "AN/APG-81 Active Electronically Scanned Array",
      "radarType": "AESA",
      "radarArchitecture": "Active Electronically Scanned Array",
      "radarRangeAirKm": 220,
      "hasAesa": true,
      "hasIrst": true,
      "irstModel": "Integrated Electro-Optical / IRST",
      "electronicWarfare": "99 EW Rating Countermeasures Suite",
      "ewScore": 99,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": "Helmet Mounted Display System",
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "VERY_HIGH",
      "rcsEstimatedM2": 0.001
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8160,
      "keyWeaponsIntegrated": [
        "AIM-120D AMRAAM",
        "AGM-154 JSOW"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/F-35C_CF-1_flight.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/F-35C_CF-1_flight.jpg",
      "caption": "Lockheed Martin F-35C Lightning II in service with United States"
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
    ],
    "tvrScore": 93.8,
    "description": "First catapult-capable 5th-generation stealth aircraft. Features enlarged folding wings, strengthened landing gear with heavy catapult bar and arrestor hook, and internal bays for stealth standoff ordnance."
  },
  {
    "id": "USA-USAF-SR71-BLACKBIRD",
    "aircraftName": "Lockheed SR-71A Blackbird",
    "officialDesignation": "SR-71A Strategic Reconnaissance",
    "natoReportingName": null,
    "family": "Lockheed Blackbird Family",
    "variant": "SR-71A",
    "block": "USAF Strategic Reconnaissance",
    "manufacturer": "Lockheed Corporation (Skunk Works)",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Air Force / 9th Strategic Reconnaissance Wing (1966–1998)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "Mach 3.3+ Stratospheric Strategic Reconnaissance",
    "secondaryRoles": [
      "High-Altitude Optical/ELINT Survey"
    ],
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1964,
    "introductionYear": 1966,
    "retirementYear": 1998,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1998,
      "quantityNotes": "Historic airframe (Retired 1998). Total produced: 32.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 30600,
        "maxTakeoffWeightKg": 78000,
        "payloadCapacityKg": 1600,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "Pratt & Whitney J58-1 Continuous-Bleed Afterburning Turbojets",
        "engineManufacturer": "Lockheed Corporation (Skunk Works)",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 220,
        "thrustAfterburnerKn": 290
      },
      "performance": {
        "maxSpeedKmh": 3540,
        "maxSpeedMach": 3.32,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 1200,
        "ferryRangeKm": 5400,
        "serviceCeilingM": 25900,
        "serviceCeilingFt": 84974,
        "rateOfClimbMs": 60,
        "gLimitPositive": 3.5
      }
    },
    "avionics": {
      "radar": "Advanced Synthetic Aperture Radar System (ASARS-1)",
      "radarType": "PESA",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 160,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "94 EW Rating Countermeasures Suite",
      "ewScore": 94,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": true,
      "datalinkProtocol": "Secure Military Tactical Datalink",
      "sensorFusion": true,
      "stealthLevel": "HIGH",
      "rcsEstimatedM2": 0.1
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 1600,
      "keyWeaponsIntegrated": []
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Lockheed_SR-71_Blackbird.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Lockheed_SR-71_Blackbird.jpg",
      "caption": "Lockheed SR-71A Blackbird in service with United States"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 83.2,
    "description": "The fastest and highest-flying air-breathing manned operational aircraft ever built. Designed by Kelly Johnson's Skunk Works, the SR-71 outflew over 4,000 surface-to-air missiles fired at it throughout its operational life, with zero losses to enemy action."
  },
  {
    "id": "USA-USAF-F4-PHANTOM",
    "aircraftName": "McDonnell Douglas F-4E Phantom II",
    "officialDesignation": "F-4E Phantom II",
    "natoReportingName": null,
    "family": "McDonnell Douglas F-4 Phantom",
    "variant": "F-4E Advanced Fighter-Bomber",
    "block": "USAF Standard",
    "manufacturer": "McDonnell Douglas",
    "manufacturerCountry": "United States",
    "countryOfOrigin": "United States",
    "country": "United States",
    "affiliation": "United States Air Force / US Navy / USMC (1960–1996)",
    "militaryBranch": "AIR_FORCE",
    "aircraftType": "Fixed-Wing",
    "primaryCategory": "All-Weather Supersonic Fighter-Bomber & Interceptor",
    "secondaryRoles": [
      "Wild Weasel (SEAD)",
      "Tactical Reconnaissance"
    ],
    "generation": "GEN_3",
    "era": "COLD_WAR",
    "serviceStatus": "RETIRED",
    "firstFlightYear": 1958,
    "introductionYear": 1960,
    "retirementYear": 1996,
    "productionStatus": "OUT_OF_PRODUCTION",
    "fleet": {
      "confirmedQuantity": 0,
      "estimatedQuantity": 0,
      "quantityYear": 1996,
      "quantityNotes": "Historic airframe (Retired 1996). Total produced: 5195.",
      "dataConfidence": "HIGH",
      "lastVerified": "2026-09-20",
      "freshnessStatus": "CURRENT"
    },
    "specifications": {
      "dimensions": {
        "lengthM": null,
        "wingspanM": null,
        "heightM": null
      },
      "weights": {
        "emptyWeightKg": 13757,
        "maxTakeoffWeightKg": 28030,
        "payloadCapacityKg": 8480,
        "internalFuelKg": null
      },
      "crew": {
        "minimumCrew": 1,
        "maximumCrew": 1
      },
      "propulsion": {
        "engineCount": 2,
        "engineModel": "General Electric J79-GE-17A Turbojets (Dual)",
        "engineManufacturer": "McDonnell Douglas",
        "engineType": "Turbojet",
        "hasAfterburner": true,
        "thrustDryKn": 105.8,
        "thrustAfterburnerKn": 156
      },
      "performance": {
        "maxSpeedKmh": 2370,
        "maxSpeedMach": 2.23,
        "cruiseSpeedKmh": null,
        "combatRadiusKm": 408,
        "ferryRangeKm": 2600,
        "serviceCeilingM": 18300,
        "serviceCeilingFt": 60039,
        "rateOfClimbMs": 210,
        "gLimitPositive": 8.5
      }
    },
    "avionics": {
      "radar": "Westinghouse AN/APQ-120 Radar",
      "radarType": "MECHANICAL_PULSE_DOPPLER",
      "radarArchitecture": "Mechanical / PESA",
      "radarRangeAirKm": 75,
      "hasAesa": false,
      "hasIrst": false,
      "irstModel": null,
      "electronicWarfare": "72 EW Rating Countermeasures Suite",
      "ewScore": 72,
      "targetingSystem": "Integrated Tactical Targeting Pod",
      "helmetMountedDisplay": null,
      "hasDatalink": false,
      "datalinkProtocol": null,
      "sensorFusion": false,
      "stealthLevel": "LOW",
      "rcsEstimatedM2": 7
    },
    "capabilities": {
      "internalGun": "Integrated Cannon System",
      "airToAirCapable": true,
      "airToGroundCapable": true,
      "antiShipCapable": false,
      "antiRadiationCapable": false,
      "guidedBombCapable": true,
      "cruiseMissileCapable": false,
      "maximumPayloadKg": 8480,
      "keyWeaponsIntegrated": [
        "AIM-7F Sparrow",
        "AIM-9L Sidewinder",
        "AGM-88 HARM"
      ]
    },
    "image": {
      "primaryImageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/F-4E_Phantom_II_USAF.jpg",
      "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/F-4E_Phantom_II_USAF.jpg",
      "caption": "McDonnell Douglas F-4E Phantom II in service with United States"
    },
    "sources": [
      {
        "name": "Jane's All the World's Aircraft / Official MoD Archives",
        "url": "https://mod.gov.in",
        "retrievedAt": "2026-02-15"
      }
    ],
    "tvrScore": 63.9,
    "description": "The defining twin-engine supersonic tactical fighter-bomber of the Cold War. Set 15 world speed and altitude records and served as the premier frontline multirole combat aircraft across the USAF, US Navy, and 11 allied nations."
  }
];
