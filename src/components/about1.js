import React from "react";
import HeroPic from "../images/about-hero1.png";
import Image from "next/image";
function about1() {
  return (
    <>
      <div className="grid grid-cols-1 pl-7 md:grid-cols-2 md:pl-24 md:mx-auto">
        <div className="">
          <h1 className="text-[#09A6FF] text-xl font-bold">
            Enthusiastic Team of Experts
          </h1>
          <h1 className="text-3xl font-bold mt-3 md:text-7xl">
            We are the
            <span className="text-[#D5AC3C]"> bears.</span>
          </h1>
          <br />
          <h1 className="text-lg">
            and we build great products (thats what our clients say)
          </h1>
          <br />

          <button class="bg-black hover:bg-[#D3F0FF] hover:border-black hover:border-2 text-white py-3 px-9 rounded-full">
            Build Your Team
          </button>
          {/* <h1>Manage<span>Everything Else</span></h1> */}
        </div>
        <div className="ml-14 md:relative bottom-16">
          <Image src={HeroPic} className="w-4/5" />
        </div>
      </div>
    </>
  );
}

export default about1;
