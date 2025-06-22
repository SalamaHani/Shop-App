"use client";
import React, { useState } from "react";
import FormContainer from "../form/FormContener";
import { SubmitButton } from "../form/Buttons";
import { Mode } from "./SeleactAmount";
import { addToCartAction } from "@/utils/actions";
import SelectProductAmount from "./SeleactAmount";
function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      <FormContainer action={addToCartAction}>
        <input type="hidden" name="productId" value={productId} />
        <input type="hidden" name="amount" value={amount} />
        <SubmitButton text="Add To Cart" />
      </FormContainer>
    </div>
  );
}

export default AddToCart;
