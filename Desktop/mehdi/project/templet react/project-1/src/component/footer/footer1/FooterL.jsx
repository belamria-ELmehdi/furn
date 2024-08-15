import React from 'react'
import FooterLogo from './FooterLogo'

export default function FooterL({ fot }) {
    return (
        <div>
            <FooterLogo />

            <div className="grid grid-cols-2 mt-5 max-[600px]:grid-cols-1 max-[600px]:gap-16 max-[600px]:pt-10">
                   {fot.map((ele) => (
                <div className='text-white'>
                    <h1 className=' text-[26px] capitalize font-[600]'>{ele.h1}</h1>
                    <ul className='grid grid-cols-col3 mt-5'>
                        <div className="">
                            <li className='F-li '><a href={ele.link}>{ele.li}</a></li>
                            <li className='F-li '><a href={ele.link2}>{ele.li2}</a></li>
                            <li className='F-li '><a href={ele.link3}>{ele.li3}</a></li>
                            <li className='F-li '><a href={ele.link4}>{ele.li4}</a></li>
                            <li className='F-li '><a href={ele.link5}>{ele.li5}</a></li>
                        </div>


                        <div className="">
                            <li className='F-li '><a href={ele.link6}>{ele.li6}</a></li>
                            <li className='F-li '><a href={ele.link7}>{ele.li7}</a></li>
                            <li className='F-li '><a href={ele.link8}>{ele.li8}</a></li>
                            <li className='F-li '><a href={ele.link9}>{ele.li9}</a></li>
                            <li className='F-li '><a href={ele.link10}>{ele.li10}</a></li>
                        </div>
                    </ul>
                </div>

            ))}
            </div>
         

        </div>
    )
}
