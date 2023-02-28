import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../images/bearplex-logo.svg";
export default function Navbar() {
  const [modal, setModal] = useState(false);

  function handlebtnfalse() {
    console.log("False Called");
    setModal(false);
  }
  function handlebtntrue() {
    console.log("true Called");
    setModal(true);
  }
  useEffect(() => {}, [modal]);

  return (
    <>
      {!modal ? null : (
        <>
          <div className="w-screen h-screen absolute 1px bg-white transform scale-100 pt-5">
            <div>
              <div class="flex justify-between mx-9 my-5 mb-10">
                <h1>Hello</h1>
                <svg
                  onClick={handlebtnfalse}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </div>
              <hr class=" ml-9 mr-9 " />
            </div>

            <div class="flex flex-col gap-3 pl-8 pt-8">
              <Link href="/" className="font-medium">
                Home
              </Link>
              <Link href="/about" className="font-medium">
                About Us
              </Link>
              <Link href="/careers" className="font-medium">
                Careers <span className="font">- We're Hiring</span>
              </Link>

              <h1 className="font-semibold text-3xl mt-4">Our Services.</h1>
              <h1 className="font-medium">AWS Migration</h1>
              <h1 className="font-medium">Enterprise Software Development</h1>
              <h1 className="font-medium">Custom Web App Development</h1>
              <h1 className="font-medium">Mobile App Development</h1>
              <h1 className="font-medium">Robust Web Development</h1>
              <h1 className="font-medium">AWS Migration</h1>
              <h1 className="font-medium">Microservices Development</h1>
              <h1 className="font-medium relative right-3">
                Blogs | Press Releases
              </h1>
              <h1 className="font-medium relative right-3">Contact</h1>
            </div>
          </div>
        </>
      )}
      <nav class="">
        <div class="flex justify-between mx-9 mt-6 md:justify-around md:mt-6">
          <Image
            src={logo}
            alt="My Image"
            width={500}
            height={500}
            className="w-36 mb-2 cursor-pointer md:relative right-8"
          />
          <div class="hidden md:flex gap-9 mt-[11px]">
            <Link href="/" className="font-semibold">
              Home
            </Link>
            <Link href="/about" className="font-semibold">
              About
            </Link>
            <Link href="/services" className="font-semibold">
              Services
            </Link>
            <Link href="/media" className="font-semibold">
              Media
            </Link>
            <Link href="/contact" className="font-semibold">
              Contact
            </Link>
          </div>
          {!modal && (
            <div class="hidden md:block relative bottom-3 left-7">
              <button class="mt-[11px] bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-3 px-5 border-2 border-black hover:border-transparent rounded-3xl">
                <span className="flex gap-3">
                  Build your team
                  {/* <svg className='w-4 font-semibold' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg> */}
                </span>
              </button>
            </div>
          )}
          <div class="flex md:hidden">
            <svg
              onClick={handlebtntrue}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            {/* <button onClick={handlebtnfalse}
          >False</button> */}
          </div>
        </div>
      </nav>
    </>
  );
}
