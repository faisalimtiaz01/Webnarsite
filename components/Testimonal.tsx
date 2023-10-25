import Image from 'next/image'
import React from 'react'

const Testimonal = () => {
    
  return (
    <section className=' py-36  flex flex-col justify-center'>
        <div className='md:max-w-[80rem] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:mt-32 mt-2 p-10 gap-10 md:gap-40 '>
                <h1 className='md:text-[52px] text-[45px] text-[#12141D] leading-[60px] font-bold'>It helps to expand your audience and grow your business</h1>
                <p className='text-[18px] leading-[30px] font-normal opacity-[0.8]'>A webinar provides an interesting and informative platform for new & existing customers that will deliver really valuable content to your target audience. It&apos;s a great way to build up relationships and create awareness of your brand.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 md:mt-32 mt-0 md:gap-4 gap-20 p-10 items-center justify-evenly'>

                <div className='flex flex-col gap-5'>
                    <Image src="/images/icon (5).svg" alt="card image" width={60} height={60} />
                    <h1 className='text-[20px] leading-[28px] text-[#12141D] font-bold'>Audience Engagement</h1>
                    <p>It is easier to retain an existing customer. That&apos;s why successful businesses put effort into retaining their customers. </p>
                </div>

                <div className='w-[3px] hidden md:block h-[150px] bg-[#3F3F46] opacity-[0.1] ml-20'></div>

                <div  className=' flex flex-col gap-5'>
                    <Image src="/images/icon (6).svg" alt="card image" width={60} height={60}  />
                    <h1 className='text-[20px] leading-[28px] text-[#12141D] font-bold'>Boost Brand Awareness</h1>
                    <p>Webinars present you with the scope to enhance your brand identity online &it help your overall brand identity. </p>
                </div>

                <div className='w-[3px] hidden md:block h-[150px] bg-[#3F3F46] opacity-[0.1] ml-20'></div>

                <div className='flex flex-col gap-5'>
                    <Image src="/images/icon (7).svg" alt="card image" width={60} height={60} />
                    <h1 className='text-[20px] leading-[28px] text-[#12141D] font-bold'>Nurture Quality Leads</h1>
                    <p>If you want to convert your leads into paying customers, you need to show them that you can provide them.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Testimonal