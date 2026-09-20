/**
 * Proves the two invariants that make the vault trustworthy:
 *   1. a number must cite a source
 *   2. a null must be marked UNKNOWN
 *
 * Run:  npx tsx packages/vault/tests/measurement-guard.ts
 * Exits non-zero if any invariant stops holding.
 */
import { MeasurementSchema } from '../src/country.schema.js';

const SOURCE = {
  name: 'SIPRI Military Expenditure Database (Apr. 2026)',
  publisher: 'Stockholm International Peace Research Institute',
  url: 'https://www.sipri.org/databases/milex',
  retrievedAt: '2026-09-20',
};

// [label, input, shouldParse]
const cases: Array<[string, unknown, boolean]> = [
  ['number with no source (the failure mode we care about)', { value: 1450000, confidence: 'VERIFIED', sources: [] }, false],
  ['null but claims VERIFIED', { value: null, confidence: 'VERIFIED', sources: [] }, false],
  ['honest unknown', { value: null, confidence: 'UNKNOWN', sources: [] }, true],
  ['properly sourced', { value: 92100000000, confidence: 'VERIFIED', sources: [SOURCE] }, true],
  ['sourced estimate (SIPRI bracket notation)', { value: 336000000000, confidence: 'ESTIMATED', sources: [SOURCE] }, true],
];

let failed = 0;
for (const [label, input, shouldParse] of cases) {
  const result = MeasurementSchema.safeParse(input);
  const pass = result.success === shouldParse;
  if (!pass) failed += 1;
  console.log(
    `${pass ? 'PASS' : 'FAIL'}  ${(result.success ? 'ACCEPT' : 'REJECT').padEnd(7)} ${label}`,
  );
  if (!result.success) console.log(`              -> ${result.error.issues[0].message.split('.')[0]}`);
}

console.log(`\n${cases.length - failed}/${cases.length} invariants hold.`);
process.exit(failed === 0 ? 0 : 1);
