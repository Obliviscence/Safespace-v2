import { BookOpenText } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Resource } from "@/lib/types";

type ResourceGuideViewerProps = {
  resource: Resource;
};

export function ResourceGuideViewer({ resource }: ResourceGuideViewerProps) {
  return (
    <SurfaceCard className="p-6 md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            Open guide
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">
            {resource.title}
          </h3>
          <p className="mt-3 text-sm font-medium text-[#5d87bb]">
            {resource.category} · {resource.readTime}
          </p>
        </div>
        <div className="grid size-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#dff0ff,#ebe0ff)] text-[#6f75bc]">
          <BookOpenText className="size-5" />
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl bg-[rgba(255,255,255,0.70)] p-5">
          <p className="text-base leading-8 text-muted-foreground">{resource.intro}</p>

          <div className="mt-6 space-y-4">
            {resource.steps.map((step, index) => (
              <div key={step} className="flex items-start gap-3">
                <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#bfe0ff,#d9c8ff)] text-sm font-semibold text-[#35557f]">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-[#516683]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-[#effaf5] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#67a88d]">
            When to use this
          </p>
          <p className="mt-3 text-sm leading-7 text-[#55736a]">{resource.whenToUse}</p>
        </div>
      </div>
    </SurfaceCard>
  );
}
