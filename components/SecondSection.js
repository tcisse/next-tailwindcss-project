import React from "react";

function SecondSection() {
  return (
    <div>
      <div className="bg-hero m-10 w-1232.27px h-604.73px"></div>
      <div className="bg-[url('https://isperear.sirv.com/nextjs/image.png')]  ml-20 mr-20">
        <div className="grid grid-cols-2">
          <div className="">
            <img
              className="mx-72"
              width="345px"
              height="698px"
              src="https://isperear.sirv.com/nextjs/image%20(1).png"
              alt=""
            />
          </div>
          <div className="mt-24">
            <h1 className="text-6xl font-bold">
              Find <br /> <span className="text-blue-500">Best Events</span>{" "}
              <br /> happening <br /> in Your Area
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-7 ">
        <div className="">
          <h1 className="ml-20 text-[#1A1445] font-semibold text-3xl">
            Find Nearby Exiciting
          </h1>
          <h1 className="ml-20 text-[#1A1445] font-semibold text-3xl">
            Events
          </h1>
          <p className="px-20 pt-10 h-20">
            Event Moon is the ultimate tour guide to all things fun in your
            area!
          </p>
          <p className="px-20">
            We have been in the business of connecting people to events for more
          </p>
          <p className="px-20">
            than 15 years. Our platform has evolved into a massive database, but
            we
          </p>
          <p className="px-20">
            nave taken the experience to a completely new level.
          </p>
          <br></br>
          <button className="text-white font-semibold bg-blue-500 border  px-9 py-3 ml-40  rounded-full">
            Download The App
          </button>
        </div>
        <div className="bottom 1/3 ">
          <img src="https://ideptico.sirv.com/image%20(1).png"></img>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
