"use client";
import React from "react";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { SubmitButton } from "@/components/form/Buttons";
import { resetPasswordAction } from "@/utils/actions";
import { ActionChangePass } from "@/utils/Type";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Ban } from "lucide-react";
import { redirect } from "next/navigation";
const initialState: ActionChangePass = {
  success: false,
  message: "",
};
// type ResetpassProps = {
//   params: Promise<{
//     email: string;
//   }>;
// };
function ResetPass({ email }: { email: string }) {
  const [state, action] = useActionState(resetPasswordAction, initialState);
  if (state.success) redirect("/login");
  return (
    <div>
      <form action={action}>
        <Input name="email" type="hidden" value={email} readOnly />
        {state?.message && (
          <Alert
            className="mb-5"
            variant={state.success ? "default" : "destructive"}
          >
            {state.success ? <CheckCircle2 className="h-4 w-4" /> : <Ban />}
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
        <div
          data-slot="card"
          className="bg-card  text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
        >
          <div
            data-slot="card-header"
            className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" className="font-semibold text-2xl">
              Reset Password
            </div>
            <div
              data-slot="card-description"
              className="text-muted-foreground text-sm"
            >
              Enter your password to res password_confirmation
            </div>
          </div>
          <div data-slot="card-content" className="px-6 flex flex-col gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card text-muted-foreground px-2">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label>New Password</Label>
              <Input
                name="password"
                type="password"
                defaultValue={state.Data?.password}
                placeholder="••••••••"
                autoComplete="frflr"
              />
              {state.errors?.password && (
                <p className="text-red-500 text-xs">{state.errors?.password}</p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Label>Confirm password</Label>
              <Input
                defaultValue={state.Data?.password_confirmation}
                name="password_confirmation"
                placeholder="••••••••"
                type="text"
              />
              {state.errors?.password_confirmation && (
                <p className="text-red-500 text-xs">
                  {state.errors?.password_confirmation}
                </p>
              )}
            </div>
          </div>
          <div
            data-slot="card-footer"
            className="flex items-center  justify-between px-6 [.border-t]:pt-6"
          >
            <SubmitButton text="Sava New password" className="mt-8 " />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPass;