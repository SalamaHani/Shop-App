"use client";
import React from "react";
import Continer from "../global/Continer";
import { Heart } from "lucide-react";
import Link from "next/link";
function Navbarmedia() {
  return (
    <div>
      <Continer className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <div className="w-full fixed top-0 left-0 bg-white z-50 border-b border-gray-200 shadow-md transition-all duration-300">
          <div className="flex flex-row justify-between items-center max-w-6xl mx-auto px-2 md:py-3 md:px-4">
            <Link href="/favorites" className="w-full text-left">
              <Heart />
            </Link>
            <Link href="/favorites" className="w-full text-left">
              <Heart />
            </Link>
            <Link href="/favorites" className="w-full text-left">
              <Heart />
            </Link>
            <Link href="/favorites" className="w-full text-left">
              <Heart />
            </Link>
          </div>
        </div>
      </Continer>
    </div>
  );
}

export default Navbarmedia;
