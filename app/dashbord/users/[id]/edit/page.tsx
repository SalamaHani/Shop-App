import FormUserE from "@/components/dashbord/users/FormUserE";
import TitelSection from "@/components/global/TitelSection";
import { fetchAdminUserDetail } from "@/utils/actions";
import React from "react";
type UserEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};
async function EdietUsers({ params }: UserEditPageProps) {
  const { id } = await params;
  const user = await fetchAdminUserDetail(id);
  return (
    <div>
      <TitelSection text="Cearet User" />
      <FormUserE user={user} />
    </div>
  );
}

export default EdietUsers;
