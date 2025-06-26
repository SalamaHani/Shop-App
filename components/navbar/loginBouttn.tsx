"use server";
import React from "react";
import Link from "next/link";
import { getUserFromSession } from "@/lib/Auth";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { cookies } from "next/headers";
async function LoginBouttn() {
  const user = await getUserFromSession(await cookies());
  if (user != null) return null;
  return (
    <DropdownMenuItem>
      <Link href="/login" className="w-full text-left">
        Login
      </Link>
    </DropdownMenuItem>
  );
}

export default LoginBouttn;
