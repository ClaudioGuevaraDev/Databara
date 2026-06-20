import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Databara — A modern PostgreSQL desktop client",
  description:
    "Databara is a fast, lightweight, native desktop database client for PostgreSQL. Built with Tauri, React and Rust. Free and open source.",
  icons: {
    icon: "/databara-logo.png",
  },
  openGraph: {
    title: "Databara — A modern PostgreSQL desktop client",
    description:
      "Fast, native, and lightweight. A desktop client for PostgreSQL — free and open source.",
    images: ["/databara-logo.png"],
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
