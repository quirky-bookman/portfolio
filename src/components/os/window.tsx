"use client";

import { useRef, useState, useEffect, useContext } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Maximize2, Minimize2, X, Minus } from "lucide-react";
import { DesktopContext } from "@/components/os/desktop";

interface WindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  windowId: string;
}

export function Window({ isOpen, onClose, title, icon, children, windowId }: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, posX: 0, posY: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);
  const context = useContext(DesktopContext);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = context?.activeWindow === windowId;
  const baseZIndex = 50;
  const zIndex = isActive ? baseZIndex + 100 : baseZIndex;

  const handleWindowFocus = () => {
    context?.setActiveWindow(windowId);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMaximized) return;
    handleWindowFocus();
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      posX: position.x,
      posY: position.y
    });
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setPosition({
        x: dragStart.posX + dx,
        y: dragStart.posY + dy
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  if (!mounted || !isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(o) => !o && onClose()}>
      <div
        ref={nodeRef}
        onClick={handleWindowFocus}
        className={`
          fixed p-0 overflow-hidden flex flex-col w-full
          border-2 border-white/10 bg-black/90 backdrop-blur-2xl
          text-white shadow-2xl focus:outline-none pointer-events-auto
          ${isActive ? "border-blue-500/50" : "border-white/10"}
          ${isMaximized ? "inset-0 rounded-none" : "max-w-[760px] h-[450px] rounded-xl"}
        `}
        style={{
          zIndex: zIndex,
          ...(isMaximized
            ? {}
            : {
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`
              })
        }}
      >
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>Window for {title}</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>

        <div className="window-header cursor-move flex items-center justify-between bg-white/10 px-3 py-1 border-b border-white/10 select-none" onMouseDown={handleMouseDown}>
          <div className="flex items-center gap-1">
            <span className="text-lg">{icon}</span>
            <span className="text-sm font-semibold tracking-wide">{title}</span>
          </div>

          <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="hover:bg-yellow-500/30 hover:text-yellow-500 size-6 flex items-center justify-center rounded-full transition-all">
              <Minus className="size-4" />
            </button>

            <button onClick={() => setIsMaximized(!isMaximized)} className="hover:bg-emerald-500/30 hover:text-emerald-500 size-6 flex items-center justify-center rounded-full transition-all">
              {isMaximized ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
            </button>

            <button onClick={onClose} className="hover:bg-red-500 size-6 flex items-center justify-center rounded-full transition-all text-white/70 hover:text-white">
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto modal-scroll overflow-y-auto bg-black text-white rounded-lg p-6">{children}</div>
      </div>
    </Dialog>
  );
}
