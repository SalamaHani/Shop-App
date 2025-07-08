import Providers from "../Providers";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Astorefront | Dashbord |",
  description: "A nifty Astorefonte Shope Abagor Laump  built with Next.js",
  keywords: ["Lumps", "online Lumps cotigers", "Table", "sout"],
  authors: [{ name: "Astorefront" }],
  icons: {
    icon: ["/favicon.ico"],
  },
};
function DashbordLayout({ children }: { children: React.ReactNode }) {
  return <Providers>{children}</Providers>;
}
export default DashbordLayout;
