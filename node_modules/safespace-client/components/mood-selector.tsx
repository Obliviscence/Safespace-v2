"use client";

import type { MoodDefinition } from "@/lib/types";
import { cn } from "@/lib/utils";

type MoodSelectorProps = {
  moods: MoodDefinition[];
  selectedMood: MoodDefinition;
  onSelect: (mood: MoodDefinition) => void;
};

export function MoodSelector({
  moods,
  selectedMood,
  onSelect,
}: MoodSelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5" role="list">
      {moods.map((mood) => {
        const active = mood.key === selectedMood.key;

        return (
          <button
            key={mood.key}
            type="button"
            role="listitem"
            aria-pressed={active}
            aria-label={mood.ariaLabel}
            onClick={() => onSelect(mood)}
            className={cn(
              "rounded-3xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/35",
              active
                ? "border-sky/40 bg-white text-slate-900 shadow-soft"
                : "border-white/10 bg-white/6 text-white hover:border-white/20 hover:bg-white/10",
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky">
              {mood.badge}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold">
              {mood.label}
            </h3>
            <p className={cn("mt-2 text-sm leading-7", active ? "text-slate-600" : "text-muted-foreground")}>
              {mood.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
