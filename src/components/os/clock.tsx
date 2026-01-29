"use client";

import { useState, useEffect } from "react";

export function Clock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!time) return <div className="w-16" />;

  const formattedTime = time.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const formattedDate = time.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  return (
    <div className="flex flex-col items-end px-2 text-[11px] leading-tight select-none cursor-default font-medium border-l border-l-gray-800">
      <span>{formattedTime}</span>
      <span>{formattedDate}</span>
    </div>
  );
}
