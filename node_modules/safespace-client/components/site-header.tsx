"use client";

import { Heart } from "lucide-react";
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
          "mx-auto flex max-w-[1380px] items-center justify-between rounded-full border border-[rgba(123,152,214,0.20)] bg-[rgba(255,255,255,0.76)] px-4 py-3 shadow-soft backdrop-blur-xl transition-colors md:px-6",
          scrolled && "bg-[rgba(255,255,255,0.90)]",
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,#a9d7ff,#d7c4ff)] text-primary shadow-soft">
            <Heart className="size-5 fill-current" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-foreground">SafeSpace</p>
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
              className="rounded-full px-1 py-1 text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/35"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="md">
            <a href="#app-preview">Start chat</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
