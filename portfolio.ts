import type { IconName } from "@/components/ui/icon";

export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroData = {
  name: string;
  title: string;
  tagline: string;
  status: string;
  location: string;
  focusAreas: string[];
  ctas: {
    label: string;
    href: string;
    download?: boolean;
  }[];
};

export type SummaryCard = {
  label: string;
  value: string;
  detail: string;
};

export type DashboardMetric = {
  label: string;
  detail: string;
  value?: number;
  valueText?: string;
  suffix?: string;
};

export type AboutData = {
  paragraphs: string[];
  highlights: {
    title: string;
    description: string;
    icon: IconName;
  }[];
};

export type WorkdayStep = {
  title: string;
  subtitle: string;
  detail: string;
  metric: string;
  icon: IconName;
};

export type SkillGroup = {
  category: string;
  icon: IconName;
  proficiency: number;
  description: string;
  skills: string[];
};

export type ExperienceRole = {
  company: string;
  title: string;
  period: string;
  location: string;
  focus: string;
  metrics: string[];
  bullets: string[];
  tools: string[];
};

export type Achievement = {
  title: string;
  description: string;
  icon: IconName;
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  tags: string[];
};

export type Certification = {
  title: string;
  status: string;
  issuer: string;
  description: string;
};

export type ResumeData = {
  previewTitle: string;
  previewDescription: string;
  pdfPath: string;
  docxPath: string;
};

export type ContactData = {
  email: string;
  phone: string;
  linkedInLabel: string;
  linkedInUrl: string;
  note: string;
};

// Centralized recruiter-facing content keeps the UI components reusable and easy to maintain.
export const portfolioData = {
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work Life", href: "#work-life" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ] satisfies NavigationItem[],
  hero: {
    name: "Rohan Agarwal",
    title: "Senior Analyst | Finance Transformation | SAP S/4 HANA",
    tagline: "Driving financial accuracy, automation, and process excellence",
    status: "Open to recruiter conversations in finance transformation, controllership, and R2R leadership",
    location: "Bangalore, India | Multi-entity finance and reporting experience",
    focusAreas: [
      "Month-end close and financial reporting",
      "Balance sheet governance with SOX-aligned controls",
      "ERP migration, automation, and reporting standardization"
    ],
    ctas: [
      { label: "View Resume", href: "#resume" },
      { label: "Download Resume (PDF)", href: "/resume.pdf", download: true },
      { label: "Download Resume (Word)", href: "/resume.docx", download: true }
    ]
  } satisfies HeroData,
  summaryCards: [
    {
      label: "Reporting Stack",
      value: "Cognos + FCCS + BlackLine",
      detail: "Hands-on exposure across enterprise reporting, consolidation, and close support tooling."
    },
    {
      label: "Controls Mindset",
      value: "SOX and audit ready",
      detail: "Known for improving documentation, review mechanisms, and balance sheet governance."
    },
    {
      label: "Efficiency Lens",
      value: "Manual effort down",
      detail: "Used Excel, VBA, and process standardization to improve turnaround time and reporting quality."
    }
  ] satisfies SummaryCard[],
  dashboardMetrics: [
    {
      value: 6,
      suffix: "+",
      label: "Years Experience",
      detail: "Progressive experience across R2R, financial close, controllership, and statutory accounting."
    },
    {
      value: 100,
      suffix: "+",
      label: "Journal Entries / Month",
      detail: "High-volume posting and review discipline during month-end close for multiple entities."
    },
    {
      value: 40,
      suffix: "%",
      label: "Outstanding Balance Reduction",
      detail: "Balance sheet governance and open-item resolution helped reduce aged balances materially."
    },
    {
      valueText: "Multi-Entity",
      label: "Reporting Scope",
      detail: "Experience supporting close, reconciliations, and reporting across multi-entity environments."
    }
  ] satisfies DashboardMetric[],
  about: {
    paragraphs: [
      "Finance professional with over 6 years of experience in Record-to-Report, financial close, and controllership across multi-entity environments. Strong grounding in general ledger accounting, balance sheet governance, reporting under US GAAP and IFRS, and finance operations that need to stay accurate under pressure.",
      "Rohan combines structured accounting execution with a transformation mindset. His experience spans enterprise reporting tools like IBM Cognos and Oracle FCCS, ERP environments such as Navision, Syspro, Tally, and SAP S/4 HANA migration work, plus automation initiatives that improve reporting speed and control quality."
    ],
    highlights: [
      {
        title: "6+ Years Across R2R and Close",
        description: "Built depth across month-end close, reconciliations, reporting, and controllership support.",
        icon: "briefcase"
      },
      {
        title: "US GAAP, IFRS, SOX Controls",
        description: "Comfortable in compliance-driven finance environments with strong documentation expectations.",
        icon: "shield"
      },
      {
        title: "Leadership and Mentoring",
        description: "Guided junior team members while maintaining a delivery-focused and collaborative finance culture.",
        icon: "team"
      }
    ]
  } satisfies AboutData,
  workdaySteps: [
    {
      title: "Close Command Center",
      subtitle: "Month-end orchestration",
      detail:
        "Lead end-to-end month-end close and reporting rhythms across multiple entities, keeping posting, review, and escalation checkpoints moving on schedule.",
      metric: "Period-end ownership",
      icon: "calendar"
    },
    {
      title: "Journal Entry Reviews",
      subtitle: "100+ entries with control discipline",
      detail:
        "Post and review 100+ journal entries while ensuring supporting documentation, SOX alignment, and clean handoffs for downstream reporting.",
      metric: "100+ entries / month",
      icon: "ledger"
    },
    {
      title: "Balance Sheet Governance",
      subtitle: "Open-item resolution",
      detail:
        "Own reconciliations, investigate variances, and drive closure on aged balances to strengthen reporting accuracy and audit readiness.",
      metric: "40% reduction in outstanding balances",
      icon: "shield"
    },
    {
      title: "Stakeholder Collaboration",
      subtitle: "Controllers and finance partners",
      detail:
        "Work with global stakeholders, controllers, and cross-functional teams to resolve exceptions, refine reporting, and improve visibility.",
      metric: "Multi-entity coordination",
      icon: "team"
    },
    {
      title: "ERP Migration Work",
      subtitle: "Syspro to SAP S/4 HANA",
      detail:
        "Supported migration readiness through data cleansing, chart-of-accounts standardization, and SOX-compliant validation frameworks.",
      metric: "Transformation support",
      icon: "database"
    },
    {
      title: "Automation Blocks",
      subtitle: "Reporting improvements",
      detail:
        "Automated recurring reporting tasks with Excel, Power Query, and VBA to reduce manual effort and improve turnaround time.",
      metric: "Faster reporting cycles",
      icon: "automation"
    }
  ] satisfies WorkdayStep[],
  skillGroups: [
    {
      category: "Finance",
      icon: "ledger",
      proficiency: 95,
      description: "Core finance execution across close, balance sheet governance, reporting, and controllership.",
      skills: [
        "R2R",
        "General Ledger Accounting",
        "Financial Close",
        "Controllership",
        "US GAAP",
        "IFRS"
      ]
    },
    {
      category: "Tools",
      icon: "analytics",
      proficiency: 92,
      description: "Enterprise reporting, reconciliation, and analytics tooling used in live finance environments.",
      skills: ["IBM Cognos", "Oracle FCCS", "BlackLine", "IBIS", "Power BI", "Advanced MS Excel", "Power Query"]
    },
    {
      category: "ERP",
      icon: "database",
      proficiency: 89,
      description: "Broad ERP adaptability across operational accounting and finance transformation settings.",
      skills: ["SAP S/4 HANA", "Microsoft Navision", "Syspro 6.1", "Tally"]
    },
    {
      category: "Programming",
      icon: "code",
      proficiency: 84,
      description: "Technical skills applied to reporting automation, analysis, and manual-effort reduction.",
      skills: ["SQL", "Python", "VBA"]
    }
  ] satisfies SkillGroup[],
  experiences: [
    {
      company: "AB InBev Pvt. Ltd.",
      title: "Senior Analyst",
      period: "September 2024 - Present",
      location: "Bangalore",
      focus: "Month-end close, reporting, controllership, and migration support",
      metrics: ["100+ journal entries", "40% reduction in outstanding balances", "Cognos and FCCS reporting"],
      bullets: [
        "Lead end-to-end month-end close and reporting activities for multiple entities, including posting and reviewing 100+ journal entries while ensuring SOX and internal control compliance.",
        "Own balance sheet reconciliations and drive timely open-item resolution, contributing to a 40% reduction in outstanding balances.",
        "Drive financial reporting and consolidation using IBM Cognos and Oracle FCCS, ensuring accuracy and adherence to reporting timelines.",
        "Support ERP migration from Syspro to SAP S/4 HANA through data cleansing, chart-of-accounts standardization, and SOX-compliant validation frameworks.",
        "Automated recurring reporting processes using Excel and VBA, reducing manual effort and improving turnaround time.",
        "Guide junior team members while strengthening review mechanisms, documentation quality, and audit readiness."
      ],
      tools: ["IBM Cognos", "Oracle FCCS", "BlackLine", "SAP S/4 HANA", "Excel", "VBA"]
    },
    {
      company: "WNS Global Services Pvt. Ltd.",
      title: "Senior Associate",
      period: "August 2022 - August 2024",
      location: "Pune",
      focus: "R2R delivery, close support, reconciliations, and process transitions",
      metrics: ["50+ GL accounts", "US GAAP compliance", "Audit support and standardization"],
      bullets: [
        "Led end-to-end R2R processes including balance sheet reconciliations for 50+ GL accounts, month-end close support, and financial statement review.",
        "Drove process transitions and standardization across entities, improving consistency and reporting accuracy.",
        "Ensured compliance with US GAAP and internal control requirements while supporting audit activities.",
        "Identified and implemented process improvements that streamlined workflows and reduced manual effort."
      ],
      tools: ["Excel", "Oracle FCCS", "IBM Cognos", "BlackLine"]
    },
    {
      company: "Parmeshwari Enterprises",
      title: "Accounts Executive",
      period: "April 2021 - July 2022",
      location: "Purulia",
      focus: "Accounting operations, audit support, and ledger quality",
      metrics: ["Multiple entities", "AP and AR support", "Improved documentation quality"],
      bullets: [
        "Managed accounting operations for multiple entities including AP and AR, general ledger postings, and preparation of financial data.",
        "Supported statutory and internal audits by preparing schedules, reconciling accounts, and assisting in variance analysis.",
        "Improved documentation and review processes, reducing errors and enhancing data reliability.",
        "Used Tally ERP for journal entries, ledger management, and financial data preparation."
      ],
      tools: ["Tally", "Excel", "Ledger schedules", "Variance analysis"]
    },
    {
      company: "Vijay Jalan & Associates",
      title: "Accountant",
      period: "August 2019 - March 2021",
      location: "Purulia",
      focus: "Book closure, statutory compliance, and client reporting",
      metrics: ["20+ clients", "GST and income tax filings", "Cross-industry reporting"],
      bullets: [
        "Finalized books of accounts and handled GST and Income Tax filings for 20+ clients, ensuring full statutory compliance.",
        "Prepared financial statements, tax reconciliations, and reports for clients across different industries.",
        "Coordinated directly with clients to resolve accounting and taxation queries in a timely manner."
      ],
      tools: ["Tally", "Excel", "Statutory filings", "Client reporting"]
    }
  ] satisfies ExperienceRole[],
  achievements: [
    {
      title: "League of Champions Award",
      description: "Recognized for delivery quality, consistency, and dependable execution in a high-accountability finance environment.",
      icon: "trophy"
    },
    {
      title: "Star Performer Award",
      description: "Acknowledged for standout contribution, ownership, and performance during critical reporting cycles.",
      icon: "award"
    },
    {
      title: "Automation and Reporting Gains",
      description: "Reduced manual dependency through recurring reporting automation using Excel, Power Query, and VBA.",
      icon: "automation"
    },
    {
      title: "Audit-Ready Controls",
      description: "Strengthened review practices, balance sheet governance, and documentation standards for cleaner close execution.",
      icon: "sparkles"
    }
  ] satisfies Achievement[],
  projects: [
    {
      title: "SAP S/4 HANA Migration Support",
      subtitle: "ERP readiness and control-aligned transition",
      description:
        "Supported the migration from Syspro to SAP S/4 HANA through data cleansing, chart-of-accounts standardization, and control-aware validation work.",
      outcomes: [
        "Reduced migration risk through cleaner finance data preparation",
        "Aligned finance structures to the target-state ERP model",
        "Protected SOX-sensitive controls during transition activity"
      ],
      tags: ["SAP S/4 HANA", "Syspro", "ERP migration"]
    },
    {
      title: "Reporting Automation",
      subtitle: "Excel, Power Query, and VBA efficiency",
      description:
        "Automated recurring reporting packs and manual consolidation steps to accelerate reporting turnaround and improve consistency.",
      outcomes: [
        "Cut manual reporting effort for recurring close tasks",
        "Improved pack consistency and reduced avoidable rework",
        "Freed up time for exception analysis and stakeholder support"
      ],
      tags: ["VBA", "Power Query", "Excel automation"]
    },
    {
      title: "Cross-Market Policy Standardization",
      subtitle: "Control and reporting alignment",
      description:
        "Standardized discount policy frameworks and strengthened indirect tax review practices to improve reporting consistency across entities.",
      outcomes: [
        "Improved reporting consistency across markets",
        "Reduced discrepancies with tighter documentation standards",
        "Strengthened WHT, VAT, and excise review discipline"
      ],
      tags: ["Policy standardization", "Controls", "Reporting governance"]
    }
  ] satisfies Project[],
  certifications: [
    {
      title: "Google Data Analytics Certificate",
      status: "Ongoing",
      issuer: "Coursera / Google",
      description: "Completed multiple hands-on case studies covering SQL, data cleaning, dashboarding, and business insight generation."
    },
    {
      title: "Advanced Excel Certification",
      status: "Completed",
      issuer: "NSDC",
      description: "Formal certification supporting advanced spreadsheet logic, analytical workflows, and finance reporting productivity."
    }
  ] satisfies Certification[],
  resume: {
    previewTitle: "Resume Preview",
    previewDescription:
      "The embedded PDF is the live resume. Download buttons are available for both the original PDF and a clean Word version generated from the same content.",
    pdfPath: "/resume.pdf",
    docxPath: "/resume.docx"
  } satisfies ResumeData,
  contact: {
    email: "rohan.agarwal0596@gmail.com",
    phone: "+91-7003209549",
    linkedInLabel: "linkedin.com/in/rohanagarwal",
    linkedInUrl: "https://www.linkedin.com/in/rohanagarwal",
    note: "Use the copy action for email, or jump directly into LinkedIn or phone outreach for faster recruiter follow-up."
  } satisfies ContactData
};
