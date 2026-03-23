"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import type { Project } from "@/data/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionShell id="projects">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Projects and Initiatives"
          title="Transformation-focused work beyond day-to-day execution"
          description="Structured like initiative cards so recruiters can quickly identify automation, ERP, and process-standardization experience."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="panel flex h-full flex-col p-6"
            >
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{project.subtitle}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
              </div>

              <div className="section-divider my-6" />

              <div className="space-y-3">
                {project.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <p className="text-sm leading-6 text-slate-600">{outcome}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          </AnimatedSection>
        ))}
      </div>
    </SectionShell>
  );
}
