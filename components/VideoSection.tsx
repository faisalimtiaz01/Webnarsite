import Image from "next/image";
import React from "react";

const VideoSection = () => {
  const cardData = [
    {
        Url: "/images/image.svg",
      content: "Exhibition or trade show",
    },
    {
        Url: "/images/image (4).svg",
      content: " Interview or fireside chat",
    },
    {
        Url: "/images/image (5).svg",
      content: "Networking evening",
    },
    {
        Url: "/images/image (6).svg",
      content: "Educational & debating programs",
    },
    {
        Url: "/images/image (7).svg",
      content: "Signing engagement",
    },
    {
        Url: "/images/image (8).svg",
      content: "Standup or comedy show",
    },
  ];
  return (
    <>
      <section className="w-full mt-20">
        <div className="md:max-w-[80rem] mx-auto ">
          <h1 className="text-center text-[35px] md:text-[52px] leading-[40px] md:leading-[60px] font-bold [text-wrap:balance] max-w-[580px] mx-auto">
            Check out some of our popular events
          </h1>
        </div>
      </section>

      <section className="md:max-w-[80rem] mx-auto  mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {cardData.map((card) => (
            <div className="flex flex-col gap-5 px-10">
              <Image src={card.Url} alt="Event Image"  width={30} height={30} className="w-full" />
              <p className="text-[20px] font-bold leading-[28px] text-[#12141D]">{card.content}</p>
            </div>
          ))}
        </div>
      
      </section>
    </>
  );
};

export default VideoSection;
