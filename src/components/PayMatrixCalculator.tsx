"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import {
  buildMatrix,
  findByBasicPay,
  payLevels,
  hraTiers,
  DEFAULT_DA_PERCENT,
  DA_LAST_VERIFIED,
  MAX_STAGES,
} from "@/data/payMatrix";

const labels = {
  en: {
    toolTitle: "Rajasthan Pay Matrix",
    toolSubtitle: "7th Pay Commission (Revised Pay Rules, 2017)",
    matrixHeading: "Interactive Pay Matrix",
    legendRow: "Row / Stage",
    legendCol: "Column / Level",
    legendSelected: "Selected",
    footerCredit: "Independent tool by RajSSO Guide. Not an official Rajasthan Government calculator.",
    footerNote: "Salary estimates are advisory, based on Revised Pay Rules, 2017. Deductions are approximations.",
    searchPlaceholder: "Search basic pay (e.g. 44300)...",
    searchHelp: "Type an exact basic pay amount to jump to it in the matrix.",
    noMatch: "No cell in the matrix has that exact basic pay.",
    matchesFound: (n: number) => `${n} match${n === 1 ? "" : "es"} found — click a highlighted cell.`,
    band: "Pay band",
    level: "Level",
    gradePay: "Existing grade pay",
    stage: "Stage",
    selectHint: "Click any cell to see the salary breakdown for that level and stage.",
    selectedLevel: "Level",
    selectedStage: "Stage",
    basicPay: "Basic pay",
    gradePayRef: "Grade pay reference",
    daLabel: "Dearness Allowance (DA)",
    daHint: `Default ${DEFAULT_DA_PERCENT}% — verified for Rajasthan state employees as of ${DA_LAST_VERIFIED}. Edit if it has changed.`,
    hraLabel: "House Rent Allowance (HRA)",
    hraCity: "Your city category",
    customPercent: "Custom %",
    grossLabel: "Estimated gross salary",
    grossNote: "Basic pay + DA + HRA only. Does not include other allowances (TA, medical, etc.).",
    deductionsLabel: "Typical deductions (informational)",
    deductionsToggle: "Show typical deductions",
    npsLabel: "NPS / pension contribution",
    npsHint: "≈10% of (Basic + DA) for employees under the New Pension Scheme (post-2004 recruits). Employees still on the old GPF scheme contribute a self-chosen amount instead.",
    itLabel: "Income tax",
    itHint: "Depends on your total annual income, regime chosen, and other deductions. Not calculated here — check your PayManager income tax statement.",
    disclaimerTitle: "Before you rely on this",
    disclaimer:
      "This calculator estimates gross salary from the published 7th Pay Commission matrix. Actual DA and HRA rates change by government order and your city's HRA category, allowance eligibility, and deductions depend on your specific post and department. Always confirm your exact figures on PayManager (Employee Corner → Employee Report → Pay Slip) or with your DDO before making financial decisions.",
    clearSelection: "Clear selection",
  },
  hi: {
    toolTitle: "राजस्थान पे मैट्रिक्स",
    toolSubtitle: "7वां वेतन आयोग (रिवाइज्ड पे रूल्स, 2017)",
    matrixHeading: "इंटरैक्टिव पे मैट्रिक्स",
    legendRow: "पंक्ति / स्टेज",
    legendCol: "कॉलम / लेवल",
    legendSelected: "चयनित",
    footerCredit: "RajSSO Guide का स्वतंत्र टूल। यह आधिकारिक राजस्थान सरकारी कैलकुलेटर नहीं है।",
    footerNote: "वेतन अनुमान सलाहकारी हैं, रिवाइज्ड पे रूल्स, 2017 पर आधारित। कटौतियां अनुमानित हैं।",
    searchPlaceholder: "बेसिक पे खोजें (जैसे 44300)...",
    searchHelp: "मैट्रिक्स में सीधे पहुंचने के लिए सटीक बेसिक पे राशि टाइप करें।",
    noMatch: "मैट्रिक्स में इस सटीक राशि का कोई सेल नहीं मिला।",
    matchesFound: (n: number) => `${n} मिलान मिले — हाइलाइट किए गए सेल पर क्लिक करें।`,
    band: "पे बैंड",
    level: "लेवल",
    gradePay: "पुरानी ग्रेड पे",
    stage: "स्टेज",
    selectHint: "किसी भी सेल पर क्लिक करें और उस लेवल व स्टेज की सैलरी ब्रेकडाउन देखें।",
    selectedLevel: "लेवल",
    selectedStage: "स्टेज",
    basicPay: "बेसिक पे",
    gradePayRef: "ग्रेड पे संदर्भ",
    daLabel: "महंगाई भत्ता (DA)",
    daHint: `डिफ़ॉल्ट ${DEFAULT_DA_PERCENT}% — राजस्थान राज्य कर्मचारियों के लिए ${DA_LAST_VERIFIED} तक सत्यापित। बदलने पर संपादित करें।`,
    hraLabel: "गृह भाड़ा भत्ता (HRA)",
    hraCity: "आपकी शहर श्रेणी",
    customPercent: "कस्टम %",
    grossLabel: "अनुमानित सकल वेतन",
    grossNote: "केवल बेसिक पे + DA + HRA। अन्य भत्ते (TA, मेडिकल आदि) शामिल नहीं।",
    deductionsLabel: "सामान्य कटौतियां (सूचनात्मक)",
    deductionsToggle: "सामान्य कटौतियां दिखाएं",
    npsLabel: "NPS / पेंशन अंशदान",
    npsHint: "नई पेंशन योजना (2004 के बाद भर्ती) वाले कर्मचारियों के लिए (बेसिक + DA) का लगभग 10%। पुरानी GPF योजना वाले कर्मचारी इसके बजाय स्वयं चुनी राशि जमा करते हैं।",
    itLabel: "आयकर",
    itHint: "यह आपकी कुल वार्षिक आय, चुने गए टैक्स रिजीम और अन्य कटौतियों पर निर्भर करता है। यहां गणना नहीं की गई — अपना आयकर विवरण PayManager पर देखें।",
    disclaimerTitle: "भरोसा करने से पहले",
    disclaimer:
      "यह कैलकुलेटर प्रकाशित 7वें वेतन आयोग मैट्रिक्स से सकल वेतन का अनुमान लगाता है। वास्तविक DA और HRA दरें सरकारी आदेश से बदलती हैं, और आपके शहर की HRA श्रेणी, भत्ता पात्रता व कटौतियां आपके विशेष पद व विभाग पर निर्भर करती हैं। कोई भी वित्तीय निर्णय लेने से पहले हमेशा PayManager (Employee Corner → Employee Report → Pay Slip) पर या अपने DDO से सटीक आंकड़े पुष्टि करें।",
    clearSelection: "चयन हटाएं",
  },
} as const;

interface Selection {
  level: number;
  stage: number;
  basic: number;
}

export function PayMatrixCalculator({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const matrix = useMemo(() => buildMatrix(), []);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [matrixHeight, setMatrixHeight] = useState<number | null>(null);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Selection | null>(null);
  const [hover, setHover] = useState<{ level: number; stage: number } | null>(null);
  const [daPercent, setDaPercent] = useState(DEFAULT_DA_PERCENT);
  const [hraTierId, setHraTierId] = useState(hraTiers[0].id);
  const [customHra, setCustomHra] = useState(hraTiers[2].percent);
  const [showDeductions, setShowDeductions] = useState(false);

  const searchAmount = search.trim() ? Number(search.trim()) : null;
  const matches =
    searchAmount && !Number.isNaN(searchAmount)
      ? findByBasicPay(matrix, searchAmount)
      : [];
  const matchSet = new Set(matches.map((m) => `${m.level}-${m.stage}`));

  // Auto-highlight + auto-scroll to the first match as the user types, and
  // auto-select it so the breakdown panel updates without an extra click.
  useEffect(() => {
    if (matches.length === 0) return;
    const first = matches[0];
    setSelected({ level: first.level, stage: first.stage, basic: first.basic });
    const el = scrollRef.current?.querySelector<HTMLElement>(
      `[data-cell="${first.level}-${first.stage}"]`,
    );
    el?.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // Match the matrix's height to the breakdown panel's actual rendered
  // height on desktop (lg+), so the matrix never grows taller than the
  // panel needs. On mobile the two stack, so no height lock is applied.
  useEffect(() => {
    const panelEl = panelRef.current;
    if (!panelEl) return;

    const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

    const update = () => {
      if (!isDesktop()) {
        setMatrixHeight(null);
        return;
      }
      const h = panelEl.getBoundingClientRect().height;
      // Clamp so the matrix stays usable even when the panel is short
      // (nothing selected yet) and never runs off-screen when it's tall.
      setMatrixHeight(Math.min(Math.max(h, 320), window.innerHeight * 0.7));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(panelEl);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [selected, showDeductions]);

  const hraPercent =
    hraTierId === "custom"
      ? customHra
      : hraTiers.find((h) => h.id === hraTierId)?.percent ?? 0;

  const basic = selected?.basic ?? 0;
  const daAmount = Math.round((basic * daPercent) / 100);
  const hraAmount = Math.round((basic * hraPercent) / 100);
  const gross = basic + daAmount + hraAmount;
  const npsAmount = Math.round(((basic + daAmount) * 10) / 100);

  const selectedLevelDef = selected
    ? payLevels.find((l) => l.level === selected.level)
    : null;

  const searchStatus =
    searchAmount && !Number.isNaN(searchAmount)
      ? matches.length > 0
        ? t.matchesFound(matches.length)
        : t.noMatch
      : t.searchHelp;

  return (
    // Break out of the article's max-width container to run edge-to-edge,
    // since a dense pay-matrix grid needs real width to stay usable.
    // The content above/below this component keeps its normal max-width.
    <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 px-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        {/* Header bar — compact; stacks on mobile, single row from sm up */}
        <div className="flex flex-col gap-2.5 border-b border-zinc-200 bg-zinc-900 px-3 py-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-600 text-white"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm0 5.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6ZM12 9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9Z" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">{t.toolTitle}</p>
              <p className="text-[11px] text-zinc-400">{t.toolSubtitle}</p>
            </div>
          </div>

          <div className="hidden items-center gap-3 text-[11px] text-zinc-400 md:flex">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-100 ring-1 ring-amber-300" />
              {t.legendRow}
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-100 ring-1 ring-amber-300" />
              {t.legendCol}
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-amber-600" />
              {t.legendSelected}
            </span>
          </div>

          <div className="w-full sm:ml-auto sm:w-60">
            <input
              type="search"
              inputMode="numeric"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-white placeholder-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            />
          </div>
        </div>

        {search.trim() && (
          <p className="border-b border-zinc-200 bg-amber-50/60 px-4 py-1.5 text-[11px] leading-snug text-amber-800 sm:px-5">
            {searchStatus}
          </p>
        )}

        {/* Body */}
        <div className="p-3 sm:p-4">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
            {/* Matrix — height synced to the breakdown panel on desktop only */}
            <div>
              <div
                ref={scrollRef}
                style={matrixHeight ? { height: `${matrixHeight}px` } : undefined}
                className="max-h-[70vh] min-h-[320px] overflow-auto rounded-xl border border-zinc-200 shadow-sm"
              >
                <table className="w-full border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="sticky left-0 top-0 z-20 border-b border-r border-zinc-700 bg-zinc-900 px-2 py-1.5 text-left font-semibold text-white"
                      >
                        {t.stage}
                      </th>
                      {payLevels.map((lvl) => (
                        <th
                          key={lvl.level}
                          scope="col"
                          className={`sticky top-0 z-10 border-b border-zinc-700 px-2 py-1.5 text-center font-semibold text-white ${
                            hover?.level === lvl.level ? "bg-amber-700" : "bg-zinc-900"
                          }`}
                        >
                          L-{lvl.level}
                        </th>
                      ))}
                    </tr>
                    <tr aria-hidden="true">
                      <th
                        scope="col"
                        className="sticky left-0 z-10 border-b border-r border-zinc-200 bg-zinc-100 px-2 py-0.5 text-left text-[10px] font-medium text-zinc-500"
                      >
                        {t.gradePay}
                      </th>
                      {payLevels.map((lvl) => (
                        <td
                          key={lvl.level}
                          className="border-b border-zinc-200 bg-zinc-100 px-2 py-0.5 text-center text-[10px] text-zinc-500"
                        >
                          {lvl.existingGradePay}
                        </td>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: MAX_STAGES }, (_, stageIdx) => {
                      const stage = stageIdx + 1;
                      return (
                        <tr key={stage}>
                          <th
                            scope="row"
                            className={`sticky left-0 z-10 border-r border-zinc-200 px-2 py-1 text-left font-medium ${
                              hover?.stage === stage
                                ? "bg-amber-100 text-amber-900"
                                : stage % 2 === 0
                                  ? "bg-zinc-50 text-zinc-600"
                                  : "bg-white text-zinc-600"
                            }`}
                          >
                            {stage}
                          </th>
                          {payLevels.map((lvl, levelIdx) => {
                            const value = matrix[levelIdx][stageIdx];
                            const isSelected =
                              selected?.level === lvl.level && selected?.stage === stage;
                            const isHovered =
                              hover?.level === lvl.level || hover?.stage === stage;
                            const isMatch = matchSet.has(`${lvl.level}-${stage}`);
                            return (
                              <td key={lvl.level} className="border-b border-zinc-100 p-0">
                                <button
                                  type="button"
                                  data-cell={`${lvl.level}-${stage}`}
                                  onMouseEnter={() => setHover({ level: lvl.level, stage })}
                                  onMouseLeave={() => setHover(null)}
                                  onClick={() =>
                                    setSelected({ level: lvl.level, stage, basic: value })
                                  }
                                  aria-pressed={isSelected}
                                  aria-label={`${t.level} ${lvl.level}, ${t.stage} ${stage}: ₹${value.toLocaleString("en-IN")}`}
                                  className={`w-full px-2 py-1 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                                    isSelected
                                      ? "bg-amber-600 font-semibold text-white"
                                      : isMatch
                                        ? "bg-green-200 font-semibold text-green-900"
                                        : isHovered
                                          ? "bg-amber-50"
                                          : "hover:bg-amber-50/70"
                                  }`}
                                >
                                  {value.toLocaleString("en-IN")}
                                </button>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-1.5 text-[11px] text-zinc-500">{t.selectHint}</p>
            </div>

            {/* Breakdown panel */}
            <div ref={panelRef} className="lg:sticky lg:top-4 lg:self-start">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                {selected ? (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
                        {t.selectedLevel} {selected.level} · {t.selectedStage} {selected.stage}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelected(null)}
                        className="text-xs text-zinc-400 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                      >
                        {t.clearSelection}
                      </button>
                    </div>

                    <p className="mt-3 text-xs text-zinc-500">{t.basicPay}</p>
                    <p className="text-2xl font-bold text-zinc-900">
                      ₹{basic.toLocaleString("en-IN")}
                    </p>
                    {selectedLevelDef && (
                      <p className="mt-1 text-xs text-zinc-400">
                        {t.gradePayRef}: ₹{selectedLevelDef.existingGradePay}
                      </p>
                    )}

                    <div className="mt-4 space-y-3 border-t border-zinc-100 pt-3">
                      <label className="block">
                        <span className="text-xs font-medium text-zinc-700">{t.daLabel}</span>
                        <div className="mt-1 flex items-center gap-2">
                          <input
                            type="number"
                            min={0}
                            max={100}
                            value={daPercent}
                            onChange={(e) => setDaPercent(Number(e.target.value) || 0)}
                            className="w-20 rounded-lg border border-zinc-300 px-2 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                          />
                          <span className="text-sm text-zinc-500">%</span>
                          <span className="ml-auto text-sm font-medium text-zinc-700">
                            ₹{daAmount.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <p className="mt-1 text-[11px] leading-snug text-zinc-400">{t.daHint}</p>
                      </label>

                      <label className="block">
                        <span className="text-xs font-medium text-zinc-700">{t.hraLabel}</span>
                        <select
                          value={hraTierId}
                          onChange={(e) => setHraTierId(e.target.value)}
                          className="mt-1 w-full rounded-lg border border-zinc-300 px-2 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        >
                          {hraTiers.map((h) => (
                            <option key={h.id} value={h.id}>
                              {h.label[locale]} ({h.id === "custom" ? t.customPercent : `${h.percent}%`})
                            </option>
                          ))}
                        </select>
                        <div className="mt-2 flex items-center gap-2">
                          {hraTierId === "custom" && (
                            <>
                              <input
                                type="number"
                                min={0}
                                max={100}
                                value={customHra}
                                onChange={(e) => setCustomHra(Number(e.target.value) || 0)}
                                className="w-20 rounded-lg border border-zinc-300 px-2 py-1.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                              />
                              <span className="text-sm text-zinc-500">%</span>
                            </>
                          )}
                          <span className="ml-auto text-sm font-medium text-zinc-700">
                            ₹{hraAmount.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </label>
                    </div>

                    <div className="mt-4 rounded-xl bg-amber-50 p-3">
                      <p className="text-xs font-medium text-amber-800">{t.grossLabel}</p>
                      <p className="text-2xl font-bold text-amber-800">
                        ₹{gross.toLocaleString("en-IN")}
                      </p>
                      <p className="mt-1 text-[11px] leading-snug text-amber-700/80">{t.grossNote}</p>
                    </div>

                    <div className="mt-3">
                      <button
                        type="button"
                        onClick={() => setShowDeductions((v) => !v)}
                        className="text-xs font-medium text-amber-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        aria-expanded={showDeductions}
                      >
                        {t.deductionsToggle} {showDeductions ? "▲" : "▼"}
                      </button>
                      {showDeductions && (
                        <div className="mt-3 space-y-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-zinc-700">{t.npsLabel}</span>
                              <span className="text-sm font-medium text-zinc-800">
                                ≈₹{npsAmount.toLocaleString("en-IN")}
                              </span>
                            </div>
                            <p className="mt-1 text-[11px] leading-snug text-zinc-500">{t.npsHint}</p>
                          </div>
                          <div>
                            <span className="text-xs font-medium text-zinc-700">{t.itLabel}</span>
                            <p className="mt-1 text-[11px] leading-snug text-zinc-500">{t.itHint}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="py-6 text-center text-sm text-zinc-400">{t.selectHint}</p>
                )}
              </div>

              <div className="mt-3 rounded-xl border border-red-100 bg-red-50/50 p-3">
                <p className="text-xs font-semibold text-red-900">{t.disclaimerTitle}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-red-900/80">{t.disclaimer}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-200 bg-zinc-50 px-4 py-2 text-[11px] text-zinc-500 sm:px-5">
          <span>{t.footerCredit}</span>
          <span>{t.footerNote}</span>
        </div>
      </div>
    </div>
  );
}
