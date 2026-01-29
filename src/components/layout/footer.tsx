import { Spinner } from "@/components/ui/spinner";
import { Clock } from "@/components/os/clock";
import { StartMenu } from "../os/start-menu";

export function Footer() {
  return (
    <footer className="flex items-center justify-between px-3 py-2 bg-black text-gray-400">
      <StartMenu />

      <div className="flex items-end">
        <p className="mb-0 text-[11px] me-2">serhiiOS</p>
        <Clock />
      </div>
    </footer>
  );
}
