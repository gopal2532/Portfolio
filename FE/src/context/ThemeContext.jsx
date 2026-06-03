import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ACCENT_THEMES = {
  cyan: {
    primary: "#06b6d4",
    secondary: "#22d3ee",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  emerald: {
    primary: "#10b981",
    secondary: "#34d399",
    glow: "rgba(16, 185, 129, 0.4)",
  },
};

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [accent, setAccentState] = useState(() => {
    const saved = localStorage.getItem("portfolio-accent-theme");
    return (saved && ACCENT_THEMES[saved]) ? saved : "cyan";
  });

  const setAccent = (themeName) => {
    if (ACCENT_THEMES[themeName]) {
      setAccentState(themeName);
      localStorage.setItem("portfolio-accent-theme", themeName);
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const root = document.documentElement;
    const colors = ACCENT_THEMES[accent];
    if (colors) {
      root.style.setProperty("--accent-primary", colors.primary);
      root.style.setProperty("--accent-secondary", colors.secondary);
      root.style.setProperty("--accent-glow", colors.glow);
    }
  }, [accent]);

  return (
    <ThemeContext.Provider value={{ dark, setDark, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};
