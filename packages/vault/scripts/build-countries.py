#!/usr/bin/env python3
"""
Generates one JSON record per country in packages/vault/data/countries/.

EVERY numeric value written here is transcribed from a named public source.
Nothing is inferred, interpolated, or remembered. Fields without a source are
written as null with confidence UNKNOWN -- never as a plausible guess.

Primary source for defence expenditure:
  SIPRI Fact Sheet, "Trends in World Military Expenditure, 2025"
  Liang, Tian, Lopes da Silva, Scarazzato, Karim & Guiberteau Ricard
  Published April 2026. Table 1 (top 40) + regional narrative sections.
  https://www.sipri.org/sites/default/files/2026-04/2604_milex_2025.pdf
  DOI: 10.55163/ZLHQ1057
"""
import json, os, pathlib

SIPRI = {
    "name": "SIPRI Military Expenditure Database (Apr. 2026)",
    "publisher": "Stockholm International Peace Research Institute",
    "url": "https://www.sipri.org/sites/default/files/2026-04/2604_milex_2025.pdf",
    "doi": "10.55163/ZLHQ1057",
    "retrievedAt": "2026-09-20",
    "coversYear": 2025,
}

# rank2025, rank2024, iso3, name, spend_bn_usd_2025, chg_24_25, chg_16_25,
# gdp_share_2025, gdp_share_2016, world_share_2025, estimated
TOP40 = [
    (1,  1,  "USA", "United States",   954.0,  -7.5,   11,   3.1,  3.4,  33.0, False),
    (2,  2,  "CHN", "China",           336.0,   7.4,   62,   1.7,  1.7,  12.0, True),
    (3,  3,  "RUS", "Russia",          190.0,   5.9,   96,   7.5,  5.4,   6.6, True),
    (4,  5,  "DEU", "Germany",         114.0,  24.0,  118,   2.3,  1.1,   3.9, False),
    (5,  6,  "IND", "India",            92.1,   8.9,   39,   2.3,  2.5,   3.2, False),
    (6,  4,  "GBR", "United Kingdom",   89.0,  -2.0,   32,   2.4,  2.0,   3.1, False),
    (7,  8,  "UKR", "Ukraine",          84.1,  20.0, 1501,  40.0,  3.7,   2.9, True),
    (8,  7,  "SAU", "Saudi Arabia",     83.2,   1.4,   12,   6.5,  9.2,   2.9, True),
    (9,  9,  "FRA", "France",           68.0,   1.5,   21,   2.0,  1.9,   2.4, False),
    (10, 10, "JPN", "Japan",            62.2,   9.7,   61,   1.4,  0.9,   2.2, False),
    (11, 12, "ISR", "Israel",           48.3,  -4.9,  120,   7.8,  5.2,   1.7, False),
    (12, 13, "ITA", "Italy",            48.1,  20.0,   57,   1.9,  1.3,   1.7, False),
    (13, 11, "KOR", "South Korea",      47.8,   2.6,   30,   2.6,  2.3,   1.7, False),
    (14, 14, "POL", "Poland",           46.8,  23.0,  207,   4.5,  1.9,   1.6, False),
    (15, 17, "ESP", "Spain",            40.2,  50.0,  122,   2.1,  1.1,   1.4, False),
    (16, 16, "CAN", "Canada",           37.5,  23.0,   77,   1.6,  1.1,   1.3, False),
    (17, 15, "AUS", "Australia",        35.3,   3.0,   18,   1.9,  2.1,   1.2, False),
    (18, 18, "TUR", "Türkiye",          30.0,   7.2,   94,   1.9,  2.0,   1.0, False),
    (19, 19, "NLD", "Netherlands",      28.9,  14.0,  133,   2.2,  1.1,   1.0, False),
    (20, 20, "DZA", "Algeria",          25.4,  11.0,   89,   8.8,  5.7,   0.9, False),
    (21, 21, "BRA", "Brazil",           23.9,  13.0,  1.6,   1.1,  1.3,   0.8, False),
    (22, 24, "TWN", "Taiwan",           18.2,  14.0,   59,   2.1,  1.8,   0.6, False),
    (23, 23, "SGP", "Singapore",        17.4,  10.0,   40,   3.0,  3.1,   0.6, False),
    (24, 28, "NOR", "Norway",           17.0,  49.0,  166,   3.3,  1.6,   0.6, False),
    (25, 26, "SWE", "Sweden",           16.5,  24.0,  159,   2.5,  1.1,   0.6, False),
    (26, 27, "IDN", "Indonesia",        15.0,  28.0,   96,   1.0,  0.8,   0.5, False),
    (27, 30, "DNK", "Denmark",          14.9,  46.0,  238,   3.3,  1.2,   0.5, False),
    (28, 32, "BEL", "Belgium",          14.5,  59.0,  154,   2.0,  0.9,   0.5, False),
    (29, 25, "COL", "Colombia",         14.5,  -1.0,   36,   3.2,  3.1,   0.5, False),
    (30, 22, "MEX", "Mexico",           13.6, -33.0,   69,   0.7,  0.5,   0.5, False),
    (31, 29, "PAK", "Pakistan",         11.9,  11.0,   19,   2.9,  3.2,   0.4, False),
    (32, 31, "VNM", "Viet Nam",         10.5,  27.0,   49,   2.2,  2.5,   0.4, False),
    (33, 33, "ROU", "Romania",           9.7,   5.9,  139,   2.3,  1.4,   0.3, False),
    (34, 36, "GRC", "Greece",            8.4,   5.6,   35,   3.0,  2.6,   0.3, False),
    (35, 35, "KWT", "Kuwait",            8.1,   1.5,  2.5,   4.7,  5.9,   0.3, False),
    (36, 39, "FIN", "Finland",           8.1,  17.0,   87,   2.6,  1.4,   0.3, False),
    (37, 37, "CHE", "Switzerland",       7.6,   9.4,   29,   0.8,  0.7,   0.3, False),
    (38, 34, "IRN", "Iran",              7.4,  -5.6, -0.9,   2.1,  2.8,   0.3, False),
    (39, 38, "CZE", "Czechia",           7.1,  -0.4,  110,   1.8,  1.0,   0.2, False),
    (40, 40, "IRQ", "Iraq",              6.4,   1.0,   15,   2.4,  3.6,   0.2, False),
]

# Countries named in the SIPRI regional narrative but outside the top-40 table.
# Spending and YoY change are sourced; rank / GDP-share are not stated -> null.
NARRATIVE = [
    ("MAR", "Morocco",                       6.300,   6.6, "North Africa"),
    ("ZAF", "South Africa",                  3.200,  -1.2, "Sub-Saharan Africa"),
    ("NGA", "Nigeria",                       2.100,  55.0, "Sub-Saharan Africa"),
    ("COD", "DR Congo",                      1.200,  20.0, "Sub-Saharan Africa"),
    ("GUY", "Guyana",                        0.248,  16.0, "South America"),
    ("SOM", "Somalia",                       0.199,  -4.6, "Sub-Saharan Africa"),
]

REGION = {
    "USA": "North America", "CAN": "North America", "MEX": "Central America and the Caribbean",
    "BRA": "South America", "COL": "South America", "GUY": "South America",
    "CHN": "East Asia", "JPN": "East Asia", "KOR": "East Asia", "TWN": "East Asia",
    "IND": "South Asia", "PAK": "South Asia",
    "IDN": "South East Asia", "VNM": "South East Asia", "SGP": "South East Asia",
    "AUS": "Oceania",
    "RUS": "Eastern Europe", "UKR": "Eastern Europe", "POL": "Central and Western Europe",
    "DEU": "Central and Western Europe", "GBR": "Central and Western Europe",
    "FRA": "Central and Western Europe", "ITA": "Central and Western Europe",
    "ESP": "Central and Western Europe", "NLD": "Central and Western Europe",
    "NOR": "Central and Western Europe", "SWE": "Central and Western Europe",
    "DNK": "Central and Western Europe", "BEL": "Central and Western Europe",
    "ROU": "Central and Western Europe", "GRC": "Central and Western Europe",
    "FIN": "Central and Western Europe", "CHE": "Central and Western Europe",
    "CZE": "Central and Western Europe",
    "SAU": "Middle East", "ISR": "Middle East", "TUR": "Middle East",
    "IRN": "Middle East", "IRQ": "Middle East", "KWT": "Middle East",
    "DZA": "North Africa", "MAR": "North Africa",
    "ZAF": "Sub-Saharan Africa", "NGA": "Sub-Saharan Africa",
    "COD": "Sub-Saharan Africa", "SOM": "Sub-Saharan Africa",
}

NATO = {"USA","CAN","GBR","FRA","DEU","ITA","ESP","POL","NLD","NOR","DNK","BEL",
        "ROU","GRC","FIN","CZE","TUR","SWE"}

def slug(iso): return iso.lower()

def unknown(note="No citable open source located; awaiting IISS Military Balance ingestion."):
    return {"value": None, "confidence": "UNKNOWN", "note": note, "sources": []}

def sourced(value, unit, estimated=False, extra=None):
    src = dict(SIPRI)
    if extra: src.update(extra)
    return {
        "value": value,
        "unit": unit,
        "confidence": "ESTIMATED" if estimated else "VERIFIED",
        "sources": [src],
    }

def build(iso, name, spend, chg2425, chg1625, gdp25, gdp16, world25,
          est, rank25, rank24):
    return {
        "schemaVersion": "2.0.0",
        "id": slug(iso),
        "countryCode": iso,
        "name": name,
        "region": REGION.get(iso),
        "natoMember": iso in NATO,

        "defenceEconomics": {
            "expenditureUsd": sourced(
                round(spend * 1_000_000_000), "USD (current 2025 prices)", est),
            "expenditureBillionsUsd": sourced(spend, "USD billions", est),
            "changePercent2024to2025": sourced(chg2425, "percent, real terms"),
            "changePercent2016to2025": sourced(chg1625, "percent, real terms") if chg1625 is not None else unknown(),
            "gdpSharePercent2025": sourced(gdp25, "percent of GDP", est) if gdp25 is not None else unknown(),
            "gdpSharePercent2016": sourced(gdp16, "percent of GDP", est) if gdp16 is not None else unknown(),
            "worldSharePercent2025": sourced(world25, "percent of world total", est) if world25 is not None else unknown(),
            "sipriRank2025": rank25,
            "sipriRank2024": rank24,
        },

        # Deliberately unpopulated. See scripts/ingest-personnel.ts and
        # docs/DATA_SOURCING.md. Do not fill these in by hand from memory.
        "personnel": {
            "activeDuty": unknown(),
            "reserve": unknown(),
            "paramilitary": unknown(),
        },
        "inventory": {
            "totalAircraft": unknown(),
            "combatAircraft": unknown(),
            "totalNavalVessels": unknown(),
            "principalSurfaceCombatants": unknown(),
            "submarines": unknown(),
            "mainBattleTanks": unknown(),
            "artillery": unknown(),
        },

        "coverage": {
            "defenceEconomics": "COMPLETE",
            "personnel": "MISSING",
            "inventory": "MISSING",
        },
    }

def main():
    out = pathlib.Path("packages/vault/data/countries")
    out.mkdir(parents=True, exist_ok=True)
    records = []

    for (r25, r24, iso, name, spend, c1, c2, g25, g16, w25, est) in TOP40:
        records.append(build(iso, name, spend, c1, c2, g25, g16, w25, est, r25, r24))

    for (iso, name, spend, chg, region) in NARRATIVE:
        rec = build(iso, name, spend, chg, None, None, None, None, True, None, None)
        rec["region"] = region
        rec["defenceEconomics"]["_note"] = (
            "Figure stated in SIPRI Apr. 2026 regional narrative; this country "
            "falls outside the top-40 table, so rank and GDP share are not published there."
        )
        records.append(rec)

    for rec in records:
        (out / f"{rec['id']}.json").write_text(
            json.dumps(rec, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    index = {
        "schemaVersion": "2.0.0",
        "generatedAt": "2026-09-20",
        "recordCount": len(records),
        "primarySource": SIPRI,
        "countries": sorted(r["countryCode"] for r in records),
        "coverageSummary": {
            "defenceEconomics": len(records),
            "personnel": 0,
            "inventory": 0,
        },
    }
    (out.parent / "countries.index.json").write_text(
        json.dumps(index, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"wrote {len(records)} country records")
    print("top-40 table:", len(TOP40), "| narrative-only:", len(NARRATIVE))

if __name__ == "__main__":
    main()
