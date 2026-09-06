const endpoints = [
  '/api/intelligence/sitrep?limit=6',
  '/api/aircraft?sortBy=tvrScore&sortOrder=desc',
  '/api/intelligence',
  '/api/aircraft?country=China&sortBy=tvrScore&sortOrder=desc',
  '/api/aircraft/search?',
  '/api/countries',
  '/api/aircraft?country=France&sortBy=tvrScore&sortOrder=desc',
  '/api/rankings/countries?sortBy=atlasIndex&order=desc',
  '/api/intelligence/sitrep?limit=25',
  '/api/naval/vessels?sortBy=tvrScore&order=desc',
  '/api/land/vehicles?sortBy=tvrScore&order=desc',
  '/api/aircraft?country=India&sortBy=tvrScore&sortOrder=desc',
  '/api/osint/changes',
  '/api/reports/nations/India',
  '/api/osint/quality',
  '/api/manufacturers',
];

async function run() {
  console.log('Testing all endpoints on http://127.0.0.1:4000 ...\n');
  let failures = 0;

  for (const ep of endpoints) {
    try {
      const res = await fetch(`http://127.0.0.1:4000${ep}`);
      const json = await res.json();
      if (res.status === 200 && json.success !== false) {
        console.log(`✅ [${res.status}] ${ep} -> OK`);
      } else {
        console.error(`❌ [${res.status}] ${ep} -> FAILED:`, json);
        failures++;
      }
    } catch (err) {
      console.error(`❌ Exception requesting ${ep}:`, err);
      failures++;
    }
  }

  console.log(`\nResult: ${failures === 0 ? 'ALL PASSED (0 FAILURES) ✅' : `${failures} FAILED ❌`}`);
  process.exit(failures === 0 ? 0 : 1);
}

run();
