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
import { ActionResponsUpdeat } from "@/utils/Type";
import { SubmitButton } from "../form/Buttons";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UpdeatUserDataAction } from "@/utils/actions";
import { toast } from "sonner";
const initialState: ActionResponsUpdeat = {
  success: false,
  message: "",
};
function ModeChangpass() {
  const [state, action] = useActionState(UpdeatUserDataAction, initialState);
  if (state.success) {
    toast.success("chang passwoder");
  }
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
                      placeholder="••••••••"
                      autoComplete="frflr"
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                  <div className="">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Confirm password
                    </Label>
                    <Input
                      name="password_confirmation"
                      placeholder="••••••••"
                      type="text"
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                  </div>
                  <div className="">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Confirm password
                    </Label>
                    <Input
                      name="password_confirmation"
                      placeholder="••••••••"
                      type="text"
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
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
