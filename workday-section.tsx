"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Icon } from "@/components/ui/icon";
import type { WorkdayStep } from "@/data/portfolio";

type WorkdaySectionProps = {
  steps: WorkdayStep[];
};

export function WorkdaySection({ steps }: WorkdaySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <SectionShell id="work-life">
      <AnimatedSection>
        <SectionHeading
          eyebrow="A Day In My Work Life"
          title="A recruiter-friendly operating view of how the finance work actually happens"
          description="Built as an interactive workflow so the portfolio shows execution depth, not just resume bullets."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {steps.map((step, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={step.title}
                  type="button"
                  whileHover={{ y: -3, scale: 1.01 }}
                  onClick={() => setActiveIndex(index)}
                  className={`panel relative overflow-hidden p-5 text-left ${
                    isActive ? "ring-2 ring-blue-200" : "ring-1 ring-transparent"
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 w-1 rounded-r-full bg-[linear-gradient(180deg,#2563eb,#8b5cf6)]" />
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon name={step.icon} className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{step.subtitle}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-slate-950">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-soft">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{step.metric}</p>
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="panel-strong min-h-full overflow-hidden p-6 sm:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{activeStep.subtitle}</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-slate-950">
                      {activeStep.title}
                    </h3>
                  </div>
                  <div className="rounded-3xl bg-slate-950 px-5 py-4 text-white shadow-soft">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Signal</p>
                    <p className="mt-2 font-display text-lg font-semibold">{activeStep.metric}</p>
                  </div>
                </div>

                <div className="section-divider my-6" />

                <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                  <p className="text-base leading-8 text-slate-600">{activeStep.detail}</p>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 shadow-soft">
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Why it matters</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      This workflow view helps recruiters understand how Rohan balances close discipline,
                      stakeholder alignment, and improvement work inside a real finance operating cadence.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </SectionShell>
  );
}
