"use client";

import { useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";

const labels = {
  en: {
    upload: "Choose an image (JPG or PNG)",
    preset: "Preset",
    width: "Width (px)",
    height: "Height (px)",
    download: "Resize & download",
    original: "Original",
    resized: "Resized preview",
    note: "Everything runs in your browser — your photo is never uploaded to any server. Always check the exact size and format your form requires.",
    presets: {
      passport: "Passport photo (200×230)",
      signature: "Signature (140×60)",
      custom: "Custom",
    },
  },
  hi: {
    upload: "एक इमेज चुनें (JPG या PNG)",
    preset: "प्रीसेट",
    width: "चौड़ाई (px)",
    height: "ऊंचाई (px)",
    download: "रिसाइज़ करें और डाउनलोड करें",
    original: "मूल",
    resized: "रिसाइज़ की गई झलक",
    note: "सब कुछ आपके ब्राउज़र में चलता है — आपकी फोटो कभी किसी सर्वर पर अपलोड नहीं होती। हमेशा अपने फॉर्म की सटीक साइज़ और फॉर्मेट जांचें।",
    presets: {
      passport: "पासपोर्ट फोटो (200×230)",
      signature: "हस्ताक्षर (140×60)",
      custom: "कस्टम",
    },
  },
} as const;

const PRESETS = {
  passport: { w: 200, h: 230 },
  signature: { w: 140, h: 60 },
  custom: { w: 200, h: 200 },
} as const;

type Preset = keyof typeof PRESETS;

export function PhotoResizer({ locale }: { locale: Locale }) {
  const t = labels[locale];
  const [src, setSrc] = useState<string | null>(null);
  const [preset, setPreset] = useState<Preset>("passport");
  const [w, setW] = useState<number>(PRESETS.passport.w);
  const [h, setH] = useState<number>(PRESETS.passport.h);
  const imgRef = useRef<HTMLImageElement | null>(null);

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setSrc(url);
  }

  function applyPreset(p: Preset) {
    setPreset(p);
    if (p !== "custom") {
      setW(Number(PRESETS[p].w));
      setH(Number(PRESETS[p].h));
    }
  }

  function resizeAndDownload() {
    if (!imgRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(imgRef.current, 0, 0, w, h);
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg", 0.9);
    link.download = `resized-${w}x${h}.jpg`;
    link.click();
  }

  return (
    <div className="max-w-md rounded-2xl border border-zinc-200 p-6">
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700">{t.upload}</span>
          <input
            type="file"
            accept="image/png,image/jpeg"
            onChange={onFile}
            className="mt-1 w-full text-sm"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-zinc-700">{t.preset}</span>
          <select
            value={preset}
            onChange={(e) => applyPreset(e.target.value as Preset)}
            className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
          >
            {(Object.keys(t.presets) as Preset[]).map((p) => (
              <option key={p} value={p}>
                {t.presets[p]}
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-zinc-700">{t.width}</span>
            <input
              type="number"
              min={10}
              value={w}
              onChange={(e) => {
                setW(Number(e.target.value));
                setPreset("custom");
              }}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-zinc-700">{t.height}</span>
            <input
              type="number"
              min={10}
              value={h}
              onChange={(e) => {
                setH(Number(e.target.value));
                setPreset("custom");
              }}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2"
            />
          </label>
        </div>

        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={src}
            alt={t.original}
            className="max-h-40 rounded-lg border border-zinc-200"
          />
        )}

        <button
          type="button"
          disabled={!src}
          onClick={resizeAndDownload}
          className="rounded-full bg-amber-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-800 disabled:opacity-50"
        >
          {t.download}
        </button>

        <p className="text-xs text-zinc-400">{t.note}</p>
      </div>
    </div>
  );
}
