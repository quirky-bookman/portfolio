"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

const BOOT_MESSAGES = ["initializing system kernel...", "loading device drivers...", "mounting file systems...", "starting network services...", "loading system libraries...", "initializing graphics driver...", "setting up audio subsystem...", "loading user profile...", "configuring display settings...", "starting system services...", "finalizing startup..."];

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export function LoadingScreen({ onComplete, duration = 5000 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [message, setMessage] = useState(getMessageForProgress(0));

  useEffect(() => {
    if (isComplete) return;

    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        setIsComplete(true);
        onComplete?.();
      }
    }, 100);

    return () => clearInterval(progressInterval);
  }, [duration, onComplete]);

  useEffect(() => {
    const newMsg = getMessageForProgress(progress);
    setMessage((prev) => (prev === newMsg ? prev : newMsg));
  }, [progress]);

  return (
    <div className={`fixed inset-0 bg-black z-50 transition-opacity duration-1000 flex items-center justify-center ${isComplete ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          15% {
            opacity: 1;
            transform: translateY(0);
          }
          85% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(8px);
          }
        }

        .animate-fadeInOut {
          animation: fadeInOut 2s ease-in-out forwards;
        }

        @keyframes pulse-smooth {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-smooth {
          animation: pulse-smooth 2s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center gap-12 px-4 w-full">
        <div className="text-center space-y-3">
          <h1 className="text-7xl sm:text-8xl font-black tracking-widest text-white drop-shadow-2xl animate-pulse-smooth" style={{ fontFamily: '"Space Grotesk", sans-serif', letterSpacing: "0.1em" }}>
            SerhiiOS
          </h1>
          <div className="h-1 w-32 mx-auto from-transparent via-white to-transparent opacity-50" />
          <p className="text-white/40 text-xs tracking-widest font-mono">⚙️ SYSTEM INITIALIZATION</p>
        </div>

        <div className="w-full max-w-xs space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-white">
              <div key={message} className="animate-fadeInOut text-left font-mono text-xs">
                {message}
              </div>
              <p className="text-xs text-right font-mono">{Math.round(progress).toString().padStart(3, " ")}%</p>
            </div>
            <Progress value={progress} />
          </div>
        </div>

        <div className="w-full max-w-sm h-6 relative" />
      </div>
    </div>
  );
}

function getMessageForProgress(p: number) {
  if (p < 5) return "initializing bootloader...";
  if (p < 15) return "initializing system kernel...";
  if (p < 30) return "loading device drivers...";
  if (p < 45) return "mounting file systems...";
  if (p < 60) return "starting network services...";
  if (p < 75) return "loading system libraries...";
  if (p < 85) return "initializing graphics driver...";
  if (p < 95) return "loading user profile...";
  return "finalizing startup...";
}
