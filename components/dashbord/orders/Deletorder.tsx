"use client";

import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContener";
import { deleteOrdertAction } from "@/utils/actions";
 export default function Deletorder({ orderId }: { orderId: string }) {
  const deleteProduct = deleteOrdertAction.bind(null, { orderId });
  return (
    <FormContainer className="" action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}