"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { actionFunction } from "@/utils/Type";
import { cn } from "@/lib/utils";

const initialState = {
  message: "",
  errors: {},
};

function FormContainer({
  className = "",
  action,
  children,
}: {
  className: string;
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  useEffect(() => {
    if (state.message) {
      toast.error("", { description: state.message });
    }
  }, [state]);
  return (
    <form className={cn("capitalize", className)} action={formAction}>
      {children}
    </form>
  );
}
export default FormContainer;
