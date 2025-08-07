import FormUserE from "@/components/dashbord/users/FormUserE";
import TitelSection from "@/components/global/TitelSection";
import { fetchAdminUserDetail } from "@/utils/actions";
import React from "react";

async function EdietUsers({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await fetchAdminUserDetail(id);
  return (
    <div>
      <TitelSection text="Cearet User" />
      <FormUserE user={user} />
    </div>
  );
}

export default EdietUsers;
