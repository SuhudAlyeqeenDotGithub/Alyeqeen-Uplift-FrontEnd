import type { Metadata } from "next";

import "./globals.css";

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
      <body className={`antialiased font-khula`}>{children}</body>
    </html>
  );
}
