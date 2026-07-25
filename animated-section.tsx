import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const geistSans = localFont({
  src: "../../node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf",
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  applicationName: siteConfig.company.name,
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  creator: siteConfig.company.name,
  publisher: siteConfig.company.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/alex-logo.png",
    shortcut: "/images/alex-logo.png",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "/",
    siteName: siteConfig.company.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-locksmith-premium.png",
        width: 1792,
        height: 1024,
        alt: siteConfig.hero.backgroundAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/images/hero-locksmith-premium.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
