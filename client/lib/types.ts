import type { LucideIcon } from "lucide-react";

export type MoodKey = "struggling" | "low" | "mixed" | "okay" | "bright";

export type PreviewTabKey = "chat" | "voice" | "mood" | "journal";

export type MoodDefinition = {
  key: MoodKey;
  label: string;
  badge: string;
  ariaLabel: string;
  description: string;
  supportLabel: string;
  chatOpener: string;
  assistantReply: string;
  journalPrompt: string;
  nextStep: string;
  safetyNote: string;
  recommendedResourceIds: string[];
  voiceSuggestion: string;
};

export type Feature = {
  title: string;
  description: string;
  eyebrow: string;
  icon: LucideIcon;
};

export type GuidedStep = {
  step: string;
  title: string;
  description: string;
};

export type Resource = {
  id: string;
  category: string;
  title: string;
  readTime: string;
  description: string;
  intro: string;
  steps: string[];
  whenToUse: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

export type EmergencyContact = {
  label: string;
  detail: string;
};

export type BoundaryItem = {
  title: string;
  text: string;
};

export type PreviewTab = {
  key: PreviewTabKey;
  label: string;
  description: string;
};
