import React from 'react'
import FooterLinks from './FooterLinks'
import Image from 'next/image'

const Footer = () => {
  return (
   <section className='bg-[#12141D] md:py-10 py-0'>
    <div className='md:max-w-[80rem] mx-auto px-0 md:px-0'>
    <div className='flex md:flex-row flex-col items-center justify-between py-10 md:py-10 md:px-10 bg-[#F7EA68] rounded-none md:rounded-lg'>
         <h1 className='text-[20px] md:text-[32px]  leading-[25px] md:leading-[42px] text-[#18181B] font-bold'>Download now for a great <br /> webinar experience</h1>
        <div className='flex gap-4 md:mt-0 mt-10'>
            <Image src="/images/Play Store.png" alt="" width={150} height={150} />
            <Image src="/images/App Store (1).png" alt="" width={150} height={150}/>
        </div>
    </div>
    </div>
    <div className='md:max-w-[80rem] mx-auto px-10 md:px-0'>
        <FooterLinks />
    </div>
   </section>
  )
}

export default Footer