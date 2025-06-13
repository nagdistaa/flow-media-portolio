import { logo } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[50px] p-2 md:p-10 flex justify-between items-center sticky top-0 left-0 z-10 bg-[#11161E]">
      {/* RIGHT */}
      <div className="w-1/2">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
      </div>
      {/* LEFT */}
      <div className="w-1/2"></div>
    </div>
  );
}
