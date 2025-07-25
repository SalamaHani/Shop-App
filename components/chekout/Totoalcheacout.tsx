import React from "react";
import { Card, CardTitle } from "../ui/card";
import { formatCurrency } from "@/utils/format";
import { Separator } from "@/components/ui/separator";
import { SubmitButton } from "../form/Buttons";
import { Cart } from "@prisma/client";
import { Checkbox } from "../ui/checkbox";
import { Label } from "@radix-ui/react-dropdown-menu";
import SeleactMethoudpay from "./SeleactMethoudpay";
function Totoalcheacout({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <Card className="col-span-12 lg:col-span-4 border  rounded-lg p-8">
      <CartTotalRow label="Subtotal" amount={cartTotal} />
      <CartTotalRow label="Shipping" amount={shipping} />
      <CartTotalRow label="Tax" amount={tax} />
      <CardTitle className="mt-3">
        <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
      </CardTitle>
      <Separator className="" />
      <SeleactMethoudpay />
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label className="text-xs">
          I have read and agree to the website terms and conditions
        </Label>
      </div>
      <SubmitButton text="Place Order" className="w-full " />
    </Card>
  );
}
function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between  text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="" />}
    </>
  );
}

export default Totoalcheacout;
