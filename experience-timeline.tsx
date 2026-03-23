"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Icon } from "@/components/ui/icon";
import type { ExperienceRole } from "@/data/portfolio";

type ExperienceTimelineProps = {
  roles: ExperienceRole[];
};

export function ExperienceTimeline({ roles }: ExperienceTimelineProps) {
  const [activeCompany, setActiveCompany] = useState(roles[0]?.company ?? "");

  return (
    <SectionShell id="experience">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Experience Timeline"
          title="An interactive track record focused on impact, controls, and execution"
          description="Each role expands to show contribution detail, measurable outcomes, and platform exposure instead of a flat list of responsibilities."
        />
      </AnimatedSection>

      <div className="relative mt-10 space-y-5 before:absolute before:bottom-4 before:left-[1.05rem] before:top-4 before:w-px before:bg-slate-200 sm:before:left-6">
        {roles.map((role, index) => {
          const isActive = activeCompany === role.company;

          return (
            <AnimatedSection key={role.company} delay={index * 0.06}>
              <div className="relative pl-10 sm:pl-16">
                <div className="absolute left-0 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-slate-950 text-white shadow-soft sm:left-2">
                  <span className="font-display text-sm font-semibold">{index + 1}</span>
                </div>

                <motion.button
                  type="button"
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveCompany(isActive ? "" : role.company)}
                  className={`panel-strong w-full p-6 text-left sm:p-7 ${
                    isActive ? "ring-2 ring-blue-200" : "ring-1 ring-transparent"
                  }`}
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-2xl font-semibold text-slate-950">
                          {role.company}
                        </h3>
                        <span className="accent-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                          {role.period}
                        </span>
                      </div>
                      <p className="mt-2 text-lg font-medium text-slate-700">{role.title}</p>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">
                        {role.location} | {role.focus}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-soft">
                      <span>{isActive ? "Collapse" : "Expand details"}</span>
                      <motion.span animate={{ rotate: isActive ? 90 : 0 }}>
                        <Icon name="arrow" className="h-4 w-4" />
                      </motion.span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="section-divider my-6" />
                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                          <div className="space-y-3">
                            {role.bullets.map((bullet) => (
                              <div key={bullet} className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                                <p className="text-sm leading-7 text-slate-600">{bullet}</p>
                              </div>
                            ))}
                          </div>
                          <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-soft">
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                              Tools and systems
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {role.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="rounded-full bg-slate-950 px-3 py-1.5 text-sm font-medium text-white"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.button>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionShell>
  );
}
