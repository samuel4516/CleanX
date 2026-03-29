import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanX Reinigung | Upholstery & Carpet Cleaning in Munich",
  description:
    "CleanX Reinigung offers professional upholstery, sofa, mattress, and carpet cleaning in Munich with quick photo-based estimates and easy booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
