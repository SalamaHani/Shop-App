import { getUserData } from "@/utils/actions";
import React from "react";
import ModeEditP from "./ModeEditP";
import { UserData } from "@/utils/Type";

async function UserAderrs() {
   const userData: UserData | null = await getUserData();
  if(userData === null) return <h1>no data</h1>
  const { city, streetAddress, country } = userData;
  return (
    <>
      <div className="p-5 border  rounded-2xl  lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold dark:text-white/90 lg:mb-6">
              Address
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Country
                </p>
                <p className="text-sm font-medium dark:text-white/90">
                  {country ?? " United States"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  City/State
                </p>
                <p className="text-sm font-medium  dark:text-white/90">
                  {city ?? "Arizona, United States."}
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  TAX ID
                </p>
                <p className="text-sm font-medium  dark:text-white/90">
                  {streetAddress ?? "AS4568384"}
                </p>
              </div>
            </div>
          </div>
          <div>
            <ModeEditP />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAderrs;
