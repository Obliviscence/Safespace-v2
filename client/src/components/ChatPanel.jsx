import { LoaderCircle, Mic, SendHorizontal, Sparkles, Volume2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { detectMood, hasCrisisLanguage, starterMessages } from "../lib/chat";

export function ChatPanel() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("chat");
  const [isListening, setIsListening] = useState(false);
  const [voiceReady, setVoiceReady] = useState(false);
  const recognitionRef = useRef(null);
  const endRef = useRef(null);
  const SpeechRecognition =
    typeof window !== "undefined"
      ? window.SpeechRecognition || window.webkitSpeechRecognition || null
      : null;

  useEffect(() => {
    setVoiceReady(Boolean(SpeechRecognition) && "speechSynthesis" in window);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript ?? "";
      setInput((current) => (current ? `${current} ${transcript}` : transcript));
    };

    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, []);

  const crisisActive = useMemo(
    () => messages.some((message) => message.role === "assistant" && message.crisis),
    [messages],
  );

  async function sendMessage(content = input) {
    const trimmed = content.trim();
    if (!trimmed || isLoading) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
      mood: detectMood(trimmed),
      timestamp: Date.now(),
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: [...messages, userMessage].slice(-8),
          mode,
        }),
      });

      const payload = await response.json();
      const reply = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: payload.reply,
        mood: payload.mood ?? "supportive",
        crisis: payload.crisis ?? hasCrisisLanguage(trimmed),
        timestamp: Date.now(),
      };

      setMessages((current) => [...current, reply]);

      if (mode === "voice" && "speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(reply.text);
        utterance.rate = 0.94;
        utterance.pitch = 1.05;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "I’m having trouble reaching the support service right now. Let’s stay with something simple: can you take one slow breath in for four, then out for six?",
          mood: "calming",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function toggleListening() {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      return;
    }
    recognitionRef.current.start();
  }

  return (
    <section id="support" className="relative">
      <div className="rounded-[2rem] bg-cardTint p-4 shadow-soft ring-1 ring-white/60 backdrop-blur xl:p-6">
        <div className="mb-4 flex flex-col gap-4 rounded-[1.8rem] bg-white/70 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ink/60">
              Therapy Buddy
            </p>
            <h3 className="font-display text-2xl font-semibold text-slate-800">
              Safe conversations, grounding tools, and gentle check-ins
            </h3>
          </div>

          <div className="inline-flex rounded-full bg-white/80 p-1 shadow-sm">
            {["chat", "voice"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setMode(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  mode === item
                    ? "bg-bubbleUser text-slate-800 shadow-sm"
                    : "text-ink/70 hover:text-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.35fr,0.8fr]">
          <div className="rounded-[1.8rem] bg-white/75 p-4 ring-1 ring-white/60">
            <div className="h-[420px] space-y-4 overflow-y-auto pr-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[85%] rounded-[1.6rem] px-4 py-3 text-sm leading-7 shadow-sm ${
                    message.role === "user"
                      ? "ml-auto bg-bubbleUser text-slate-800"
                      : "bg-bubbleAi text-slate-800"
                  }`}
                >
                  {message.text}
                </div>
              ))}

              {isLoading && (
                <div className="max-w-[11rem] rounded-[1.6rem] bg-bubbleAi px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-ink/50 animate-blink-dots" />
                    <span
                      className="size-2 rounded-full bg-ink/50 animate-blink-dots"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <span
                      className="size-2 rounded-full bg-ink/50 animate-blink-dots"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <label className="sr-only" htmlFor="message">
                Share what is on your mind
              </label>
              <textarea
                id="message"
                rows="3"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Share what feels heavy, confusing, or hopeful right now..."
                className="w-full rounded-[1.4rem] border border-white/70 bg-white/90 px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition placeholder:text-ink/45 focus:border-sky focus:shadow-soft"
              />

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 text-sm text-ink/75">
                  <Sparkles className="size-4 text-ink/60" />
                  Non-judgmental support with crisis-aware responses
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={toggleListening}
                    disabled={!voiceReady}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition ${
                      isListening
                        ? "animate-pulse-glow bg-bubbleUser text-slate-800 shadow-float"
                        : "bg-white text-ink shadow-sm hover:bg-white/90"
                    } disabled:cursor-not-allowed disabled:opacity-50`}
                  >
                    <Mic className="size-4" />
                    {isListening ? "Listening..." : "Speak"}
                  </button>

                  <button
                    type="button"
                    onClick={() => sendMessage()}
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60"
                  >
                    {isLoading ? (
                      <LoaderCircle className="size-4 animate-spin" />
                    ) : (
                      <SendHorizontal className="size-4" />
                    )}
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-[1.8rem] bg-white/75 p-5 ring-1 ring-white/60">
              <div className="flex items-center gap-3">
                <div
                  className={`grid size-12 place-items-center rounded-2xl bg-bubbleUser ${
                    isListening ? "animate-pulse-glow" : ""
                  }`}
                >
                  <Volume2 className="size-5 text-slate-700" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-semibold text-slate-800">
                    Voice Assistant
                  </h4>
                  <p className="text-sm leading-6 text-ink/75">
                    Use your voice when typing feels like too much.
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.4rem] bg-pageWash p-4">
                <p className="text-sm font-semibold text-slate-700">How it works</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/80">
                  <li>Speak through the mic button to turn speech into text.</li>
                  <li>Switch to voice mode for calm text-to-speech replies.</li>
                  <li>Use headphones for a more private check-in.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[1.8rem] bg-white/75 p-5 ring-1 ring-white/60">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
                Safety
              </p>
              <p className="mt-3 text-sm leading-7 text-ink/80">
                This is not a replacement for professional therapy. If you may act
                on thoughts of self-harm or suicide, contact emergency services or a
                crisis hotline now.
              </p>
              {crisisActive && (
                <div className="mt-4 rounded-[1.3rem] bg-peach/60 p-4 text-sm font-semibold text-slate-800">
                  Crisis-sensitive language was detected. Immediate human support is
                  strongly recommended.
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
