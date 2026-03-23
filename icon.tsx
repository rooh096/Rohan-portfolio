export type IconName =
  | "analytics"
  | "arrow"
  | "automation"
  | "award"
  | "briefcase"
  | "calendar"
  | "check"
  | "code"
  | "copy"
  | "database"
  | "download"
  | "ledger"
  | "linkedin"
  | "mail"
  | "moon"
  | "phone"
  | "shield"
  | "sparkles"
  | "sun"
  | "team"
  | "trophy";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const sharedProps = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24"
  };

  switch (name) {
    case "analytics":
      return (
        <svg {...sharedProps}>
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20v-3" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...sharedProps}>
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      );
    case "automation":
      return (
        <svg {...sharedProps}>
          <path d="M12 3v4" />
          <path d="M12 17v4" />
          <path d="M3 12h4" />
          <path d="M17 12h4" />
          <path d="m5.6 5.6 2.8 2.8" />
          <path d="m15.6 15.6 2.8 2.8" />
          <path d="m18.4 5.6-2.8 2.8" />
          <path d="m8.4 15.6-2.8 2.8" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case "award":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="8.5" r="4.5" />
          <path d="m8.7 13 1.1 7 2.2-1.8 2.2 1.8 1.1-7" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...sharedProps}>
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
          <rect x="3" y="7" width="18" height="12" rx="2.5" />
          <path d="M3 12h18" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...sharedProps}>
          <rect x="3" y="5" width="18" height="16" rx="2.5" />
          <path d="M8 3v4" />
          <path d="M16 3v4" />
          <path d="M3 10h18" />
        </svg>
      );
    case "check":
      return (
        <svg {...sharedProps}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );
    case "code":
      return (
        <svg {...sharedProps}>
          <path d="m8 8-4 4 4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="m14 4-4 16" />
        </svg>
      );
    case "copy":
      return (
        <svg {...sharedProps}>
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <rect x="4" y="4" width="11" height="11" rx="2" />
        </svg>
      );
    case "database":
      return (
        <svg {...sharedProps}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "download":
      return (
        <svg {...sharedProps}>
          <path d="M12 4v10" />
          <path d="m8 10 4 4 4-4" />
          <path d="M5 19h14" />
        </svg>
      );
    case "ledger":
      return (
        <svg {...sharedProps}>
          <rect x="4" y="3" width="16" height="18" rx="2.5" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
          <path d="M8 15h5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...sharedProps}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8 10v7" />
          <path d="M8 7.5v.01" />
          <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
          <path d="M12 10v7" />
        </svg>
      );
    case "mail":
      return (
        <svg {...sharedProps}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "moon":
      return (
        <svg {...sharedProps}>
          <path d="M18 13.5A6.5 6.5 0 1 1 10.5 6 5.2 5.2 0 0 0 18 13.5Z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...sharedProps}>
          <path d="M7 4h3l1 4-2 1.5a15 15 0 0 0 5.5 5.5L16 13l4 1v3a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...sharedProps}>
          <path d="M12 3 6 5v5c0 4.2 2.5 8 6 9 3.5-1 6-4.8 6-9V5l-6-2Z" />
          <path d="m9.5 12 1.6 1.6L14.8 10" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...sharedProps}>
          <path d="M12 3v4" />
          <path d="M12 17v4" />
          <path d="M5 12h4" />
          <path d="M15 12h4" />
          <path d="m7 7 2 2" />
          <path d="m15 15 2 2" />
          <path d="m17 7-2 2" />
          <path d="m9 15-2 2" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "sun":
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v3" />
          <path d="M12 18.5v3" />
          <path d="m4.9 4.9 2.2 2.2" />
          <path d="m16.9 16.9 2.2 2.2" />
          <path d="M2.5 12h3" />
          <path d="M18.5 12h3" />
          <path d="m4.9 19.1 2.2-2.2" />
          <path d="m16.9 7.1 2.2-2.2" />
        </svg>
      );
    case "team":
      return (
        <svg {...sharedProps}>
          <path d="M7.5 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M16.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M3.5 19a4.5 4.5 0 0 1 8 0" />
          <path d="M13 19a4 4 0 0 1 7 0" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...sharedProps}>
          <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" />
          <path d="M9 14h6" />
          <path d="M10 14v3h4v-3" />
          <path d="M6 5H4a2 2 0 0 0 2 4" />
          <path d="M18 5h2a2 2 0 0 1-2 4" />
        </svg>
      );
    default:
      return null;
  }
}
