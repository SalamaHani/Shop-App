"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Selectcuntery } from "../form/Selectcuntery";
import TextAreaInput from "../form/TextAreaInput";
import { ActionResponse, Cuanters } from "@/utils/Type";
import { CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

function Inputformch({ state }: { state: ActionResponse }) {
  return (
    <div className="col-span-12 h-full lg:col-span-8 border p-4 rounded-lg">
      <div className="h-full">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="FirstName">
                First Name*
              </Label>
              <Input
                name="FirstName"
                id="FirstName"
                type="text"
                className={state?.errors?.FirstName ? "border-red-500" : ""}
              />
              {state.errors?.FirstName && (
                <p className="text-red-500 text-xs">{state.errors.FirstName}</p>
              )}
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="FirstName">
                Last Name *
              </Label>
              <Input
                name="LastName"
                id="LastName"
                type="text"
                className={state?.errors?.LastName ? "border-red-500" : ""}
              />
              {state.errors?.LastName && (
                <p className="text-red-500 text-xs">{state.errors.LastName}</p>
              )}
            </div>
          </div>
          <div>
            <Label className="mb-2">Country / Region *</Label>
            <Selectcuntery Arr={Cuanters} />
          </div>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="StreetAddress ">
                Street Address *
              </Label>
              <Input
                name="StreetAddress"
                id="StreetAddress"
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
                Town / City *
              </Label>
              <Input
                name="Town"
                id="Town"
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
              ZIP Code *
            </Label>
            <Input
              name="ZIPCode"
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
                Email *
              </Label>
              <Input
                name="email"
                id="email"
                type="email"
                className={state?.errors?.email ? "border-red-500" : ""}
              />
              {state.errors?.email && (
                <p className="text-red-500 text-xs">{state.errors.email}</p>
              )}
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="Phone">
                Phone *
              </Label>
              <Input
                name="Phone"
                id="Phone"
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
          {state?.message && (
            <Alert variant={state.success ? "default" : "destructive"}>
              {state.success && <CheckCircle2 className="h-4 w-4" />}
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default Inputformch;
