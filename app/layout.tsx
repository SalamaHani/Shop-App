import type { Metadata } from "next";

import "./globals.css";
import Continer from "@/components/global/Continer";
import Navbar from "@/components/navbar/Navbar";

import Providers from "./Providers";
export const metadata: Metadata = {
  title: "Next Storefront",
  description: "A nifty store built with Next.js",
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
