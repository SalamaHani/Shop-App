import TitelSection from "@/components/global/TitelSection";
import { getUserFromSession } from "@/lib/auth";
import { cookies } from "next/headers";
import React from "react";
import { redirect } from "next/navigation";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import Checoutmaren from "@/components/chekout/Checoutmaren";

async function page() {
  const user = await getUserFromSession(await cookies());
  if (user == null) return redirect("/");
  const cart = await fetchOrCreateCart({ userID: user.id });
  const { currentCart } = await updateCart(cart);

  return (
    <>
      <TitelSection text="Shopping Checkout" />
      <Checoutmaren currentCart={currentCart} />
    </>
  );
}

export default page;
