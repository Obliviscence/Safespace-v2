import { Heart } from "lucide-react";

export function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/65 px-5 py-4 shadow-soft backdrop-blur md:px-7">
        <a href="#" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-bubbleUser shadow-sm">
            <Heart className="size-5 fill-slate-700 text-slate-700" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-slate-800">
              SafeSpace
            </p>
            <p className="text-xs tracking-[0.2em] text-ink/60">AI SUPPORT BUDDY</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-ink/80 md:flex">
          <a href="#features" className="transition hover:text-slate-800">
            Features
          </a>
          <a href="#support" className="transition hover:text-slate-800">
            Chat
          </a>
          <a href="#resources" className="transition hover:text-slate-800">
            Resources
          </a>
          <a href="#emergency" className="transition hover:text-slate-800">
            Help Now
          </a>
        </nav>

        <button
          type="button"
          onClick={onToggleDarkMode}
          className="rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white"
        >
          {darkMode ? "Soft Light" : "Soft Dark"}
        </button>
      </div>
    </header>
  );
}
