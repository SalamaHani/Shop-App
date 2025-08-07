"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Selectcuntery } from "../form/Selectcuntery";
import TextAreaInput from "../form/TextAreaInput";
import { ActionResponse, Cuanters } from "@/utils/Type";
import { Ban, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

function Inputformch({ state }: { state: ActionResponse }) {
  return (
    <div className="col-span-12 h-full lg:col-span-8 border p-4 rounded-lg">
      {state?.message && (
        <Alert
          className="mb-5"
          variant={state.success ? "default" : "destructive"}
        >
          {state.success ? <CheckCircle2 className="h-4 w-4" /> : <Ban />}
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      <div className="h-full">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="FirstName">
                First Name<span className="text-red-500">*</span>
              </Label>
              <Input
                name="FirstName"
                id="FirstName"
                type="text"
                defaultValue={state.Data?.FirstName}
                className={state?.errors?.FirstName ? "border-red-500" : ""}
              />
              {state.errors?.FirstName && (
                <p className="text-red-500 text-xs">{state.errors.FirstName}</p>
              )}
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="FirstName">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input
                name="LastName"
                id="LastName"
                type="text"
                defaultValue={state.Data?.LastName}
                className={state?.errors?.LastName ? "border-red-500" : ""}
              />
              {state.errors?.LastName && (
                <p className="text-red-500 text-xs">{state.errors.LastName}</p>
              )}
            </div>
          </div>
          <div>
            <Label className="mb-2">
              Country / Region <span className="text-red-500">*</span>
            </Label>
            <Selectcuntery Arr={Cuanters} />
          </div>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="StreetAddress ">
                Street Address <span className="text-red-500">*</span>
              </Label>
              <Input
                name="StreetAddress"
                id="StreetAddress"
                defaultValue={state.Data?.StreetAddress}
                type="number"
                className={state?.errors?.StreetAddress ? "border-red-500" : ""}
              />
              {state.errors?.StreetAddress && (
                <p className="text-red-500 text-xs">
                  {state.errors.StreetAddress}
                </p>
              )}
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="Town">
                Town / City <span className="text-red-500">*</span>
              </Label>
              <Input
                name="Town"
                id="Town"
                defaultValue={state.Data?.Town}
                type="text"
                className={state?.errors?.Town ? "border-red-500" : ""}
              />
              {state.errors?.Town && (
                <p className="text-red-500 text-xs">{state.errors.Town}</p>
              )}
            </div>
          </div>
          <div>
            <Label className="mb-2" htmlFor="ZIPCode">
              ZIP Code <span className="text-red-500">*</span>
            </Label>
            <Input
              name="ZIPCode"
              defaultValue={state.Data?.ZIPCode}
              id="ZIPCode"
              type="number"
              className={state?.errors?.ZIPCode ? "border-red-500" : ""}
            />
            {state.errors?.ZIPCode && (
              <p className="text-red-500 text-xs">{state.errors.ZIPCode}</p>
            )}
          </div>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                name="email"
                id="email"
                defaultValue={state.Data?.email}
                type="email"
                className={state?.errors?.email ? "border-red-500" : ""}
              />
              {state.errors?.email && (
                <p className="text-red-500 text-xs">{state.errors.email}</p>
              )}
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="Phone">
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                name="Phone"
                id="Phone"
                defaultValue={state.Data?.Phone}
                type="number"
                className={state?.errors?.Phone ? "border-red-500" : ""}
              />
              {state.errors?.Phone && (
                <p className="text-red-500 text-xs">{state.errors.Phone}</p>
              )}
            </div>
          </div>
          <TextAreaInput
            name="OrderNotes"
            labelText="Order Notes"
            defaultValue="Add any additional instructions or comments here..."
          />
        </div>
      </div>
    </div>
  );
}

export default Inputformch;
