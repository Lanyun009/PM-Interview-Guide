// PracticeTimer — inline 20-minute countdown for PM practice sessions
// Design: PM War Room — dark navy, indigo accent, circular SVG progress ring
// Appears inside expanded question cards; shows self-rating prompt on completion

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Star } from "lucide-react";
import { usePracticeTimer } from "@/hooks/usePracticeTimer";

const RATINGS = [
  { score: 1, label: "Missed it", color: "#ef4444" },
  { score: 2, label: "Partial", color: "#f97316" },
  { score: 3, label: "Decent", color: "#eab308" },
  { score: 4, label: "Strong", color: "#22c55e" },
  { score: 5, label: "Nailed it", color: "#6366f1" },
];

// SVG circular progress ring
function ProgressRing({
  progress,
  state,
}: {
  progress: number;
  state: string;
}) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  const dash = circ * progress;

  // Color transitions: indigo → amber (last 5 min) → red (last 2 min)
  const strokeColor =
    progress < 0.1
      ? "#ef4444"
      : progress < 0.25
      ? "#f97316"
      : "#6366f1";

  return (
    <svg width="72" height="72" className="rotate-[-90deg]">
      {/* Track */}
      <circle
        cx="36"
        cy="36"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="4"
      />
      {/* Progress */}
      <circle
        cx="36"
        cy="36"
        r={r}
        fill="none"
        stroke={strokeColor}
        strokeWidth="4"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: "stroke-dasharray 0.5s linear, stroke 1s ease" }}
      />
    </svg>
  );
}

interface PracticeTimerProps {
  questionType?: string;
  typeColor?: string;
}

export default function PracticeTimer({ questionType, typeColor }: PracticeTimerProps) {
  const { secondsLeft, state, progress, formatted, start, pause, resume, reset } =
    usePracticeTimer();
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRate = (score: number) => {
    setRating(score);
    setSubmitted(true);
  };

  const handleRestart = () => {
    reset();
    setRating(null);
    setSubmitted(false);
  };

  // Urgency pulse when < 2 minutes left and running
  const isUrgent = secondsLeft < 120 && state === "running";

  return (
    <div className="mt-4 border border-white/10 rounded-lg bg-white/[0.03] overflow-hidden">
      {/* Timer header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/8 bg-white/[0.02]">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          Practice Timer
        </span>
        {questionType && (
          <span
            className="text-[9px] font-mono px-1.5 py-0.5 rounded"
            style={{
              color: typeColor,
              background: `${typeColor}18`,
              border: `1px solid ${typeColor}30`,
            }}
          >
            {questionType}
          </span>
        )}
        <span className="ml-auto text-[9px] font-mono text-muted-foreground/50">20 MIN</span>
      </div>

      <AnimatePresence mode="wait">
        {/* Done state — self-rating prompt */}
        {state === "done" && !submitted ? (
          <motion.div
            key="rating"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-4 py-5"
          >
            <p className="text-sm font-semibold text-foreground mb-1 text-center">
              Time's up! How did you do?
            </p>
            <p className="text-xs text-muted-foreground text-center mb-4">
              Rate your answer quality honestly
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {RATINGS.map((r) => (
                <button
                  key={r.score}
                  onClick={() => handleRate(r.score)}
                  className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg border transition-all hover:scale-105 active:scale-95"
                  style={{
                    borderColor: `${r.color}40`,
                    background: `${r.color}10`,
                    color: r.color,
                  }}
                >
                  <Star size={14} fill={r.color} />
                  <span className="text-[10px] font-mono">{r.score}</span>
                  <span className="text-[9px] text-muted-foreground">{r.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : submitted ? (
          /* Submitted state */
          <motion.div
            key="submitted"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-5 text-center"
          >
            <div
              className="text-2xl font-bold mb-1"
              style={{ color: RATINGS[(rating ?? 1) - 1].color }}
            >
              {RATINGS[(rating ?? 1) - 1].label}
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              You rated yourself {rating}/5 — keep practicing!
            </p>
            <button
              onClick={handleRestart}
              className="flex items-center gap-1.5 mx-auto text-xs font-mono text-muted-foreground hover:text-foreground transition-colors border border-white/10 px-3 py-1.5 rounded"
            >
              <RotateCcw size={11} />
              Try again
            </button>
          </motion.div>
        ) : (
          /* Running / idle / paused state */
          <motion.div
            key="timer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 px-4 py-4"
          >
            {/* Circular ring */}
            <div className="relative flex-shrink-0">
              <motion.div
                animate={isUrgent ? { scale: [1, 1.04, 1] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                <ProgressRing progress={progress} state={state} />
              </motion.div>
              {/* Time label inside ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-sm font-mono font-bold tabular-nums"
                  style={{
                    color:
                      secondsLeft < 120
                        ? "#ef4444"
                        : secondsLeft < 300
                        ? "#f97316"
                        : "var(--foreground)",
                  }}
                >
                  {formatted}
                </span>
              </div>
            </div>

            {/* Status + controls */}
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground mb-2">
                {state === "idle" && "Start the timer when you're ready to answer."}
                {state === "running" && secondsLeft >= 300 && "Answer out loud — structure first, then detail."}
                {state === "running" && secondsLeft < 300 && secondsLeft >= 120 && "⚡ 5 minutes left — wrap up your solution."}
                {state === "running" && secondsLeft < 120 && "🔴 Final 2 minutes — summarize and land the answer."}
                {state === "paused" && "Paused. Resume when ready."}
              </p>

              <div className="flex items-center gap-2">
                {state === "idle" && (
                  <button
                    onClick={start}
                    className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <Play size={11} fill="currentColor" />
                    Start Timer
                  </button>
                )}
                {state === "running" && (
                  <button
                    onClick={pause}
                    className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border border-white/15 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Pause size={11} />
                    Pause
                  </button>
                )}
                {state === "paused" && (
                  <button
                    onClick={resume}
                    className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <Play size={11} fill="currentColor" />
                    Resume
                  </button>
                )}
                {state !== "idle" && (
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1 text-xs font-mono text-muted-foreground/60 hover:text-muted-foreground transition-colors"
                  >
                    <RotateCcw size={10} />
                    Reset
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
