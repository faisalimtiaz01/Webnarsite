import React from 'react'

const FooterLinks = () => {
    const columns = [
        {
          title: 'Company',
          links: ['About', 'Features', 'Works', 'Career'],
        },
        {
          title: 'Help',
          links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
        },
        {
          title: 'Resources',
          links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
        },
        {
          title: 'Links',
          links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
        },
      ];
      
  return (
    <section className='mt-20'>
    <div className='grid md:grid-cols-4  grid-cols-2 text-[#fff]'>
      {columns.map((column, index) => (
        <div key={index}>
          <h1 className='text-[16px] leading-[28px] font-bold mb-5'>{column.title}</h1>
          <ul className='text-[12px] leading-[40px] font-normal'>
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
  )
}

export default FooterLinks