import HeroPic from "../images/Hero-pic-1.png"
import Image from "next/image"
export default function home1(){
   
    return(
        <>
        
         <div className="grid grid-cols-1 pl-7 md:grid-cols-2 md:pl-24 md:mx-auto">
            <div className="">
            <h1 className="text-[#09A6FF] text-xl font-bold">Tech Staff Augmentation</h1>
            <h1 className="text-2xl font-bold mt-3 md:text-5xl">You Manage Tech. We Manage <span className="text-[#8154FF]">Everything Else</span></h1>
            <br/>
            <h1 className="text-lg">Top 3% globally distributed technology, design & business talent, ready to tackle your most important initiatives.</h1>
            {/* <h1>Manage<span>Everything Else</span></h1> */}
            </div>
            <div className="ml-16">
            <Image src={HeroPic} className="w-3/5"/>
            </div>
        
         </div>
        </>
    )
}