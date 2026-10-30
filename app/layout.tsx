import type { Metadata, Viewport } from "next";
import "./globals.css";

const DESCRIPTION = "アプリとメディアを、ひとりで作っています。";

const BASE_PATH = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "茶屋 — ポートフォリオ",
  description: DESCRIPTION,
  icons: {
    icon: `${BASE_PATH}/images/emblem.webp`,
  },
  openGraph: {
    title: "茶屋 — ポートフォリオ",
    description: DESCRIPTION,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c101f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
