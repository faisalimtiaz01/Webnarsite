import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    <section className="bg-[#F7EA68] h-[470px] md:h-[1150px] ">
      <div className=" flex flex-col items-center justify-center md:gap-10 gap-5 md:max-w-[80rem] w-full mx-auto ">
        <h1 className="md:text-[75px] text-[24px] md:leading-[88px] leading-[30px] font-bold text-center md:mt-28  mt-10">
          Find the best platform for <br className="md:block hidden"  /> webinars & meetings
        </h1>
        <p className=" md:text-[20px] text-[12px] md:leading-[32px]  font-normal text-center opacity-[0.8]">
          We have meetings, the first video engagement platform to manage
          webinars, more <br className="md:block hidden"  /> customizable registration pages, email delivery
          tracking, built-in social sharing.
        </p>

        <button className="shadow-lg flex items-center justify-center bg-black text-white rounded-[3px] md:px-8 px-3 md:py-5 py-3 md:gap-10 gap-5">
          Get 14 Days Free Trial{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
          >
            <path
              d="M0 6.98671C0 7.25193 0.105357 7.50628 0.292893 7.69382C0.48043 7.88135 0.734784 7.98671 1 7.98671H20.586L16.294 12.2787C16.1118 12.4673 16.011 12.7199 16.0133 12.9821C16.0156 13.2443 16.1208 13.4951 16.3062 13.6805C16.4916 13.8659 16.7424 13.9711 17.0046 13.9734C17.2668 13.9757 17.5194 13.8749 17.708 13.6927L23.708 7.69271C23.8005 7.60072 23.874 7.49134 23.9241 7.37086C23.9742 7.25039 24 7.12119 24 6.99071V6.98671C24 6.85671 23.974 6.72671 23.922 6.60471C23.8722 6.48348 23.7987 6.37335 23.706 6.28071L17.706 0.280712C17.5174 0.0985537 17.2648 -0.00224062 17.0026 3.78026e-05C16.7404 0.00231622 16.4896 0.107485 16.3042 0.292893C16.1188 0.478301 16.0136 0.729114 16.0113 0.991311C16.009 1.25351 16.1098 1.50611 16.292 1.69471L20.586 5.98671H1C0.734784 5.98671 0.48043 6.09207 0.292893 6.27961C0.105357 6.46714 0 6.7215 0 6.98671Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="flex  gap-3">
          <span className="md:text-[14px] text-[10px] leading-[26px] font-normal opacity-[0.6]">No Card Required .</span>
          <span className="md:text-[14px] text-[10px] leading-[26px] font-normal opacity-[0.6]">Cancel Anytime</span>
        </div>
        <Image
          src="/images/Face 5 (1).svg"
          alt="lgo img"
          width={100}
          height={100}
          className="absolute md:left-28 left-0 md:top-80 top-36 w-[8%] "
        />

      </div>
      
      <div className="relative  w-full mt-10 md:mt-32">
          <Image
            src="/images/Scribble.svg"
            alt="lgo img"
            width={250}
            height={250}
            className="absolute md:right-[40px] md:top-[-160px] top-[-60px] right-[20px] w-[15%]  "
          />
            <Image
            src="/images/scrib2.svg"
            alt="lgo img"
            width={68}
            height={60}
            className="absolute md:left-[50px] left-[10px] md:top-32 top-[30px] w-[6%] "
            
          />
          <Image
            src="/images/videoimg.svg"
            alt="lgo img"
            width={1200}
            height={400}
            className="mt-14 mx-auto w-3/4 h-auto z-0"
          />
        
        </div>
    </section>
  );
};

export default Hero;
