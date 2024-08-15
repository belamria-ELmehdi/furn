import React from "react";

export default function Catego({ images }) {
  return (
    <>
      {images.map((imag) => (
        <div
          key={imag.id}
          className="border rounded-full overflow-hidden relative h-[19vw] w-[19vw]  group cursor-pointer  div1-Catefo "
        >
          <div className="img absolute group-hover:scale-150 transition duration-500">
            <img src={imag.src} alt="" className="h-full w-full"/>
          </div>

          <div className="doc hover:bg-[#0000006e] h-full w-full absolute flex justify-center items-center flex-col group ">
            <p className="bg-white rounded-[20px] px-[20px] py-1 font-[700] capitalize text-[17px]">
              {imag.text}
            </p>

            <h1 className="text-white  relative -bottom-2 opacity-0  group-hover:opacity-100 duration-500">
              <span>16 </span> products{" "}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}
