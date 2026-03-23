import { AboutSection } from "@/components/about-section";
import { AchievementsSection } from "@/components/achievements-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { HeroSection } from "@/components/hero-section";
import { HighlightsDashboard } from "@/components/highlights-dashboard";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { SkillsSection } from "@/components/skills-section";
import { StickyNav } from "@/components/sticky-nav";
import { WorkdaySection } from "@/components/workday-section";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="page-shell relative isolate overflow-x-hidden">
      <div className="hero-glow-primary pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem]" />
      <div className="hero-glow-secondary pointer-events-none absolute right-[-8rem] top-24 -z-10 h-[24rem] w-[24rem] rounded-full blur-3xl" />
      <StickyNav items={portfolioData.navigation} />

      {/* Single-page recruiter flow with section anchors for fast scanning. */}
      <HeroSection hero={portfolioData.hero} summaryCards={portfolioData.summaryCards} />
      <HighlightsDashboard metrics={portfolioData.dashboardMetrics} />
      <AboutSection about={portfolioData.about} />
      <WorkdaySection steps={portfolioData.workdaySteps} />
      <SkillsSection skillGroups={portfolioData.skillGroups} />
      <ExperienceTimeline roles={portfolioData.experiences} />
      <AchievementsSection achievements={portfolioData.achievements} />
      <ProjectsSection projects={portfolioData.projects} />
      <CertificationsSection certifications={portfolioData.certifications} />
      <ResumeSection resume={portfolioData.resume} />
      <ContactSection contact={portfolioData.contact} />
    </main>
  );
}
