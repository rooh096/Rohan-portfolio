"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Icon } from "@/components/ui/icon";
import type { ResumeData } from "@/data/portfolio";

type ResumeSectionProps = {
  resume: ResumeData;
};

export function ResumeSection({ resume }: ResumeSectionProps) {
  return (
    <SectionShell id="resume">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Resume"
          title="Preview the resume on-page, or download the working files directly"
          description="The site includes an embedded PDF viewer and direct download actions for both PDF and Word formats."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.36fr_0.64fr]">
        <AnimatedSection>
          <div className="panel-strong p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{resume.previewTitle}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{resume.previewDescription}</p>

            <div className="mt-6 space-y-3">
              <motion.a
                href={resume.pdfPath}
                download
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-between rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-soft"
              >
                <span>Download PDF</span>
                <Icon name="download" className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={resume.docxPath}
                download
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 text-sm font-semibold text-slate-800 shadow-soft"
              >
                <span>Download Word</span>
                <Icon name="download" className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="panel overflow-hidden p-3 sm:p-4">
            <div className="overflow-hidden rounded-[1.4rem] border border-slate-200/80 bg-white shadow-soft">
              <iframe
                src={`${resume.pdfPath}#view=FitH`}
                title="Resume preview"
                className="h-[32rem] w-full bg-white md:h-[40rem]"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </SectionShell>
  );
}
