import { RecoilRoot } from "recoil";

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
      {/* <CustomCursor data={data} /> */}
    </html>
  );
}

export default function StatefulMicrowave() {
  return (
    <RecoilRoot>
      <Microwave />
    </RecoilRoot>
  );
}
