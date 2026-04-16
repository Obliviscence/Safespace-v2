"use client";

import { Heart, MoonStar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  scrolled: boolean;
};

const navItems = [
  { href: "#how-it-helps", label: "How it helps" },
  { href: "#start-here", label: "Start here" },
  { href: "#app-preview", label: "Preview" },
  { href: "#resources", label: "Resources" },
  { href: "#safety", label: "Help now" },
];

export function SiteHeader({ scrolled }: SiteHeaderProps) {
  return (
    <header className="sticky top-4 z-50">
      <div
        className={cn(
          "mx-auto flex max-w-[1380px] items-center justify-between rounded-full border border-white/10 bg-[rgba(9,15,30,0.72)] px-4 py-3 shadow-soft backdrop-blur-xl md:px-6",
          scrolled && "border-white/16 bg-[rgba(9,15,30,0.86)]",
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-white text-primary shadow-soft">
            <Heart className="size-5 fill-current" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-white">SafeSpace</p>
            <p className="text-xs tracking-[0.18em] text-muted-foreground">
              CALM SUPPORT APP
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/35 rounded-full px-1 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-11 items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 text-sm font-medium text-muted-foreground transition hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/35 md:inline-flex"
            aria-label="Soft dark theme is active"
          >
            <MoonStar className="size-4" />
            Soft dark
          </button>
          <Button asChild size="md">
            <a href="#app-preview">Start chat</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
