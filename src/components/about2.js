import Image from "next/image";
// import React from "react";
import hamad from "../images/Hamad-Pervaiz-CEO.jpeg";
import hamad2 from "../images/Kashif.jpeg";
import hamad3 from "../images/Sheroz.jpeg";
import Saad from "../images/Saad.jpg";
import Afshah from "../images/Afshah.jpeg";
import Mahrukh from "../images/Mahrukh.jpeg";
import Ibrahim from "../images/Ibrahim.jpeg";
import Umair from "../images/Umair.jpeg";
function about2() {
  const team = [
    {
      id: 1,
      name: "Hammad Pervaiz",
      designation: "Founder / CEO",
      image: hamad,
    },
    {
      id: 2,
      name: "Kashif Pervaiz",
      designation: "Finance Consultant",
      image: hamad2,
    },
    {
      id: 3,
      name: "Sheroz Pervaiz",
      designation: "Finance Director",
      image: hamad3,
    },
    {
      id: 4,
      name: "Umair Riaz",
      designation: "ERP Consultant",
      image: Umair,
    },
    {
      id: 5,
      name: "Saad Bin Saeed",
      designation: "Operations MAnager",
      image: Saad,
    },
    {
      id: 6,
      name: "Afshah Tahir",
      designation: "Crative Team Lead",
      image: Afshah,
    },
    {
      id: 7,
      name: "Mahrukh Khawaja",
      designation: "Gpt-3 Specialist",
      image: Mahrukh,
    },
    {
      id: 8,
      name: "Ibrahim Hammayun",
      designation: "Web developer",
      image: Ibrahim,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ml-24 mr-24 mt-24 w-auto">
        {team.map((data) => {
          return (
            <>
              {/* <Image src={image} width={500} height={500} alt={image} /> */}

              <div className="">
                <Image
                  className="w-full"
                  src={data.image}
                  width={500}
                  height={500}
                  alt="Image"
                />
                <div className="w-full bg-black h-24 flex flex-col justify-center items-center">
                  <h1 className="text-white font-bold text-xl">{data.name}</h1>

                  <p className="text-white text-sm">{data.designation}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default about2;
