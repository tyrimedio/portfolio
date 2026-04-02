import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ty Rimedio | Data Scientist & ML Engineer",
  description:
    "Ty Rimedio's portfolio. CS senior at Indiana University focused on data science, machine learning, and predictive systems.",
  keywords: [
    "Ty Rimedio",
    "data scientist",
    "machine learning engineer",
    "machine learning",
    "data engineering",
    "sports analytics",
    "portfolio",
    "Indiana University",
  ],
  openGraph: {
    title: "Ty Rimedio | Data Scientist & ML Engineer",
    description:
      "CS senior at Indiana University. I build ML pipelines, predictive models, and data-driven systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ty Rimedio | Data Scientist & ML Engineer",
    description:
      "CS senior at Indiana University. I build ML pipelines, predictive models, and data-driven systems.",
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
      className={`${newsreader.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
