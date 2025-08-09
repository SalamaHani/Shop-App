"use client";

import CheckboxInput from "@/components/form/checboxinput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionUpdeatproduct, producte } from "@/utils/Type";
import { Ban, CheckCircle2 } from "lucide-react";

function Editprodcut({
  state,
  Product,
}: {
  state: ActionUpdeatproduct;
  Product: producte;
}) {
  const { name, image, company, description, featured, price } = Product;
  return (
    <>
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
                <input type="hidden" name="url" value={image} />
              </div>
            </div>
            {state.errors?.image && (
              <p className="text-red-500 text-xs">{state.errors?.image}</p>
            )}
          </div>
          <div className="flex gap-4">
            <div className="w-[100%]">
              <Label className="mb-2" htmlFor="FirstName">
                Name*
              </Label>
              <Input
                name="name"
                id="name"
                type="text"
                defaultValue={name ?? state.Data?.name}
                className={state?.errors?.name ? "border-red-500" : ""}
              />
              {state.errors?.name && (
                <p className="text-red-500 text-xs">{state.errors.name}</p>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="company ">
                company*
              </Label>
              <Input
                name="company"
                id="company"
                defaultValue={company ?? state.Data?.company}
                type="text"
                className={state?.errors?.company ? "border-red-500" : ""}
              />
              {state.errors?.company && (
                <p className="text-red-500 text-xs">{state.errors.company}</p>
              )}
            </div>
            <div className="w-[50%]">
              <Label className="mb-2" htmlFor="price">
                price*
              </Label>
              <Input
                name="price"
                id="price"
                defaultValue={price ?? state.Data?.price}
                type="text"
                className={state?.errors?.price ? "border-red-500" : ""}
              />
              {state.errors?.price && (
                <p className="text-red-500 text-xs">{state.errors.price}</p>
              )}
            </div>
          </div>
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured ?? state.Data?.featured}
            />
          </div>
          <TextAreaInput
            name="description"
            labelText="description Product"
            defaultValue={description ?? state.Data?.description}
          />
        </div>
      </div>
    </>
  );
}

export default Editprodcut;
