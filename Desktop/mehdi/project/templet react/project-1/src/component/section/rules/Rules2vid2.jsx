import React, {  useContext, useState } from 'react'
import {CreatConte} from './Rules2vid1'


export default function Rules2vid2() {
 
    const {IsActive} = useContext(CreatConte)
    const {setIsActive} = useContext(CreatConte)


    const xmark = ()=>{
        setIsActive({
            display : 'none'
        })
    }

    return (
      

            <div className='w-full h-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000046] hidden' style={IsActive}>
                <i class="fa-solid fa-xmark right-0 absolute text-white text-[40px] p-5 cursor-pointer" onClick={xmark}></i>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className='h-[500px] w-[800px]  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 relative max-[800px]:h-[77vw] max-[800px]:w-[80vw]'></iframe>
            </div>
    

    )
}
