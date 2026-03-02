// usePracticeTimer — 20-minute countdown hook for PM practice sessions
// Design: PM War Room — dark navy, indigo accent

import { useState, useEffect, useRef, useCallback } from "react";

export type TimerState = "idle" | "running" | "paused" | "done";

export interface PracticeTimerReturn {
  secondsLeft: number;
  state: TimerState;
  progress: number; // 0–1, decreasing as time runs out
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  formatted: string; // "MM:SS"
}

const DURATION = 20 * 60; // 20 minutes in seconds

export function usePracticeTimer(): PracticeTimerReturn {
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const [state, setState] = useState<TimerState>("idle");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    setSecondsLeft((prev) => {
      if (prev <= 1) {
        clearTimer();
        setState("done");
        return 0;
      }
      return prev - 1;
    });
  }, [clearTimer]);

  const start = useCallback(() => {
    if (state === "idle") {
      setState("running");
      intervalRef.current = setInterval(tick, 1000);
    }
  }, [state, tick]);

  const pause = useCallback(() => {
    if (state === "running") {
      clearTimer();
      setState("paused");
    }
  }, [state, clearTimer]);

  const resume = useCallback(() => {
    if (state === "paused") {
      setState("running");
      intervalRef.current = setInterval(tick, 1000);
    }
  }, [state, tick]);

  const reset = useCallback(() => {
    clearTimer();
    setSecondsLeft(DURATION);
    setState("idle");
  }, [clearTimer]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const progress = secondsLeft / DURATION;

  return { secondsLeft, state, progress, start, pause, resume, reset, formatted };
}
