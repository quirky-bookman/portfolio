import { ReactNode } from "react";

interface ShortcutProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export default function Shortcut({ icon, label, onClick }: ShortcutProps) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 p-2 size-20 group cursor-pointer focus:outline-none">
      <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95">{icon}</div>
      <span className="text-white text-xs text-center leading-tight drop-shadow-md px-1 rounded-sm group-hover:bg-gray-700 transition-colors">{label}</span>
    </button>
  );
}
