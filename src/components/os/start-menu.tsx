"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LayoutGrid, Power } from "lucide-react";
import Image from "next/image";
import { LoadingScreen } from "./loading-screen";

interface StartMenuProps {
  onResumeClick: () => void;
  onAboutMeClick: () => void;
  onProjectsClick: () => void;
}

export function StartMenu({ onResumeClick, onAboutMeClick, onProjectsClick }: StartMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shutdownVisible, setShutdownVisible] = useState(false);
  const [showPowerButton, setShowPowerButton] = useState(false);
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    if (shutdownVisible) {
      setShowPowerButton(false);
      t = setTimeout(() => setShowPowerButton(true), 2000);
    } else {
      setShowPowerButton(false);
    }
    return () => {
      if (t) clearTimeout(t);
    };
  }, [shutdownVisible]);

  return (
    <>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button className={cn("inline-flex cursor-pointer p-2 rounded-sm transition-all duration-300 group", "hover:bg-gray-700 hover:text-gray-200", isOpen && "bg-gray-700 text-gray-200 shadow-inner")}>
            <LayoutGrid className="group-active:scale-90 transition-transform" />
          </button>
        </PopoverTrigger>

        <PopoverContent side="top" align="start" sideOffset={20} alignOffset={-10} className="w-80 p-0 bg-black/80 backdrop-blur-xl border-white/20 text-white">
          <div className="flex flex-col h-[400px]">
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <Image src="man-user-circle-icon.svg" width={40} height={40} alt="icon" className="size-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">
                  Serhii <br /> Demchyshyn
                </p>
              </div>
            </div>

            <div className="flex-1 p-2 overflow-y-auto">
              <button
                onClick={() => {
                  onResumeClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2 p-2 hover:bg-white/10 rounded-md transition-colors text-sm"
              >
                <span className="text-lg">📄</span> Resume.pdf
              </button>
              <button
                onClick={() => {
                  onAboutMeClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 p-2 hover:bg-white/10 rounded-md transition-colors text-sm"
              >
                <span className="text-lg">👤</span> About me
              </button>
              <button
                onClick={() => {
                  onProjectsClick();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 p-2 hover:bg-white/10 rounded-md transition-colors text-sm"
              >
                <span className="text-lg">📁</span>
                Projects
              </button>
            </div>

            <div className="p-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  setShutdownVisible(true);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 p-2 text-sm rounded-md hover:bg-red-500/20 hover:text-red-400 transition-all group"
                title="Shutdown"
              >
                <Power className="size-5 group-active:scale-90 transition-transform" />
                Shutdown
              </button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {shutdownVisible && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center">
          {!showBoot && (
            <div className="text-center">
              {!showPowerButton && <p className={`text-white text-lg mb-4 flex ${!showPowerButton ? "animate-pulse-smooth" : ""}`}>Shutting down</p>}

              {showPowerButton && (
                <button
                  onClick={() => {
                    setShowBoot(true);
                    setShutdownVisible(false);
                  }}
                  className="flex items-center gap-2 p-2 text-sm rounded-md text-green-500 bg-green-600/20 hover:bg-green-500/20 hover:text-green-400 transition-all group"
                >
                  <Power className="size-5 group-active:scale-90 transition-transform" />
                  Power on
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {showBoot && <LoadingScreen onComplete={() => setShowBoot(false)} duration={3000} />}
    </>
  );
}
