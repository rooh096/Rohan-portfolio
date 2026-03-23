"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
};

export function TypingText({
  text,
  className = "",
  speed = 42,
  delay = 260
}: TypingTextProps) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        currentIndex += 1;
        setVisibleText(text.slice(0, currentIndex));

        if (currentIndex >= text.length) {
          window.clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, speed, text]);

  return (
    <span className={className}>
      {visibleText}
      <span className="ml-1 inline-block h-5 w-px animate-pulse bg-current align-middle" />
    </span>
  );
}
