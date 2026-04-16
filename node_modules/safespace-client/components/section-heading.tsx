import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        centered && "mx-auto max-w-3xl text-center md:flex-col md:items-center",
      )}
    >
      <div className={cn("max-w-2xl", centered && "max-w-3xl")}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
