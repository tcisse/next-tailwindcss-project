import React from "react";
import Image from "next/image";

export default function FirstSection() {
  return (
    <div className="w-screen bg-[#F8F8F8] h-14 space-x-5 ">
      <button className="border border-[#C9C9C9] rounded-full  outline-2 bg-[#FFFFFF] px-4 mt-3 ml-24 py-1">
        <Image src="/map.svg" className="" alt="me" width="13" height="13" />
        Grand Circle, NY
      </button>
      <button className="border border-[#C9C9C9] rounded-full  outline-2 bg-[#FFFFFF] px-4 mt-3 ml-4 py-1">
        <Image
          src="/calendar.svg"
          className=""
          alt="me"
          width="12"
          height="12"
        />
        Saturday, 13 January 2021
      </button>
      <a className="my-10">There are 30 Events Happening in your area</a>
      <a className="my-10 mr-9 ml-20 text-[#165FFC] ">
        See all Events
        <Image src="/arrow.svg" className="" alt="me" width="13" height="13" />
      </a>
    </div>
  );
}
