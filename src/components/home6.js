import Image from 'next/image';
import heroImage3 from "../images/Hero-pic-3.png"
export default function home6(){
return(
    <>
    <div className="pl-5 md:pl-10">
     <h1 className="text-5xl font-semibold text-center">Streamlined Onboarding<br/> <span className="text-[#48DDA0]">Approach:</span> </h1>
    <br/>
    <br/>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
    <div className='relative bottom-10'>
        <Image 
        src={heroImage3}
        width={500}
        className="w-4/6"
        />
       </div>
       <div>
          <h1 className="text-2xl font-bold">Assessment</h1>
          <h1 className="text-xl text-[#4D5467]">We consult with you to understand the specific expertise you need, the time you’ll require, where you’d like us to work, and when we need to start.</h1>
        <br/>
        <br/>
        <h1 className="text-2xl font-bold">Kickoff</h1> 
        <h1 className="text-xl text-[#4D5467]">In the initial kickoff, our expert(s) will provide an overview of their background and expertise. You’ll have the opportunity to review in detail.</h1>
       </div>
       <div>
        <h1 className="text-2xl font-bold">Resource Alignment</h1>
        <h1 className="text-xl text-[#4D5467]">Based on your specific needs, we’ll identify the BearPlex expert(s) that match your requirements and schedule a kickoff meeting to get us integrated.</h1>
        <br/>
        <br/>
        <h1 className="text-2xl font-bold">Ongoing Support</h1>
        <h1 className="text-xl text-[#4D5467]">After the kickoff, our specialists jump into action to add to your team’s ability to implement and manage security controls and achieve your goals.</h1>
       </div>
       
    </div>
    </div>
    </>
   
)
}