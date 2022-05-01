import React from "react";

export default function Festival() {
  return (
    <div className="mt-10 mr-6">
      <h1 className="font-extrabold text-center mt-32 text-4xl">
        Top Online Events Near You
      </h1>
      <p className="text-[#000000] text-center mt-2 ">
        Don’t miss out on any event happening around you
      </p>
      <div className="ml-24 mr-6 grid sm:grid-cols-2 md:grid-cols-4 gap-0 mt-6">
        <div className="rounded-lg h-80 w-56 bg-[url('https://ideptico.sirv.com/event-marketing-ideas%201.png')]">
          <ul>
            <li className="text-white font-semibold mt-64 ml-2">
              New Year Eve Party
            </li>
            <li className="text-white text-sm mt-1 ml-2">
              Saturday 3 Jan 2021
            </li>
          </ul>
        </div>
        <div className="rounded-lg h-80 w-56 bg-[url('https://ideptico.sirv.com/istockphoto-597940046-612x612%203.png')]">
          <ul>
            <li className="text-white font-semibold mt-64 ml-2">
              Coporate Event
            </li>
            <li className="text-white text-sm mt-1 ml-2">
              Saturday 3 Jan 2021
            </li>
          </ul>
        </div>

        <div className="rounded-lg h-80 w-56 bg-[url('https://ideptico.sirv.com/Events%20Management%20festival%20image%201.png')]">
          <ul>
            <li className="text-white font-semibold mt-64 ml-2">
              Light The Candle
            </li>
            <li className="text-white text-sm mt-1 ml-2">
              Saturday 3 Jan 2021
            </li>
          </ul>
        </div>

        <div className="rounded-lg h-80 w-56 bg-[url('https://ideptico.sirv.com/Events-1200x630%203.png')]">
          <ul>
            <li className="text-white font-semibold mt-64 ml-2">Rave Event</li>
            <li className="text-white text-sm mt-1 ml-2">
              Saturday 3 Jan 2021
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="text-white  font-semibold bg-blue-500 border  py-3 pr-12 pl-12 px-5   rounded-full">
          Download The App
        </button>
      </div>
    </div>
  );
}
