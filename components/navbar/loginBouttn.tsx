"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getSession } from "@/lib/Auth";

function loginBouttn() {
  const auth = getSession();
  if (auth == null) return null;
  return (
    <div>
      <Button>
        <Link href="/login" className="w-full text-left">
          Login
        </Link>
      </Button>
    </div>
  );
}

export default loginBouttn;
