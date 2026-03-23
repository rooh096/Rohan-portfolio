"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Icon } from "@/components/ui/icon";
import type { SkillGroup } from "@/data/portfolio";

type SkillsSectionProps = {
  skillGroups: SkillGroup[];
};

export function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <SectionShell id="skills">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Skills"
          title="Finance depth supported by the right systems and automation toolkit"
          description="Grouped for fast recruiter scanning across accounting capability, enterprise tools, ERP exposure, and technical execution."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <AnimatedSection key={group.category} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="panel overflow-hidden p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-slate-950">
                      {group.category}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{group.description}</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 text-right shadow-soft">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Readiness</p>
                  <p className="mt-1 font-display text-xl font-semibold text-slate-950">
                    {group.proficiency}%
                  </p>
                </div>
              </div>

              <div className="mt-6 h-3 rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.proficiency}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-[linear-gradient(90deg,#2563eb,#60a5fa)]"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </SectionShell>
  );
}
