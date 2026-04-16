import { ArrowRight } from "lucide-react";
import { AnimatedInView } from "@/components/animated-in-view";
import { SectionHeading } from "@/components/section-heading";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { GuidedStep } from "@/lib/types";

type GuidedFlowProps = {
  steps: GuidedStep[];
};

export function GuidedFlow({ steps }: GuidedFlowProps) {
  return (
    <section id="start-here" className="space-y-8">
      <SectionHeading
        eyebrow="Start here"
        title="A clearer path through the product"
        description="The app now leads with one simple journey: check in, choose the easiest way to respond, then get a grounded next step."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <AnimatedInView key={step.step} delay={index * 0.06}>
            <SurfaceCard className="h-full p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/8 px-3 py-1 text-sm font-semibold text-sky">
                  {step.step}
                </span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {step.description}
              </p>
            </SurfaceCard>
          </AnimatedInView>
        ))}
      </div>
    </section>
  );
}
