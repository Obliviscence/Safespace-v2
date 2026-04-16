import { SurfaceCard } from "@/components/ui/surface-card";
import type { Testimonial } from "@/lib/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <SurfaceCard className="h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,247,252,0.86))] p-5">
      <p className="text-base leading-8 text-[#556987]">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-5">
        <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
        <p className="mt-1 text-sm text-muted-foreground">{testimonial.detail}</p>
      </div>
    </SurfaceCard>
  );
}
