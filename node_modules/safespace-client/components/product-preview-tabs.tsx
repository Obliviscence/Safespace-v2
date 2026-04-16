"use client";

import { LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

const supportCards = [
  {
    key: "privacy",
    title: "Privacy note",
    icon: LockKeyhole,
    iconClassName: "bg-[linear-gradient(135deg,#dff8ed,#ebfff6)] text-[#67a88d]",
  },
  {
    key: "safety",
    title: "Safety guidance",
    icon: ShieldCheck,
    iconClassName: "bg-[#fff1de] text-[#b67831]",
  },
  {
    key: "entry",
    title: "Best entry point",
    icon: Sparkles,
    iconClassName: "bg-[linear-gradient(135deg,#dff0ff,#ebe0ff)] text-[#6f75bc]",
  },
] as const;

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
  const reduceMotion = useReducedMotion();

  function renderPrimaryPreview() {
    switch (activeTab) {
      case "voice":
        return <VoicePreview mood={selectedMood} />;
      case "mood":
        return (
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
        );
      case "journal":
        return (
          <JournalCard
            mood={selectedMood}
            journalValue={journalValue}
            onChange={onJournalChange}
          />
        );
      case "chat":
      default:
        return <ChatPreview mood={selectedMood} />;
    }
  }

  const entryPointCopy =
    activeTab === "voice"
      ? selectedMood.voiceSuggestion
      : activeTab === "journal"
        ? selectedMood.journalPrompt
        : selectedMood.chatOpener;

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
          <div className="min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                exit={reduceMotion ? {} : { opacity: 0, y: -10 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <TabsContent value={activeTab} forceMount className="mt-0">
                  {renderPrimaryPreview()}
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="space-y-4"
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            <SurfaceCard className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
                Current mood context
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                {selectedMood.label}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {selectedMood.description}
              </p>
              <div className="mt-5 rounded-3xl bg-[rgba(255,255,255,0.68)] p-4">
                <p className="text-sm font-semibold text-foreground">Recommended focus</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {selectedMood.nextStep}
                </p>
              </div>
            </SurfaceCard>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {supportCards.map((card, index) => {
            const Icon = card.icon;
            const text =
              card.key === "privacy"
                ? "Journal and reflection flows are designed to feel private and low-pressure."
                : card.key === "safety"
                  ? selectedMood.safetyNote
                  : entryPointCopy;

            return (
              <motion.div
                key={`${card.key}-${activeTab}-${selectedMood.key}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.28, delay: index * 0.06, ease: "easeOut" }}
              >
                <SurfaceCard className="h-full p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid size-10 place-items-center rounded-2xl ${card.iconClassName}`}
                    >
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">
                        {text}
                      </p>
                    </div>
                  </div>
                </SurfaceCard>
              </motion.div>
            );
          })}
        </div>
      </Tabs>
    </section>
  );
}
