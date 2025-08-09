import React from "react";
import Continer from "../global/Continer";
import Logo from "./Logo";
import CartButton from "./CartButton";
import { Suspense } from "react";
import NavSearch from "./NavSearch";
import DarkMode from "./DarkMode";
import { LinksDropdown } from "./LinksDropdown";

function Navbar() {
  return (
    <>
      <nav className="border-b ">
        <Continer className="flex justify-between md:flex-row md:justify-between md:items-center flex-wrap py-8 gap-4">
          <Logo />
          <Suspense>
            <NavSearch />
          </Suspense>
          <div className=" flex gap-4 items-center  ">
            <CartButton />
            <DarkMode />
            <LinksDropdown />
          </div>
        </Continer>
      </nav>
    </>
  );
}

export default Navbar;
