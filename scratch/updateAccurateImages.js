import fs from 'fs';

const imageMap = {
  // 1. Aircraft
  'ind-su30mki': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg/1200px-Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg',
  'ind-rafale': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg',
  'ind-tejas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg/1200px-HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg',
  'ind-mig29k': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/MiG-29K_takes_off_from_INS_Vikramaditya.jpg/1200px-MiG-29K_takes_off_from_INS_Vikramaditya.jpg',
  'ind-prachand': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/HAL_Light_Combat_Helicopter_Prachand_in_flight.jpg/1200px-HAL_Light_Combat_Helicopter_Prachand_in_flight.jpg',
  'ind-rudra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/HAL_Rudra_%28ALH_WSI%29_at_Aero_India_2017.jpg/1200px-HAL_Rudra_%28ALH_WSI%29_at_Aero_India_2017.jpg',
  'usa-f22': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/1200px-F-22_Raptor_edit1_%28cropped%29.jpg',
  'usa-f35a': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1200px-F-35A_flight_%28cropped%29.jpg',
  'usa-f18e': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/FA-18E_Super_Hornet_of_VFA-27_in_flight_2015.jpg/1200px-FA-18E_Super_Hornet_of_VFA-27_in_flight_2015.jpg',
  'usa-b2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/B-2_Spirits_on_Deployment_to_Indo-Pacific_2020.jpg/1200px-B-2_Spirits_on_Deployment_to_Indo-Pacific_2020.jpg',
  'usa-ah64e': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Boeing_AH-64E_Apache_Guardian_of_the_Indian_Air_Force.jpg/1200px-Boeing_AH-64E_Apache_Guardian_of_the_Indian_Air_Force.jpg',
  'usa-mq9a': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MQ-9_Reaper_in_flight_%282007%29.jpg/1200px-MQ-9_Reaper_in_flight_%282007%29.jpg',
  'chn-j20': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Chengdu_J-20_at_Airshow_China_2016.jpg/1200px-Chengdu_J-20_at_Airshow_China_2016.jpg',
  'chn-j16': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Shenyang_J-16_at_Changchun_Airshow_2022.jpg/1200px-Shenyang_J-16_at_Changchun_Airshow_2022.jpg',
  'chn-j15': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Shenyang_J-15_on_Liaoning.jpg/1200px-Shenyang_J-15_on_Liaoning.jpg',
  'rus-su57': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg/1200px-Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg',
  'rus-su35': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sukhoi_Su-35S_in_flight_2011.jpg/1200px-Sukhoi_Su-35S_in_flight_2011.jpg',
  'rus-tu160': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Tupolev_Tu-160_in_flight_2016.jpg/1200px-Tupolev_Tu-160_in_flight_2016.jpg',
  'rus-ka52': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kamov_Ka-52_at_MAKS-2019.jpg/1200px-Kamov_Ka-52_at_MAKS-2019.jpg',

  // 2. Naval Vessels
  'nv-1': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/INS_Vikrant_underway_during_sea_trials.jpg/1200px-INS_Vikrant_underway_during_sea_trials.jpg',
  'nv-2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_8_April_2017_%28170408-N-WJ386-067%29.jpg/1200px-USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_8_April_2017_%28170408-N-WJ386-067%29.jpg',
  'nv-3': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/INS_Visakhapatnam_%28D66%29.jpg/1200px-INS_Visakhapatnam_%28D66%29.jpg',
  'nv-4': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chinese_aircraft_carrier_Fujian.jpg/1200px-Chinese_aircraft_carrier_Fujian.jpg',
  'nv-5': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Admiral_Flota_Sovetskogo_Soyuza_Gorshkov_underway.jpg/1200px-Admiral_Flota_Sovetskogo_Soyuza_Gorshkov_underway.jpg',
  'nv-6': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/HMS_Queen_Elizabeth_%28R08%29_underway_in_the_Atlantic_Ocean_on_20_August_2018.jpg/1200px-HMS_Queen_Elizabeth_%28R08%29_underway_in_the_Atlantic_Ocean_on_20_August_2018.jpg',
  'nv-7': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Charles_de_Gaulle_in_Toulon.jpg/1200px-Charles_de_Gaulle_in_Toulon.jpg',
  'nv-8': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/INS_Arihant.jpg/1200px-INS_Arihant.jpg',
  'nv-9': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/USS_Virginia_%28SSN-774%29_underway_in_the_Atlantic_Ocean_in_2004.jpg/1200px-USS_Virginia_%28SSN-774%29_underway_in_the_Atlantic_Ocean_in_2004.jpg',
  'nv-10': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/PLAN_Nanchang_101_20190423.jpg/1200px-PLAN_Nanchang_101_20190423.jpg',

  // 3. Ground Vehicles
  'gv-1': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/T-90M_Proryv-3_-_Armiya2021-36.jpg/1200px-T-90M_Proryv-3_-_Armiya2021-36.jpg',
  'gv-2': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/M1A2_Abrams_SEPv3_tank_in_Grafenwoehr%2C_Germany%2C_2021.jpg/1200px-M1A2_Abrams_SEPv3_tank_in_Grafenwoehr%2C_Germany%2C_2021.jpg',
  'gv-3': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Type_99A_tank_in_2015_Victory_Day_Parade.jpg/1200px-Type_99A_tank_in_2015_Victory_Day_Parade.jpg',
  'gv-4': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/T-14_Armata_Alabino_2015_01.jpg/1200px-T-14_Armata_Alabino_2015_01.jpg',
  'gv-5': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg/1200px-Challenger_2_Main_Battle_Tank_patrolling_outside_Basra%2C_Iraq_MOD_45148325.jpg',
  'gv-6': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/K9_Vajra-T_at_Republic_Day_Parade_2020.jpg/1200px-K9_Vajra-T_at_Republic_Day_Parade_2020.jpg',
  'gv-7': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/M2A4_Bradley_Fighting_Vehicle.jpg/1200px-M2A4_Bradley_Fighting_Vehicle.jpg',
  'gv-8': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/5P85TE2_TEL_of_S-400_system_-_ParkPatriot2015part1-39.jpg/1200px-5P85TE2_TEL_of_S-400_system_-_ParkPatriot2015part1-39.jpg',

  // 4. G20 Formatted IDs
  'IND-IAF-RAFALE-EH': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg',
  'IND-IAF-SU30MKI': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg/1200px-Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg',
  'IND-IAF-TEJAS-MK1A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg/1200px-HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg',
  'IND-NAVY-MIG29K': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/MiG-29K_takes_off_from_INS_Vikramaditya.jpg/1200px-MiG-29K_takes_off_from_INS_Vikramaditya.jpg',
  'IND-NAVY-P8I': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Indian_Navy_P-8I_Neptune.jpg/1200px-Indian_Navy_P-8I_Neptune.jpg',
  'IND-ARMY-PRACHAND': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/HAL_Light_Combat_Helicopter_Prachand_in_flight.jpg/1200px-HAL_Light_Combat_Helicopter_Prachand_in_flight.jpg',
  'IND-ARMY-RUDRA': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/HAL_Rudra_%28ALH_WSI%29_at_Aero_India_2017.jpg/1200px-HAL_Rudra_%28ALH_WSI%29_at_Aero_India_2017.jpg',
  'IND-IAF-NETRA-AEWC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/DRDO_AEW%26CS_Netra_at_Aero_India_2017.jpg/1200px-DRDO_AEW%26CS_Netra_at_Aero_India_2017.jpg',
  'USA-USAF-F22-A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/1200px-F-22_Raptor_edit1_%28cropped%29.jpg',
  'USA-USAF-F35-A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1200px-F-35A_flight_%28cropped%29.jpg',
  'USA-USN-F35-C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/F-35C_Lightning_II_CF-01.jpg/1200px-F-35C_Lightning_II_CF-01.jpg',
  'USA-USMC-F35-B': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/F-35B_hovering.jpg/1200px-F-35B_hovering.jpg',
  'USA-USAF-B2-A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/B-2_Spirits_on_Deployment_to_Indo-Pacific_2020.jpg/1200px-B-2_Spirits_on_Deployment_to_Indo-Pacific_2020.jpg',
  'CHN-PLAAF-J20-A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Chengdu_J-20_at_Airshow_China_2016.jpg/1200px-Chengdu_J-20_at_Airshow_China_2016.jpg',
  'CHN-PLAAF-J16': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Shenyang_J-16_at_Changchun_Airshow_2022.jpg/1200px-Shenyang_J-16_at_Changchun_Airshow_2022.jpg',
  'CHN-PLANAF-J15': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Shenyang_J-15_on_Liaoning.jpg/1200px-Shenyang_J-15_on_Liaoning.jpg',
  'RUS-VKS-SU57': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg/1200px-Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg',
  'RUS-VKS-SU35-S': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sukhoi_Su-35S_in_flight_2011.jpg/1200px-Sukhoi_Su-35S_in_flight_2011.jpg',
  'RUS-VKS-TU160-M': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Tupolev_Tu-160_in_flight_2016.jpg/1200px-Tupolev_Tu-160_in_flight_2016.jpg',
  'GBR-RAF-TYPHOON-FGR4': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eurofighter_Typhoon_RAF_MOD_45155986.jpg/1200px-Eurofighter_Typhoon_RAF_MOD_45155986.jpg',
  'FRA-AAE-RAFALE-C': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg',
  'JPN-JASDF-F2-A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/JASDF_F-2A_over_the_Pacific_Ocean.jpg/1200px-JASDF_F-2A_over_the_Pacific_Ocean.jpg',
  'KOR-ROKAF-KF21': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/KAI_KF-21_Boramae_flight_test_2022.jpg/1200px-KAI_KF-21_Boramae_flight_test_2022.jpg',
  'TUR-TAF-KAAN': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/TAI_TF-X_mockup_at_Paris_Air_Show_2019.jpg/1200px-TAI_TF-X_mockup_at_Paris_Air_Show_2019.jpg',
  'AUS-RAAF-F35-A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/1200px-F-35A_flight_%28cropped%29.jpg',
};

function updateMultiDomainFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  for (const [id, url] of Object.entries(imageMap)) {
    const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?imageUrl:\\s*['"])([^'"]+)(['"])`, 'g');
    content = content.replace(regex, `$1${url}$3`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

function updateG20File(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  for (const [id, url] of Object.entries(imageMap)) {
    const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?primaryImageUrl:\\s*['"])([^'"]+)(['"])`, 'g');
    content = content.replace(regex, `$1${url}$3`);
    const thumbRegex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?thumbnailUrl:\\s*['"])([^'"]+)(['"])`, 'g');
    content = content.replace(thumbRegex, `$1${url}$3`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

updateMultiDomainFile('src/data/multiDomainData.ts');
updateMultiDomainFile('client/src/data/mockData.js');
updateG20File('src/data/g20/g20Aircraft.ts');
updateG20File('client/src/data/g20/g20Aircraft.js');
console.log('All image updates completed successfully.');
