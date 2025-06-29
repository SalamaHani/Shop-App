import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In or Log in to Astorefront | Order Lumps Online Store",
  description:
    "Log in to your Astorefront account to easily order Lamups  Room, and more..",
  keywords: ["sign in", "log in", "login", "online store"],

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
