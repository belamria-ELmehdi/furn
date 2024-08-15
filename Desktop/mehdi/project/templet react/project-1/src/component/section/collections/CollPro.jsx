import React from "react";

export default function CollPro({ coll }) {
  return (
    <div className="Coll-Div1  grid grid-cols-5 grid-rows-12 gap-5 h-auto mt-10  ">
      {coll.map((ele) => (
        <div
          key={ele.id}
          className={`rounded-[15px] ${ele.cla}`}
          style={ele.style}
        >
          <div className="h-full relative group/but">
            <img
              src={ele.img}
              alt=""
              className="h-full  w-full rounded-[20px]"
              style={ele.imgS}
            />

            <video src={ele.vid} autoPlay muted loop playsInline height={2000} className=" rounded-[20px]" style={ele.vidS}></video>
            <div className="absolute top-0 flex h-full  justify-center flex-col ">
              <h1 className="text-[40px] font-c uppercase">{ele.h1}</h1>
              <p className="font-[600] opacity-70 text-[#4b4b4b] text-[14px] leading-6">
                {ele.p}
              </p>
            </div>
            <ul className="top-0  absolute h-full w-full  hidden group-hover/but:block Coll-but">
              <li
                className="poi group  "
                style={ele.style1}
              >
                <div className={  `devCard1 ${ele.Devlir} `} style={ele.devCard1}>
                  <div className={` devCard  ${ele.DevCA} DevCA`}>
                   <a href="#"><img src={ele.imgCard1} className="h-[40vh] w-full" alt="hi" /></a> 
                    <div className="card-art">

                      <h1 className="h1Card1 "><a href="#" >{ele.h1Card1}</a></h1>
                      <h2 className="h2Card1 ">{ele.prixCard1}</h2>
                      <p className="pCard1">{ele.pCard1}</p>
                      <button className="BCard1 "><a href="#">Add to cart</a></button>
                    </div>

                  </div>
                </div>
              </li>
              <li
                className="poi group "
                style={ele.style2}
              >
                <div className={  `devCard1 ${ele.Devlir} `} style={ele.devCard2}>
                  <div className="devCard DevCA2">
                  <a href="#"><img src={ele.imgCard2} className="h-[40vh] w-full" alt="hi" /></a>  
                    <div className="card-art ">

                      <h1 className="h1Card1"><a href="#" >{ele.h1Card2}</a></h1>
                      <h2 className="h2Card1">{ele.prixCard2}</h2>
                      <p className="pCard1">{ele.pCard2}</p>
                      <button className="BCard1"><a href="#">Add to cart</a></button>
                    </div>

                  </div>
                </div>
              </li>
              <li
                className={`poi group `}
                style={ele.style3}
              >
                
                <div className={ `devCard1 ${ele.Devlir} `} style={ele.devCard1}>
                  <div className="devCard   DevCA3" >
                   <a href="#"> <img src={ele.imgCard3} className="h-[40vh] w-full" alt="hi" /></a> 
                    <div className="card-art">

                      <h1 className="h1Card1"><a href="#" >{ele.h1Card3}</a></h1>
                      <h2 className="h2Card1">{ele.prixCard3}</h2>
                      <p className="pCard1">{ele.pCard3}</p>
                      <button className="BCard1"><a href="#">Add to cart</a></button>
                    </div>

                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
