"use server";
import React from "react";
import Link from "next/link";
import { logout } from "@/utils/actions";
import { getUserFromSession } from "@/lib/auth";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { cookies } from "next/headers";
async function LogoutBoutton() {
  const user = await getUserFromSession(await cookies());
  if (user == null) return null;
  return (
    <DropdownMenuItem>
      <Link href="/" className="w-full text-left" onClick={logout}>
        Logout
      </Link>
    </DropdownMenuItem>
  );
}

export default LogoutBoutton;
