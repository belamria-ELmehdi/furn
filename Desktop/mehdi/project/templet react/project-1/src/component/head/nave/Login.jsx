import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { by } from "/src/redux/Action";

export default function Login() {
  const { transform } = useSelector((state) => state);
  const dis = useDispatch();

  const handLog = () => {
    dis(by("translateX(100%)"));
  };

  const bg = ()=>{
    dis(by("translateX(100%)"));
  }

  return (
    <>
      <div
        className=" w-full h-full  left-0 top-0 z-[9999] fixed "
        style={{ transform:transform  }}
      >
      
        <div className="w-full h-full absolute bg-[#1111112a]" onClick={bg}></div>
  
        <div className="h-full w-[25%] bg-white right-0 absolute ">
          <div className="Navcar">
            <h1 className="font-[600]">Sign in</h1>

            <span
              className=" font-[700] text-[#6b6b6b] cursor-pointer"
              onClick={handLog}
            >
              <i class="fa-solid fa-x text-[15px]"></i> close
            </span>
          </div>

          <form action="" className="py-5 px-3">
            <div className="from-div ">
              <label htmlFor="">
                Username or email address <span className="text-colo1">*</span>
              </label>
              <input type="email" name="" id="" className=" NPlogi " />
            </div>
            <div className="from-div py-5">
              <label htmlFor="">
                Password <span className="text-colo1">*</span>
              </label>
              <input type="password" name="" id="" className="NPlogi" />
            </div>
            <input
              type="submit"
              value="Log in"
              className="mb-3 cursor-pointer bg-colo1 w-full rounded-[20px] py-[11px] text-white font-[600] text-[13px]"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <input type="checkbox" name="" id="" />
                <span className="text-[13px]">Remember me</span>
              </div>

              <span className="text-colo1 text-[15px] ">
                {" "}
                <a href="#">Lost your password ?</a>
              </span>
            </div>
          </form>

          <div className="flex flex-col items-center  border-t border-b py-7 gap-3">
            <i class="fa-regular fa-user text-[60px] text-[#b4b4b4]"></i>
            <span className="font-[700] text-[15px]">No account yet?</span>
            <span className=" underline decoration-colo1 decoration-[3px]">
              {" "}
              <a href="#">Creat an Account</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
