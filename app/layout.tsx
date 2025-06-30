import type { Metadata } from "next";
import "./globals.css";
import Continer from "@/components/global/Continer";
import Navbar from "@/components/navbar/Navbar";

import Providers from "./Providers";
export const metadata: Metadata = {
  title: "Astorefront",
  description: "A nifty Astorefonte Shope Abagor Laump  built with Next.js",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <Continer className="py-20">{children}</Continer>
        </Providers>
      </body>
    </html>
  );
}
