import Inputformch from "@/components/chekout/Inputformch";
import TitelSection from "@/components/global/TitelSection";
import { getUserFromSession } from "@/lib/Auth";
import { cookies } from "next/headers";
import React from "react";
import { redirect } from "next/navigation";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import Totoalcheacout from "@/components/chekout/Totoalcheacout";

async function page() {
  const user = await getUserFromSession(await cookies());
  if (user == null) return redirect("/");
  const cart = await fetchOrCreateCart({ userID: user.id });
  const { currentCart } = await updateCart(cart);
  return (
    <div>
      <TitelSection text="Shopping Checkout" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <Inputformch />
        <div className="lg:col-span-4">
          <Totoalcheacout cart={currentCart} />
        </div>
      </div>
    </div>
  );
}

export default page;
