import {
  AudioLines,
  BookHeart,
  MessageCircleHeart,
  ShieldCheck,
} from "lucide-react";
import type {
  BoundaryItem,
  EmergencyContact,
  Feature,
  GuidedStep,
  MoodDefinition,
  PreviewTab,
  Resource,
  Testimonial,
} from "@/lib/types";

export const moods: MoodDefinition[] = [
  {
    key: "struggling",
    label: "Struggling",
    badge: "Need support now",
    ariaLabel: "Struggling. A short grounding step and urgent support options appear.",
    description: "Everything feels loud, tight, or too much right now.",
    supportLabel: "Grounding + urgent support",
    chatOpener: "I'm not doing well and I need something simple right now.",
    assistantReply:
      "Let's keep this very small. Put both feet on the floor and breathe out longer than you breathe in. If you're at risk of hurting yourself, contact emergency help or a crisis line now.",
    journalPrompt:
      "What feels most immediate right now, and what would make the next 10 minutes safer or softer?",
    nextStep:
      "Start with one grounding exercise and keep urgent support options visible.",
    safetyNote:
      "If you may act on thoughts of self-harm or suicide, reach emergency services or a crisis line now.",
    recommendedResourceIds: ["grounding", "urgent-support", "body-reset"],
    voiceSuggestion:
      "Use voice if typing feels too hard. Keep the reply short, slow, and practical.",
  },
  {
    key: "low",
    label: "Low",
    badge: "Low-energy support",
    ariaLabel: "Low. Suggestions focus on low-effort coping tools and a gentle journal prompt.",
    description: "Heavy, flat, or drained. You want something gentle, not demanding.",
    supportLabel: "Low-effort support",
    chatOpener: "I'm low today and don't have much energy for anything big.",
    assistantReply:
      "You don't need to fix the whole day. Let's look for one low-effort step: water, daylight, a message to someone safe, or a few honest lines in your journal.",
    journalPrompt:
      "What feels hardest today, and what is one tiny thing that would feel manageable?",
    nextStep: "Pick one low-effort action and save the rest for later.",
    safetyNote:
      "If low mood turns into thoughts of self-harm, move to the urgent help section right away.",
    recommendedResourceIds: ["low-effort", "slow-routine", "gentle-reflection"],
    voiceSuggestion:
      "Voice check-ins can help when concentration is low and typing feels like work.",
  },
  {
    key: "mixed",
    label: "Mixed",
    badge: "Reflective support",
    ariaLabel: "Mixed. Suggestions focus on sorting feelings and choosing either chat or voice.",
    description: "There is more than one feeling here, and none of them are fully clear yet.",
    supportLabel: "Sort through it",
    chatOpener: "I'm feeling a few things at once and I don't know what to start with.",
    assistantReply:
      "That's okay. We can sort one layer at a time. Try naming what feels loudest, what feels underneath it, and what you need more of today.",
    journalPrompt:
      "What feels loudest? What might be underneath it? What do you need more of right now?",
    nextStep: "Choose chat or voice to untangle one part at a time.",
    safetyNote:
      "If the mixed feeling includes fear for your safety, skip ahead to urgent support.",
    recommendedResourceIds: ["anxiety-map", "gentle-reflection", "voice-reset"],
    voiceSuggestion:
      "Voice can be useful here because speaking often helps when feelings feel tangled.",
  },
  {
    key: "okay",
    label: "Okay",
    badge: "Steady support",
    ariaLabel: "Okay. Suggestions focus on maintenance routines and reflective journaling.",
    description: "Stable enough to check in, reflect, and protect what is working.",
    supportLabel: "Maintenance routines",
    chatOpener: "I'm doing okay, but I want to stay grounded and not lose momentum.",
    assistantReply:
      "This is a good time for light maintenance. Let's notice what's helping, what you want to keep, and one small action that supports tomorrow too.",
    journalPrompt:
      "What helped today, what drained you a little, and what would support tomorrow?",
    nextStep: "Capture what helped and keep one small routine going.",
    safetyNote:
      "Even steady days deserve boundaries, rest, and support before things build up.",
    recommendedResourceIds: ["maintenance", "gratitude-check", "voice-reset"],
    voiceSuggestion:
      "Voice can be a quick check-in when you want a calm summary without a long session.",
  },
  {
    key: "bright",
    label: "Bright",
    badge: "Resilience building",
    ariaLabel: "Bright. Suggestions focus on resilience, gratitude, and support for others with boundaries.",
    description: "There's some light here. This is a moment to reinforce resilience, not overextend.",
    supportLabel: "Build resilience",
    chatOpener: "I'm feeling brighter today and want to build on it in a grounded way.",
    assistantReply:
      "That's worth noticing. Let's hold onto what helped, name one thing you're grateful for, and choose one habit that protects this feeling without pressure.",
    journalPrompt:
      "What contributed to this brighter moment, and how could you carry a piece of it forward?",
    nextStep: "Build on what's working and set a realistic rhythm for later.",
    safetyNote:
      "Bright days can still include boundaries. Support should not depend on waiting until things feel bad.",
    recommendedResourceIds: ["gratitude-check", "resilience", "maintenance"],
    voiceSuggestion:
      "Voice mode works well for quick reflection when you want to capture momentum without breaking it.",
  },
];

export const features: Feature[] = [
  {
    eyebrow: "Chat support",
    title: "Talk through what feels heavy without having to perform calmness first.",
    description:
      "Get grounded responses, simple coping prompts, and crisis-aware guardrails that keep the conversation humane and concrete.",
    icon: MessageCircleHeart,
  },
  {
    eyebrow: "Voice check-in",
    title: "Switch to voice when typing feels like one task too many.",
    description:
      "Use a softer, lower-friction check-in flow with mic guidance, spoken replies, and simple support for overwhelmed moments.",
    icon: AudioLines,
  },
  {
    eyebrow: "Mood + journal reflection",
    title: "Turn a feeling into the next small step instead of another vague dashboard.",
    description:
      "Mood selection changes the suggested chat opener, journal prompt, and recommended resources so the app feels connected.",
    icon: BookHeart,
  },
];

export const guidedSteps: GuidedStep[] = [
  {
    step: "01",
    title: "Check in",
    description:
      "Choose the mood that fits best, even if it is imperfect. The app adjusts the tone and suggestions from there.",
  },
  {
    step: "02",
    title: "Talk or write",
    description:
      "Use chat, voice, or a short journal entry depending on what feels easiest in the moment.",
  },
  {
    step: "03",
    title: "Get the next gentle step",
    description:
      "Receive one grounded suggestion, a reflective prompt, or a relevant guide instead of a wall of advice.",
  },
];

export const previewTabs: PreviewTab[] = [
  {
    key: "chat",
    label: "Chat",
    description: "Mood-aware conversation preview",
  },
  {
    key: "voice",
    label: "Voice",
    description: "Lower-friction voice check-in",
  },
  {
    key: "mood",
    label: "Mood",
    description: "Signal what kind of support you need",
  },
  {
    key: "journal",
    label: "Journal",
    description: "Reflect without pressure",
  },
];

export const resources: Resource[] = [
  {
    id: "grounding",
    category: "Grounding",
    title: "60-second grounding reset",
    readTime: "1 min read",
    description:
      "A short sequence for feet, breath, and visual anchors when everything feels urgent.",
  },
  {
    id: "urgent-support",
    category: "Safety",
    title: "What to do if you need urgent help",
    readTime: "2 min read",
    description:
      "A clear, practical checklist for contacting a crisis line, emergency support, or someone you trust.",
  },
  {
    id: "body-reset",
    category: "Stress",
    title: "Body reset for overwhelm",
    readTime: "2 min read",
    description:
      "Jaw, shoulders, breath, and posture cues that reduce physical stress signals quickly.",
  },
  {
    id: "low-effort",
    category: "Low mood",
    title: "Low-effort support tools",
    readTime: "3 min read",
    description:
      "Five tiny actions that are realistic when motivation is low and energy is limited.",
  },
  {
    id: "slow-routine",
    category: "Routine",
    title: "A slower routine for heavy days",
    readTime: "3 min read",
    description:
      "How to shrink your day into a calmer, more survivable shape without guilt.",
  },
  {
    id: "gentle-reflection",
    category: "Reflection",
    title: "Questions for sorting mixed feelings",
    readTime: "2 min read",
    description:
      "A short set of prompts to separate what is loud, what is underneath, and what you need.",
  },
  {
    id: "anxiety-map",
    category: "Anxiety",
    title: "Map the worry, reduce the fog",
    readTime: "4 min read",
    description:
      "A simple way to separate imagined threat, real pressure, and the next controllable action.",
  },
  {
    id: "voice-reset",
    category: "Voice",
    title: "When voice check-ins help most",
    readTime: "2 min read",
    description:
      "Good use cases for speaking instead of typing and how to keep voice sessions private.",
  },
  {
    id: "maintenance",
    category: "Maintenance",
    title: "Keep steady days from slipping away",
    readTime: "3 min read",
    description:
      "A maintenance approach for sleep, boundaries, and routines that preserve emotional steadiness.",
  },
  {
    id: "gratitude-check",
    category: "Resilience",
    title: "A grounded gratitude check",
    readTime: "2 min read",
    description:
      "Reflect on what helped without forcing positivity or pretending everything is solved.",
  },
  {
    id: "resilience",
    category: "Growth",
    title: "Build resilience without overcommitting",
    readTime: "4 min read",
    description:
      "Use brighter days to reinforce supportive habits before stress builds again.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "It doesn't try to fix me in one message. It helps me find the next small thing I can actually do.",
    author: "Maya",
    detail: "Uses short chat check-ins after work",
  },
  {
    quote:
      "The voice option feels more human on hard days. I can say what I need before I have the energy to write it well.",
    author: "Jon",
    detail: "Uses voice during anxious moments",
  },
  {
    quote:
      "I like that the safety boundaries are clear. It feels supportive without pretending it can replace real help.",
    author: "Sana",
    detail: "Uses journaling and resource prompts",
  },
];

export const emergencyContacts: EmergencyContact[] = [
  {
    label: "United States and Canada",
    detail: "Call or text 988 for immediate crisis support.",
  },
  {
    label: "Emergency services",
    detail: "If you may act on thoughts of self-harm or suicide, call your local emergency number now.",
  },
  {
    label: "Trusted support",
    detail: "Reach out to a friend, family member, therapist, or local crisis center and tell them you need immediate support.",
  },
];

export const trustPoints = [
  {
    label: "Private journaling",
    icon: BookHeart,
  },
  {
    label: "Grounded support",
    icon: MessageCircleHeart,
  },
  {
    label: "Crisis-aware safeguards",
    icon: ShieldCheck,
  },
];

export const boundaryItems: BoundaryItem[] = [
  {
    title: "Not therapy or diagnosis",
    text: "SafeSpace offers emotional support, reflection prompts, and crisis-aware guidance. It does not diagnose, treat, or replace licensed care.",
  },
  {
    title: "Privacy-first by design",
    text: "Journaling and check-in flows are designed to feel private and respectful. Be thoughtful about what you share on any device you do not control.",
  },
  {
    title: "Escalate when safety changes",
    text: "If a conversation shifts into risk of self-harm or immediate danger, use crisis support or emergency services instead of staying in the app.",
  },
];
