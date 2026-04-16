import type { Feature } from "@/lib/types";
import { SurfaceCard } from "@/components/ui/surface-card";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <SurfaceCard className="h-full p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            {feature.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
            {feature.title}
          </h3>
        </div>
        <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-lavender">
          <feature.icon className="size-5" />
        </div>
      </div>
      <p className="mt-5 text-base leading-8 text-muted-foreground">
        {feature.description}
      </p>
    </SurfaceCard>
  );
}
