"use client";

import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
  useRef,
  useState
} from "react";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (theme: ThemePreference) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = "ra-portfolio-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const preferenceRef = useRef<ThemePreference>("system");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (nextPreference: ThemePreference) => {
      const nextResolvedTheme =
        nextPreference === "system" ? (mediaQuery.matches ? "dark" : "light") : nextPreference;

      preferenceRef.current = nextPreference;
      setPreferenceState(nextPreference);
      setResolvedTheme(nextResolvedTheme);
      document.documentElement.dataset.theme = nextResolvedTheme;
      document.documentElement.classList.add("theme-ready");
    };

    let storedPreference: ThemePreference = "system";

    try {
      storedPreference = (window.localStorage.getItem(STORAGE_KEY) as ThemePreference | null) ?? "system";
    } catch {}

    applyTheme(storedPreference);

    const handleSystemThemeChange = () => {
      if (preferenceRef.current === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  function setPreference(nextPreference: ThemePreference) {
    try {
      window.localStorage.setItem(STORAGE_KEY, nextPreference);
    } catch {}

    preferenceRef.current = nextPreference;
    setPreferenceState(nextPreference);

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextResolvedTheme =
      nextPreference === "system" ? (prefersDark ? "dark" : "light") : nextPreference;

    setResolvedTheme(nextResolvedTheme);
    document.documentElement.dataset.theme = nextResolvedTheme;
    document.documentElement.classList.add("theme-ready");
  }

  function toggleTheme() {
    setPreference(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider
      value={{
        preference,
        resolvedTheme,
        setPreference,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
