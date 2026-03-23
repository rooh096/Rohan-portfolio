import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";

import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Rohan Agarwal | Finance Portfolio",
  description:
    "Interactive portfolio website for Rohan Agarwal, showcasing finance transformation, R2R leadership, SAP S/4 HANA migration exposure, and automation-led controllership impact."
};

const themeScript = `
(() => {
  const storageKey = "ra-portfolio-theme";
  let storedTheme = "system";
  try {
    storedTheme = window.localStorage.getItem(storageKey) || "system";
  } catch {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolvedTheme = storedTheme === "system" ? (prefersDark ? "dark" : "light") : storedTheme;
  document.documentElement.dataset.theme = resolvedTheme;
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable} bg-background font-sans text-foreground antialiased`}>
        <ThemeProvider>
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
