import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sporza - Connect. Compete. Celebrate | Pakistan's Sports Super App",
  description: "Connect with nearby teams, compete in exciting matches, and celebrate victories. Pakistan's premier location-based sports matchmaking platform for cricket, football, and more sports.",
  keywords: "sports app, cricket teams, football teams, sports matchmaking, Pakistan sports, find opponents, team challenges, location-based sports",
  authors: [{ name: "Sporza Team" }],
  creator: "Sporza",
  publisher: "Sporza",
  openGraph: {
    title: "Sporza - Connect. Compete. Celebrate",
    description: "Connect with nearby teams, compete in exciting matches, and celebrate victories. Pakistan's premier location-based sports matchmaking platform.",
    url: "https://sporza.pk",
    siteName: "Sporza",
    images: [
      {
        url: "/sporza_icon.png",
        width: 1200,
        height: 630,
        alt: "Sporza - Every Sport, One App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sporza - Connect. Compete. Celebrate",
    description: "Connect with nearby teams, compete in exciting matches, and celebrate victories.",
    images: ["/sporza_icon.png"],
    creator: "@sporzaapp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0F172A] text-white font-sans">{children}</body>
    </html>
  );
}
