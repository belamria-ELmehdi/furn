import React from "react";
import bagIM from "/img/cart-shopping-shop-ecommerce-buy-online-store-svgrepo-com.svg";
import Nbag2 from "./Nbag2";
import { useDispatch, useSelector } from "react-redux";
import {trans3} from '/src/redux/Action'

export default function NBag() {
const {transform3} = useSelector((state)=>state);
const dispa = useDispatch();


  const bags = () => {
   dispa(trans3("translateX(0%)"))
  };

  return (
    <>
      <div className="flex relative  cursor-pointer" onClick={bags}>
        <div className="relative hidden bag-div1">
          <i class="fa-solid fa-cart-shopping   bag-i1"></i>
          <span className="py-0 px-[4px] text-[10px] text-center  text-white bg-colo1 rounded-[20px] right-[-8px] top-[-4px] absolute bag-span   bag-num">
            0
          </span>
        </div>

        <div className=" bag-div2">
          <li className="nav-li text-white !bg-black">
            <a href="#" className="flex gap-1 ">
              <img src={bagIM} alt="" className="w-[15px]" />
              <span>$0.00</span>
            </a>
          </li>
        </div>
      </div>

      <Nbag2 />
    </>
  );
}
