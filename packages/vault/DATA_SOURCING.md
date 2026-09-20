# AeroVault Data Vault — sourcing policy

## What is in here now

**46 country records**, each validating against `src/country.schema.ts`.

| Domain | Status | Source |
|---|---|---|
| Defence expenditure (7 fields) | **Filled, 46/46** | SIPRI Fact Sheet, *Trends in World Military Expenditure, 2025*, published April 2026 |
| Personnel (3 fields) | Empty — run the ingestion script | World Bank `MS.MIL.TOTL.P1` (IISS-derived, CC BY 4.0) |
| Inventory (7 fields) | Empty — needs a licensed source | IISS Military Balance 2026 (paywalled) |

Mean completeness is **38%**, and the app reports that number rather than hiding it.

Forty of the 46 come from SIPRI's Table 1 (the top 40 spenders). The other six — Morocco, South Africa, Nigeria, DR Congo, Guyana, Somalia — are named in SIPRI's regional narrative with a spending figure but no published rank or GDP share, so those two fields are `null` on those records rather than computed.

## The rule that makes this dataset worth having

Every number is wrapped in a `Measurement`:

```json
{
  "value": 92100000000,
  "unit": "USD (current 2025 prices)",
  "confidence": "VERIFIED",
  "sources": [{ "name": "SIPRI Military Expenditure Database (Apr. 2026)", "...": "..." }]
}
```

The schema enforces two invariants, and both are tested:

- **A non-null value must cite at least one source.** There is no way to write a number into the vault without recording where it came from.
- **A null value must be marked `UNKNOWN`.** A gap cannot masquerade as a verified zero.

Verified behaviour:

```
REJECT   number with no source
REJECT   null but claims VERIFIED
ACCEPT   honest unknown
ACCEPT   properly sourced
```

`confidence` has four states. `ESTIMATED` mirrors SIPRI's own square-bracket notation — China, Russia, Ukraine and Saudi Arabia are estimates in the source, and they are marked as estimates here. `STALE` is applied automatically by the personnel ingester when an observation is more than three years old.

## Filling the personnel gap

```bash
npx tsx packages/vault/scripts/ingest-personnel.ts --dry-run   # inspect first
npx tsx packages/vault/scripts/ingest-personnel.ts
```

This pulls the World Bank's armed-forces-personnel series. The underlying data *is* IISS Military Balance — the World Bank redistributes it free under CC BY 4.0 with a public API and no key.

One caveat the script records on every record it writes, and which you should not paper over in the UI: the World Bank series **folds paramilitary forces into the total**, whereas IISS reports them separately. So the figure is *total uniformed personnel*, not active-duty establishment in the strict sense. Label it accordingly. Taiwan is not a World Bank reporting economy and will stay `UNKNOWN` — that is correct behaviour, not a bug to work around with a lower-quality aggregator.

## Filling the inventory gap

This is the hard one, and I would not rush it.

Aircraft, ship and tank counts vary enormously between sources because they disagree about what counts — stored vs. active airframes, whether trainers are combat aircraft, whether coast guard cutters are naval vessels. Aggregator sites that publish confident-looking single numbers are generally not reconciling any of this.

Three defensible routes, in order of preference:

1. **IISS Military Balance 2026** — the authority. Institutional or library access; individual copies are also sold. Cite the page.
2. **National primary sources** — most defence ministries publish force-structure documents. US DoD, UK MoD, Japan MoD, India MoD and Brazil FAB all do. Slower, but unimpeachable, and it fits the OSINT-provenance angle your project already advertises.
3. **Per-platform counts built up from your own aircraft vault** rather than a top-line national figure. You already hold per-airframe records; summing them gives you a number you can *explain*, with the caveat that it covers only indexed types.

Whichever you choose, record the counting convention in the `note` field. Two sources disagreeing by 30% usually aren't contradicting each other — they're answering different questions.

## What must not happen

Do not fill these fields from memory, from an LLM, or from an aggregator that doesn't name its own sources. A visible gap is a feature: it tells the user exactly how far to trust the page. A plausible wrong number tells them nothing, and it discredits the 46 figures that *are* correct.

If a number cannot be sourced, it stays `null`.

## Refreshing

SIPRI updates in late April each year. When the 2026 figures land, update the table in `scripts/build-countries.py` and bump `coversYear`. The script is idempotent — rerunning it regenerates all 46 records from the table at the top of the file, which is the only place spending numbers are written.
