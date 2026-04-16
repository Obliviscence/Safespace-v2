"use client";

import { LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { ChatPreview } from "@/components/chat-preview";
import { JournalCard } from "@/components/journal-card";
import { MoodSelector } from "@/components/mood-selector";
import { SectionHeading } from "@/components/section-heading";
import { VoicePreview } from "@/components/voice-preview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SurfaceCard } from "@/components/ui/surface-card";
import type { MoodDefinition, PreviewTab, PreviewTabKey } from "@/lib/types";

type ProductPreviewTabsProps = {
  activeTab: PreviewTabKey;
  onTabChange: (value: PreviewTabKey) => void;
  journalValue: string;
  onJournalChange: (value: string) => void;
  moods: MoodDefinition[];
  selectedMood: MoodDefinition;
  onMoodChange: (mood: MoodDefinition) => void;
  tabs: PreviewTab[];
};

export function ProductPreviewTabs({
  activeTab,
  onTabChange,
  journalValue,
  onJournalChange,
  moods,
  selectedMood,
  onMoodChange,
  tabs,
}: ProductPreviewTabsProps) {
  return (
    <section id="app-preview" className="space-y-8">
      <SectionHeading
        eyebrow="App preview"
        title="One product surface, with the right support brought forward"
        description="Instead of showing chat, voice, mood, and journaling as separate equal-weight blocks, the preview now behaves like one connected experience."
      />

      <Tabs
        value={activeTab}
        onValueChange={(value) => onTabChange(value as PreviewTabKey)}
        className="space-y-6"
      >
        <TabsList aria-label="SafeSpace preview sections">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.key} value={tab.key}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_340px]">
          <div>
            <TabsContent value="chat">
              <ChatPreview mood={selectedMood} />
            </TabsContent>
            <TabsContent value="voice">
              <VoicePreview mood={selectedMood} />
            </TabsContent>
            <TabsContent value="mood">
              <SurfaceCard className="p-6 md:p-7">
                <SectionHeading
                  eyebrow="Mood check-in"
                  title="Choose the kind of support you need first"
                  description="This changes the suggested chat opener, journal prompt, and the recommended guides below."
                />
                <div className="mt-6">
                  <MoodSelector
                    moods={moods}
                    selectedMood={selectedMood}
                    onSelect={onMoodChange}
                  />
                </div>
              </SurfaceCard>
            </TabsContent>
            <TabsContent value="journal">
              <JournalCard
                mood={selectedMood}
                journalValue={journalValue}
                onChange={onJournalChange}
              />
            </TabsContent>
          </div>

          <div className="space-y-4">
            <SurfaceCard className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
                Current mood context
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                {selectedMood.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {selectedMood.description}
              </p>
              <div className="mt-5 rounded-3xl bg-white/6 p-4">
                <p className="text-sm font-semibold text-white">Recommended focus</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {selectedMood.nextStep}
                </p>
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-white/10 text-mint">
                  <LockKeyhole className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Privacy note</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    Journal and reflection flows are designed to feel private and low-pressure.
                  </p>
                </div>
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-[#f2cf9b]/16 text-[#ffdca7]">
                  <ShieldCheck className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Safety guidance</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {selectedMood.safetyNote}
                  </p>
                </div>
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-white/10 text-lavender">
                  <Sparkles className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Best entry point</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {activeTab === "voice"
                      ? selectedMood.voiceSuggestion
                      : activeTab === "journal"
                        ? selectedMood.journalPrompt
                        : selectedMood.chatOpener}
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </Tabs>
    </section>
  );
}
