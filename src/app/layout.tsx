import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "The best portfolio in your life!!!",
  description:
    "Transforming complex challenges into elegant solutions through innovation, engineering excellence, and research-driven design.",
  keywords: [
    "digital economist",
    "programmer",
    "researcher",
    "designer",
    "portfolio",
    "software engineer",
    "machine learning",
    "full stack developer",
  ],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "The best portfolio in your life!!!",
    description:
      "Transforming complex challenges into elegant solutions through innovation, engineering excellence, and research-driven design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
