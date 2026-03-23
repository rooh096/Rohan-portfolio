"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import type { DashboardMetric } from "@/data/portfolio";

type HighlightsDashboardProps = {
  metrics: DashboardMetric[];
};

export function HighlightsDashboard({ metrics }: HighlightsDashboardProps) {
  return (
    <SectionShell id="highlights" className="pt-4">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Highlights Dashboard"
          title="Key performance signals at a glance"
          description="A dashboard-style overview of experience depth, process scale, and measurable finance impact."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <AnimatedSection key={metric.label} delay={index * 0.06}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="panel p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{metric.label}</p>
              <div className="mt-5 flex items-end gap-2">
                {metric.valueText ? (
                  <motion.span
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl"
                  >
                    {metric.valueText}
                  </motion.span>
                ) : (
                  <AnimatedCounter
                    value={metric.value ?? 0}
                    suffix={metric.suffix}
                    className="font-display text-5xl font-semibold tracking-tight text-slate-950"
                  />
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{metric.detail}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </SectionShell>
  );
}
