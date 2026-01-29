"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { LayoutGrid, User, Settings, LogOut, Power } from "lucide-react";
import Image from "next/image";

export function StartMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className={cn("inline-flex cursor-pointer p-2 rounded-sm transition-all duration-300 group", "hover:bg-gray-700 hover:text-gray-200", isOpen && "bg-gray-700 text-gray-200 shadow-inner")}>
          <LayoutGrid className="group-active:scale-90 transition-transform" />
        </button>
      </PopoverTrigger>

      <PopoverContent side="top" align="start" sideOffset={20} alignOffset={-10} className="w-80 p-0 bg-black/80 backdrop-blur-xl border-white/20 text-white">
        <div className="flex flex-col h-[400px]">
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <img src="/man-user-circle-icon.svg" alt="icon" className="size-10 rounded-full" />
            <div>
              <p className="text-sm font-medium">
                Serhii <br /> Demchyshyn
              </p>
            </div>
          </div>

          <div className="flex-1 p-2 overflow-y-auto">
            <div className="px-2 py-1.5 text-xs font-semibold text-white/40 uppercase">Pinned</div>
            <button className="w-full flex items-center gap-3 p-2 hover:bg-white/10 rounded-md transition-colors text-sm">
              <Settings className="h-4 w-4" /> Налаштування
            </button>
          </div>

          <div className="p-2 border-t border-white/10 flex items-center justify-between">
            <button onClick={() => window.location.reload()} className="flex items-center gap-2 p-2 text-sm rounded-md hover:bg-red-500/20 hover:text-red-400 transition-all group" title="Вимкнути">
              <Power className="size-5 group-active:scale-90 transition-transform" />
              Вимкнути
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
