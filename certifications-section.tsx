"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import type { Certification } from "@/data/portfolio";

type CertificationsSectionProps = {
  certifications: Certification[];
};

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <SectionShell id="certifications">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Certifications"
          title="Structured learning that supports data-informed finance work"
          description="A concise section for current learning paths and completed certifications relevant to modern finance teams."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {certifications.map((certification, index) => (
          <AnimatedSection key={certification.title} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="panel p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    {certification.issuer}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-slate-950">
                    {certification.title}
                  </h3>
                </div>
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                    certification.status === "Completed"
                      ? "bg-emerald-100 text-emerald-900"
                      : "bg-blue-100 text-blue-900"
                  }`}
                >
                  {certification.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{certification.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </SectionShell>
  );
}
