"use client";

import { motion } from "framer-motion";

import AnimatedSection from "./animated-section";
import { SectionHeading } from "./section-heading";
import { SectionShell } from "./section-shell";
import { Icon } from "./icon";
type AboutData = any;

type AboutSectionProps = {
  about: AboutData;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionShell id="about">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <AnimatedSection>
          <SectionHeading
            eyebrow="About Me"
            title="A finance operator who blends accounting rigor with improvement thinking"
            description="Built for recruiters and hiring managers who want impact, structure, and modern execution without losing finance discipline."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="panel-strong p-6 sm:p-8">
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {about.highlights.map((highlight, index) => (
          <AnimatedSection key={highlight.title} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="panel p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon name={highlight.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">
                {highlight.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{highlight.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </SectionShell>
  );
}
