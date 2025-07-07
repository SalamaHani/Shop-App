import Continer from "@/components/global/Continer";
import Providers from "../Providers";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Astorefront | Dashbord | Admin",
  description: "A nifty Astorefonte Shope Abagor Laump  built with Next.js",
  keywords: ["Lumps", "online Lumps cotigers", "Table", "sout"],
  authors: [{ name: "Astorefront" }],
  icons: {
    icon: ["/favicon.ico"],
  },
};
function DashbordLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Continer className="py-20">{children}</Continer>
        </Providers>
      </body>
    </html>
  );
}
export default DashbordLayout;
