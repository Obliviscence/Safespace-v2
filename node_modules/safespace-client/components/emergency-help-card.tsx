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
      className="border-[#f0c98d]/28 bg-[linear-gradient(180deg,rgba(58,45,25,0.94),rgba(41,31,17,0.98))] p-6 md:p-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f2cf9b]/16 px-4 py-2 text-sm font-semibold text-[#ffdca7]">
            <AlertTriangle className="size-4" />
            Need urgent help?
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold text-white">
            If you may act on thoughts of self-harm or suicide, contact emergency services or a crisis line now.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#f4e7cd]">
            SafeSpace can support reflection and grounding, but it is not the place to stay if your safety may change quickly. Use immediate human support instead.
          </p>

          <div className="mt-6 rounded-3xl bg-black/14 p-4">
            <p className="text-sm font-semibold text-white">Region</p>
            <p className="mt-2 text-sm leading-7 text-[#f4e7cd]">
              Region selector placeholder. Replace these defaults with country-specific emergency and crisis resources before deployment.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <div
              key={contact.label}
              className="rounded-3xl border border-white/10 bg-white/10 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 grid size-10 place-items-center rounded-2xl bg-white/12 text-[#ffdca7]">
                  {index === 0 ? (
                    <PhoneCall className="size-4" />
                  ) : (
                    <ShieldPlus className="size-4" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{contact.label}</p>
                  <p className="mt-1 text-sm leading-7 text-[#f4e7cd]">
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
