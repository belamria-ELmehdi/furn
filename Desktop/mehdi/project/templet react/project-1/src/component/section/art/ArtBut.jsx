import React from 'react'

export default function ArtBut() {
  return (
    <div className='flex items-center justify-between'>
        <h1 className="capitalize font-[600] text-[4.5vh]">Latest articles</h1>
        <div className=" bg-white hover:bg-[#e8e8e8] rounded-[20px] py-[8px] px-[20px]">
            <a href="#" className='flex items-start'>
                     <span className='text-[15px] font-[600]'>Visit the Blog</span> 
           <img className='h-[24px]' src="/public/img/arrow-right-long-svgrepo-com.svg" alt="" />
            </a>
      
        </div>
        
    </div>
  )
}
