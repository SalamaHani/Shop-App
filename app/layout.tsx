import type { Metadata } from "next";
import "./globals.css";
import Continer from "@/components/global/Continer";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import Providers from "./Providers";
export const metadata: Metadata = {
  title: "Astorefront",
  description: "A nifty Astorefonte Shope Abagor Laump  built with Next.js",
  keywords: ["Lumps", "online Lumps cotigers", "Table", "sout"],
  authors: [{ name: "Astorefront" }],
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TCGCG33TF2"
        ></Script>
        <Script id="google-analytics">
          {`
                window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-TCGCG33TF2');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <Navbar />
          <Continer className="py-10">{children}</Continer>
        </Providers>
      </body>
    </html>
  );
}
