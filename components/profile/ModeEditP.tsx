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
import { Input } from "../ui/input";
import { SubmitButton } from "../form/Buttons";
import { UpdeatUserDataAction } from "@/utils/actions";
import { ActionResponsUpdeat } from "@/utils/Type";
import { Label } from "../ui/label";
import { Alert, AlertDescription } from "../ui/alert";
import { Ban, CheckCircle2 } from "lucide-react";
const initialState: ActionResponsUpdeat = {
  success: false,
  message: "",
};
function ModeEditP() {
  const [state, action] = useActionState(UpdeatUserDataAction, initialState);
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex w-full items-center cursor-pointer justify-center gap-2 rounded-full border  lg:inline-flex lg:w-auto">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[725px] ">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
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
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <div className="custom-scrollbar h-[450px] overflow-y-auto px-2">
              <div>
                <h5 className="mb-5 text-lg font-medium  dark:text-white/90 lg:mb-6">
                  Update Image Product
                </h5>
                <div
                  className={
                    state.errors?.image
                      ? `border-red-500  dark:hover:border-brand-500 w-full rounded-xl border border-dashed  bg-gray-50 p-7 lg:p-10 dark:border-gray-700  dz-clickable`
                      : ` hover:border-green-500 dark:hover:border-brand-500 w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 p-7 lg:p-10 dark:border-gray-700  dz-clickable`
                  }
                >
                  <div className="dz-message m-0 ">
                    <Label
                      htmlFor="image"
                      className="flex items-center justify-center"
                    >
                      <div className="mb-[20px] flex  items-center justify-center">
                        <div className=" flex h-[68px] w-[68px]  items-center justify-center rounded-full bg-gray-200 text-gray-700  dark:text-gray-400">
                          <svg
                            className="fill-current"
                            width="29"
                            height="28"
                            viewBox="0 0 29 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5019 3.91699C14.2852 3.91699 14.0899 4.00891 13.953 4.15589L8.57363 9.53186C8.28065 9.82466 8.2805 10.2995 8.5733 10.5925C8.8661 10.8855 9.34097 10.8857 9.63396 10.5929L13.7519 6.47752V18.667C13.7519 19.0812 14.0877 19.417 14.5019 19.417C14.9161 19.417 15.2519 19.0812 15.2519 18.667V6.48234L19.3653 10.5929C19.6583 10.8857 20.1332 10.8855 20.426 10.5925C20.7188 10.2995 20.7186 9.82463 20.4256 9.53184L15.0838 4.19378C14.9463 4.02488 14.7367 3.91699 14.5019 3.91699ZM5.91626 18.667C5.91626 18.2528 5.58047 17.917 5.16626 17.917C4.75205 17.917 4.41626 18.2528 4.41626 18.667V21.8337C4.41626 23.0763 5.42362 24.0837 6.66626 24.0837H22.3339C23.5766 24.0837 24.5839 23.0763 24.5839 21.8337V18.667C24.5839 18.2528 24.2482 17.917 23.8339 17.917C23.4197 17.917 23.0839 18.2528 23.0839 18.667V21.8337C23.0839 22.2479 22.7482 22.5837 22.3339 22.5837H6.66626C6.25205 22.5837 5.91626 22.2479 5.91626 21.8337V18.667Z"
                              fill=""
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </Label>
                    <Input
                      hidden
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      defaultValue={state.Data?.image}
                    />
                  </div>
                </div>
                {state.errors?.image && (
                  <p className="text-red-500 text-xs">{state.errors?.image}</p>
                )}
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                  Personal Information
                </h5>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Name
                    </Label>
                    <Input
                      name="name"
                      type="text"
                      defaultValue={state.Data?.name ?? ""}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {state.errors?.name && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.name}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Email Address
                    </Label>
                    <Input
                      name="email"
                      type="text"
                      defaultValue={state.Data?.email}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {state.errors?.email && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.email}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Phone
                    </Label>
                    <Input
                      name="phone"
                      type="text"
                      defaultValue={state.Data?.phone}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {state.errors?.phone && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.phone}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Bio
                    </Label>
                    <Input
                      name="bio"
                      type="text"
                      defaultValue={state.Data?.bio ?? "Team Manager"}
                      className="dark:bg-dark-900 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {state.errors?.bio && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.bio}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Country
                    </Label>
                    <Input
                      name="country"
                      type="text"
                      defaultValue={state.Data?.country ?? "United States"}
                      className=" h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {state.errors?.country && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.country}
                      </p>
                    )}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      City/State
                    </Label>
                    <Input
                      name="city"
                      type="text"
                      defaultValue={
                        state.Data?.city ?? "Arizona, United States."
                      }
                      className=" h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {state.errors?.city && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.city}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <Label className="mb-1.5 block text-sm font-medium">
                      TAX ID
                    </Label>
                    <Input
                      name="streetAddress"
                      type="text"
                      defaultValue={state.Data?.streetAddress}
                      className=" h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent bg-none px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700  dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    />
                    {state.errors?.streetAddress && (
                      <p className="text-red-500 text-xs">
                        {state.errors?.streetAddress}
                      </p>
                    )}
                  </div>
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
    </>
  );
}

export default ModeEditP;
