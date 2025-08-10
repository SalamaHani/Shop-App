"use client";
import React from "react";
import { useActionState } from "react";
import { Label } from "@radix-ui/react-label";
import { SubmitButton } from "@/components/form/Buttons";
import { sendEamilAction } from "@/utils/actions";
import { ActionResponseere } from "@/utils/Type";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Ban } from "lucide-react";
import { OTPInput } from "@/components/global/otpinput";
const initialState: ActionResponseere = {
  success: false,
  message: "",
};
export default function VerifyEmailPage() {
  const [code, setCode] = React.useState("");
  const [state, action] = useActionState(sendEamilAction, initialState);
  return (
    <div>
      <form action={action}>
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
              Confirm it’s you
            </div>
            <div
              data-slot="card-description"
              className="text-muted-foreground text-sm"
            >
              Enter the 6-digit code sent to your email to verify your account.
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
              <div className="grid gap-3">
                <Label htmlFor="code">Enter 6-digit code</Label>
                <OTPInput
                  value={code}
                  onChange={setCode}
                  length={6}
                  autoFocus
                  className="justify-center"
                />
                <input type="hidden" name="code" value={code} />
              </div>
              {state.errors?.email && (
                <p className="text-red-500 text-xs">{state.errors.email}</p>
              )}
            </div>
          </div>
          <div
            data-slot="card-footer"
            className="flex items-center w-full justify-between px-6 [.border-t]:pt-6"
          >
            <SubmitButton
              text="Verifying"
              size="lg"
              disabled={code.length !== 6}
              className="mt-8 w-full"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
