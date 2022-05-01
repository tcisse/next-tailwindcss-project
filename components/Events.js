import React from "react";
import Image from "next/image";

export default function Events() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-extrabold ml-24 mt-8">Popular Events</h1>
        <div className="mt-2">
          <button className="border border-[#C9C9C9] rounded-full  outline-2 bg-[#FFFFFF] px-4 mt-3 ml-24 py-1">
            {" "}
            <Image
              src="/map.svg"
              className=""
              alt="me"
              width="13"
              height="13"
            />{" "}
            Grand Circle, NY
          </button>
          <button className="border border-[#C9C9C9] rounded-full  outline-2 bg-[#FFFFFF] px-4 mt-3 ml-4 py-1">
            <Image
              src="/calendar.svg"
              className="mt-5"
              alt="me"
              width="12"
              height="12"
            />
            Saturday, 13 January 2021
          </button>
        </div>
        <div className="space-x-8 justify-center mt-5 ml-14 mx-5 px-10 text-[#1A144599]">
          <button className="text-[#1660FC]">All</button>
          <button>For You</button>
          <button>Today</button>
          <button>This Weekend</button>
          <button>Holidays Events</button>
          <button>Free Entry</button>
          <button>Music</button>
          <button>Food & Drinks</button>
          <button>Virtual Events</button>
        </div>
        <div className="grid grid-cols-4 gap-14 mt-5 px-20">
          <div className="flex-shrink-0 ml-5 shadow-md">
            <img
              src="https://ideptico.sirv.com/Events-1200x630%202.png"
              className="rounded-md"
            ></img>
            <p className="text-[#165FFC] mt-3 ml-2 rounded-md">
              Dance party Grand Event at New
            </p>
            <p className="text-[#165FFC] ml-2">Castle</p>
            <p className="text-xs ml-2">
              <Image
                src="/mapv.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              American Airline Center, Dallas, TX
            </p>
            <p className="text-xs mt-3 ml-2 text-[#E85353]">
              {" "}
              <Image
                src="/calendarr.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              Fri,Jan 8,2021 5:00 PM CST
            </p>
            <p className="text-xs mt-3 ml-2 mb-3 text-[#000000]">
              {" "}
              <Image
                src="/vector.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              20 miles away{" "}
              <Image
                src="/share.svg"
                className="ml-10"
                alt="me"
                width="13"
                height="13"
              />
            </p>
          </div>

          <div className="flex-shrink-0 ml-5 shadow-md rounded-md">
            {" "}
            <img
              src="https://ideptico.sirv.com/istockphoto-597940046-612x612%202.png"
              className="rounded-md"
            ></img>
            <p className="text-[#165FFC] mt-3 ml-2">
              Business Excellence Event at
            </p>
            <p className="text-[#165FFC] ml-2">Carlton</p>
            <p className="text-xs ml-2">
              <Image
                src="/mapv.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              American Airline Center, Dallas, TX
            </p>
            <p className="text-xs mt-3 ml-2 text-[#E85353]">
              {" "}
              <Image
                src="/calendarr.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              Fri,Jan 8,2021 5:00 PM CST
            </p>
            <p className="text-xs mt-3 ml-2 mb-3 text-[#000000]">
              {" "}
              <Image
                src="/vector.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              20 miles away{" "}
              <Image
                src="/share.svg"
                className="ml-10"
                alt="me"
                width="13"
                height="13"
              />
            </p>
          </div>

          <div className="flex-shrink-0 ml-5 shadow-md rounded-md">
            {" "}
            <img
              src="https://ideptico.sirv.com/hanny-naibaho-aWXVxy8BSzc-unsplash-1024x683%201.png"
              className="rounded-md"
            ></img>
            <p className="text-[#165FFC] mt-3 ml-2">New Year Eve Concert and</p>
            <p className="text-[#165FFC] ml-2">Dance Party</p>
            <p className="text-xs ml-2">
              <Image
                src="/mapv.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              American Airline Center, Dallas, TX
            </p>
            <p className="text-xs mt-3 ml-2 text-[#E85353]">
              {" "}
              <Image
                src="/calendarr.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              Fri,Jan 8,2021 5:00 PM CST
            </p>
            <p className="text-xs mt-3 ml-2 mb-3 text-[#000000]">
              {" "}
              <Image
                src="/vector.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              20 miles away{" "}
              <Image
                src="/share.svg"
                className="ml-10"
                alt="me"
                width="13"
                height="13"
              />
            </p>
          </div>

          <div className="flex-shrink-0 ml-5 shadow-md rounded-md">
            {" "}
            <img
              src="https://ideptico.sirv.com/Unknown%201.png"
              className="rounded-md"
            ></img>
            <p className="text-[#165FFC] mt-3 ml-2">
              Candle Festivals - Light your own{" "}
            </p>
            <p className="text-[#165FFC] ml-2">candle</p>
            <p className="text-xs ml-2">
              <Image
                src="/mapv.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              American Airline Center, Dallas, TX
            </p>
            <p className="text-xs mt-3 ml-2 text-[#E85353]">
              {" "}
              <Image
                src="/calendarr.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              Fri,Jan 8,2021 5:00 PM CST
            </p>
            <p className="text-xs mt-3 ml-2 mb-3 text-[#000000]">
              {" "}
              <Image
                src="/vector.svg"
                className=""
                alt="me"
                width="13"
                height="13"
              />
              20 miles away{" "}
              <Image
                src="/share.svg"
                className="ml-10"
                alt="me"
                width="13"
                height="13"
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-1">
          <button className="border-solid border-2 border-[#C9C9C9] mt-5 py-2 ml-20 px-28 ">
            See More
          </button>
        </div>
      </div>
    </>
  );
}
