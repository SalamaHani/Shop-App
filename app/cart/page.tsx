import CartItemList from "@/components/cart/CartItemList";
import CartToals from "@/components/cart/CartToals";
import TitelSection from "@/components/global/TitelSection";
import { getUserFromSession } from "@/lib/auth";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await getUserFromSession(await cookies());
  if (user == null) return redirect("/");
  const cart = await fetchOrCreateCart({ userID: user.id });
  const { cartItems, currentCart } = await updateCart(cart);
  if (cartItems.length === 0) return <TitelSection text="Empty Cart" />;
  return (
    <>
      <TitelSection text="Shopping Cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4">
          <CartToals cart={currentCart} />
        </div>
      </div>
    </>
  );
}

export default page;
