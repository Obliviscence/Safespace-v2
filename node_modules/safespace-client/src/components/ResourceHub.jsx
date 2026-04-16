import React from "react";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { emergencyContacts, resources } from "../data";

export function ResourceHub() {
  return (
    <section id="resources" className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
      <div className="rounded-[2rem] bg-cardTint p-6 shadow-soft ring-1 ring-white/60">
        <div className="flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-2xl bg-bubbleUser">
            <HeartHandshake className="size-5 text-slate-700" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-ink/60">
              Resource Hub
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-slate-800">
              Gentle guides for stress, anxiety, and low days
            </h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className="rounded-[1.6rem] bg-white/80 p-5 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/55">
                {resource.category}
              </p>
              <h4 className="mt-3 font-display text-xl font-semibold text-slate-800">
                {resource.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-ink/80">{resource.text}</p>
              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700"
              >
                Read guide
                <ArrowRight className="size-4" />
              </button>
            </article>
          ))}
        </div>
      </div>

      <aside id="emergency" className="rounded-[2rem] bg-cardTint p-6 shadow-soft ring-1 ring-white/60">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-ink/60">
          Emergency Help
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-slate-800">
          If you are in immediate danger, seek human help now
        </h3>
        <p className="mt-4 text-sm leading-7 text-ink/80">
          SafeSpace can offer comfort and grounding, but it cannot replace
          emergency or clinical support. If you feel at risk of harming yourself
          or someone else, contact emergency services or a crisis line now.
        </p>

        <div className="mt-6 space-y-3">
          {emergencyContacts.map((item) => (
            <div key={item.region} className="rounded-[1.4rem] bg-white/85 p-4">
              <p className="text-sm font-semibold text-slate-800">{item.region}</p>
              <p className="mt-1 text-sm text-ink/80">{item.contact}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
