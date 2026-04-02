import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ty Rimedio | Data Scientist & ML Engineer",
  description:
    "Ty Rimedio's portfolio. CS senior at Indiana University focused on data science and machine learning.",
  keywords: [
    "Ty Rimedio",
    "developer",
    "data scientist",
    "machine learning",
    "portfolio",
    "Indiana University",
  ],
  openGraph: {
    title: "Ty Rimedio | Data Scientist & ML Engineer",
    description:
      "CS senior at Indiana University. I build ML pipelines, prediction systems, and mobile apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ty Rimedio | Data Scientist & ML Engineer",
    description:
      "CS senior at Indiana University. I build ML pipelines, prediction systems, and mobile apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay">
        {children}
      </body>
    </html>
  );
}
