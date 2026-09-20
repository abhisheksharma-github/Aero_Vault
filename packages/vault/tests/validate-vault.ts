/**
 * Validates every country record in the vault against CountrySchema and
 * reports per-country completeness.
 *
 * Run:  npx tsx packages/vault/tests/validate-vault.ts
 * Exits non-zero if any record fails, so it is safe to wire into CI.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CountrySchema, completeness } from '../src/country.schema.js';

const DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'countries');

const failures: string[] = [];
const scored: Array<[string, number]> = [];

for (const file of readdirSync(DIR).filter((f) => f.endsWith('.json'))) {
  const parsed = CountrySchema.safeParse(JSON.parse(readFileSync(join(DIR, file), 'utf8')));
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    failures.push(`${file}: ${issue.path.join('.')} — ${issue.message}`);
    continue;
  }
  scored.push([parsed.data.countryCode, completeness(parsed.data)]);
}

console.log(`Validated ${scored.length + failures.length} records: ${scored.length} passed, ${failures.length} failed.`);
for (const f of failures) console.error('  FAIL', f);

if (scored.length > 0) {
  const mean = scored.reduce((s, [, c]) => s + c, 0) / scored.length;
  console.log(`Mean completeness: ${(mean * 100).toFixed(1)}%`);
  const ranked = [...scored].sort((a, b) => b[1] - a[1]);
  console.log('Most complete: ', ranked.slice(0, 3).map(([c, v]) => `${c} ${(v * 100).toFixed(0)}%`).join('  '));
  console.log('Least complete:', ranked.slice(-3).map(([c, v]) => `${c} ${(v * 100).toFixed(0)}%`).join('  '));
}

process.exit(failures.length === 0 ? 0 : 1);
