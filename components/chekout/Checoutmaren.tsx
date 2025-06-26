"use client";
import React from "react";
import { useActionState } from "react";
import Inputformch from "@/components/chekout/Inputformch";
import Totoalcheacout from "./Totoalcheacout";
import { ActionResponse, currenteCart } from "@/utils/Type";
import { getdataformAction } from "@/utils/actions";
const initialState: ActionResponse = {
  success: false,
  message: "",
};
function Checoutmaren({ currentCart }: { currentCart: currenteCart }) {
  const [state, action] = useActionState(getdataformAction, initialState);
  return (
    <div>
      <form
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6"
        action={action}
      >
        <Inputformch state={state} />
        <Totoalcheacout cart={currentCart} />
      </form>
    </div>
  );
}

export default Checoutmaren;
