import { aboutIcon, aboutIcons } from "@/data";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full py-20 p-5 md:px-52 md:py-30 flex flex-col justify-center items-center gap-20">
      {/* TEXT */}
      <div className="w-full md:w-2/3 h-1/2 md:h-full flex flex-col justify-center items-center gap-10">
        <h1 className="font-bold text-3xl text-center">
          About Flow Media
        </h1>
        <p className="text-gray-500 text-xl text-center leading-normal">
          Flow Media is a creative advertising agency dedicated to crafting
          impactful brand experiences. We blend innovative design with strategic
          advertising to help businesses thrive in today&apos;s dynamic market.
        </p>
      </div>
      {/* BOXES */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
        {aboutIcons.map((icon, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/2 py-8 flex flex-col justify-center items-center gap-5 shadow-md hover:shadow-2xl rounded-2xl cursor-pointer"
          >
            <h1>{icon.text}</h1>
            <Image src={icon.icon} width={50} height={50} alt="icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
