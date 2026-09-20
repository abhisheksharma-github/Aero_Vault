import { z } from 'zod';

/**
 * Every numeric fact in the vault is wrapped in a Measurement. The wrapper is
 * not decoration -- it is the thing that makes the dataset trustworthy. A bare
 * `defenceBudget: 92100000000` cannot tell you whether that figure was read
 * off SIPRI's table or guessed by someone in a hurry. A Measurement can, and
 * the UI can render the difference.
 *
 * Rule enforced below: if `value` is non-null, `sources` must be non-empty.
 * There is no way to record a number without recording where it came from.
 */

export const SourceSchema = z.object({
  name: z.string().min(3),
  publisher: z.string().min(2),
  url: z.string().url(),
  doi: z.string().optional(),
  licence: z.string().optional(),
  coversYear: z.number().int().min(1949).max(2100).optional(),
  retrievedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const Confidence = z.enum([
  'VERIFIED',   // read directly from a primary source
  'ESTIMATED',  // source publishes it as an estimate (SIPRI square brackets)
  'STALE',      // sourced, but the observation year is old enough to distrust
  'UNKNOWN',    // no value; nothing was invented to fill the hole
]);

export const MeasurementSchema = z
  .object({
    value: z.number().nullable(),
    unit: z.string().optional(),
    confidence: Confidence,
    observationYear: z.number().int().optional(),
    note: z.string().optional(),
    sources: z.array(SourceSchema).default([]),
  })
  .superRefine((m, ctx) => {
    if (m.value !== null && m.sources.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'A Measurement with a value must cite at least one source. ' +
          'Unsourced numbers are not permitted in the vault.',
      });
    }
    if (m.value === null && m.confidence !== 'UNKNOWN') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'A Measurement with a null value must have confidence UNKNOWN.',
      });
    }
  });

export const CoverageState = z.enum(['COMPLETE', 'PARTIAL', 'MISSING']);

export const CountrySchema = z.object({
  schemaVersion: z.literal('2.0.0'),
  id: z.string().regex(/^[a-z]{3}$/),
  countryCode: z.string().regex(/^[A-Z]{3}$/),
  name: z.string().min(2),
  region: z.string().nullable(),
  natoMember: z.boolean(),

  defenceEconomics: z.object({
    expenditureUsd: MeasurementSchema,
    expenditureBillionsUsd: MeasurementSchema,
    changePercent2024to2025: MeasurementSchema,
    changePercent2016to2025: MeasurementSchema,
    gdpSharePercent2025: MeasurementSchema,
    gdpSharePercent2016: MeasurementSchema,
    worldSharePercent2025: MeasurementSchema,
    sipriRank2025: z.number().int().positive().nullable(),
    sipriRank2024: z.number().int().positive().nullable(),
    _note: z.string().optional(),
  }),

  personnel: z.object({
    activeDuty: MeasurementSchema,
    reserve: MeasurementSchema,
    paramilitary: MeasurementSchema,
  }),

  inventory: z.object({
    totalAircraft: MeasurementSchema,
    combatAircraft: MeasurementSchema,
    totalNavalVessels: MeasurementSchema,
    principalSurfaceCombatants: MeasurementSchema,
    submarines: MeasurementSchema,
    mainBattleTanks: MeasurementSchema,
    artillery: MeasurementSchema,
  }),

  coverage: z.object({
    defenceEconomics: CoverageState,
    personnel: CoverageState,
    inventory: CoverageState,
  }),
});

export type Country = z.infer<typeof CountrySchema>;
export type Measurement = z.infer<typeof MeasurementSchema>;

/** Fraction of leaf measurements that carry a real value. Drives the UI badge. */
export function completeness(country: Country): number {
  const groups = [country.defenceEconomics, country.personnel, country.inventory];
  const measurements = groups.flatMap((g) =>
    Object.values(g).filter(
      (v): v is Measurement => typeof v === 'object' && v !== null && 'confidence' in v,
    ),
  );
  if (measurements.length === 0) return 0;
  const known = measurements.filter((m) => m.value !== null).length;
  return Number((known / measurements.length).toFixed(3));
}
