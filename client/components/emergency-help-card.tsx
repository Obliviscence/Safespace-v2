import { AlertTriangle, PhoneCall, ShieldPlus } from "lucide-react";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { EmergencyContact } from "@/lib/types";

type EmergencyHelpCardProps = {
  contacts: EmergencyContact[];
};

export function EmergencyHelpCard({ contacts }: EmergencyHelpCardProps) {
  return (
    <SurfaceCard
      id="safety"
      className="border-[rgba(244,193,138,0.34)] bg-[linear-gradient(180deg,rgba(255,247,236,0.96),rgba(255,241,228,0.94))] p-6 md:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fff1de] px-4 py-2 text-sm font-semibold text-[#b67831]">
            <AlertTriangle className="size-4" />
            Need urgent help?
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold text-foreground">
            If you may act on thoughts of self-harm or suicide, contact emergency services or a crisis line now.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#7a684f]">
            SafeSpace can support reflection and grounding, but it is not the place to stay if your safety may change quickly. Use immediate human support instead.
          </p>

          <div className="mt-6 rounded-3xl bg-white/70 p-4">
            <p className="text-sm font-semibold text-foreground">Region</p>
            <p className="mt-2 text-sm leading-7 text-[#7a684f]">
              This experience is currently configured for India. Replace or localize these emergency and crisis details if you deploy for another region.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div
              key={contact.label}
              className="rounded-3xl border border-[rgba(244,193,138,0.24)] bg-white/72 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 grid size-10 place-items-center rounded-2xl bg-[#fff1de] text-[#b67831]">
                  {index === 0 ? (
                    <PhoneCall className="size-4" />
                  ) : (
                    <ShieldPlus className="size-4" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{contact.label}</p>
                  <p className="mt-1 text-sm leading-7 text-[#7a684f]">
                    {contact.detail}
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
