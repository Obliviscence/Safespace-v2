import { BookHeart, Lock } from "lucide-react";
import { useEffect, useState } from "react";

export function Journal() {
  const [entry, setEntry] = useState("");
  const [savedAt, setSavedAt] = useState(null);

  useEffect(() => {
    const storedEntry = window.localStorage.getItem("safespace-journal");
    const storedTime = window.localStorage.getItem("safespace-journal-time");
    if (storedEntry) setEntry(storedEntry);
    if (storedTime) setSavedAt(Number(storedTime));
  }, []);

  function handleSave() {
    const timestamp = Date.now();
    window.localStorage.setItem("safespace-journal", entry);
    window.localStorage.setItem("safespace-journal-time", String(timestamp));
    setSavedAt(timestamp);
  }

  return (
    <section className="rounded-[2rem] bg-cardTint p-6 shadow-soft ring-1 ring-white/60">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-2xl bg-bubbleAi">
            <BookHeart className="size-5 text-slate-700" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-ink/60">
              Private Journal
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-slate-800">
              Put words around what you are carrying
            </h3>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-ink/80">
          <Lock className="size-4" />
          Stored locally in this browser
        </div>
      </div>

      <textarea
        rows="7"
        value={entry}
        onChange={(event) => setEntry(event.target.value)}
        placeholder="What happened today? What do you need? What would feel kind or steady right now?"
        className="mt-6 w-full rounded-[1.5rem] border border-white/70 bg-white/90 px-4 py-4 text-sm leading-7 text-slate-700 outline-none transition placeholder:text-ink/45 focus:border-sky focus:shadow-soft"
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/75">
          {savedAt
            ? `Last saved ${new Date(savedAt).toLocaleString()}`
            : "Write freely. You can save whenever you are ready."}
        </p>

        <button
          type="button"
          onClick={handleSave}
          className="rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Save Entry
        </button>
      </div>
    </section>
  );
}
