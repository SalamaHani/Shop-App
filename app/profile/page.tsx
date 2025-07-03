import TitelSection from "@/components/global/TitelSection";
import UserAderrs from "@/components/profile/UserAderrs";
import UserDatae from "@/components/profile/UserDatae";
import UserPersonal from "@/components/profile/UserPersonal";

import React from "react";

function page() {
  return (
    <>
      <TitelSection text="Profile" />
      <div className="container py-5">
        <div className="rounded-2xl border  bg-white p-5  dark:bg-white/[0.03] lg:p-6">
          <UserDatae />
          <UserPersonal />
          <UserAderrs />
        </div>
      </div>
    </>
  );
}

export default page;
