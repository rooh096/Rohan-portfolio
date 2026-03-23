"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { AnimatedSection } from "./animated-section";
import { SectionShell } from "./section-shell";
import { Icon } from "./icon";
import { TypingText } from "./typing-text";
import type { HeroData, SummaryCard } from "./portfolio";

type HeroSectionProps = {
  hero: HeroData;
  summaryCards: SummaryCard[];
};

export function HeroSection({ hero, summaryCards }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <SectionShell id="home" className="pt-10 sm:pt-14">
      <div ref={sectionRef} className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <AnimatedSection>
          <motion.div
            style={{ y: glowY }}
            className="mb-4 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.26),transparent_70%)] blur-2xl"
          />

          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-soft">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            {hero.status}
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.34em] text-accent">
            <TypingText text="Welcome to My Corporate Journey" />
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-4 max-w-4xl text-lg font-medium text-slate-600 sm:text-xl">
            {hero.title}
          </p>
          <p className="mt-6 max-w-3xl text-balance text-xl leading-8 text-slate-700">
            {hero.tagline}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-500">{hero.location}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.ctas.map((cta, index) => (
              <motion.a
                key={cta.label}
                href={cta.href}
                download={cta.download}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                  index === 0
                    ? "bg-slate-950 text-white shadow-lift"
                    : "border border-slate-200 bg-white/90 text-slate-800 shadow-soft"
                }`}
              >
                <Icon name={cta.download ? "download" : "arrow"} className="h-4 w-4" />
                {cta.label}
              </motion.a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {hero.focusAreas.map((focus) => (
              <span
                key={focus}
                className="accent-chip inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-700"
              >
                {focus}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="panel-strong overflow-hidden p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Fintech-Style Snapshot</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-slate-950">
                  Premium positioning built for recruiters scanning finance talent fast
                </h2>
              </div>
              <div className="rounded-2xl bg-slate-950 px-4 py-3 text-right text-white shadow-soft">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Core lane</p>
                <p className="mt-1 text-lg font-semibold">Close + Transformation</p>
              </div>
            </div>

            <div className="section-divider my-6" />

            <div className="space-y-4">
              {summaryCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="rounded-3xl border border-slate-200/70 bg-white/95 p-5 shadow-soft"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {card.label}
                      </p>
                      <p className="mt-2 font-display text-xl font-semibold text-slate-950">
                        {card.value}
                      </p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                      <span className="font-display text-sm font-semibold">0{index + 1}</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </SectionShell>
  );
}
