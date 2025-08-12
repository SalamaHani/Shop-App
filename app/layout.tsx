import type { Metadata } from "next";
import "./globals.css";
import Continer from "@/components/global/Continer";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import Providers from "./Providers";
// export const metadata: Metadata = {
//   title: "Astorefront",
//   description: "A nifty Astorefonte Shope Abagor Laump Lumps cotigers built with Next.js ",
//   keywords: ["Lumps", "online Lumps cotigers", "Table", "sout"],
//   authors: [{ name: "Astorefront" }],
//   icons: {
//     icon: ["/favicon.ico"],
//   },
// };
export const metadata: Metadata = {
  title: "Astorefonte Shop | Furniture, Lamps, Tables & More",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description:
    "Astorefonte Shop offers premium furniture and home decor. Shop modern lamps, elegant tables, cozy sofas, and stylish accessories. Free shipping & easy returns.",
  keywords: [
    "Astorefonte Shop",
    "furniture online store",
    "modern lamps",
    "wooden tables",
    "sofas",
    "home decor",
    "luxury furniture",
    "lighting",
    "interior design",
  ],
  openGraph: {
    title: "Astorefonte Shop | Furniture, Lamps, Tables & More",
    description:
      "Discover high-quality furniture, lamps, tables, and home decor at Astorefonte Shop. Perfect for your home or office.",
    url: "https://astorefonte.shop",
    siteName: "Astorefonte Shop",
    images: [
      {
        url: "https://astorefront.shop/imges/logo.png",
        width: 1200,
        height: 630,
        alt: "Astorefonte Shop furniture and lighting collection",
      },
    ],
    locale: "en_US ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astorefonte Shop | Furniture, Lamps, Tables & More",
    description:
      "Shop stylish furniture and lighting at Astorefonte Shop. Find modern lamps, tables, sofas, and more.",
    images: ["https://astorefront.shop/imges/logo.png"],
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
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b935172a-2298-4a82-ba90-6c62dc4b4ea1"
          type="text/javascript"
          async
        ></Script>
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
