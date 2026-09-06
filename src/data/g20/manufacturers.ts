export interface AerospaceManufacturer {
  id: string;
  name: string;
  country: string;
  officialWebsite: string;
  description: string;
  headquarters: string;
  foundedYear: number;
}

export const g20ManufacturersData: AerospaceManufacturer[] = [
  {
    id: 'mfg-hal',
    name: 'Hindustan Aeronautics Limited (HAL)',
    country: 'India',
    headquarters: 'Bengaluru, Karnataka, India',
    foundedYear: 1940,
    officialWebsite: 'https://hal-india.co.in',
    description: 'Premier Indian state-owned aerospace enterprise manufacturing indigenous combat aircraft (Tejas Mk1/1A), combat helicopters (LCH Prachand, Rudra, Dhruv), and licensed manufacture of Su-30MKI and Do-228.',
  },
  {
    id: 'mfg-lockheed',
    name: 'Lockheed Martin Aeronautics',
    country: 'United States',
    headquarters: 'Fort Worth, Texas / Bethesda, Maryland, USA',
    foundedYear: 1912,
    officialWebsite: 'https://lockheedmartin.com',
    description: 'World benchmark defense prime contractor producing the 5th-generation F-35 Lightning II joint strike fighter, F-22A Raptor air dominance fighter, C-130J Super Hercules, and U-2S Dragon Lady.',
  },
  {
    id: 'mfg-boeing',
    name: 'Boeing Defense, Space & Security',
    country: 'United States',
    headquarters: 'Arlington, Virginia, USA',
    foundedYear: 1916,
    officialWebsite: 'https://boeing.com/defense',
    description: 'Manufacturer of the F/A-18E/F Super Hornet, EA-18G Growler, F-15EX Eagle II, P-8 Poseidon/Neptune, AH-64E Apache Guardian, CH-47F Chinook, and KC-46A Pegasus.',
  },
  {
    id: 'mfg-dassault',
    name: 'Dassault Aviation',
    country: 'France',
    headquarters: 'Saint-Cloud, Paris, France',
    foundedYear: 1929,
    officialWebsite: 'https://dassault-aviation.com',
    description: 'Pioneering French combat aerospace manufacturer of the Rafale omnirole fighter (F3-R / F4 / F5 standard), Mirage 2000 multirole family, and nEUROn UCAV demonstrator.',
  },
  {
    id: 'mfg-sukhoi',
    name: 'Sukhoi Company (UAC)',
    country: 'Russia',
    headquarters: 'Moscow, Russia',
    foundedYear: 1939,
    officialWebsite: 'https://uacrussia.ru',
    description: 'Major Russian aerospace design bureau responsible for the Su-57 Felon 5th-gen fighter, Su-35S, Su-30MKI/SM series, and Su-34M heavy fighter-bomber.',
  },
  {
    id: 'mfg-chengdu',
    name: 'Chengdu Aircraft Corporation (AVIC)',
    country: 'China',
    headquarters: 'Chengdu, Sichuan, China',
    foundedYear: 1958,
    officialWebsite: 'http://cac.avic.com',
    description: 'Lead manufacturer of China flagship J-20 Mighty Dragon 5th-generation heavy stealth fighter, J-10C Vigorous Dragon, and JF-17 Thunder export platform.',
  },
  {
    id: 'mfg-shenyang',
    name: 'Shenyang Aircraft Corporation (AVIC)',
    country: 'China',
    headquarters: 'Shenyang, Liaoning, China',
    foundedYear: 1951,
    officialWebsite: 'http://sac.avic.com',
    description: 'Builder of Chinese carrier-borne combat aircraft (J-15T, J-35 stealth fighter), J-16 strike fighter, and heavy twin-engine Flanker derivatives.',
  },
  {
    id: 'mfg-eurofighter',
    name: 'Eurofighter Jagdflugzeug GmbH',
    country: 'European Consortium (UK, Germany, Italy, Spain)',
    headquarters: 'Hallbergmoos, Bavaria, Germany',
    foundedYear: 1986,
    officialWebsite: 'https://eurofighter.com',
    description: 'Joint multinational consortium (BAE Systems, Airbus, Leonardo) producing the twin-engine swing-role Eurofighter Typhoon fighter.',
  },
  {
    id: 'mfg-saab',
    name: 'Saab AB (Saab Aeronautics)',
    country: 'Sweden',
    headquarters: 'Linköping, Sweden',
    foundedYear: 1937,
    officialWebsite: 'https://saab.com',
    description: 'Manufacturer of the JAS-39 Gripen C/D and Gripen E/F smart multirole fighters, GlobalEye AEW&C, and Carl-Gustaf systems.',
  },
  {
    id: 'mfg-kai',
    name: 'Korea Aerospace Industries (KAI)',
    country: 'South Korea',
    headquarters: 'Sacheon, South Gyeongsang, South Korea',
    foundedYear: 1999,
    officialWebsite: 'https://koreaaero.com',
    description: 'Developer of South Korea KF-21 Boramae 4.5-gen fighter, FA-50 / T-50 Golden Eagle supersonic light combat jet, and KUH-1 Surion utility helicopter.',
  },
  {
    id: 'mfg-tai',
    name: 'Turkish Aerospace Industries (TAI)',
    country: 'Türkiye',
    headquarters: 'Ankara, Türkiye',
    foundedYear: 1973,
    officialWebsite: 'https://tusas.com',
    description: 'Developer of the TF Kaan 5th-generation stealth fighter, T129 ATAK attack helicopter, Anka MALE UAV, and Hürjet supersonic advanced jet trainer.',
  },
  {
    id: 'mfg-embraer',
    name: 'Embraer Defense & Security',
    country: 'Brazil',
    headquarters: 'São José dos Campos, São Paulo, Brazil',
    foundedYear: 1969,
    officialWebsite: 'https://defense.embraer.com',
    description: 'Manufacturer of the C-390 Millennium twin-jet multi-mission military transport, A-29 Super Tucano light attack/counter-insurgency turboprop, and E-99M AEW&C.',
  },
  {
    id: 'mfg-leonardo',
    name: 'Leonardo S.p.A. (Aircraft & Helicopters)',
    country: 'Italy',
    headquarters: 'Rome, Italy',
    foundedYear: 1948,
    officialWebsite: 'https://leonardo.com',
    description: 'Global aerospace manufacturer producing the M-346 Master advanced fighter trainer, AW101 multirole naval helicopter, AW249 Fenice attack helicopter, and partner in Eurofighter Typhoon.',
  },
  {
    id: 'mfg-mitsubishi',
    name: 'Mitsubishi Heavy Industries (MHI)',
    country: 'Japan',
    headquarters: 'Tokyo, Japan',
    foundedYear: 1884,
    officialWebsite: 'https://mhi.com',
    description: 'Prime contractor for the Japanese Self-Defense Forces, manufacturer of the Mitsubishi F-2A/B AESA fighter, licensed production of F-35A/B and F-15J, and co-developer of the GCAP 6th-gen fighter.',
  },
  {
    id: 'mfg-baykar',
    name: 'Baykar Technology',
    country: 'Türkiye',
    headquarters: 'Istanbul, Türkiye',
    foundedYear: 1984,
    officialWebsite: 'https://baykartech.com',
    description: 'Pioneering unmanned aerial vehicle manufacturer producing the Bayraktar TB2, Bayraktar TB3 carrier-capable drone, Akinci twin-engine heavy UCAV, and Bayraktar Kizilelma stealth unmanned combat aircraft.',
  },
];

export const aerospaceManufacturers = g20ManufacturersData;

