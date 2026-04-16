import { ArrowUpRight } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Resource } from "@/lib/types";
import { cn } from "@/lib/utils";

type ResourceCardProps = {
  resource: Resource;
  highlighted?: boolean;
};

export function ResourceCard({ resource, highlighted = false }: ResourceCardProps) {
  return (
    <SurfaceCard
      className={cn(
        "h-full p-5 transition hover:-translate-y-1",
        highlighted && "border-mint/28 bg-[rgba(226,245,238,0.08)]",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky">
          {resource.category}
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          {resource.readTime}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-white">
        {resource.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {resource.description}
      </p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e8eefb]">
        Read guide
        <ArrowUpRight className="size-4" />
      </div>
    </SurfaceCard>
  );
}
