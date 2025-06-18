"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/Type";

const initialState = {
  message: "",
  exeption: {},
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  console.log(state)
  useEffect(() => {
    if (state.message) {
      toast.error("", { description: state.message });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
