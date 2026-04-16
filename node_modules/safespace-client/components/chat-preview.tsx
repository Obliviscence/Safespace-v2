import { MessageCircleHeart, ShieldAlert } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { MoodDefinition } from "@/lib/types";

type ChatPreviewProps = {
  mood: MoodDefinition;
};

export function ChatPreview({ mood }: ChatPreviewProps) {
  return (
    <SurfaceCard className="p-6 md:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            Chat preview
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white">
            Support that reflects the check-in you chose
          </h3>
        </div>
        <div className="grid size-12 place-items-center rounded-2xl bg-white/10 text-lavender">
          <MessageCircleHeart className="size-5" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="max-w-[78%] rounded-[26px] border border-white/10 bg-white/8 px-4 py-3 text-sm leading-7 text-[#e9eef9]">
          {mood.chatOpener}
        </div>
        <div className="ml-auto max-w-[84%] rounded-[26px] bg-white px-4 py-3 text-sm leading-7 text-slate-700 shadow-soft">
          {mood.assistantReply}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-4">
          <p className="text-sm font-semibold text-white">Recommended next step</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{mood.nextStep}</p>
        </div>
        <div className="rounded-3xl border border-[#f1ca88]/24 bg-[#2d2618] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#ffd89b]">
            <ShieldAlert className="size-4" />
            Safety boundary
          </div>
          <p className="mt-2 text-sm leading-7 text-[#f4e8cc]">{mood.safetyNote}</p>
        </div>
      </div>
    </SurfaceCard>
  );
}
