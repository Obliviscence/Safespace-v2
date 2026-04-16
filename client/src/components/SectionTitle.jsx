import React from "react";

export function SectionTitle({ eyebrow, title, text, align = "left" }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-ink/60">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-slate-800 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-ink/80">{text}</p>
    </div>
  );
}
