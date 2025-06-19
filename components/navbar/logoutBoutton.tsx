import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { toast } from "sonner";
import { logout } from "@/utils/actions";
import { getSession } from "@/lib/Auth";
function logoutBoutton() {
  const handleLogout = () => {
    logout();
    toast("logout sucssfulu");
  };
  const auth = getSession();
  if (auth == null) {
    return null;
  }

  return (
    <div>
      <Button>
        <Link href="/" className="w-full text-left" onClick={handleLogout}>
          Logout
        </Link>
      </Button>
    </div>
  );
}

export default logoutBoutton;
