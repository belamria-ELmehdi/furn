import React from "react";
import bag from '/img/cart-shopping-shop-ecommerce-buy-online-store-svgrepo-com.svg'
import NbagAll from "./NbagAll";
import Nlogin from "./Nlogin";
export default function Nbut() {
  return (
    <>
      <div className="flex items-center gap-3">
        <ul className="flex gap-3 nbut-ul items-center">
          <li className="nav-li">
            <a href="#">
              <i class="fa-solid fa-shuffle"></i>
            </a>
          </li>
          <li className="nav-li">
            <a href="#">
              <i class="fa-regular fa-heart"></i>
            </a>
          </li>
          <li className="nav-li">
            <Nlogin />
          </li>

        </ul>
        <ul>
          <li>
            <NbagAll />
          </li>
        </ul>


      </div>

    </>
  );
}
