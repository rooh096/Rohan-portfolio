"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Icon } from "@/components/ui/icon";
import type { Achievement } from "@/data/portfolio";

type AchievementsSectionProps = {
  achievements: Achievement[];
};

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <SectionShell id="achievements">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Key Achievements"
          title="Recognition and improvements that reinforce delivery quality"
          description="A mix of awards, measurable process wins, and automation-led initiatives that strengthen recruiter signal."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((achievement, index) => (
          <AnimatedSection key={achievement.title} delay={index * 0.06}>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 230, damping: 24 }}
              className="panel p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon name={achievement.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">
                {achievement.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{achievement.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </SectionShell>
  );
}
