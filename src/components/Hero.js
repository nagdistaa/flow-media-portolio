import { heroImage } from "@/data";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full h-[calc(100vh-50px)] md:h-[30vw] p-5 md:px-52 md:py-30 flex flex-col md:flex-row justify-center items-center  bg-[#F8FAFC] ">
      {/*     TEXT  */}
      <div className="w-full md:w-2/3 h-1/2 md:h-full flex flex-col justify-center items-center md:items-start gap-10">
        <h1 className="font-bold text-5xl text-center md:text-start leading-snug">
          Creative Design & Advertising Solutions
        </h1>
        <p className="text-gray-500 text-3xl text-center md:text-start">
          We make your brand speak, grow, and connect.
        </p>
        <button className="px-5 py-3 bg-[#11161E] text-white rounded-md cursor-pointer text-3xl transition-all hover:-translate-y-1">
          Contact Now
        </button>
      </div>
      {/*     IMAGE */}
      <div className="w-full md:w-1/3  h-1/2 md:h-full  flex flex-col justify-center items-center relative">
        <Image
          src={heroImage}
          fill
          alt="hero image"
          className="object-cover shadow-lg rounded-2xl"
        />
      </div>
    </div>
  );
}
