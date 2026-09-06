import fs from 'fs';

const nameToImage = {
  'Sukhoi Su-30MKI Flanker-H': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg/1200px-Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg',
  'Lockheed Martin F-22A Raptor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg/1200px-F-22_Raptor_edit1_%28cropped%29.jpg',
  'Chengdu J-20A Mighty Dragon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Chengdu_J-20_at_Airshow_China_2016.jpg/1200px-Chengdu_J-20_at_Airshow_China_2016.jpg',
  'Dassault Rafale EH/DH': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg/1200px-Rafale_-_RIAT_2018_%2843577785532%29.jpg',
  'HAL Tejas Mk1A': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg/1200px-HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg',
  'Sukhoi Su-57 Felon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg/1200px-Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg',
  'INS Vikrant (IAC-1)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/INS_Vikrant_underway_during_sea_trials.jpg/1200px-INS_Vikrant_underway_during_sea_trials.jpg',
  'USS Gerald R. Ford (CVN-78)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_8_April_2017_%28170408-N-WJ386-067%29.jpg/1200px-USS_Gerald_R._Ford_%28CVN-78%29_underway_in_the_Atlantic_Ocean_on_8_April_2017_%28170408-N-WJ386-067%29.jpg',
  'INS Surat (D69)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/INS_Visakhapatnam_%28D66%29.jpg/1200px-INS_Visakhapatnam_%28D66%29.jpg',
  'T-90M Bhishma': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/T-90M_Proryv-3_-_Armiya2021-36.jpg/1200px-T-90M_Proryv-3_-_Armiya2021-36.jpg',
  'M1A2 SEPv3 Abrams': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/M1A2_Abrams_SEPv3_tank_in_Grafenwoehr%2C_Germany%2C_2021.jpg/1200px-M1A2_Abrams_SEPv3_tank_in_Grafenwoehr%2C_Germany%2C_2021.jpg',
  'Type 99A MBT': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Type_99A_tank_in_2015_Victory_Day_Parade.jpg/1200px-Type_99A_tank_in_2015_Victory_Day_Parade.jpg',
};

function updateSeedFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  for (const [name, url] of Object.entries(nameToImage)) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(name:\\s*['"]${escapedName}['"][\\s\\S]*?imageUrl:\\s*['"])([^'"]+)(['"])`, 'g');
    content = content.replace(regex, `$1${url}$3`);
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

updateSeedFile('prisma/seed.ts');
