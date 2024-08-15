import React from 'react'
import Hometool from './Hometool'
import Wishlistool from './Wishlistool'
import Carttool from './Carttool'
import Acounttool from './Acounttool'

export default function Alltool() {
  return (
    <div className='hidden grid-cols-4 bg-white w-full fixed bottom-0 shadow-box2  max-[1024px]:grid'>
        <Hometool/>
        <Wishlistool/>
        <Carttool/>
        <Acounttool/>
    </div>
  )
}
