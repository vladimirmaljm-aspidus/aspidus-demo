import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const APP_URL = "https://aspidus-demo.vercel.app";
const APP_TITLE = "VELOS — Trade CRM & ERP Platform for Global Commodity Trading";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: APP_TITLE,
  description:
    "One platform for your entire trade lifecycle: CRM & partners, offers, proformas, invoices, trade calculator, 3D trade globe, B2B marketplace, partner portal, KYC, ERP, banking and 216 API endpoints. 5 languages. Free trial.",
  keywords: [
    "VELOS",
    "trade platform",
    "commodity trading",
    "trade CRM",
    "trade ERP",
    "offers",
    "proforma invoices",
    "trade calculator",
    "B2B marketplace",
    "partner portal",
    "KYC",
    "logistics",
    "trade finance",
  ],
  authors: [{ name: "VELOS" }],
  icons: {
    icon: "/logo.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title: APP_TITLE,
    description:
      "Manage your global trade operations — from first inquiry to final payment. CRM, documents, trade calculator, 3D globe, marketplace, portal and ERP in one multi-tenant platform.",
    url: APP_URL,
    siteName: "VELOS",
    type: "website",
    images: [{ url: "/logo.svg", width: 512, height: 512, alt: "VELOS" }],
  },
  twitter: {
    card: "summary",
    title: APP_TITLE,
    description:
      "Trade CRM & ERP for international commodity trading. Free trial & live demo.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#B45309" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1512" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
