"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { Icon } from "@/components/ui/icon";
import type { ContactData } from "@/data/portfolio";

type ContactSectionProps = {
  contact: ContactData;
};

export function ContactSection({ contact }: ContactSectionProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Recruiter"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message || "Hello Rohan,"}`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("Mail client opened with your message draft.");
    form.reset();
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 1800);
    } catch {
      setStatus("Clipboard access is unavailable in this browser.");
    }
  }

  return (
    <SectionShell id="contact" className="pb-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Contact"
          title="Open to conversations around finance operations, transformation, and analyst roles"
          description="Contact cards keep direct information visible, and the lightweight form opens the user&apos;s default mail client without requiring backend infrastructure."
        />
      </AnimatedSection>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
        <AnimatedSection>
          <div className="panel-strong p-6 sm:p-7">
            <div className="space-y-4">
              <ContactCard
                icon="mail"
                label="Email"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactCard icon="phone" label="Phone" value={contact.phone} href={`tel:${contact.phone}`} />
              <ContactCard
                icon="linkedin"
                label="LinkedIn"
                value={contact.linkedInLabel}
                href={contact.linkedInUrl}
                external
              />
            </div>

            <div className="section-divider my-6" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm leading-6 text-slate-600">{contact.note}</p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-3 text-sm font-semibold text-slate-800 shadow-soft hover:-translate-y-0.5"
              >
                <Icon name={copyStatus === "copied" ? "check" : "copy"} className="h-4 w-4" />
                {copyStatus === "copied" ? "Email Copied" : "Copy Email"}
              </button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className="panel p-6 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="Hiring manager or recruiter"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="name@company.com"
                />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  placeholder="Share the role, context, or conversation you would like to start."
                />
              </Field>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <motion.button
                type="submit"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-soft"
              >
                Send via Email
              </motion.button>
              <p className="text-sm text-slate-500">{status ?? "No backend needed for the contact flow."}</p>
            </div>
          </form>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.16}>
        <footer className="mt-10 flex flex-col gap-3 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Rohan Agarwal Portfolio</p>
          <p>Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </footer>
      </AnimatedSection>
    </SectionShell>
  );
}

type ContactCardProps = {
  icon: "mail" | "phone" | "linkedin";
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

function ContactCard({ icon, label, value, href, external = false }: ContactCardProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-soft hover:-translate-y-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <p className="mt-2 text-sm font-medium text-slate-800">{value}</p>
      </div>
    </a>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
};

function Field({ label, htmlFor, children }: FieldProps) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  );
}
