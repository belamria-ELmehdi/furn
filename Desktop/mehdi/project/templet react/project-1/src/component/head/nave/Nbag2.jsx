import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {trans3} from '/src/redux/Action'

export default function Nbag2() {
  const { transform3 } = useSelector((state) => state);
  const dispa = useDispatch();

  const bagClose = () => {
    dispa(trans3("translateX(100%)"));
  };
  const bagClose2 = () => {
    dispa(trans3("translateX(100%)"));
  };
  return (
    <div
      className={` w-full h-full  left-0 top-0 z-[9999] fixed  translate-x-full`}
      style={{transform:transform3 }}
    >
      <div
        className=" w-1/3 h-full bg-white right-0 absolute Pop "
        // style={bagS}
      >
        <div className="Navcar ">
          <span className="font-[600]">Shopping cart </span>
          <span
            className=" font-[700] text-[#6b6b6b] cursor-pointer"
            onClick={bagClose}
          >
            <i class="fa-solid fa-x text-[15px]"></i> close
          </span>
        </div>
        <div className="flex gap-3 flex-col items-center">
          <img
            src="/public/img/shopping-cart-clear-svgrepo-com.svg"
            alt=""
            className="w-[30vh]"
          />
          <span className="font-[600] capitalize text-[3vh]">
            no products in the cart
          </span>
          <button className="bg-colo1 text-white rounded-[20px] py-1 px-5 text-[12px] font-[600] capitalize">
            return to shop
          </button>
        </div>
      </div>

      <div className="w-full h-full bg-[#1111112a]"  onClick={bagClose2}></div>
    </div>
  );
}
