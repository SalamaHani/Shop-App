"use client";
import React from "react";
import { useActionState } from "react";
import { ActionUpdeatproduct } from "@/utils/Type";
import { cerateProductAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import Cearetprodcut from "./cearetform";
const initialState: ActionUpdeatproduct = {
  success: false,
  message: "",
};
function ProfidCeratProduct() {
  const [state, action] = useActionState(cerateProductAction, initialState);
  return (
    <form className="" action={action}>
      <div className="col-span-12 h-full lg:col-span-8 border p-4 rounded-lg">
        <Cearetprodcut state={state} />
        <div className=" flex justify-end">
          <SubmitButton text="update product" className="mt-8" />
        </div>
      </div>
    </form>
  );
}

export default ProfidCeratProduct;
