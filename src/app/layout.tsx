import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Oswald, Khula } from "next/font/google";
import { ThemeProvider } from "@/utilities/ThemeContext";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito"
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald"
});

const khula = Khula({
  subsets: ["latin"],
  variable: "--font-khula",
  weight: ["300", "400", "600", "700", "800"] // Thin to ExtraBold
});

export const metadata: Metadata = {
  title: "Al-Yeqeen Uplift",
  description:
    "An app created by suhud ayodeji yekini - Uplift is a personalized affirmation app that generates AI-powered motivation tailored to users’ values, goals, and preferences, with customizable reminders and privacy-focused features."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${khula.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
