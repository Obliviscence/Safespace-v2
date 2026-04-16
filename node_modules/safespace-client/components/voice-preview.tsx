import { AudioLines, Mic, ShieldCheck, Volume2 } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { MoodDefinition } from "@/lib/types";

type VoicePreviewProps = {
  mood: MoodDefinition;
};

export function VoicePreview({ mood }: VoicePreviewProps) {
  return (
    <SurfaceCard className="p-6 md:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            Voice check-in
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
            Lower friction when writing is too much
          </h3>
        </div>
        <div className="grid size-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#dff8ed,#fff0d9)] text-[#69ad96]">
          <AudioLines className="size-5" />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-[rgba(146,174,226,0.20)] bg-[rgba(255,255,255,0.68)] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Microphone status</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ready to listen in a supported browser
              </p>
            </div>
            <span className="rounded-full bg-[#dff8ed] px-3 py-1 text-xs font-semibold text-[#589880]">
              Supported
            </span>
          </div>

          <div className="mt-6 flex items-end gap-2" aria-hidden="true">
            {[18, 28, 12, 32, 20, 10, 26].map((height) => (
              <span
                key={height}
                className="w-3 rounded-full bg-[linear-gradient(180deg,#bcd6ff,#a9f0d7)]"
                style={{ height }}
              />
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-white px-4 py-3 text-sm leading-7 text-slate-700 shadow-soft">
            {mood.voiceSuggestion}
          </div>
        </div>

        <div className="space-y-4">
            {[
            {
              title: "Speak naturally",
              text: "Use voice to start the check-in before you have the energy to type it well.",
              icon: Mic,
            },
            {
              title: "Hear the response",
              text: "Spoken replies are designed to sound calm, brief, and easy to follow.",
              icon: Volume2,
            },
            {
              title: "Keep safety visible",
              text: "If the content suggests risk, urgent help is surfaced clearly without waiting.",
              icon: ShieldCheck,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[rgba(146,174,226,0.20)] bg-[rgba(255,255,255,0.62)] p-4"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-[linear-gradient(135deg,#dff0ff,#ebe0ff)] text-[#6f75bc]">
                  <item.icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
}
