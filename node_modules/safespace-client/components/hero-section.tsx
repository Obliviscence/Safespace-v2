import { LockKeyhole, MessageCircleHeart, ShieldCheck } from "lucide-react";
import { AnimatedInView } from "@/components/animated-in-view";
import { Button } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { MoodDefinition } from "@/lib/types";

type HeroSectionProps = {
  mood: MoodDefinition;
};

export function HeroSection({ mood }: HeroSectionProps) {
  return (
    <section className="grid gap-8 pt-10 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:items-center lg:gap-10 xl:gap-14">
      <AnimatedInView>
        <div>
          <span className="inline-flex rounded-full border border-sky/30 bg-sky/12 px-4 py-2 text-sm font-semibold text-sky">
            Calm, human-centered support
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-tight text-white md:text-6xl xl:text-7xl">
            You&apos;re not alone. Talk to someone anytime.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            A safe space to check in, talk things through, write privately, and find the next gentle step when emotions feel heavy, mixed, or hard to name.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#app-preview">Start chat</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#app-preview">Try voice</a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#resources">Explore resources</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { label: "Private journaling", icon: LockKeyhole },
              { label: "Grounded support", icon: MessageCircleHeart },
              { label: "Crisis-aware safeguards", icon: ShieldCheck },
            ].map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-[#d7deef]"
              >
                <item.icon className="size-4 text-mint" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </AnimatedInView>

      <AnimatedInView delay={0.08}>
        <SurfaceCard className="overflow-hidden border-white/12 bg-[linear-gradient(180deg,rgba(244,247,255,0.97),rgba(233,240,252,0.94))] p-6 text-slate-900 shadow-elevated">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Product preview
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-slate-900">
                One calm place to start
              </h2>
            </div>
            <span className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
              {mood.badge}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-white p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Mood-aware prompt
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {mood.chatOpener}
              </p>
            </div>

            <div className="ml-auto max-w-[90%] rounded-[24px] bg-[linear-gradient(135deg,#11244d,#1f376e)] px-4 py-3 text-sm leading-7 text-white shadow-soft">
              {mood.assistantReply}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-[#edf5f6] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Suggested next step
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {mood.nextStep}
                </p>
              </div>
              <div className="rounded-3xl bg-[#fff3e5] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Safety boundary
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {mood.safetyNote}
                </p>
              </div>
            </div>
          </div>
        </SurfaceCard>
      </AnimatedInView>
    </section>
  );
}
