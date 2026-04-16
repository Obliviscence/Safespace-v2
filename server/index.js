import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import OpenAI from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";
const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

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

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

function hasCrisisLanguage(text = "") {
  const normalized = text.toLowerCase();
  return crisisPatterns.some((pattern) => normalized.includes(pattern));
}

function detectMood(text = "") {
  const normalized = text.toLowerCase();
  if (/(panic|anxious|overwhelmed|nervous|racing)/.test(normalized)) return "anxious";
  if (/(sad|empty|down|depressed|hopeless|alone)/.test(normalized)) return "low";
  if (/(angry|frustrated|irritated|mad)/.test(normalized)) return "frustrated";
  if (/(good|better|hopeful|calm|okay|grateful)/.test(normalized)) return "hopeful";
  return "reflective";
}

function fallbackReply(message) {
  const mood = detectMood(message);
  const crisis = hasCrisisLanguage(message);

  if (crisis) {
    return {
      mood: "crisis",
      crisis: true,
      reply:
        "I’m really glad you said that out loud. I’m concerned for your safety, and I want to respond carefully. Please contact emergency services or a crisis hotline right now, or tell a trusted person near you immediately. If you are in the United States or Canada, call or text 988 now. While you do that, move away from anything you could use to hurt yourself and stay with another person if possible.",
    };
  }

  const library = {
    anxious:
      "That sounds overwhelming. Let’s make the next moment smaller. Try placing both feet on the floor and breathe in for four, then out for six, three times. If you want, tell me what part feels loudest right now.",
    low:
      "I’m sorry it feels this heavy. You do not need to solve everything at once. For this moment, would it help to pick one tiny caring action like drinking water, opening a curtain, or writing down one feeling without judging it?",
    frustrated:
      "It makes sense that you feel wound up. Before we problem-solve, let some of that pressure move through your body. Unclench your jaw, drop your shoulders, and tell me what felt most unfair or exhausting.",
    hopeful:
      "I’m glad there is a little light in this moment. We can protect that feeling. What helped you get here today, and is there one small thing you want to repeat later?",
    reflective:
      "I’m here with you. You can say this exactly as it is, even if it feels messy or hard to explain. What has been sitting with you the most today?",
  };

  return {
    mood,
    crisis: false,
    reply: library[mood],
  };
}

app.post("/api/chat", async (req, res) => {
  const { message, history = [], mode = "chat" } = req.body ?? {};

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "A message is required." });
  }

  const crisis = hasCrisisLanguage(message);
  const mood = detectMood(message);

  if (!openai) {
    return res.json(fallbackReply(message));
  }

  try {
    const completion = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text:
                "You are SafeSpace, a warm and emotionally supportive AI companion. Be empathetic, non-judgmental, concise, and calm. Offer grounding techniques, emotional reflection, journaling ideas, breathing prompts, and practical coping steps. Do not diagnose or give medical advice. Always include a gentle disclaimer if the user asks for diagnosis or treatment. If the user shows crisis or self-harm intent, respond with care, encourage immediate contact with emergency services or a crisis line, and suggest reaching a trusted person now.",
            },
          ],
        },
        ...history.slice(-8).map((entry) => ({
          role: entry.role,
          content: [{ type: "input_text", text: entry.text }],
        })),
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Mode: ${mode}. Inferred mood: ${mood}. Crisis detected: ${crisis}. User message: ${message}`,
            },
          ],
        },
      ],
      max_output_tokens: 220,
    });

    const reply =
      completion.output_text?.trim() ||
      fallbackReply(message).reply;

    return res.json({
      reply,
      mood,
      crisis,
    });
  } catch (error) {
    console.error("OpenAI request failed:", error.message);
    return res.json(fallbackReply(message));
  }
});

app.get("/api/health", (_, res) => {
  res.json({
    ok: true,
    ai: Boolean(openai),
  });
});

app.listen(port, () => {
  console.log(`SafeSpace server listening on port ${port}`);
});
