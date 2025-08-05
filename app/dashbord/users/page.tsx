import UsersTable from "@/components/dashbord/users/usersTable";
import Compelxpagination from "@/components/global/Compelxpagination";
import { fetshUserAdmin } from "@/utils/actions";
import React from "react";

type Props = {
  searchParams?: { Page?: string };
};
async function page({ searchParams }: Props) {
  const Page = parseInt(searchParams?.Page || "1");
  const { Users, metadata } = await fetshUserAdmin({ Page });
  return (
    <div className="min-h-screen  ">
      {/* <EcommerceHeader /> */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Manage user accounts, roles, and permissions
          </p>
        </div>
        <UsersTable Users={Users} />
        <Compelxpagination
          pathe={"dashbord/products"}
          Page={Page}
          metadata={metadata}
        />
      </main>
    </div>
  );
}

export default page;
