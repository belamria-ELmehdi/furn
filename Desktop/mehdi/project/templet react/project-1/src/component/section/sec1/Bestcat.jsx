import React, { useState } from "react";

export default function Bestcat({ art, art2 }) {
  const [preI, SetpreI] = useState(0);
  const pre = () => {
    SetpreI((prevIndex) => (prevIndex - 1) % art2.length);
  };
  const next = () => {
    SetpreI((prevIndex) => (prevIndex + 1) % art2.length);
  };



  return (
    <>
      <div className=" grid gap-4 grid-cols-5 my-5 div1-bstC  max-[500px]:!gap-[10px]">
        {art.map((all) => (
          <div
            key={all.id}
            className=" overflow-hidden bg-white rounded-[10px] shadow-lg h-[27vw] group/cat group/scal relative div2-bstC max-[768px]:w-[45vw]"
          >
            <div className="relative">
              <a href="#" className="flex w-full">
                <img src={all.img} alt="" className="trans " />
                <img src={all.img1} alt="" className="trans" />
                <img src={all.img2} alt="" className="trans" />
                <img src={all.img3} alt="" className="trans" />
              </a>
              <div className="top-1/2 translate-y-[-50%]  absolute flex justify-between mx-[10px] w-[90%] scale-[2.5] group-hover/scal:scale-100 duration-500">
                <i className="fa-solid fa-chevron-left i-b" onClick={pre}></i>
                <i className="fa-solid fa-chevron-right i-b" onClick={next}></i>
              </div>
            </div>

            <div className="flex flex-col gap-y-[5px] px-3 pb-4 translate-y-[-25px] bg-white group-hover/cat:translate-y-[-80px] pt-3 duration-500 div3-bstC max-[1024px]:group-hover/cat:translate-y-[-25px]">
              <div className="flex justify-between">
                <h1 className="font-[600] capitalize">
                  <a href="#"> {all.text}</a>
                </h1>
                <span className="font-[600]">
                  {all.star} <i class="fa-solid fa-star text-yellow-400"></i>
                </span>
              </div>
              <h1 className="text-[#3b3b3b] text-[15px] font-[500]">
                <a href="#">{all.cat}</a>{" "}
              </h1>
              <span className="font-[700] text-colo1 max-[375px]:text-[3.9vw]">
                <span className="font-[500] text-black line-through opacity-75">
                  {all.proPrix}
                </span>{" "}
                {all.prix}
              </span>

              <div className=" flex justify-between items-center pt-3  bottom-3">
                <div className="bg-colo1 rounded-[20px] relative w-[24vh] h-[6vh] flex justify-center py-2 overflow-hidden group max-[1024px]:w-[32vw] max-[500px]:w-[100%] ">
                  <a
                    href="#"
                    className="flex flex-col justify-center items-center absolute gap-[10px] group-hover:translate-y-[-29px] duration-300"
                  >
                    <span className="text-white font-[600] capitalize text-[13px]  ">
                      add to cart
                    </span>
                    <img
                      src="/public/img/cart-shopping-shop-ecommerce-buy-online-store-svgrepo-com.svg"
                      alt=""
                      className=" bottom-0 w-5"
                    />
                  </a>
                </div>
                <div className="flex gap-3 div4-bstC ">
                  <a href="#">
                    {" "}
                    <svg fill="#000000" width="20px" height="25px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>shuffle-line</title> <path class="clr-i-outline clr-i-outline-path-1" d="M21.61,11h8.62l-3.3,3.3a1,1,0,1,0,1.41,1.42L34,10.08l-.71-.71h0L28.34,4.43a1,1,0,0,0-1.41,1.42L30.11,9H21a1,1,0,0,0-.86.5L17.5,14.09l1.16,2Z"></path><path class="clr-i-outline clr-i-outline-path-2" d="M11.07,25.07H3a1,1,0,0,0,0,2h8.65a1,1,0,0,0,.86-.5L15.18,22,14,20Z"></path><path class="clr-i-outline clr-i-outline-path-3" d="M28.34,20.17a1,1,0,0,0-1.41,1.42l3.5,3.5H21.61L12.51,9.53a1,1,0,0,0-.86-.5H3a1,1,0,1,0,0,2h8.07l9.1,15.55a1,1,0,0,0,.86.5H29.9l-3,3a1,1,0,0,0,1.41,1.42l4.95-4.94h0l.71-.71Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
                  </a>
                  <a href="#">
                    {" "}
                    <svg width="20px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path></g></svg>
                  </a>
                </div>

              </div>
            </div>
            <i className="fa-regular fa-heart absolute top-3 right-5 text-[20px] text-[#a3a3a3]"></i>
            <div className={`new ${all.span === " " ? "non" : ""}`}>
              <span className="text-white font-[600] text-[10px]   uppercase">
                {all.span}
              </span>
            </div>
            <div className={`sold ${all.sold === " " ? "non2" : ""}`}>
              <span className="text-white font-[600] text-[10px]   ">
                {all.sold}
              </span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .trans {
          transform: translateX(${preI * 100}%);
        }

        .non {
          display: none;
        }
        .non2 {
          display: none;
        }
      `}</style>
    </>
  );
}
