"use client";

import { BookHeart, LockKeyhole } from "lucide-react";
import { useMemo } from "react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { MoodDefinition } from "@/lib/types";

type JournalCardProps = {
  mood: MoodDefinition;
  journalValue: string;
  onChange: (value: string) => void;
};

export function JournalCard({
  mood,
  journalValue,
  onChange,
}: JournalCardProps) {
  const wordCount = useMemo(() => {
    const trimmed = journalValue.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  }, [journalValue]);

  return (
    <SurfaceCard className="p-6 md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            Journal prompt
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">
            Write privately without needing the right words first
          </h3>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-muted-foreground">
          <LockKeyhole className="size-4 text-mint" />
          Private by default
        </span>
      </div>

      <div className="mt-6 rounded-3xl border border-mint/20 bg-mint/10 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#cbf3e0]">
          <BookHeart className="size-4" />
          Prompt for {mood.label.toLowerCase()} moments
        </div>
        <p className="mt-2 text-sm leading-7 text-[#effff8]">{mood.journalPrompt}</p>
      </div>

      <label htmlFor="journal-area" className="sr-only">
        Personal journal area
      </label>
      <textarea
        id="journal-area"
        value={journalValue}
        onChange={(event) => onChange(event.target.value)}
        className="mt-5 min-h-[220px] w-full rounded-[28px] border border-white/12 bg-white/95 px-5 py-4 text-base leading-8 text-slate-800 shadow-soft transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/35"
        placeholder="Write a few honest lines. It can be messy, unfinished, or just one sentence."
        aria-describedby="journal-helper journal-count"
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p id="journal-helper" className="text-sm text-muted-foreground">
          Start with what feels loudest, then what you need more of in the next hour.
        </p>
        <p id="journal-count" className="text-sm font-medium text-[#dbe3f4]">
          {wordCount} words
        </p>
      </div>
    </SurfaceCard>
  );
}
