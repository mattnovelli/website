import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
