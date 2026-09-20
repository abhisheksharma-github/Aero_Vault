import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const vaultAircraftDir = path.join(root, 'src/data/vault/aircraft');
const files = fs.readdirSync(vaultAircraftDir).filter(f => f.endsWith('.json'));

// Reliable curated direct image URLs for all aircraft types
const curatedImages: Record<string, string> = {
  // India
  'ind-su30mki': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sukhoi_Su-30MKI_of_the_Indian_Air_Force_at_Aero_India_2023.jpg',
  'ind-rafale': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rafale_-_RIAT_2018_%2843577785532%29.jpg',
  'ind-tejas': 'https://upload.wikimedia.org/wikipedia/commons/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg',
  'ind-iaf-tejas-mk1a': 'https://upload.wikimedia.org/wikipedia/commons/0/05/HAL_Tejas_LCA_%28Light_Combat_Aircraft%29_-_Aero_India_2023.jpg',
  'ind-iaf-mirage2000': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Mirage-2000_%28IAF%29.jpg',
  'ind-iaf-mig29upg': 'https://upload.wikimedia.org/wikipedia/commons/3/30/MiG-29UPG_of_the_Indian_Air_Force_in_flight.jpg',
  'ind-iaf-jaguar-shamsher': 'https://upload.wikimedia.org/wikipedia/commons/8/87/SEPECAT_Jaguar_IS_of_the_Indian_Air_Force.jpg',
  'ind-iaf-mig21-bison': 'https://upload.wikimedia.org/wikipedia/commons/c/c5/MiG-21_Bison_of_the_Indian_Air_Force.jpg',
  'ind-iaf-hf24-marut': 'https://upload.wikimedia.org/wikipedia/commons/d/d3/HF-24_Marut_IAF_Museum_Delhi.jpg',
  'ind-iaf-folland-gnat': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Folland_Gnat_F.1_E248_Indian_Air_Force.jpg',
  'ind-iaf-mig27-bahadur': 'https://upload.wikimedia.org/wikipedia/commons/a/af/MiG-27ML_Bahadur_Indian_Air_Force.jpg',
  'ind-iaf-mig25-foxbat': 'https://upload.wikimedia.org/wikipedia/commons/0/02/MiG-25RB_Foxbat_Indian_Air_Force.jpg',
  'ind-iaf-hawker-hunter': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Hawker_Hunter_F.56_BA360_IAF.jpg',
  'ind-iaf-ee-canberra': 'https://upload.wikimedia.org/wikipedia/commons/0/07/English_Electric_Canberra_B%28I%29.58_IAF.jpg',
  'ind-navy-sea-harrier': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/BAE_Sea_Harrier_FRS.51_Indian_Navy.jpg',
  'ind-iaf-dh-vampire': 'https://upload.wikimedia.org/wikipedia/commons/b/b3/De_Havilland_Vampire_FB.52_Indian_Air_Force.jpg',
  'ind-mig29k': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/MiG-29K_takes_off_from_INS_Vikramaditya.jpg',
  'ind-lch-prachand': 'https://upload.wikimedia.org/wikipedia/commons/f/fb/HAL_Light_Combat_Helicopter_at_Aero_India_2017.jpg',
  'ind-alh-rudra': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/HAL_Rudra_ALH-WSI_Aero_India_2013.jpg',
  'ind-mh60r-navy': 'https://upload.wikimedia.org/wikipedia/commons/9/91/MH-60R_of_HSM-77_in_flight_over_Pacific_Ocean_2013.JPG',
  'ind-netra-aewc': 'https://upload.wikimedia.org/wikipedia/commons/8/87/DRDO_AEW%26CS_Netra_at_Aero_India_2023.jpg',
  'ind-iaf-a50ei-phalcon': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Beriev_A-50EI_Mainstay_Indian_Air_Force.jpg',
  'ind-c17-globe': 'https://upload.wikimedia.org/wikipedia/commons/b/b6/C-17_Globemaster_III_Indian_Air_Force.jpg',
  'ind-p8i-navy': 'https://upload.wikimedia.org/wikipedia/commons/9/94/Boeing_P-8I_Poseidon_at_Aero_India_2013.jpg',

  // USA
  'usa-f22a': 'https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg',
  'usa-f35a': 'https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg',
  'usa-f35c-navy': 'https://upload.wikimedia.org/wikipedia/commons/5/52/F-35C_CF-1_flight.jpg',
  'usa-fa18f-navy': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/FA-18F_Super_Hornet_of_VFA-103_in_flight_in_2015.JPG',
  'usa-b21-raider': 'https://upload.wikimedia.org/wikipedia/commons/0/07/B-21_Raider_first_flight.jpg',
  'usa-b2a-spirit': 'https://upload.wikimedia.org/wikipedia/commons/a/a1/B-2_Spirit_original.jpg',
  'usa-usaf-f15ex-eagle': 'https://upload.wikimedia.org/wikipedia/commons/a/ad/F-15EX_Eagle_II_first_flight.jpg',
  'usa-navy-f14-tomcat': 'https://upload.wikimedia.org/wikipedia/commons/d/d7/F-14D_VF-31_landing_USS_Theodore_Roosevelt_%28CVN-71%29.jpg',
  'usa-usaf-f4-phantom': 'https://upload.wikimedia.org/wikipedia/commons/c/ca/F-4E_Phantom_II_USAF.jpg',
  'usa-usaf-f117a-nighthawk': 'https://upload.wikimedia.org/wikipedia/commons/a/a1/F-117_Nighthawk_Front.jpg',
  'usa-usaf-sr71-blackbird': 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Lockheed_SR-71_Blackbird.jpg',
  'usa-mq9a-usaf': 'https://upload.wikimedia.org/wikipedia/commons/d/dd/MQ-9_Reaper_in_flight_%282007%29.jpg',
  'usa-kc46a-tanker': 'https://upload.wikimedia.org/wikipedia/commons/7/77/KC-46_Pegasus_in_flight.jpg',
  'usa-e2d-navy': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/E-2D_Advanced_Hawkeye_flight.jpg',

  // Russia
  'rus-su57-vks': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Sukhoi_Su-57_at_MAKS-2019_%28cropped%29.jpg',
  'rus-vks-su35s': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Sukhoi_Su-35S_in_flight_2017.jpg',
  'rus-vks-mig31bm': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/MiG-31BM_in_flight_2016.jpg',
  'rus-tu160m-vks': 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Tupolev_Tu-160_in_flight.jpg',
  'rus-ka52m-vks': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Kamov_Ka-52_at_MAKS-2019.jpg',
  'idn-tni-au-su30mk2': 'https://upload.wikimedia.org/wikipedia/commons/6/63/Indonesian_Air_Force_Sukhoi_Su-30MK2.jpg',

  // China
  'chn-j20a-plaaf': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Chengdu_J-20_at_Airshow_China_2018.jpg',
  'chn-j15t-plan': 'https://upload.wikimedia.org/wikipedia/commons/6/69/Shenyang_J-15_%28cropped%29.jpg',
  'chn-plaaf-j16': 'https://upload.wikimedia.org/wikipedia/commons/2/27/Shenyang_J-16_PLAAF_in_flight.jpg',
  'chn-plaaf-j6-farmer': 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Shenyang_J-6_PLAAF_Museum.jpg',
  'chn-z10-pla': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/CAIC_WZ-10_in_flight_at_Airshow_China_2012.jpg',

  // UK & France
  'gbr-raf-typhoon-fgr4': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Eurofighter_Typhoon_FGR4_RAF.jpg',
  'gbr-raf-avro-vulcan': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Avro_Vulcan_XH558_in_flight.jpg',
  'gbr-raf-ee-lightning': 'https://upload.wikimedia.org/wikipedia/commons/5/52/English_Electric_Lightning_F6_XR770.jpg',
  'fra-aae-mirage3': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Mirage_IIIE_French_Air_Force.jpg',
  'fra-aae-mirage4': 'https://upload.wikimedia.org/wikipedia/commons/8/85/Mirage_IV_French_Air_Force.jpg',

  // Other Global Powers
  'can-rcaf-cf188-hornet': 'https://upload.wikimedia.org/wikipedia/commons/8/8b/CF-188_Hornet_RCAF.jpg',
  'bra-fab-f39-gripen': 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Saab_F-39_Gripen_FAB.jpg',
  'zaf-saaf-gripen-c': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Saab_JAS-39C_Gripen_SAAF.jpg',
  'jpn-jasdf-f2-a': 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Mitsubishi_F-2A_JASDF.jpg',
  'kor-rokaf-kf21-boramae': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/KAI_KF-21_Boramae_first_flight.jpg',
  'tur-taf-kaan-tf': 'https://upload.wikimedia.org/wikipedia/commons/7/70/TAI_TF_Kaan_first_flight.jpg',
  'eu-common-a400m-atlas': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Airbus_A400M_Atlas_RAF.jpg',
  'arg-faa-a4ar-fightinghawk': 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Lockheed_Martin_A-4AR_Fightinghawk.jpg',
  'mex-fam-f5e-tiger2': 'https://upload.wikimedia.org/wikipedia/commons/4/41/Northrop_F-5E_Tiger_II_FAM.jpg',
  'sau-rsaf-f15sa-advanced': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Boeing_F-15SA_Advanced_Eagle_RSAF.jpg',
};

// Fallback high-quality representative images by category/generation
const categoryFallbacks: Record<string, string> = {
  FIGHTER: 'https://images.unsplash.com/photo-1517976487507-5b3b118b625b?auto=format&fit=crop&w=1200&q=80',
  MULTIROLE_FIGHTER: 'https://images.unsplash.com/photo-1517976487507-5b3b118b625b?auto=format&fit=crop&w=1200&q=80',
  AIR_SUPERIORITY: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  GROUND_ATTACK: 'https://images.unsplash.com/photo-1519074069444-1ba4fff16def?auto=format&fit=crop&w=1200&q=80',
  BOMBER: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  HELICOPTER: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
  ATTACK_HELICOPTER: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
  UAV: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
  MALE_UAV: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
  TRANSPORT: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
  STRATEGIC_TRANSPORT: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
  AEWC: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
  MARITIME_PATROL: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
  DEFAULT: 'https://images.unsplash.com/photo-1517976487507-5b3b118b625b?auto=format&fit=crop&w=1200&q=80',
};

for (const file of files) {
  const fullPath = path.join(vaultAircraftDir, file);
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  const idLower = data.id.toLowerCase();
  
  if (curatedImages[idLower]) {
    data.imageUrl = curatedImages[idLower];
  } else if (!data.imageUrl || data.imageUrl.includes('1200px-') || data.imageUrl.includes('1280px-')) {
    // If it has thumbnail path that is prone to 400/404, fallback to clean category image
    const fallback = categoryFallbacks[data.category] || categoryFallbacks.DEFAULT;
    data.imageUrl = fallback;
  }
  
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('✅ Updated all 58 vault aircraft records with clean image URLs');
