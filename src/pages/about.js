import Navbar from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import About1 from "../components/about1";
// import About2 from "../components/about2";
// import hamad from "/Hamad-Pervaiz-CEO.jpeg";
import About2 from "../components/about2";
import Home7 from "../components/home7";

function About() {
  return (
    <>
      <div className="h-[140vh] bg-[url('https://bearplex.com/wp-content/uploads/2022/04/cover-bg.jpg')] mt-2 pt-[1px] md:h-[100vh] ">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <About1 />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="mx-auto w-screen flex justify-center">
        <h1 className="w-3/5 text-2xl">
          <span className="text-[#5E6FF8]">
            {" "}
            Full-lifecycle software development{" "}
          </span>
          company expert in development, customization and integration of
          complex enterprise software, business intelligence analytics, advanced
          mobile and web apps —any digital products and experiences that have
          lasting impact.
        </h1>
      </div>

      <About2 />
      {/* <Image src={hamad} width={500} height={500}></Image> */}
      <br />
      <br />
      <br />
      <Home7 />
    </>
  );
}

export default About;
