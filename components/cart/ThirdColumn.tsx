"use client";
import { useState } from "react";
import { SubmitButton } from "../form/Buttons";
import SelectProductAmount, { Mode } from "../singel-product/SeleactAmount";
import FormContainer from "../form/FormContener";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    setIsLoading(false);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
