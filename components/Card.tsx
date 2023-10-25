import Image from "next/image";
import React from "react";

const Card = () => {
  const cardDetials = [
    {
      url: "/images/image 27.svg",
      title: "Create Account",
      description: "You can easily create your account with our software directly from any device.",
    },
    {  url: "/images/iconflag.svg",
      title: "Purchase Tickets",
      description: " Buy tickets to any event of your choice from many events with just one click",
    },
    {  url: "/images/image 339.svg",
      title: "Join Webinar",
      description: "Join the webinar from anywhere just by turning on the software without hassle",
    },
  ];
  return (
    <>
   
<div className=" flex flex-col px-5 md:flex md:flex-row justify-between mt-20 gap-10">
   {
    cardDetials.map((items,index)=>(
        <div className="flex gap-5" key={index}>
            <div >
            <Image src={items.url} alt="" width={50} height={50} /> 
            </div>
            <div className="">
             <div className="inline-flex items-center gap-4">
                <h1 className="text-[16px] leading-[28px] font-bold text-[#FFF]">
                {items.title}
              </h1>
              <Image  src="/images/Line 229.png" alt="" width={20} height={20}/>
             </div>
              <p className="text-[14px] leading-[24px] text-[#fff] opacity-[0.8] ">
                {items.description}
              </p>
            </div>
        </div>
    ))
   }
</div>

    </>
  );
};

export default Card;
