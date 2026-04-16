const crisisPatterns = [
  "kill myself",
  "end my life",
  "suicide",
  "self harm",
  "hurt myself",
  "don't want to live",
  "overdose",
  "cut myself",
];

export function detectMood(message) {
  const text = message.toLowerCase();
  if (/(panic|anxious|overwhelmed|nervous|racing)/.test(text)) return "anxious";
  if (/(sad|empty|down|depressed|hopeless|tired)/.test(text)) return "low";
  if (/(angry|frustrated|irritated|mad)/.test(text)) return "frustrated";
  if (/(good|better|hopeful|calm|okay|grateful)/.test(text)) return "hopeful";
  return "reflective";
}

export function hasCrisisLanguage(message) {
  const text = message.toLowerCase();
  return crisisPatterns.some((pattern) => text.includes(pattern));
}

export function starterMessages() {
  return [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      text: "Hi, I’m your SafeSpace buddy. You can talk to me about what feels heavy, messy, or confusing right now. We can go slowly.",
      mood: "welcome",
      timestamp: Date.now(),
    },
  ];
}
