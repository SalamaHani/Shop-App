import React from "react";
import ModeEditP from "./ModeEditP";
import { getUserData } from "@/utils/actions";
import { UserData } from "@/utils/Type";

async function UserPersonal() {
  const userData: UserData = await getUserData();
  const { name, email, phone } = userData;
  return (
    <div className="p-5 mb-6 border rounded-2xl  lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Name
              </p>
              <p className="text-sm font-medium  dark:text-white/90">
                {name ?? "LN"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Email address
              </p>
              <p className="text-sm font-medium  dark:text-white/90">{email}</p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Phone
              </p>
              <p className="text-sm font-medium  dark:text-white/90">
                {phone ?? "+977 ..."}
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Password
              </p>
              <p className="text-sm font-medium dark:text-white/90">
                {"••••••••"}
              </p>
            </div>
          </div>
        </div>
        <div>
          <ModeEditP />
        </div>
      </div>
    </div>
  );
}

export default UserPersonal;
