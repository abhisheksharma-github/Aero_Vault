import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const pkgCountriesDir = path.join(root, 'packages/vault/data/countries');
const srcCountriesDir = path.join(root, 'src/data/vault/countries');

const pkgFiles = fs.readdirSync(pkgCountriesDir).filter(f => f.endsWith('.json'));

console.log(`Found ${pkgFiles.length} country dossiers in packages/vault.`);

// Map of iso3 / id to package country
const pkgMap = new Map<string, any>();
for (const file of pkgFiles) {
  const content = JSON.parse(fs.readFileSync(path.join(pkgCountriesDir, file), 'utf8'));
  const key = content.countryCode?.toUpperCase() || file.replace('.json', '').toUpperCase();
  pkgMap.set(key, content);
}

// Update existing src/data/vault/countries/*.json with SIPRI 2026 defence economics & personnel
const srcFiles = fs.readdirSync(srcCountriesDir).filter(f => f.endsWith('.json'));

for (const file of srcFiles) {
  const fullPath = path.join(srcCountriesDir, file);
  const country = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  const code = country.countryCode?.toUpperCase();
  const pkgData = pkgMap.get(code);

  if (pkgData) {
    if (pkgData.defenceEconomics?.expenditureBillionsUsd?.value) {
      country.defenseBudgetUsd = pkgData.defenceEconomics.expenditureBillionsUsd.value;
    }
    
    // Add SIPRI 2026 source if missing
    if (Array.isArray(country.sources)) {
      const hasSipri2026 = country.sources.some((s: any) => s.name?.includes('2026') || s.url?.includes('2026'));
      if (!hasSipri2026) {
        country.sources.push({
          name: 'SIPRI Military Expenditure Database (Apr. 2026)',
          url: 'https://www.sipri.org/databases/milex',
          retrievedAt: '2026-09-20',
        });
      }
      if (pkgData.personnel?.activeDuty?.value) {
        country.sources.push({
          name: 'World Bank MS.MIL.TOTL.P1 / IISS Armed Forces Series',
          url: 'https://data.worldbank.org/indicator/MS.MIL.TOTL.P1',
          retrievedAt: '2026-09-20',
        });
      }
    }
    fs.writeFileSync(fullPath, JSON.stringify(country, null, 2), 'utf8');
    console.log(`✓ Updated src/data/vault/countries/${file} (Defense Budget: $${country.defenseBudgetUsd}B USD)`);
  }
}

// Also update client/src/data/g20/g20Countries.js
const clientG20Path = path.join(root, 'client/src/data/g20/g20Countries.js');
if (fs.existsSync(clientG20Path)) {
  const clientData = [];
  for (const file of srcFiles) {
    const fullPath = path.join(srcCountriesDir, file);
    const c = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    clientData.push({
      id: c.id,
      name: c.name,
      countryCode: c.countryCode,
      isoCode: c.isoCode,
      flag: c.flag,
      region: c.region,
      description: c.description,
      totalAircraftEstimate: c.totalAircraftEstimate,
      modernizationIndex: c.modernizationIndex,
      defenseBudgetUsd: c.defenseBudgetUsd,
      militaryBranches: c.militaryBranches,
    });
  }
  const clientJs = `export const g20CountriesData = ${JSON.stringify(clientData, null, 2)};\n`;
  fs.writeFileSync(clientG20Path, clientJs, 'utf8');
  console.log('✅ Updated client/src/data/g20/g20Countries.js with latest SIPRI 2026 expenditure');
}
