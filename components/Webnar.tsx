import Image from 'next/image'
import React from 'react'

const Webnar = () => {
  return (
    <>
    <section className='  bg-[#12141D] md:py-32 py-10 '>
         <div className='md:max-w-[80rem] px-4 grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto md:px-36 mt-8 '>
            <div className=''>
                <Image src="/images/jason-goodman-fznQW-kn5VU-unsplash (1) 1.svg" alt='jsaon' width={300} height={300} className='rounded-lg md:mx-0 mx-auto'/>
            </div>
            <div className='flex flex-col gap-4  md:gap-10'>
                <h1 className='md:text-[52px] text-40px] leading-[20px] md:leading-[60px] mt-10 md:mt-0  text-[#F7EA68] font-bold'>Trouble-free new webinar software</h1>
                <p className='text-[14px] md:text-[18px] leading-[25px] md:leading-[30px] text-[#FFF] opacity-[0.8] font-normal'>Choosing the right webinar software is vitally important to your business. From marketing product launches to with community, these software can help you meet your goals.</p>
                <div className='flex justify-start items-start gap-5'>
                <Image src="/images/image 28.svg" alt='smileey' width={30} height={30}/>
                <div className='gap-2'>
                    
                    <h1 className='text-[15px] md:text-[20px] leading-[18px] md:leading-[28px] text-white font-bold '>Suitable for use on any device</h1>
                    <p className='text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] font-normal opacity-[0.8] text-[#FFF]' >A social media strategy is a summary of everything you plan to do and hope to achieve on social media.</p>
                </div>
                </div>
               
            </div>
         </div>

         <div className='md:max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center px-5 md:px-36 mt-16  '>
           
            <div className='flex flex-col gap-4 md:gap-10'>
                <h1 className='md:text-[52px] text-40px] leading-[20px] md:leading-[60px] text-[#F7EA68] font-bold'>Trouble-free new webinar software</h1>
                <p className='text-[14px] md:text-[18px] leading-[25px] md:leading-[30px] opacity-[0.8] font-normal text-[#FFF]'>Choosing the right webinar software is vitally important to your business. From marketing product launches to with community, these software can help you meet your goals.</p>
                <div className='flex justify-start items-start gap-5 '>
                <Image src="/images/image 28.svg" alt='smileey' width={30} height={30}/>
                <div className='gap-2'>
                    
                    <h1 className='text-[15px] md:text-[20px] leading-[18px] md:leading-[28px] text-white font-bold '>Suitable for use on any device</h1>
                    <p className='text-[12px] md:text-[16px] leading-[18px] md:leading-[24px] font-normal opacity-[0.8] text-[#FFF]' >A social media strategy is a summary of everything you plan to do and hope to achieve on social media.</p>
                </div>
                </div>
          
            </div>
            <div className=' mt-10 md:mt-24  mb-4'>
                <Image src="/images/jason-goodman-fznQW-kn5VU-unsplash (1) 1.svg" alt='jsaon' width={300} height={300} className='rounded-lg ml-2 md:ml-28'/>
            </div>
         </div>
    

    </section>
    <section className='overflow-hidden md:py-10 py-2 md:-mt-20 -mt-10'>
    <div className='bg-[#F7EA68] md:py-6 py-2 rotate-[-2deg] md:rotate-[-3deg]  flex items-center text-[12px] md:text-[48px] scale-105 md:leading-[60px] leading-[30px] font-bold text-center justify-center tracking-[4px] md:tracking-[7px]   '>
            <h1 className=''>BEST WEBINAR IN 2022   BEST WEBINAR IN 2022</h1>
         </div>
    </section>
    </>
    
  )
}

export default Webnar