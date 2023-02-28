import Image from "next/image";
import Link from "next/link";
import logo from "../images/bearplex-logo.svg";
export default function home7() {
  return (
    <>
      <div class="grid grid-cols-2 gap-8 mx-6 md:grid-cols-4 md:mx-24 md:gap-8">
        <div class="flex flex-col">
          <Image
            src={logo}
            alt="My Image"
            width={500}
            height={500}
            className="w-40 mb-2 cursor-pointer"
          />
          <div class="flex gap-3">
            <svg
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <h1 className="text-lg">hello@bearplex.com</h1>
          </div>
          <div className=" flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            <h1 className="text-lg">Delaware, USA | Lahore, Pakistan</h1>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Explore</h1>
          <br />
          <div className="flex flex-col">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/about" className="font-medium">
              About Us
            </Link>
            <Link href="/careers" className="font-medium">
              Careers <span className="font">- We re Hiring</span>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Services</h1>
          <br />
          <h1>Robust Web Development</h1>
          <h1>Search Engine Optimization</h1>
          <h1>Microservices Development</h1>
          <h1>AWS Migration</h1>
          <h1>Website Care Plan</h1>
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <h1>Custom Web App Development</h1>
          <h1>Mobile App Development</h1>
        </div>
      </div>
      <div className="flex justify-center mt-[45px]">
        <div className="w-[66%] mb-[30px] border-4 border-[#f2f2f2]"></div>
      </div>

      <div className="flex flex-col items-center md:justify-around mb-8">
        <h1>© BearPlex, Inc 2022. All Rights Reserved.</h1>
        <div className="flex gap-5">
          <Link href="/">Delivery Policy</Link>
          <Link href="/">Privacy Policy Policy</Link>
          <Link href="/">Refund Policy</Link>
        </div>
      </div>
    </>
  );
}
