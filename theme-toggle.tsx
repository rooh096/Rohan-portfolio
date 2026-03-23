"use client";

import { motion } from "framer-motion";

import { useTheme } from "@/components/theme-provider";
import { Icon } from "@/components/ui/icon";

export function ThemeToggle() {
  const { resolvedTheme, preference, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/75 px-2 py-2 text-slate-700 shadow-soft backdrop-blur-xl"
    >
      <span className="sr-only">{preference === "system" ? "System theme enabled" : `${resolvedTheme} mode enabled`}</span>
      <span
        className={`flex h-9 w-16 items-center rounded-full bg-slate-100 px-1 ${
          isDark ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow-soft ${
            isDark ? "bg-blue-500" : "bg-slate-950"
          }`}
        >
          <Icon name={isDark ? "moon" : "sun"} className="h-4 w-4" />
        </motion.span>
      </span>
      <span className="pr-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {preference === "system" ? "System" : resolvedTheme}
      </span>
    </button>
  );
}
