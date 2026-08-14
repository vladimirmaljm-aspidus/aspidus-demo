import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = "https://demo.velos.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VELOS — Trade CRM & ERP Platform",
    template: "%s · VELOS",
  },
  description:
    "VELOS is the all-in-one trade CRM & ERP platform for international trading houses. Manage partners, multi-currency offers, invoices, trade calculations and ERP in one place.",
  applicationName: "VELOS",
  keywords: [
    "VELOS",
    "trade CRM",
    "trade ERP",
    "multi-currency offers",
    "trade calculator",
    "landed cost",
    "international trade software",
    "commodity trading",
    "multi-tenant",
    "document automation",
  ],
  authors: [{ name: "VELOS" }],
  creator: "VELOS",
  publisher: "VELOS",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.svg", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "VELOS",
    title: "VELOS — Trade CRM & ERP Platform",
    description:
      "International trade CRM with multi-tenancy, compliance, and document automation. Powered by VELOS.",
  },
  twitter: {
    card: "summary",
    title: "VELOS — Trade CRM & ERP Platform",
    description:
      "International trade CRM with multi-tenancy, compliance, and document automation.",
  },
};

export const viewport: Viewport = {
  themeColor: "#B45309",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
