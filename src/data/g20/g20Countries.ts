export interface G20Country {
  id: string;
  name: string;
  countryCode: string; // ISO 3-letter, e.g. "IND", "USA"
  isoCode: string; // ISO 2-letter, e.g. "IN", "US"
  flag: string;
  region: string;
  description: string;
  militaryBranches: {
    name: string;
    type: 'AIR_FORCE' | 'NAVAL_AVIATION' | 'ARMY_AVIATION' | 'MARINE_AVIATION' | 'COAST_GUARD' | 'STRATEGIC';
    officialName: string;
    description: string;
  }[];
  totalAircraftEstimate: number;
  modernizationIndex: number;
  defenseBudgetUsd: number; // Billions USD
}

export const g20CountriesData: G20Country[] = [
  // 1. INDIA (PHASE 1 - FIRST & PRIMARY)
  {
    id: 'country-ind',
    name: 'India',
    countryCode: 'IND',
    isoCode: 'IN',
    flag: '🇮🇳',
    region: 'South Asia / Indo-Pacific',
    description: 'Operating a diverse multi-spectrum tri-branch aviation architecture with world-class high-altitude Himalayan combat mastery and indigenous aerospace production (HAL Tejas, LCH Prachand, ALH Dhruv).',
    totalAircraftEstimate: 2210,
    modernizationIndex: 78.5,
    defenseBudgetUsd: 81.4,
    militaryBranches: [
      {
        name: 'Indian Air Force',
        type: 'AIR_FORCE',
        officialName: 'Bhartiya Vayu Sena (IAF)',
        description: 'Primary air defense and strategic deterrence branch operating 4.5-gen fighters (Rafale, Su-30MKI, Tejas Mk1A), heavy transports (C-17, C-130J), and AEW&C force multipliers.',
      },
      {
        name: 'Indian Navy Air Arm',
        type: 'NAVAL_AVIATION',
        officialName: 'Indian Naval Air Arm (IN)',
        description: 'Carrier-borne strike fighter wings (MiG-29K, Rafale-M), long-range maritime anti-submarine reconnaissance (P-8I Neptune), and shipborne ASW helicopters (MH-60R Seahawk, ALH Mk III).',
      },
      {
        name: 'Indian Army Aviation Corps',
        type: 'ARMY_AVIATION',
        officialName: 'Army Aviation Corps (AAC)',
        description: 'Dedicated high-altitude attack helicopter divisions (LCH Prachand, Apache AH-64E, Rudra), tactical utility (Dhruv ALH), and battlefield reconnaissance UAVs.',
      },
    ],
  },

  // 2. UNITED STATES
  {
    id: 'country-usa',
    name: 'United States',
    countryCode: 'USA',
    isoCode: 'US',
    flag: '🇺🇸',
    region: 'North America',
    description: 'Global benchmark for 5th-generation stealth combat airpower, strategic heavy stealth bomber reach (B-21 Raider, B-2A), global carrier strike group naval aviation, and massive tanker/AEW&C force multiplier fleets.',
    totalAircraftEstimate: 13200,
    modernizationIndex: 94.2,
    defenseBudgetUsd: 877.0,
    militaryBranches: [
      {
        name: 'United States Air Force',
        type: 'AIR_FORCE',
        officialName: 'USAF',
        description: 'Stealth air dominance (F-22A, F-35A, F-15EX), strategic standoff bombers (B-21, B-2A, B-52H), and worldwide aerial refueling (KC-46A).',
      },
      {
        name: 'United States Navy',
        type: 'NAVAL_AVIATION',
        officialName: 'Naval Air Forces (NAVAIR)',
        description: '11 nuclear-powered supercarrier air wings operating F-35C stealth fighters, F/A-18F Super Hornets, EA-18G Growlers, and E-2D Hawkeyes.',
      },
      {
        name: 'United States Marine Corps',
        type: 'MARINE_AVIATION',
        officialName: 'USMC Aviation',
        description: 'Amphibious assault aviation operating F-35B STOVL stealth fighters, MV-22B Osprey tiltrotors, and AH-1Z Viper attack helicopters.',
      },
      {
        name: 'United States Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'US Army Aviation Branch',
        description: 'Heavy battlefield attack helicopters (AH-64E Apache Guardian), tactical assault lift (UH-60M Black Hawk, CH-47F Chinook), and armed UAVs.',
      },
    ],
  },

  // 3. CHINA
  {
    id: 'country-chn',
    name: 'China',
    countryCode: 'CHN',
    isoCode: 'CN',
    flag: '🇨🇳',
    region: 'East Asia / Indo-Pacific',
    description: 'Rapidly modernizing aerospace power with mass serial production of 5th-generation J-20 stealth fighters, electromagnetic catapult carrier aircraft (J-15T, J-35), and advanced long-range PL-15/PL-17 BVRAAM missile technology.',
    totalAircraftEstimate: 3300,
    modernizationIndex: 88.0,
    defenseBudgetUsd: 292.0,
    militaryBranches: [
      {
        name: 'People\'s Liberation Army Air Force',
        type: 'AIR_FORCE',
        officialName: 'PLAAF',
        description: 'Heavy 5th-gen stealth fighters (J-20A/S), strike fighters (J-16), strategic standoff bombers (H-6N), and KJ-500 GaN AESA radar platforms.',
      },
      {
        name: 'PLA Naval Air Force',
        type: 'NAVAL_AVIATION',
        officialName: 'PLAN-AF',
        description: 'Carrier strike groups operating from Liaoning, Shandong, and Fujian supercarriers (J-15T, J-35, KJ-600 AEW&C).',
      },
      {
        name: 'PLA Ground Force Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'PLAGFA',
        description: 'Battlefield attack helicopters (Z-10ME, Z-19) and medium utility transport helicopters (Z-20).',
      },
    ],
  },

  // 4. RUSSIA
  {
    id: 'country-rus',
    name: 'Russia',
    countryCode: 'RUS',
    isoCode: 'RU',
    flag: '🇷🇺',
    region: 'Eurasia',
    description: 'Strategic nuclear standoff bomber triad (Tu-160M, Tu-95MS), heavy supermaneuverable Flanker derivatives (Su-35S, Su-30SM2, Su-34M), 5th-generation Su-57 Felon, and advanced long-range hypersonic missiles (R-37M, Kinzhal).',
    totalAircraftEstimate: 4100,
    modernizationIndex: 76.0,
    defenseBudgetUsd: 86.4,
    militaryBranches: [
      {
        name: 'Russian Aerospace Forces',
        type: 'AIR_FORCE',
        officialName: 'Vozdushno-Kosmicheskiye Sily (VKS)',
        description: 'Frontline fighter-bombers (Su-57, Su-35S, Su-34M), long-range strategic bombers (Tu-160M), and attack helicopters (Ka-52M, Mi-28NM).',
      },
      {
        name: 'Russian Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Morskaya Aviatsiya VMF',
        description: 'Maritime strike (Su-30SM2), carrier aviation (MiG-29K), and anti-submarine warfare (Il-38N Sea Dragon, Ka-27PL).',
      },
    ],
  },

  // 5. UNITED KINGDOM
  {
    id: 'country-gbr',
    name: 'United Kingdom',
    countryCode: 'GBR',
    isoCode: 'GB',
    flag: '🇬🇧',
    region: 'Europe / NATO',
    description: 'Joint force operating Eurofighter Typhoon FGR4 swing-role fighters, 5th-gen F-35B Lightning stealth aircraft from Queen Elizabeth-class carriers, and P-8A Poseidon maritime patrol.',
    totalAircraftEstimate: 660,
    modernizationIndex: 89.5,
    defenseBudgetUsd: 68.5,
    militaryBranches: [
      {
        name: 'Royal Air Force',
        type: 'AIR_FORCE',
        officialName: 'RAF',
        description: 'Eurofighter Typhoon FGR4, F-35B Lightning, Poseidon MRA1, A400M Atlas, and Voyager tankers.',
      },
      {
        name: 'Royal Navy Fleet Air Arm',
        type: 'NAVAL_AVIATION',
        officialName: 'Fleet Air Arm (FAA)',
        description: 'Carrier strike F-35B wings and maritime ASW helicopters (Merlin Mk2, Wildcat HMA2).',
      },
      {
        name: 'Army Air Corps',
        type: 'ARMY_AVIATION',
        officialName: 'AAC (British Army)',
        description: 'Battlefield attack helicopters (Boeing Apache AH-64E) and tactical reconnaissance.',
      },
    ],
  },

  // 6. FRANCE
  {
    id: 'country-fra',
    name: 'France',
    countryCode: 'FRA',
    isoCode: 'FR',
    flag: '🇫🇷',
    region: 'Europe / NATO',
    description: 'Independent indigenous aerospace sovereignty powered by the Dassault Rafale omnirole fighter (F3-R / F4 standard), airborne nuclear deterrence (ASMP-A), and CATOBAR carrier aviation aboard Charles de Gaulle.',
    totalAircraftEstimate: 970,
    modernizationIndex: 90.0,
    defenseBudgetUsd: 56.6,
    militaryBranches: [
      {
        name: 'French Air and Space Force',
        type: 'AIR_FORCE',
        officialName: 'Armée de l\'Air et de l\'Espace',
        description: 'Dassault Rafale B/C, Mirage 2000D RMV, A330 MRTT Phénix tankers, and E-3F AWACS.',
      },
      {
        name: 'French Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Aéronautique Navale (Aéronavale)',
        description: 'Nuclear carrier-based Rafale-M fighters, E-2C Hawkeye AEW&C, and Atlantique 2 (ATL2) maritime patrol.',
      },
      {
        name: 'French Army Light Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'ALAT (Aviation Légère de l\'Armée de Terre)',
        description: 'Eurocopter Tiger HAD attack helicopters and NH90 Caïman tactical transport.',
      },
    ],
  },

  // 7. GERMANY
  {
    id: 'country-deu',
    name: 'Germany',
    countryCode: 'DEU',
    isoCode: 'DE',
    flag: '🇩🇪',
    region: 'Europe / NATO',
    description: 'Key European NATO cornerstone operating Eurofighter Typhoon Tranche 4 with Captor-E AESA radars, Panavia Tornado ECR electronic combat reconnaissance, and future F-35A dual-capable nuclear strike aircraft.',
    totalAircraftEstimate: 620,
    modernizationIndex: 86.0,
    defenseBudgetUsd: 55.8,
    militaryBranches: [
      {
        name: 'German Air Force',
        type: 'AIR_FORCE',
        officialName: 'Luftwaffe',
        description: 'Eurofighter Typhoon, Tornado IDS/ECR, Airbus A400M Atlas, and F-35A on order.',
      },
      {
        name: 'German Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Marineflieger',
        description: 'Boeing P-8A Poseidon maritime reconnaissance and Sea Lynx Mk88A shipborne ASW.',
      },
      {
        name: 'German Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'Heeresfliegertruppe',
        description: 'Tiger UHT combat attack helicopters and NH90 TTH tactical transport.',
      },
    ],
  },

  // 8. ITALY
  {
    id: 'country-ita',
    name: 'Italy',
    countryCode: 'ITA',
    isoCode: 'IT',
    flag: '🇮🇹',
    region: 'Europe / NATO',
    description: 'European powerhouse operating both CTOL and STOVL F-35A/B stealth fighters, Eurofighter Typhoons, G550 CAEW early warning, and Cavour / Trieste aircraft carrier aviation.',
    totalAircraftEstimate: 780,
    modernizationIndex: 88.2,
    defenseBudgetUsd: 31.6,
    militaryBranches: [
      {
        name: 'Italian Air Force',
        type: 'AIR_FORCE',
        officialName: 'Aeronautica Militare',
        description: 'F-35A/B Lightning II, Eurofighter Typhoon, G550 CAEW, and KC-767A aerial tankers.',
      },
      {
        name: 'Italian Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Aviazione Navale (Marina Militare)',
        description: 'Carrier-borne F-35B STOVL stealth jets, AV-8B+ Harrier II, and AW101 ASW helicopters.',
      },
      {
        name: 'Italian Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'Aviazione dell\'Esercito (AVES)',
        description: 'AW129 Mangusta / AW249 Fenice attack helicopters and CH-47F Chinooks.',
      },
    ],
  },

  // 9. JAPAN
  {
    id: 'country-jpn',
    name: 'Japan',
    countryCode: 'JPN',
    isoCode: 'JP',
    flag: '🇯🇵',
    region: 'Asia-Pacific',
    description: 'Indo-Pacific high-tech bastion operating large fleets of F-35A/B stealth fighters, indigenous Mitsubishi F-2 AESA fighters, Kawasaki P-1 four-engine turbofan ASW aircraft, and Izumo-class carrier conversions.',
    totalAircraftEstimate: 1450,
    modernizationIndex: 92.4,
    defenseBudgetUsd: 54.0,
    militaryBranches: [
      {
        name: 'Japan Air Self-Defense Force',
        type: 'AIR_FORCE',
        officialName: 'Kōkū Jieitai (JASDF)',
        description: 'F-35A/B stealth fighters, Mitsubishi F-2A/B, F-15J/DJ Eagle Peace Eagle II, and E-2D Hawkeyes.',
      },
      {
        name: 'Japan Maritime Self-Defense Force',
        type: 'NAVAL_AVIATION',
        officialName: 'Kaijō Jieitai Aviation (JMSDF)',
        description: 'Kawasaki P-1 maritime patrol, SH-60K/L Seahawk ASW, and F-35B carrier operations from JS Izumo.',
      },
      {
        name: 'Japan Ground Self-Defense Force',
        type: 'ARMY_AVIATION',
        officialName: 'Rikujō Jieitai Aviation (JGSDF)',
        description: 'Boeing AH-64D Apache Longbow, Bell AH-1S Cobra, and V-22 Osprey tiltrotors.',
      },
    ],
  },

  // 10. SOUTH KOREA
  {
    id: 'country-kor',
    name: 'South Korea',
    countryCode: 'KOR',
    isoCode: 'KR',
    flag: '🇰🇷',
    region: 'East Asia',
    description: 'Dynamic aerospace manufacturer developing the KF-21 Boramae 4.5-gen fighter, operating F-35A stealth fighters, F-15K Slam Eagles, FA-50 light combat jets, and advanced indigenous air defense.',
    totalAircraftEstimate: 1580,
    modernizationIndex: 91.0,
    defenseBudgetUsd: 47.9,
    militaryBranches: [
      {
        name: 'Republic of Korea Air Force',
        type: 'AIR_FORCE',
        officialName: 'ROKAF',
        description: 'F-35A Lightning II, KAI KF-21 Boramae, F-15K Slam Eagle, KF-16V, FA-50, and E-737 Peace Eye.',
      },
      {
        name: 'Republic of Korea Navy Air Wing',
        type: 'NAVAL_AVIATION',
        officialName: 'ROKN Aviation Command',
        description: 'Boeing P-8A Poseidon ASW, P-3C/CK Orion, and AW159 Wildcat maritime helicopters.',
      },
      {
        name: 'Republic of Korea Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'ROK Army Aviation Command',
        description: 'Boeing AH-64E Apache Guardian and KAI KUH-1 Surion utility helicopters.',
      },
    ],
  },

  // 11. AUSTRALIA
  {
    id: 'country-aus',
    name: 'Australia',
    countryCode: 'AUS',
    isoCode: 'AU',
    flag: '🇦🇺',
    region: 'Oceania / Indo-Pacific',
    description: 'High-interoperability network-centric airpower operating 5th-gen F-35A stealth fighters, F/A-18F Super Hornets, EA-18G Growler electronic attack aircraft, E-7A Wedgetail, and MQ-28 Ghost Bat loyal wingman drones.',
    totalAircraftEstimate: 510,
    modernizationIndex: 93.0,
    defenseBudgetUsd: 32.3,
    militaryBranches: [
      {
        name: 'Royal Australian Air Force',
        type: 'AIR_FORCE',
        officialName: 'RAAF',
        description: 'F-35A Lightning II, F/A-18F Super Hornet, EA-18G Growler, E-7A Wedgetail, and P-8A Poseidon.',
      },
      {
        name: 'Royal Australian Navy Fleet Air Arm',
        type: 'NAVAL_AVIATION',
        officialName: 'RAN Fleet Air Arm',
        description: 'MH-60R Seahawk maritime combat helicopters.',
      },
      {
        name: 'Australian Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'Australian Army Aviation Corps',
        description: 'AH-64E Apache Guardian on order, CH-47F Chinook, and UH-60M Black Hawk.',
      },
    ],
  },

  // 12. CANADA
  {
    id: 'country-can',
    name: 'Canada',
    countryCode: 'CAN',
    isoCode: 'CA',
    flag: '🇨🇦',
    region: 'North America / Arctic NATO',
    description: 'Arctic and North American airspace defender operating modernized CF-188 Hornets (CF-18), CP-140 Aurora long-range patrol, CC-130J Hercules, and procuring 88 F-35A stealth fighters and P-8A Poseidons.',
    totalAircraftEstimate: 390,
    modernizationIndex: 82.0,
    defenseBudgetUsd: 26.9,
    militaryBranches: [
      {
        name: 'Royal Canadian Air Force',
        type: 'AIR_FORCE',
        officialName: 'RCAF / Aviation Royale Canadienne',
        description: 'CF-188 Hornet, CP-140 Aurora, CC-177 Globemaster, and CH-148 Cyclone shipborne ASW.',
      },
    ],
  },

  // 13. TÜRKIYE
  {
    id: 'country-tur',
    name: 'Türkiye',
    countryCode: 'TUR',
    isoCode: 'TR',
    flag: '🇹🇷',
    region: 'Eurasia / Middle East / NATO',
    description: 'Rapidly rising sovereign aerospace power developing the TAI TF Kaan 5th-gen stealth fighter, operating large upgraded F-16 Block 50+ fleets, and leading world unmanned combat aviation (Bayraktar TB2/TB3, Akinci, Kizilelma).',
    totalAircraftEstimate: 1050,
    modernizationIndex: 85.5,
    defenseBudgetUsd: 25.2,
    militaryBranches: [
      {
        name: 'Turkish Air Force',
        type: 'AIR_FORCE',
        officialName: 'Türk Hava Kuvvetleri',
        description: 'TAI TF Kaan (Testing), F-16C/D Fighting Falcon (Özgür Modernization), Akinci UCAV, and E-7T Peace Eagle.',
      },
      {
        name: 'Turkish Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Türk Deniz Havacılığı',
        description: 'TCG Anadolu drone carrier wings (Bayraktar TB3, Kizilelma), P-72 ASW, and S-70B Seahawk.',
      },
      {
        name: 'Turkish Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'Kara Havacılık Komutanlığı',
        description: 'T129 ATAK attack helicopters, T929 Heavy Attack, and CH-47F Chinooks.',
      },
    ],
  },

  // 14. SAUDI ARABIA
  {
    id: 'country-sau',
    name: 'Saudi Arabia',
    countryCode: 'SAU',
    isoCode: 'SA',
    flag: '🇸🇦',
    region: 'Middle East',
    description: 'One of the best-funded frontline air arms in the world, operating advanced F-15SA Advanced Eagles with APG-63(V)3 AESA radars, Eurofighter Typhoons, Tornado IDS strike bombers, and E-3A AWACS.',
    totalAircraftEstimate: 890,
    modernizationIndex: 87.0,
    defenseBudgetUsd: 71.7,
    militaryBranches: [
      {
        name: 'Royal Saudi Air Force',
        type: 'AIR_FORCE',
        officialName: 'RSAF',
        description: 'Boeing F-15SA / F-15C/D Eagle, Eurofighter Typhoon, Panavia Tornado IDS, and E-3A Sentry.',
      },
      {
        name: 'Royal Saudi Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'RSNF Aviation',
        description: 'MH-60R Seahawk ASW and Eurocopter AS565 Panther.',
      },
      {
        name: 'Royal Saudi Land Forces Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'RSLF Aviation',
        description: 'Boeing AH-64E Apache Guardian and UH-60M Black Hawk.',
      },
    ],
  },

  // 15. BRAZIL
  {
    id: 'country-bra',
    name: 'Brazil',
    countryCode: 'BRA',
    isoCode: 'BR',
    flag: '🇧🇷',
    region: 'Latin America',
    description: 'Latin America largest aerospace power, manufacturing the Embraer KC-390 Millennium strategic airlifter, A-29 Super Tucano light attack/trainer, and operating Saab F-39E/F Gripen multirole fighters with Raven ES-05 AESA radar.',
    totalAircraftEstimate: 710,
    modernizationIndex: 79.0,
    defenseBudgetUsd: 22.9,
    militaryBranches: [
      {
        name: 'Brazilian Air Force',
        type: 'AIR_FORCE',
        officialName: 'Força Aérea Brasileira (FAB)',
        description: 'Saab F-39E/F Gripen, Embraer KC-390, A-29 Super Tucano, AMX A-1M, and E-99M AEW&C.',
      },
      {
        name: 'Brazilian Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Aviação Naval da Marinha do Brasil',
        description: 'AF-1 Skyhawk (Upgraded A-4KU) and MH-16 Seahawk (S-70B).',
      },
      {
        name: 'Brazilian Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'Aviação do Exército Brasileiro (AvEx)',
        description: 'Eurocopter EC725 Caracal and AS565 Panther.',
      },
    ],
  },

  // 16. INDONESIA
  {
    id: 'country-idn',
    name: 'Indonesia',
    countryCode: 'IDN',
    isoCode: 'ID',
    flag: '🇮🇩',
    region: 'Southeast Asia / Indo-Pacific',
    description: 'Archipelagic maritime defender undergoing massive modernization with 42 Dassault Rafale F4 fighters contracted, partner on the KF-21 Boramae program, and operating F-16C/D Block 52ID and Sukhoi Su-27/30 fighters.',
    totalAircraftEstimate: 470,
    modernizationIndex: 74.0,
    defenseBudgetUsd: 9.3,
    militaryBranches: [
      {
        name: 'Indonesian Air Force',
        type: 'AIR_FORCE',
        officialName: 'Tentara Nasional Indonesia Angkatan Udara (TNI-AU)',
        description: 'Dassault Rafale F4 (under delivery), Sukhoi Su-30MK2/Su-27SKM, F-16C/D Block 52ID, T-50i Golden Eagle.',
      },
      {
        name: 'Indonesian Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Puspenerbal (TNI-AL)',
        description: 'CN-235 MPA, NC-212 Aviocar, and AS565 MBe Panther ASW.',
      },
      {
        name: 'Indonesian Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'Puspenerbad (TNI-AD)',
        description: 'Boeing AH-64E Apache Guardian and Mil Mi-35P Hind.',
      },
    ],
  },

  // 17. ARGENTINA
  {
    id: 'country-arg',
    name: 'Argentina',
    countryCode: 'ARG',
    isoCode: 'AR',
    flag: '🇦🇷',
    region: 'South America',
    description: 'Rebuilding supersonic combat capabilities through the acquisition of 24 Lockheed Martin F-16A/B MLU Fighting Falcons from Denmark, alongside indigenous IA-63 Pampa III trainers.',
    totalAircraftEstimate: 230,
    modernizationIndex: 65.0,
    defenseBudgetUsd: 3.2,
    militaryBranches: [
      {
        name: 'Argentine Air Force',
        type: 'AIR_FORCE',
        officialName: 'Fuerza Aérea Argentina (FAA)',
        description: 'F-16A/B MLU (procured), A-4AR Fightinghawk, IA-63 Pampa III, and KC-130H Hercules.',
      },
      {
        name: 'Argentine Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Comando de la Aviación Naval (COAN)',
        description: 'Super Étendard / Modernisé, P-3C Orion (ex-Norway), and B200 Super King Air maritime patrol.',
      },
      {
        name: 'Argentine Army Aviation',
        type: 'ARMY_AVIATION',
        officialName: 'Aviación de Ejército',
        description: 'Bell UH-1H Huey II and Eurocopter AS332 Super Puma.',
      },
    ],
  },

  // 18. MEXICO
  {
    id: 'country-mex',
    name: 'Mexico',
    countryCode: 'MEX',
    isoCode: 'MX',
    flag: '🇲🇽',
    region: 'North America / Latin America',
    description: 'Focused on sovereign airspace sovereignty, counter-narcotics, and disaster relief, operating Northrop F-5E/F Tiger II interceptors, T-6C+ Texan II light attack, and heavy rotorcraft fleets.',
    totalAircraftEstimate: 470,
    modernizationIndex: 72.0,
    defenseBudgetUsd: 8.5,
    militaryBranches: [
      {
        name: 'Mexican Air Force',
        type: 'AIR_FORCE',
        officialName: 'Fuerza Aérea Mexicana (FAM)',
        description: 'Northrop F-5E/F Tiger II, Beechcraft T-6C+ Texan II, C-295M, C-130J, and UH-60M Black Hawk.',
      },
      {
        name: 'Mexican Naval Aviation',
        type: 'NAVAL_AVIATION',
        officialName: 'Aviación Naval Mexicana (SEMAR)',
        description: 'CN-235-300 Persuader maritime patrol, Panther AS565, and Mi-17V-5.',
      },
    ],
  },

  // 19. SOUTH AFRICA
  {
    id: 'country-zaf',
    name: 'South Africa',
    countryCode: 'ZAF',
    isoCode: 'ZA',
    flag: '🇿🇦',
    region: 'Sub-Saharan Africa',
    description: 'Historic African aerospace pioneer that developed the Rooivalk attack helicopter, operating Saab JAS-39C/D Gripen multirole fighters with Litening targeting pods and BAE Hawk Mk 120 jet trainers.',
    totalAircraftEstimate: 220,
    modernizationIndex: 71.0,
    defenseBudgetUsd: 3.1,
    militaryBranches: [
      {
        name: 'South African Air Force',
        type: 'AIR_FORCE',
        officialName: 'SAAF',
        description: 'Saab JAS-39C/D Gripen, BAE Hawk Mk 120 Lead-In Fighter Trainer, Denel Rooivalk CSH-2 attack helicopter, and Oryx medium utility transport.',
      },
    ],
  },

  // 20. EUROPEAN UNION (SPECIAL DEFENSE COOPERATION STATUS)
  {
    id: 'country-eun',
    name: 'European Union (PESCO / EDA)',
    countryCode: 'EUN',
    isoCode: 'EU',
    flag: '🇪🇺',
    region: 'Europe / Multi-National',
    description: 'Permanent Structured Cooperation (PESCO) and European Defence Agency (EDA) joint aerospace programs including the Future Combat Air System (FCAS / SCAF), Eurodrone MALE RPAS, and Multi-Role Tanker Transport Fleet (MMF).',
    totalAircraftEstimate: 4500,
    modernizationIndex: 88.0,
    defenseBudgetUsd: 280.0,
    militaryBranches: [
      {
        name: 'Multinational Multi-Role Tanker Transport Fleet',
        type: 'STRATEGIC',
        officialName: 'NATO / EU MMF Fleet (Eindhoven)',
        description: 'Pooled A330 MRTT strategic refueling and aeromedical evacuation airframes operated jointly by EU/NATO member nations.',
      },
    ],
  },
];
