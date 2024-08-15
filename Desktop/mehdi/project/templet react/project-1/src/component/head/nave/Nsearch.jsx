import React from 'react'

export default function Nsearch() {
  return (
    <div className='border w-[43%] h-[40px] rounded-[20px] bg-white NSearch-div'>
    <i class="fa-solid fa-magnifying-glass w-[10%] text-center py-[10px] cursor-pointer"></i>
    <input type="text" className=' w-[90%] outline-none  h-full  rounded-r-[20px] font-[600]' placeholder='search for products'/>
    </div>
    
  )
}
