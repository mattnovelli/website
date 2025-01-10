// import CustomCursor from "./CustomCursor";
import CustomCursor from "./CustomCursor";
import "./globals.css";
export const metadata = {
  title: "feed heater",
  description: "heat your feed",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await fetch("https://www.mattnovelli.com/working.ani");
  const data = new Uint8Array(await response.arrayBuffer());

  return (
    <html lang="en">
      <body>{children}</body>
      <CustomCursor data={data} />
    </html>
  );
}
