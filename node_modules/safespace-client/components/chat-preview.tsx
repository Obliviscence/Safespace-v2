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
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
            Support that reflects the check-in you chose
          </h3>
        </div>
        <div className="grid size-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#dff0ff,#ebe0ff)] text-[#6f75bc]">
          <MessageCircleHeart className="size-5" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="max-w-[78%] rounded-[26px] border border-[rgba(140,168,224,0.24)] bg-[rgba(232,243,255,0.72)] px-4 py-3 text-sm leading-7 text-[#506488]">
          {mood.chatOpener}
        </div>
        <div className="ml-auto max-w-[84%] rounded-[26px] bg-[linear-gradient(135deg,#dff8ed,#ffe7ef)] px-4 py-3 text-sm leading-7 text-[#4a5c7a] shadow-soft">
          {mood.assistantReply}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[rgba(146,174,226,0.20)] bg-[rgba(255,255,255,0.62)] p-4">
          <p className="text-sm font-semibold text-foreground">Recommended next step</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">{mood.nextStep}</p>
        </div>
        <div className="rounded-3xl border border-[rgba(241,202,136,0.34)] bg-[#fff5ea] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#b27c2f]">
            <ShieldAlert className="size-4" />
            Safety boundary
          </div>
          <p className="mt-2 text-sm leading-7 text-[#7a6344]">{mood.safetyNote}</p>
        </div>
      </div>
    </SurfaceCard>
  );
}
