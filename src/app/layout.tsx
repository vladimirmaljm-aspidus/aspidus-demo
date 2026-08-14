import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Aspidus — Trade CRM & ERP Platform",
  description:
    "Aspidus is the all-in-one trade CRM & ERP platform for international trading houses. Manage partners, multi-currency offers, invoices, trade calculations and ERP in one place.",
  keywords: [
    "trade CRM",
    "trade ERP",
    "multi-currency offers",
    "trade calculator",
    "landed cost",
    "international trade software",
  ],
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
