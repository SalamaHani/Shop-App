import { fetchAdminUserDetail } from "@/utils/actions";
import React from "react";

async function EdietUsers({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = await fetchAdminUserDetail(id);
  return (
    <div>
      <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize">
          Edit User Data
        </h1>
        {user.name}
      </section>
    </div>
  );
}

export default EdietUsers;
