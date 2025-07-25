import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

import { ShoppingBag } from "lucide-react";

function Logo() {
  return (
    <div>
      <Button>
        <Link href="/">
          <ShoppingBag className="w-6 h-6" />
        </Link>
      </Button>
    </div>
  );
}

export default Logo;
