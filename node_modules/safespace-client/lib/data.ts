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
  { key: "chat", label: "Chat", description: "Mood-aware conversation preview" },
  { key: "voice", label: "Voice", description: "Lower-friction voice check-in" },
  { key: "mood", label: "Mood", description: "Signal what kind of support you need" },
  { key: "journal", label: "Journal", description: "Reflect without pressure" },
];

export const resources: Resource[] = [
  {
    id: "grounding",
    category: "Grounding",
    title: "60-second grounding reset",
    readTime: "1 min read",
    description: "A short sequence for feet, breath, and visual anchors when everything feels urgent.",
    intro: "This reset is useful when your body feels alarmed and your mind is moving too fast. Keep it small and practical.",
    steps: [
      "Press both feet into the floor and notice where your body is supported.",
      "Breathe in for four and out for six three times, without forcing a deep breath.",
      "Name five things you can see and one thing you can touch right now.",
      "Ask yourself: what is the next safe, simple action in the next two minutes?",
    ],
    whenToUse: "Best when you feel overwhelmed, panicky, or close to shutting down.",
  },
  {
    id: "urgent-support",
    category: "Safety",
    title: "What to do if you need urgent help",
    readTime: "2 min read",
    description: "A clear, practical checklist for contacting a crisis line, emergency support, or someone you trust.",
    intro: "If your safety may change quickly, move from reflection to action. You do not need to decide alone.",
    steps: [
      "Call emergency support or a crisis line right away if you may act on thoughts of self-harm or suicide.",
      "Tell one trusted person clearly: I need immediate support and I should not be alone right now.",
      "Move away from anything you could use to hurt yourself, if possible.",
      "Stay with another person or in a staffed place until the risk reduces.",
    ],
    whenToUse: "Use this guide when the situation feels urgent, unsafe, or hard to manage alone.",
  },
  {
    id: "body-reset",
    category: "Stress",
    title: "Body reset for overwhelm",
    readTime: "2 min read",
    description: "Jaw, shoulders, breath, and posture cues that reduce physical stress signals quickly.",
    intro: "When stress lives in your body, small physical adjustments can lower the intensity before you try to think clearly.",
    steps: [
      "Unclench your jaw and let your tongue drop from the roof of your mouth.",
      "Lift your shoulders once, then let them fall naturally.",
      "Lengthen your exhale so it is slightly longer than your inhale.",
      "Sit back or lean against a surface so your body gets a clear support signal.",
    ],
    whenToUse: "Helpful when your chest feels tight, your jaw is tense, or you feel physically wound up.",
  },
  {
    id: "low-effort",
    category: "Low mood",
    title: "Low-effort support tools",
    readTime: "3 min read",
    description: "Five tiny actions that are realistic when motivation is low and energy is limited.",
    intro: "On low-energy days, reduce the size of the task until it feels possible. Tiny care still counts.",
    steps: [
      "Drink a glass of water or take a few slow sips.",
      "Open a curtain or step near a window for daylight.",
      "Text one safe person a short message, even if it is only: rough day today.",
      "Pick one task that takes under two minutes and stop after that if needed.",
    ],
    whenToUse: "Use this when everything feels heavy and even basic tasks feel like too much.",
  },
  {
    id: "slow-routine",
    category: "Routine",
    title: "A slower routine for heavy days",
    readTime: "3 min read",
    description: "How to shrink your day into a calmer, more survivable shape without guilt.",
    intro: "A slower routine is not failure. It is a way of lowering pressure so you can keep functioning with more care.",
    steps: [
      "Choose only one must-do task for the next few hours.",
      "Group meals, water, and rest into the plan before optional work.",
      "Lower stimulation where you can: fewer tabs, fewer notifications, less noise.",
      "Check in again later instead of expecting the whole day to feel better immediately.",
    ],
    whenToUse: "Helpful on emotionally heavy days when your normal routine feels too demanding.",
  },
  {
    id: "gentle-reflection",
    category: "Reflection",
    title: "Questions for sorting mixed feelings",
    readTime: "2 min read",
    description: "A short set of prompts to separate what is loud, what is underneath, and what you need.",
    intro: "Mixed feelings often get clearer when you name layers instead of trying to solve all of them at once.",
    steps: [
      "What feels loudest on the surface right now?",
      "What might be underneath that feeling?",
      "What do I need more of in the next hour: rest, support, space, clarity, or comfort?",
      "What is one small next step that matches that need?",
    ],
    whenToUse: "Use this when you feel tangled, conflicted, or emotionally unclear.",
  },
  {
    id: "anxiety-map",
    category: "Anxiety",
    title: "Map the worry, reduce the fog",
    readTime: "4 min read",
    description: "A simple way to separate imagined threat, real pressure, and the next controllable action.",
    intro: "Anxiety gets louder when everything feels equally urgent. Mapping the worry helps reduce that blur.",
    steps: [
      "Write down the exact worry in one sentence.",
      "Ask: is this happening now, likely soon, or only possible?",
      "Separate what you can act on today from what is not controllable right now.",
      "Choose one action or one boundary, then stop planning for a moment.",
    ],
    whenToUse: "Helpful when your thoughts are racing or the same worry keeps looping.",
  },
  {
    id: "voice-reset",
    category: "Voice",
    title: "When voice check-ins help most",
    readTime: "2 min read",
    description: "Good use cases for speaking instead of typing and how to keep voice sessions private.",
    intro: "Speaking can reduce friction when your thoughts are moving faster than your hands or when writing feels too effortful.",
    steps: [
      "Use voice when typing feels slow, tiring, or emotionally flat.",
      "Keep your first check-in short and concrete rather than explaining everything.",
      "Use headphones or a private place if you want more emotional privacy.",
      "Switch back to text if you want to keep a written record of what helped.",
    ],
    whenToUse: "Best when you need a lower-friction way to start expressing what is going on.",
  },
  {
    id: "maintenance",
    category: "Maintenance",
    title: "Keep steady days from slipping away",
    readTime: "3 min read",
    description: "A maintenance approach for sleep, boundaries, and routines that preserve emotional steadiness.",
    intro: "You do not have to wait for a bad day to use support well. Maintenance helps protect the steadier moments too.",
    steps: [
      "Notice one habit that helped this week and keep it simple enough to repeat.",
      "Protect one boundary that reduces emotional drain.",
      "Plan one supportive action for tomorrow while your energy is steadier.",
      "Avoid turning a good day into pressure to optimize everything.",
    ],
    whenToUse: "Useful when you feel okay and want to support that steadiness without overdoing it.",
  },
  {
    id: "gratitude-check",
    category: "Resilience",
    title: "A grounded gratitude check",
    readTime: "2 min read",
    description: "Reflect on what helped without forcing positivity or pretending everything is solved.",
    intro: "Gratitude works best when it stays specific and honest, not performative.",
    steps: [
      "Name one thing that eased your day a little.",
      "Notice one person, place, or habit that helped.",
      "Write one sentence about why it mattered.",
      "Ask how you might make space for that support again.",
    ],
    whenToUse: "Best on steady or brighter days when you want to reinforce what helps.",
  },
  {
    id: "resilience",
    category: "Growth",
    title: "Build resilience without overcommitting",
    readTime: "4 min read",
    description: "Use brighter days to reinforce supportive habits before stress builds again.",
    intro: "Resilience is built through repeatable care, not pressure to become perfectly consistent.",
    steps: [
      "Choose one supportive habit small enough to maintain on ordinary days.",
      "Reduce friction by deciding where and when it happens.",
      "Keep the goal realistic so missing once does not collapse the routine.",
      "Use bright days for preparation, not for making impossible promises to yourself.",
    ],
    whenToUse: "Use this when you have some energy and want to strengthen your support system for later.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "It doesn't try to fix me in one message. It helps me find the next small thing I can actually do.",
    author: "Maya",
    detail: "Uses short chat check-ins after work",
  },
  {
    quote: "The voice option feels more human on hard days. I can say what I need before I have the energy to write it well.",
    author: "Jon",
    detail: "Uses voice during anxious moments",
  },
  {
    quote: "I like that the safety boundaries are clear. It feels supportive without pretending it can replace real help.",
    author: "Sana",
    detail: "Uses journaling and resource prompts",
  },
];

export const emergencyContacts: EmergencyContact[] = [
  {
    label: "India emergency response",
    detail: "Dial 112 for immediate emergency help across India. It connects emergency support services including police, fire, and medical response.",
  },
  {
    label: "Tele-MANAS mental health support",
    detail: "For mental health support in India, call Tele-MANAS at 14416 or 1-800-891-4416 for free, 24/7 support.",
  },
  {
    label: "Trusted support",
    detail: "Reach out to a trusted friend, family member, therapist, caregiver, or nearby hospital and tell them clearly that you need immediate support.",
  },
];

export const trustPoints = [
  { label: "Private journaling", icon: BookHeart },
  { label: "Grounded support", icon: MessageCircleHeart },
  { label: "Crisis-aware safeguards", icon: ShieldCheck },
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
