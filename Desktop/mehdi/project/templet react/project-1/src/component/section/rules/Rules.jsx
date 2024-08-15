import React, { useState } from 'react'
import Rules1 from './Rules1'
import Rules2 from './Rules2'

export default function Rules() {

  return (
    <div className='mt-24 grid grid-cols-col2 gap-5 max-[800px]:grid-cols-1'>
        
        <Rules1/>
        <Rules2/>
     
    </div>
  )
}
