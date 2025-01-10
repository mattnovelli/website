import { convertAniBinaryToCSS } from "ani-cursor";
import CustomCursor from "./CustomCursor";
import "./globals.css";
import { RecoilRoot } from "recoil";
export const metadata = {
  title: "feed heater",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch("http://localhost:3000/working.ani");
  const data = new Uint8Array(await response.arrayBuffer());

  return (
    <html lang="en">
      <body>{children}</body>
      <CustomCursor data={data} />
    </html>
  );
}
