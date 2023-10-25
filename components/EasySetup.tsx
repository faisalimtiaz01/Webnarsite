import React from 'react'
import Card from './Card'

const EasySetup = () => {
  return (
    <section className='bg-[#12141D] py-20 mt-20'>
     <div className='max-w-[80rem] mx-auto '>
             <div className='flex flex-col md:flex md:flex-row px-5 items-center justify-between'>
                <div className='w-full md:w-[526px]'>
                    <h1 className=' text-[40px] md:text-[52px] leading-[45px] md:leading-[60px] text-[#FFFFFF] font-bold'>Easily set up our webinar software</h1>
                </div>
                <div className=' w-full md:w-[457px]'>
                    <p className=' text-[12px] md:text-[18px] leading-[30px] text-[#FFFFFF] opacity-[0.8]'>Our virtual conferencing platform offers the easiest platform flexible webinar mode, interactive features, insightful analysis, robust integration and much more.</p>
                </div>
                </div>
               <Card />
        </div>
    </section>
  )
}

export default EasySetup