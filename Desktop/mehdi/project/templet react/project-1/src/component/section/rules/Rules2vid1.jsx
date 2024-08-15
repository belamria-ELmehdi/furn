import React, { createContext, useState } from 'react';
import Rules2vid2 from './Rules2vid2';

export const CreatConte = createContext(null)

export default function Rules2vid1() {


  const [IsActive, setIsActive] = useState({
    display: "none"
  })

  const add = () => {
    setIsActive({
      display: "block"
    })
  }

  return (

    <CreatConte.Provider value={{IsActive , setIsActive}}>

      <div className='w-full text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='font-[500] text-[25px] text-[#dddddd]'>How chose furniture</h1>
        <p className='font-[600] text-[38px] py-[25px]'>SØLREM furniture collection</p>
        <div className="border-2 border-white relative rounded-[20vh] w-[5rem] h-[5rem] left-1/2 -translate-x-1/2 group cursor-pointer">
          <img src="/public/img/play-svgrepo-com.svg" alt="" className=' w-[50px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:w-[45px] duration-500 ' onClick={add} />
        </div>
      </div>

      <Rules2vid2/>
    </CreatConte.Provider>





  )
}
