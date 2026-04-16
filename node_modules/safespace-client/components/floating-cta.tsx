"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FloatingCTAProps = {
  hideNearFooter: boolean;
};

export function FloatingCTA({ hideNearFooter }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsVisible(window.scrollY > 760);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-40 transition-all duration-300 md:bottom-8 md:right-8",
        isVisible && !hideNearFooter ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Button asChild size="lg">
        <a href="#app-preview">Start check-in</a>
      </Button>
    </div>
  );
}
