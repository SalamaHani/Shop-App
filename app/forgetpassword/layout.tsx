import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forget Password to Astorefront | Order Lumps Online Store",
  description:
    "Forget Password  to your Astorefront account to easily order Lamups  Room, and more..",
  keywords: ["sign in", "log in", "login", "online store", "Forget Password "],

  icons: { icon: "/public/vercel.svg" },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-h-screen  flex items-center justify-center ">
      <div className="w-full max-w-md  rounded shadow-md">{children}</div>
    </div>
  );
}
