import Link from "next/link";
import type { BoundaryItem } from "@/lib/types";

type BoundaryNoticeProps = {
  items: BoundaryItem[];
};

export function BoundaryNotice({ items }: BoundaryNoticeProps) {
  return (
    <footer className="border-t border-[rgba(144,168,222,0.22)] pb-10 pt-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            Boundaries and privacy
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="rounded-3xl border border-[rgba(144,168,222,0.20)] bg-[rgba(255,255,255,0.64)] p-4">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[rgba(144,168,222,0.20)] bg-[rgba(255,255,255,0.64)] p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            Links
          </p>
          <div className="mt-5 space-y-3">
            {[
              { href: "#safety", label: "Help" },
              { href: "#", label: "Privacy" },
              { href: "#", label: "Terms" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-2xl border border-[rgba(144,168,222,0.20)] px-4 py-3 text-sm font-medium text-[#506989] transition hover:bg-[rgba(185,220,255,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/35"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
