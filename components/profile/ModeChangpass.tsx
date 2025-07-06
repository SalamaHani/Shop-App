"use client";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ActionChangePass } from "@/utils/Type";
import { SubmitButton } from "../form/Buttons";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChangePasswordAction } from "@/utils/actions";
import { Alert, AlertDescription } from "../ui/alert";
import { Ban, CheckCircle2 } from "lucide-react";
const initialState: ActionChangePass = {
  success: false,
  message: "",
};
function ModeChangpass() {
  const [state, action] = useActionState(ChangePasswordAction, initialState);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          className="flex w-full items-center  cursor-pointer justify-center gap-2 rounded-full border  lg:inline-flex lg:w-auto"
        >
          Change password
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] ">
        <DialogHeader>
          <DialogTitle>Change password</DialogTitle>
          <DialogDescription>
            Make changes to your Password here. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <form action={action} className="flex flex-col pb-2">
          {state?.message && (
            <Alert
              className="mb-5"
              variant={state.success ? "default" : "destructive"}
            >
              {state.success ? <CheckCircle2 className="h-4 w-4" /> : <Ban />}
              {state.success ? (
                <AlertDescription>{state.message}</AlertDescription>
              ) : state.errors ? (
                <AlertDescription>
                  <div className="text-sm text-red-500">
                    <p>Password must:</p>
                    <ul>
                      {state?.errors?.password?.map((item: string) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </AlertDescription>
              ) : (
                <AlertDescription>{state.message}</AlertDescription>
              )}
            </Alert>
          )}
          <div className="custom-scrollbar overflow-y-auto px-2"></div>
          <div className="mt-7">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-1">
              <div className="col-span-1 lg:col-span-1">
                <>
                  <div className="">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      New Password
                    </Label>
                    <Input
                      name="password"
                      type="password"
                      defaultValue={state.Data?.password}
                      placeholder="••••••••"
                      autoComplete="frflr"
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm  shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  "
                    />
                    {state.errors?.password && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.password}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Confirm password
                    </Label>
                    <Input
                      defaultValue={state.Data?.password_confirmation}
                      name="password_confirmation"
                      placeholder="••••••••"
                      type="text"
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm  shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 "
                    />
                    {state.errors?.password_confirmation && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.password_confirmation}
                      </p>
                    )}
                  </div>
                </>
              </div>
            </div>
          </div>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button size="lg" variant="destructive">
                Cancel
              </Button>
            </DialogClose>
            <SubmitButton text="Save changes" />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ModeChangpass;
