import React, { useState } from 'react'
import Rules2vid1 from './Rules2vid1'
// import Rules2vid2 from './Rules2vid2'

export default function Rules2vid() {

  // const [child, setchild] = useState({
  //   display: 'none ',
  // });


  // const updat = (newStyle) => {
  //   setchild(newStyle);

  // }
  //  const [child2 , setchild2] = useState({
  //   display:'block ' ,
  // });
  // const updat2 = (newStyle2)=>{
  //   setchild2(newStyle2);
  // }


  return (
    <div className='relative'>

      <div className=" h-[60vh] rounded-[42vh] overflow-hidden relative left-1/2 -translate-x-1/2 my-11 max-[430px]:h-[95vh] max-[430px]:object-cover">
        <img className='h-full w-full' src="/public/img/OIP (1).jfif" alt="" />
       
      </div>
  <Rules2vid1  />
    </div>
  )
}
