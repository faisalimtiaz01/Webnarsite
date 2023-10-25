import React from "react";

const Opnions = () => {
  return (
    <>
      <section>
        <div className="md:max-w-[80rem] mx-auto py-10">
            <div>
                <h1 className="text-[52px] leading-[60px] text-[#12141D] font-bold text-center py-10 ">See the opinions of <br /> our software users </h1>
            </div>
          <div className="flex md:flex-row flex-col px-5 justify-between items-center">
            <div className="w-full md:w-[40%]">
              <img src="/images/Images (2).png" alt="" />
            </div>
            <div className=" w-full md:w-[40%] mt-10 ">
              <p className="text-[18px] leading-[18px] [text-wrap:balnace] text-[#12141D] font-normal ">
                "Best user-friendly Webinar platform with intuitive UI/UX which
                is secure and reliable. “I think this Webinar was so exactly
                that, It was at the center of what we were doing, but it was
                easy so that it just fell to the back of our main brains so that
                we could focus on the content and the for experience without
                worrying about the technology.”
              </p>
              <h4 className=" mt-5 md:mt-20 text-[16px] leading-[24px] font-bold text-[#12141D]">Jenny Wilson</h4>
              <p className="text-[14px] leading-[20px] opacity-[0.7] text-[#12141D]">Senior Marketing Manager</p>
              <div className="flex gap-5 mt-5 md:mt-20">
                <img src="/images/shape.png" alt="" />
                <img src="/images/shape2.png" alt="" />
                <img src="/images/shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Opnions;
