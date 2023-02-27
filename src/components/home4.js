import Image from 'next/image';
import heroImage2 from "../images/Hero-pic-2.png"
export default function home4(){
return(
    <>
    <div className="pl-5 md:pl-20">
     <h1 className="text-5xl font-semibold">Our <span className="text-[#FF6158]">Competitiveness:</span> </h1>
    <br/>
    <br/>
    <div className="grid grid-cols-2 gap-7 md:grid-cols-3">
       <div>
          <h1 className="text-2xl font-bold">Managed Team</h1>
          <h1 className="text-xl text-[#4D5467]">We handle everything from sourcing, training, human resources, benefits to employee retention; all under one roof.</h1>
        <br/>
        <br/>
        <h1 className="text-2xl font-bold">People with a Passion</h1> 
        <h1 className="text-xl text-[#4D5467]">Our rigorous tests make sure we only hire tech-fit and culture-fit resources that have passion for the niche they’re working in.</h1>
       </div>
       <div>
        <h1 className="text-2xl font-bold">World-class Experience</h1>
        <h1 className="text-xl text-[#4D5467]">​​We’re obsessed with creating a delightful user experience for you and your team every step of the way—and it shows.</h1>
        <br/>
        <br/>
        <h1 className="text-2xl font-bold">Protecting IP at all costs</h1>
        <h1 className="text-xl text-[#4D5467]">Trust our stronger-than-they-need-to-be intellectual property and invention rights protections.</h1>
       </div>
       <div className='relative bottom-10'>
        <Image 
        src={heroImage2}
        width={500}
        className="w-4/6"
        />
       </div>
    </div>
    </div>
    </>
   
)
}