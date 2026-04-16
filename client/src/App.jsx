import React from "react";
import { MessageCircleHeart, Mic, Shield, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { ChatPanel } from "./components/ChatPanel";
import { Journal } from "./components/Journal";
import { MoodTracker } from "./components/MoodTracker";
import { Navbar } from "./components/Navbar";
import { ResourceHub } from "./components/ResourceHub";
import { SectionTitle } from "./components/SectionTitle";
import { featureCards, testimonials } from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-pageWash text-slate-800 transition-colors dark:bg-[linear-gradient(180deg,#23283c_0%,#31374b_100%)] dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode((v) => !v)} />

        <main className="pb-20">
          <section className="relative mt-8 overflow-hidden rounded-[2.5rem] bg-heroGlow px-6 py-10 shadow-soft ring-1 ring-white/70 md:px-10 md:py-16">
            <div className="absolute -left-6 top-16 size-24 rounded-full bg-blush/55 blur-xl animate-float" />
            <div
              className="absolute right-10 top-10 size-20 rounded-full bg-mint/70 blur-xl animate-float"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute bottom-10 right-1/4 size-28 rounded-full bg-lavender/55 blur-xl animate-float"
              style={{ animationDelay: "2s" }}
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="animate-fade-rise">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-ink shadow-sm">
                  <Sparkles className="size-4" />
                  Safe, calming, and human-centered
                </p>
                <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-slate-800 md:text-6xl">
                  You’re not alone. Talk to someone anytime.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/85">
                  A safe space where you can express, heal, and grow.
                </p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-ink/78">
                  SafeSpace blends an empathetic AI companion, calm voice support,
                  mood tracking, journaling, and gentle self-help guidance into one
                  uplifting and accessible experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#support"
                    className="rounded-full bg-slate-800 px-6 py-4 text-sm font-semibold text-white shadow-float transition hover:bg-slate-700"
                  >
                    Start Chat
                  </a>
                  <a
                    href="#support"
                    className="rounded-full bg-white/85 px-6 py-4 text-sm font-semibold text-slate-700 shadow-soft transition hover:bg-white"
                  >
                    Talk Now
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-ink/80">
                  <div className="flex items-center gap-2">
                    <Shield className="size-4" />
                    Crisis-aware safety prompts
                  </div>
                  <div className="flex items-center gap-2">
                    <Mic className="size-4" />
                    Voice check-ins
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircleHeart className="size-4" />
                    Friendly emotional support
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[2rem] bg-white/75 p-6 shadow-soft ring-1 ring-white/60">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-ink/60">
                    Trusted Companion
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-slate-800">
                    Gentle support any time you need a steady presence
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-ink/80">
                    Grounding exercises, journaling prompts, and adaptive replies
                    shaped around the mood behind your message.
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white/75 p-6 shadow-soft ring-1 ring-white/60">
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
                    {[
                      { label: "Chat support", value: "24/7" },
                      { label: "Voice mode", value: "STT + TTS" },
                      { label: "Mood tracking", value: "Daily" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-[1.4rem] bg-pageWash p-4 text-center">
                        <p className="font-display text-xl font-semibold text-slate-800">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-ink/60">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="mt-20">
            <SectionTitle
              eyebrow="Core Features"
              title="Built to feel calm, supportive, and easy to return to"
              text="Every part of the experience uses soft visuals, accessible spacing, gentle contrast, and emotionally reassuring micro-interactions."
              align="center"
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {featureCards.map((card, index) => (
                <article
                  key={card.title}
                  className="rounded-[2rem] bg-cardTint p-6 shadow-soft ring-1 ring-white/60 animate-fade-rise"
                  style={{ animationDelay: `${index * 0.14}s` }}
                >
                  <div className="inline-flex rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                    {card.title}
                  </div>
                  <p className="mt-5 text-base leading-8 text-ink/80">{card.text}</p>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-20">
            <ChatPanel />
          </div>

          <section className="mt-20 grid gap-6 xl:grid-cols-2">
            <MoodTracker />
            <Journal />
          </section>

          <div className="mt-20">
            <ResourceHub />
          </div>

          <section className="mt-20">
            <SectionTitle
              eyebrow="Testimonials"
              title="Reassuring, warm, and designed to reduce friction on hard days"
              text="These sample stories reflect the tone and trust the experience is meant to create."
              align="center"
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.author}
                  className="rounded-[2rem] bg-cardTint p-6 shadow-soft ring-1 ring-white/60"
                >
                  <p className="text-base leading-8 text-ink/80">“{item.quote}”</p>
                  <p className="mt-5 text-sm font-semibold text-slate-700">{item.author}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] bg-white/70 p-6 text-center shadow-soft ring-1 ring-white/60">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-ink/60">
              Disclaimer
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-ink/85">
              This is not a replacement for professional therapy. SafeSpace offers
              emotional support, grounding, and self-help tools, but it does not
              provide diagnosis, medical advice, or emergency intervention.
            </p>
          </section>
        </main>

        <a
          href="#support"
          className="fixed bottom-5 right-5 z-40 rounded-full bg-slate-800 px-5 py-4 text-sm font-semibold text-white shadow-float transition hover:bg-slate-700"
        >
          Talk Now
        </a>
      </div>
    </div>
  );
}

export default App;
