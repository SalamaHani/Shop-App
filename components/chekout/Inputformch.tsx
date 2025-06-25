import React from "react";
import FormContainer from "../form/FormContener";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Selectcuntery } from "../form/Selectcuntery";
import TextAreaInput from "../form/TextAreaInput";
import { createOrderAction } from "@/utils/actions";
import { Cuanters } from "@/utils/Type";

function Inputformch() {
  return (
    <div className="col-span-12 h-full lg:col-span-8 border p-4 rounded-lg">
      <div className="h-full">
        <FormContainer className="space-y-4" action={createOrderAction}>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="FirstName">
                First Name*
              </Label>
              <Input name="FirstName" id="FirstName" type="text" />
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="FirstName">
                Last Name *
              </Label>
              <Input name="LastName" id="LastName" type="text" />
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
              <Input name="StreetAddress" id="StreetAddress" type="number" />
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="Town">
                Town / City *
              </Label>
              <Input name="Town" id="Town" type="number" />
            </div>
          </div>
          <div>
            <Label className="mb-2" htmlFor="ZIPCode">
              ZIP Code *
            </Label>
            <Input name="ZIPCode" id="ZIPCode" type="number" />
          </div>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="email">
                Email *
              </Label>
              <Input name="email" id="email" type="email" />
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="Phone">
                Phone *
              </Label>
              <Input name="Phone" id="Phone" type="number" />
            </div>
          </div>
          <TextAreaInput
            name="OrderNotes"
            labelText="Order Notes"
            defaultValue="Add any additional instructions or comments here..."
          />
        </FormContainer>
      </div>
    </div>
  );
}

export default Inputformch;
