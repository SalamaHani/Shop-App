import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
function signBoutton() {
    const handleLogout = ()=>{
        
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

export default signBoutton;
