import React from 'react'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
   <section className='bg-[#12141D] py-10'>
    <div className='md:max-w-[80rem] mx-auto px-10 md:px-0'>
    <div className='flex md:flex-row flex-col items-center justify-between py-10 md:py-10 md:px-10 bg-[#F7EA68] rounded-lg'>
         <h1 className='text-[30px] md:text-[32px]  leading-[25px] md:leading-[42px] text-[#18181B] font-bold'>Download now for a great <br /> webinar experience</h1>
        <div className='flex gap-4 md:mt-0 mt-10'>
            <img src="/images/App Store (1).png" alt="" width="100%"/>
            <img src="/images/Play Store.png" alt="" width="100%" />
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