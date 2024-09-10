import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Gloock = localFont({
  src: "./fonts/Gloock.woff2",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "matt novelli",
  description: "mattnovelli is a man who made a website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Gloock.className}`}>{children}</body>
    </html>
  );
}
