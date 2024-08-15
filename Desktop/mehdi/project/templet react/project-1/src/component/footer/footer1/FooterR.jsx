import React from 'react'

export default function FooterR() {
  return (
    <div>
      <div className="flex items-center gap-2 max-[375px]:flex-col">
        <span className='text-white text-[25px] font-[600] '>Subscribe us:</span>
        <ul className='flex gap-3'>
          <li><a href="#"><i class="fa-brands fa-facebook bg-[#365493] text-white p-2 rounded-[20px] text-[17px]"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-x-twitter  bg-[#0001] text-white p-2 rounded-[20px] text-[17px]"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-pinterest  bg-[#cb2027] text-white p-2 rounded-[20px] text-[17px]"></i></a></li>
          <li><a href="#"><i class="fa-brands fa-linkedin-in  bg-[#0274b3] text-white p-2 rounded-[20px] text-[17px]"></i></a></li>
        </ul>
      </div>

      <div className="mt-14">
        <h1 className='text-white font-[600] text-[23px] capitalize'>download app on mobile</h1>
        <p className='text-[#b1b1b1] my-3 font-[600]'>15% discount on your first puchase</p>
        <div className="flex gap-5">
          <img src="/public/img/google-play.svg" alt="" />
          <img src="/public/img/app-store.svg" alt="" />
        </div>
      </div>
    </div>
  )
}
