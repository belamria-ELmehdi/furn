import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { trans2 } from "/src/redux/Action";


export default function BurG() {

        const { transform2 } = useSelector((state) => state);
        const dispa = useDispatch();


        const handBurg = ()=>{
            dispa(trans2("translateX(-100%)"))
        }

        const cli1 = ()=>{
            dispa(trans2("translateX(-100%)"))
        }
    return (


        <>
        {/*  */}
            <div className=' w-full h-full  left-0 top-0 z-[9999] -translate-x-full fixed ' style={{transform:transform2}}>
            {/* style={BGS} */}
                <div className="w-1/3 h-full bg-white left-0 absolute z-50 Pop max-[650px]:w-[50%] duration-500" >
                    <div className="Navcar">
                        <h1 className='font-[600]'>Categore</h1>
                        
                        <span className=' font-[700] text-[#6b6b6b] cursor-pointer'onClick={handBurg} >
                            <i class="fa-solid fa-x text-[15px]"></i> close
                        </span>
                    </div>
                    <form className='broder h-[70px] relative'>
                        <input type="text" name="" placeholder='Search for products' className='pl-5 capitalize outline-none font-[700] text-[15px] font-b w-[80%] h-full' />
                        <i class="fa-solid fa-magnifying-glass flex h-full w-[20%] absolute justify-center items-center right-0 top-0"></i>
                    </form>

                    <div className="overflow-x-hidden div-BuG h-[75vh] relative overflow-scroll">
                        <ul className=" grid ul-BuG  absolute w-full">
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/Chair.svg" alt="" className="nC-img" />
                                    <span className="nC-span">chairs</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-tables-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">tables</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-sofas-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">sofas</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-armchairs-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">armchairs</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-beds-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">beds</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-storage-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">storage</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-textiles-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">textiles</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-lighting-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">lighting</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/public/img/wd-furniture-toys-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">toys</span>
                                </a>
                            </li>
                            <li className="BurG ">
                                <a href="" className="nC-a group">
                                    <img src="/img/wd-furniture-decor-1.svg" alt="" className="nC-img" />
                                    <span className="nC-span">decor</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                
                <div className="border  h-full w-full absolute cursor-pointer bg-[#1111112a]" onClick={cli1}>

                </div>
            </div>
        </>

    )
}
