/**
 * ingest-personnel.ts
 *
 * Fills the `personnel.activeDuty` field in every country record from the
 * World Bank's MS.MIL.TOTL.P1 indicator ("Armed forces personnel, total").
 *
 * Why this source: the underlying data is the IISS Military Balance, which is
 * paywalled -- but the World Bank redistributes it free under the World
 * Development Indicators licence (CC BY 4.0), with a public JSON API and no
 * key required. That makes it the only authoritative personnel series we can
 * ingest programmatically and cite honestly.
 *
 * Caveat, recorded on every written record: the World Bank series folds
 * paramilitary forces into the total, whereas IISS reports them separately.
 * So this is "armed forces personnel incl. paramilitary", NOT "active duty"
 * in the strict IISS sense. The field is named and noted accordingly. Do not
 * silently relabel it.
 *
 * Run:  npx tsx packages/vault/scripts/ingest-personnel.ts
 *       npx tsx packages/vault/scripts/ingest-personnel.ts --dry-run
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const COUNTRIES_DIR = join(HERE, '..', 'data', 'countries');

const INDICATOR = 'MS.MIL.TOTL.P1';
const API = 'https://api.worldbank.org/v2';

const SOURCE = {
  name: 'World Development Indicators — Armed forces personnel, total (MS.MIL.TOTL.P1)',
  publisher: 'World Bank (data originally from IISS, The Military Balance)',
  url: `https://data.worldbank.org/indicator/${INDICATOR}`,
  licence: 'CC BY 4.0',
};

const NOTE =
  'World Bank series MS.MIL.TOTL.P1 combines armed forces and paramilitary ' +
  'personnel into a single total; IISS reports them separately. Treat as ' +
  'total uniformed personnel, not strict active-duty establishment.';

interface WbPoint {
  countryiso3code: string;
  date: string;
  value: number | null;
}

/** Fetch the most recent non-null observation for one country. */
async function fetchLatest(iso3: string): Promise<{ value: number; year: number } | null> {
  const url = `${API}/country/${iso3}/indicator/${INDICATOR}?format=json&per_page=80`;
  const res = await fetch(url);

  if (!res.ok) {
    console.warn(`  ! ${iso3}: HTTP ${res.status} — skipped, record left UNKNOWN`);
    return null;
  }

  const body = (await res.json()) as [unknown, WbPoint[] | null];
  const points = body[1];
  if (!Array.isArray(points)) {
    console.warn(`  ! ${iso3}: no series returned — skipped`);
    return null;
  }

  const withValues = points
    .filter((p) => p.value !== null && Number.isFinite(p.value))
    .sort((a, b) => Number(b.date) - Number(a.date));

  if (withValues.length === 0) {
    console.warn(`  - ${iso3}: series exists but is entirely null — left UNKNOWN`);
    return null;
  }

  const latest = withValues[0];
  return { value: Math.round(latest.value as number), year: Number(latest.date) };
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const files = (await readdir(COUNTRIES_DIR)).filter((f) => f.endsWith('.json'));

  let filled = 0;
  let missing = 0;

  console.log(`Ingesting ${INDICATOR} for ${files.length} countries…\n`);

  for (const file of files) {
    const path = join(COUNTRIES_DIR, file);
    const record = JSON.parse(await readFile(path, 'utf8'));
    const iso3: string = record.countryCode;

    // Taiwan is not a World Bank reporting economy. It will 404; that is
    // expected and correct, and the field must stay UNKNOWN rather than being
    // backfilled from a lower-quality aggregator.
    const result = await fetchLatest(iso3);

    if (!result) {
      missing += 1;
      continue;
    }

    record.personnel.activeDuty = {
      value: result.value,
      unit: 'personnel (armed forces incl. paramilitary)',
      // Anything older than three years is stale enough to flag.
      confidence: result.year >= new Date().getFullYear() - 3 ? 'VERIFIED' : 'STALE',
      observationYear: result.year,
      note: NOTE,
      sources: [{ ...SOURCE, coversYear: result.year, retrievedAt: new Date().toISOString().slice(0, 10) }],
    };

    record.coverage.personnel = 'PARTIAL'; // reserve + paramilitary still unfilled
    filled += 1;

    console.log(`  ✓ ${iso3}  ${result.value.toLocaleString()}  (${result.year})`);

    if (!dryRun) {
      await writeFile(path, JSON.stringify(record, null, 2) + '\n', 'utf8');
    }

    // Be a good citizen of a free public API.
    await new Promise((r) => setTimeout(r, 120));
  }

  console.log(`\nFilled ${filled}, left UNKNOWN ${missing}.`);
  if (dryRun) console.log('Dry run — no files written.');
}

main().catch((err) => {
  console.error('Ingestion failed:', err);
  process.exit(1);
});
