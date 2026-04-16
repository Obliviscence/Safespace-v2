import { ArrowUpRight } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { Resource } from "@/lib/types";
import { cn } from "@/lib/utils";

type ResourceCardProps = {
  resource: Resource;
  highlighted?: boolean;
  onRead?: (resource: Resource) => void;
};

export function ResourceCard({
  resource,
  highlighted = false,
  onRead,
}: ResourceCardProps) {
  return (
    <SurfaceCard
      className={cn(
        "h-full p-5 transition hover:-translate-y-1",
        highlighted && "border-[rgba(133,198,171,0.34)] bg-[linear-gradient(180deg,rgba(241,255,248,0.94),rgba(255,255,255,0.84))]",
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full bg-[rgba(185,220,255,0.34)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#5d87bb]">
          {resource.category}
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          {resource.readTime}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
        {resource.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {resource.description}
      </p>
      <button
        type="button"
        onClick={() => onRead?.(resource)}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4f6890] transition hover:text-[#35557f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/35"
      >
        Read guide
        <ArrowUpRight className="size-4" />
      </button>
    </SurfaceCard>
  );
}
