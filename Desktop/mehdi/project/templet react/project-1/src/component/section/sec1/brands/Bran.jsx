import React from "react";

export default function Bran({ brans }) {
  return (
    <div className=" grid grid-cols-5 h-[70vh] gap-5 my-6  Brn-div1 ">
      {brans.map((ele) => (<a href="#">
        <div className="bg relative  h-[65vh] overflow-hidden hover:h-[70vh] duration-500 Brn-div2  max-[768px]:hover:h-[65vh] " key={ele.id} style={{ background: `${ele.bag}` }}>

          <div className="h-full w-full top-0 absolute hover:bg-[#0000002a] duration-500 ">
            <div className=" flex items-center gap-5 mx-5 my-5">
              <img src={ele.logo} className="h-[10vh]" />
              <div className="">
                <h1 className="font-[600] capitalize text-white text-[20px]">
                  {ele.titre}
                </h1>
                <p className="font-[500] text-white">{ele.pay}</p>
              </div>
            </div>
          </div>


          <style jsx>{`
            .bg {
         
                background-size: cover !important;
                border-radius: 14px;
            }
          `}</style>
        </div>
      </a>
      ))}
    </div>
  );
}
