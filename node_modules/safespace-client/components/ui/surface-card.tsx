import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SurfaceCard<T extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: SurfaceCardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "rounded-xl3 border border-white/10 bg-card shadow-halo backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
