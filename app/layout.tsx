import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "./components/site-footer";
import { LanguageProvider } from "./components/language-provider";

export const metadata: Metadata = {
  title: "CleanX Reinigung | Cleaning & Home Services in Munich",
  description:
    "CleanX Reinigung offers cleaning and home services in Munich, including upholstery cleaning, deep cleaning, windows, move-out cleaning, post-renovation cleaning, repairs, and furniture assembly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
