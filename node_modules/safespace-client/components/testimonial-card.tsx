import { SurfaceCard } from "@/components/ui/surface-card";
import type { Testimonial } from "@/lib/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <SurfaceCard className="h-full p-5">
      <p className="text-base leading-8 text-[#edf2ff]">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-5">
        <p className="text-sm font-semibold text-white">{testimonial.author}</p>
        <p className="mt-1 text-sm text-muted-foreground">{testimonial.detail}</p>
      </div>
    </SurfaceCard>
  );
}
