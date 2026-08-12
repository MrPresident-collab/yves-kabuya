import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yves Kabuya | Professeur d'anglais à Kinshasa",
  description:
    "Yves Kabuya, professeur d'anglais à Kinshasa. Cours d'anglais général, conversationnel et professionnel, en présentiel et en ligne.",
  keywords: [
    "Yves Kabuya",
    "professeur d'anglais",
    "cours d'anglais Kinshasa",
    "English teacher Kinshasa",
    "cours d'anglais en ligne",
  ],
  authors: [{ name: "Yves Kabuya" }],
  creator: "Yves Kabuya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}