import { useEffect, useState } from "react";

const moods = [
  { emoji: "😣", label: "Struggling", value: 1 },
  { emoji: "😕", label: "Low", value: 2 },
  { emoji: "😐", label: "Mixed", value: 3 },
  { emoji: "🙂", label: "Okay", value: 4 },
  { emoji: "😊", label: "Bright", value: 5 },
];

export function MoodTracker() {
  const [selected, setSelected] = useState(3);

  useEffect(() => {
    const stored = window.localStorage.getItem("safespace-mood");
    if (stored) setSelected(Number(stored));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("safespace-mood", String(selected));
  }, [selected]);

  return (
    <section className="rounded-[2rem] bg-cardTint p-6 shadow-soft ring-1 ring-white/60">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-ink/60">
            Mood Tracker
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-slate-800">
            How are you feeling today?
          </h3>
        </div>
        <p className="rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ink">
          Small check-ins count
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-5">
        {moods.map((mood) => (
          <button
            key={mood.value}
            type="button"
            onClick={() => setSelected(mood.value)}
            className={`rounded-[1.5rem] p-4 text-center transition ${
              selected === mood.value
                ? "bg-bubbleUser shadow-float"
                : "bg-white/80 hover:-translate-y-1 hover:shadow-soft"
            }`}
          >
            <div className="text-3xl">{mood.emoji}</div>
            <div className="mt-3 text-sm font-semibold text-slate-700">
              {mood.label}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
