import React from 'react'
import BurG from './BurG'
import { useDispatch, useSelector } from 'react-redux'
import { trans2 } from "/src/redux/Action";

export default function NbutR() {

const {transform2} = useSelector((state)=>state)
const dispa = useDispatch();

  const add = ()=>{
    dispa(trans2("translateX(0%)"));
  }
  return (
<>

    <div className='hidden max-[1024px]:block duration-500' onClick={add}>
        <i class="fa-solid fa-bars text-[2vw]   nbutR-i  cursor-pointer "></i>
      </div>

      <BurG /> 

</>
  





  )
}
