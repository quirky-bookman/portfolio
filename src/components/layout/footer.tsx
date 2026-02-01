"use client";

import { Spinner } from "@/components/ui/spinner";
import { Clock } from "@/components/os/clock";
import { StartMenu } from "../os/start-menu";
import { useContext } from "react";
import { DesktopContext } from "@/components/os/desktop";

export function Footer() {
  const context = useContext(DesktopContext);

  if (!context) {
    return null;
  }

  return (
    <footer className="flex items-center justify-between px-3 py-2 bg-black text-gray-400">
      <StartMenu onResumeClick={() => context.setIsResumeOpen(true)} onAboutMeClick={() => context.setIsAboutMeOpen(true)} onProjectsClick={() => context.setIsProjectsOpen(true)} />

      <div className="flex items-end">
        <p className="mb-0 text-[11px] me-2">serhiiOS</p>
        <Clock />
      </div>
    </footer>
  );
}
