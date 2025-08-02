"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteOrderAction } from "@/utils/actions";
import { ActionChangSutst } from "@/utils/Type";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { startTransition, useActionState } from "react";

function Deletorder({ orderId }: { orderId: string }) {
  const initialState: ActionChangSutst = {
    success: false,
    message: "",
  };
  // const [state, action] = useActionState(handleStatusChange, initialState);
  const [state, action] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (prevState: any, formData: FormData) => {
      const orderId = formData.get("orderId") as string;
      return await deleteOrderAction(orderId);
    },
    initialState
  );
  const router = useRouter();
  console.log(state);
  const handleDelete = (orderId: string) => {
    const formData = new FormData();
    formData.append("orderId", orderId);
    startTransition(() => {
      action(formData);
    });
    router.refresh();
  };
  return (
    <DropdownMenuItem
      onClick={() => handleDelete(orderId)}
      className="text-red-600 dark:text-red-400"
    >
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Order
    </DropdownMenuItem>
  );
}

export default Deletorder;
