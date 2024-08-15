import React from 'react'

export default function ArtS({ artS }) {
    return (
        <div className='grid grid-cols-4 gap-5 mt-10 font-c max-[1024px]:flex max-[1024px]:absolute'>
            {artS.map((ele) => (
                <div className=" relative shadow-box2 rounded-[20px] overflow-hidden bg-white max-[1024px]:w-[46vw] max-[500px]:w-[94vw]"
                    key={ele.id}>
                    <div className="relative">
                        <img src={ele.img} alt="" />
                        <div className="absolute bottom-0  flex justify-between items-center w-full px-5 pb-3">
                            <div className="flex items-center gap-2">
                                <img src={ele.img1} className='rounded-[20px] w-7' />
                                <h1 className='text-white font-[600] text-[15px]'>{ele.name}</h1>
                            </div>

                            <div className="flex gap-3">
                                <a href="" className='relative w-5 '>

                                    <i class="fa-solid fa-share-nodes text-white relative group">

                                        <span className=' absolute translate-x-[-0%] translate-y-[-50%] right-[-0%]  bottom-[50%]
                                     bg-black px-3 py-2 rounded-[10px] before:content-[""] before:border-[10px]
                                      before:border-t-black before:border-transparent before:absolute before:translate-x-[-5%]
                                        before:translate-y-[35%] before:right-[5%]  before:bottom-[-35%] hidden group-hover:block duration-500
                                        '>
                                            <ul className='flex gap-3'>
                                                <li><a href="#"><i class="fa-brands fa-facebook icon-art "></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-x-twitter  icon-art "></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-pinterest  icon-art "></i></a></li>
                                                <li><a href="#"><i class="fa-brands fa-linkedin-in  icon-art "></i></a></li>
                                            </ul>
                                        </span>
                                    </i>


                                </a>
                                <a href="#" className='relative'>
                                    <i class="fa-regular fa-message text-white"></i>
                                    <span className='bg-colo1 translate-x-[-40%] translate-y-[-40%] w-[16px] h-[16px] rounded-[30px] text-[12px] absolute text-center top-0 text-white'>0</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="px-[32px] py-[20px] flex flex-col gap-2">
                        <span className='text-[15px] font-[500] text-[#9b9b9b]'><a href="#">{ele.cat}</a> / {ele.dat}</span>

                        <h1 className='font-[700] text-[23px]'>{ele.h1}</h1>
                        <p className='font-[500] text-[18.3px] leading-7 text-[#a5a5a5]'>{ele.p}</p>
                        <span className='text-colo1 font-[700]'><a href="#">Continue reading</a></span>
                    </div>
                </div>
            ))}
        </div>
    )
}
