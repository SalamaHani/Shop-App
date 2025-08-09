"use client";
import React from "react";
import { useActionState } from "react";
import { ActionUpdeatproduct, producte } from "@/utils/Type";
import { updateProductAction } from "@/utils/actions";
import Editprodcut from "./editprodut";
import { SubmitButton } from "@/components/form/Buttons";
const initialState: ActionUpdeatproduct = {
  success: false,
  message: "",
};
function Dataget({ Product, id }: { Product: producte; id: string }) {
  const [state, action] = useActionState(updateProductAction, initialState);
  return (
    <form className="" action={action}>
      <div className="col-span-12 h-full lg:col-span-8 border p-4 rounded-lg">
        <input readOnly type="hidden" name="id" value={id} />
        <Editprodcut Product={Product} state={state} />
        <div className=" flex justify-end">
          <SubmitButton text="update product" className="mt-8" />
        </div>
      </div>
    </form>
  );
}

export default Dataget;
