"use client";
import React, { useState } from "react";
import FormContainer from "../form/FormContener";
import { SubmitButton } from "../form/Buttons";
import { Mode } from "./SeleactAmount";
import { addToCartAction } from "@/utils/actions";
import SelectProductAmount from "./SeleactAmount";
import { usePathname } from "next/navigation";
function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const pathname = usePathname();
  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      <FormContainer className="" action={addToCartAction}>
        <input type="hidden" name="pathname" value={pathname} />
        <input type="hidden" name="productId" value={productId} />
        <input type="hidden" name="amount" value={amount} />
        <SubmitButton text="Add To Cart" className="mt-8" />
      </FormContainer>
    </div>
  );
}

export default AddToCart;
