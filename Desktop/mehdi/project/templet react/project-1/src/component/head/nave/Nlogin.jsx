import React from "react";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { by } from "/src/redux/Action";



export default function Nlogin() {
  const dispa = useDispatch();
  const { transform } = useSelector((state) => state);

  const logad = () => {
    dispa(by("translateX(0%)"));
  };


  return (
    <>
      <a href="#" className="flex gap-2 items-center" onClick={logad}>
        <i class="fa-regular fa-user"></i>
        <span>login / register</span>
      </a>

      <Login />
    </>

  );
}
