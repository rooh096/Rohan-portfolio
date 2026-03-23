"use client";

import { useEffect, useState } from "react";

import type { NavigationItem } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

type StickyNavProps = {
  items: NavigationItem[];
};

export function StickyNav({ items }: StickyNavProps) {
  const [active, setActive] = useState(items[0]?.href ?? "#home");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActive(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -48% 0px",
        threshold: [0.15, 0.4, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-950 font-display text-sm font-semibold text-white shadow-soft">
            RA
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-base font-semibold text-slate-950">
              Rohan Agarwal
            </p>
            <p className="truncate text-xs text-slate-500">Finance Portfolio</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/85 p-1 md:flex">
          {items.map((item) => {
            const isActive = active === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-950 text-white shadow-soft"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download
            className="hidden rounded-full border border-slate-950 bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800 xl:inline-flex"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-white/50 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-2 px-4 py-3 sm:px-6">
          {items.map((item) => {
            const isActive = active === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-slate-950 text-white shadow-soft"
                    : "bg-white/90 text-slate-600"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
