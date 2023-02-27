import React from 'react';
import Image from "next/image"
import Image1 from "../images/Tech1.jpg"
import Image2 from "../images/Tech2.jpg"
import Image3 from "../images/Tech3.jpg"
import Image4 from "../images/Tech4.jpg"
import Image5 from "../images/Tech5.jpg"
import Image6 from "../images/Tech6.jpg"
import Image7 from "../images/Tech7.jpg"
import Image8 from "../images/Tech8.jpg"
import Image9 from "../images/Tech9.jpg"
import Image10 from "../images/Tech10.jpg"

const home3 = () => {
 
   
 

  return (
  
    <div className="grid ml-5 grid-cols-3 md:grid-cols-5 items-center md:ml-32">
   
        <Image
          src={Image1}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image2}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image3}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image4}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image5}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image6}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image7}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image8}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image9}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
         <Image
          src={Image10}
          width={500}
          height={500}
          alt="image"
          className="w-28"
        />
   
    </div>
    
  );
};

export default home3;
