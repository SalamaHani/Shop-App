import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In to Bacola | Order Fresh Groceries Online Store",
  description:
    "Log in to your Bacola account to easily order your favorite fresh vegetables, fruits, meats, and more..",
  keywords: ["sign in", "log in", "login", "online store"],

  icons: { icon: "/cart-logo-bacola.png" },
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
