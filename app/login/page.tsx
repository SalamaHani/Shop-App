"use client";
import React from "react";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { SubmitButton } from "@/components/form/Buttons";
import { loginUser } from "@/utils/actions";
import Link from "next/link";
import { ActionResponse } from "@/utils/Type";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2 } from "lucide-react";

const initialState: ActionResponse = {
  success: false,
  message: "",
};
function page() {
  const [state, action] = useActionState(loginUser, initialState);
  return (
    <div>
      <form action={action}>
        <div
          data-slot="card"
          className="bg-card mb-5 text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
        >
          <div
            data-slot="card-header"
            className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
          >
            <div data-slot="card-title" className="font-semibold text-2xl">
              Log in
            </div>
            <div
              data-slot="card-description"
              className="text-muted-foreground text-sm"
            >
              Enter your email
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
              <Label htmlFor="email">Your email address</Label>
              <Input name="email" placeholder="m@example.com" type="email" />
              {state.errors?.email && (
                <p className="text-red-500 text-xs">{state.errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="email">Your Password</Label>
              <Input name="password" type="password" />
              {state.errors?.password && (
                <p className="text-red-500 text-xs">{state.errors.password}</p>
              )}
            </div>
          </div>
          <div
            data-slot="card-footer"
            className="flex items-center justify-between px-6 [.border-t]:pt-6"
          >
            <SubmitButton text="Log in" className="mt-8" />
            <Link href="register" className="capitalize mt-8 ">
              Register
            </Link>
          </div>
        </div>
        {state?.message && (
          <Alert variant={state.success ? "default" : "destructive"}>
            {state.success && <CheckCircle2 className="h-4 w-4" />}
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  );
}

export default page;
