"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Theme = {
  background: string;
  text: string;
  buttonText: string;
  button: string;
};

type ThemeContextType = {
  theme: Theme;
  setCustomTheme: (newTheme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>({
    background: "#E7FAE8",
    text: "#000000",
    buttonText: "#FFFFFF",
    button: "#000000"
  });

  const setCustomTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setCustomTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};
