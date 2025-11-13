import type { Metadata } from "next";
import { Goldman, Rubik_Glitch } from "next/font/google";
import "./globals.css";

const goldman = Goldman({
  variable: "--font-display",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const glitch = Rubik_Glitch({
  variable: "--font-glitch",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Carl Brutananadilewski Shrine",
  description:
    "A neon-soaked tribute celebrating the legendary Carl Brutananadilewski of Aqua Teen Hunger Force.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${goldman.variable} ${glitch.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
