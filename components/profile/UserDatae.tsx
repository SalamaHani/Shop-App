import React from "react";
import ModeEditP from "./ModeEditP";
import { getUserData } from "@/utils/actions";
import Image from "next/image";
import imgUser from "../../public/imges/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.avif";
import { UserData } from "@/utils/Type";
async function UserDatae() {
  const userData: UserData = await getUserData();
  const { name, image, bio, city } = userData;
  return (
    <>
      <div className="p-5 mb-6 border  rounded-2xl  lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            {image && image != null ? (
              <Image
                src={image}
                alt={"UserName"}
                width={20}
                height={20}
                className="  w-20 h-20 overflow-hidden border border-gray-200 rounded-full"
              />
            ) : (
              <div className="w-20 h-20 flex items-center justify-center  overflow-hidden  bg-gray-600 border-gray-200 rounded-full ">
                <Image
                  src={imgUser}
                  alt={"UserName"}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            )}
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center  dark:text-white/90 xl:text-left">
                {name}
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {bio}
                </p>
                <div className="hidden h-3.5 w-px bg-gray-300  mb-0 xl:block"></div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {city ?? "Address"}
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

export default UserDatae;
