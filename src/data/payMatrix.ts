// Rajasthan 7th Pay Commission Pay Matrix (Revised Pay Rules, 2017).
//
// Data provenance: Level entry pay (Stage 1) for Levels 1-18 verified against
// the Rajasthan Finance Department's Revised Pay Rules, 2017 structure —
// cross-checked across multiple independent public records describing the
// Rajasthan matrix (pay bands PB-1 to PB-4, Levels L-1 to L-18 covering all
// common recruitment posts, effective 1 January 2017).
//
// Every other cell is *computed*, not hand-copied, using the same formula the
// Pay Commission itself uses to build a matrix from a Level's entry pay:
//   next stage = round(previous stage x 1.03, nearest 100)
// This is the official annual increment rate (3%) and rounding rule. Building
// the matrix this way avoids transcription errors and lets the table extend
// safely to a uniform 40 stages instead of guessing per-level cut-offs that
// aren't reliably documented in public secondary sources.
//
// Levels above L-18 (senior Secretariat / HAG scales) are intentionally not
// included — those postings are rare and their scales are less reliably
// corroborated in public sources, so we point users to PayManager instead.
//
// DA and HRA are NOT hardcoded as "facts" here. Both change periodically by
// government order, so the calculator exposes them as editable inputs with a
// verified default and a visible "last verified" date, per the same honesty
// standard the rest of RajSSO Guide holds (see /about "How we keep content
// accurate").

export interface PayLevel {
  level: number; // 1-18
  existingGradePay: number; // pre-2017 grade pay, for context only
  entryPay: number; // Stage 1 basic pay
}

// Stage-1 (entry) basic pay per Level, Rajasthan Revised Pay Rules 2017.
export const payLevels: PayLevel[] = [
  { level: 1, existingGradePay: 1700, entryPay: 17700 },
  { level: 2, existingGradePay: 1750, entryPay: 17900 },
  { level: 3, existingGradePay: 1900, entryPay: 18200 },
  { level: 4, existingGradePay: 2000, entryPay: 19200 },
  { level: 5, existingGradePay: 2400, entryPay: 20800 },
  { level: 6, existingGradePay: 2400, entryPay: 21500 },
  { level: 7, existingGradePay: 2400, entryPay: 22400 },
  { level: 8, existingGradePay: 2800, entryPay: 26300 },
  { level: 9, existingGradePay: 2800, entryPay: 28700 },
  { level: 10, existingGradePay: 3600, entryPay: 33800 },
  { level: 11, existingGradePay: 4200, entryPay: 37800 },
  { level: 12, existingGradePay: 4800, entryPay: 44300 },
  { level: 13, existingGradePay: 5400, entryPay: 53100 },
  { level: 14, existingGradePay: 5400, entryPay: 56100 },
  { level: 15, existingGradePay: 6000, entryPay: 60700 },
  { level: 16, existingGradePay: 6600, entryPay: 67300 },
  { level: 17, existingGradePay: 6800, entryPay: 71000 },
  { level: 18, existingGradePay: 7200, entryPay: 75300 },
];

export const MAX_STAGES = 40;
const INCREMENT_RATE = 1.03;
const ROUND_TO = 100;

function roundToNearest(value: number, base: number): number {
  return Math.round(value / base) * base;
}

// Basic pay for a given level + stage (1-indexed). Stage 1 = entry pay.
export function basicPayFor(level: number, stage: number): number {
  const def = payLevels.find((l) => l.level === level);
  if (!def) return 0;
  let pay = def.entryPay;
  for (let i = 1; i < stage; i++) {
    pay = roundToNearest(pay * INCREMENT_RATE, ROUND_TO);
  }
  return pay;
}

// Full matrix, computed once. matrix[levelIndex][stageIndex] (0-indexed).
export function buildMatrix(): number[][] {
  return payLevels.map((def) => {
    const row: number[] = [def.entryPay];
    for (let s = 2; s <= MAX_STAGES; s++) {
      row.push(roundToNearest(row[s - 2] * INCREMENT_RATE, ROUND_TO));
    }
    return row;
  });
}

// Find every (level, stage) whose basic pay matches a searched amount exactly.
export function findByBasicPay(
  matrix: number[][],
  amount: number,
): { level: number; stage: number; basic: number }[] {
  const results: { level: number; stage: number; basic: number }[] = [];
  matrix.forEach((row, levelIdx) => {
    row.forEach((basic, stageIdx) => {
      if (basic === amount) {
        results.push({
          level: payLevels[levelIdx].level,
          stage: stageIdx + 1,
          basic,
        });
      }
    });
  });
  return results;
}

// DA (Dearness Allowance) — Rajasthan state government employees.
// Verified: 58% of Basic Pay, effective 1 July 2025 (GoR Finance Department
// order). DA is revised periodically; always confirm the current rate on
// PayManager or the Finance Department circular before relying on this figure.
export const DEFAULT_DA_PERCENT = 58;
export const DA_LAST_VERIFIED = "2025-07-01";

// HRA (House Rent Allowance) — Rajasthan classifies cities into tiers for HRA
// purposes. Rates step up as DA crosses defined thresholds, so the figures
// below are indicative defaults, not a guaranteed current rate. Always
// confirm on PayManager / your DDO before relying on this figure.
export interface HraTier {
  id: string;
  label: { en: string; hi: string };
  percent: number;
}

export const hraTiers: HraTier[] = [
  {
    id: "major",
    label: {
      en: "Major cities (Jaipur, Jodhpur, Kota, Bikaner, Ajmer, Udaipur)",
      hi: "प्रमुख शहर (जयपुर, जोधपुर, कोटा, बीकानेर, अजमेर, उदयपुर)",
    },
    percent: 18,
  },
  {
    id: "other",
    label: { en: "Other cities and towns", hi: "अन्य शहर व कस्बे" },
    percent: 9,
  },
  {
    id: "custom",
    label: { en: "Custom rate", hi: "अपनी दर दर्ज करें" },
    percent: 9,
  },
];
