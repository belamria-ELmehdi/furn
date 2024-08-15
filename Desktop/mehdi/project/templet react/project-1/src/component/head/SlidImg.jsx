import React, { useEffect, useState } from "react";

export default function SlidImg({ images, parA }) {
  const [curreA, setCurre] = useState(0);
  const [isrT, setisT] = useState(false);
  const [Isan, setan] = useState(false);

  const next = () => {
    setisT(true);
    setan(true);
    setCurre((prevIndex) => (prevIndex + 1) % images.length);
  };

  const pre = () => {
    setisT(true);
    setan(true);
    setCurre((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setisT(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isrT]);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setan(false);
    }, 1000);
    return () => clearTimeout(timer2);
  }, [Isan]);

  // button in down
  const hand = (index) => {
    setisT(true);
    setan(true);
    setCurre(index);
  }

  // time

  return (
    <div className=" bg-black h-[100vh] relative overflow-hidden D-slid   " >
      <div className="h-full ">
        <img
          src={images[curreA].src}
          alt={images[curreA].alt}
          className={`slide-image ${isrT ? "transitioning" : ""} object-cover`}
        />
      </div>

      <div className="absolute top-[50%] left-[10%] translate-x-[-10%] translate-y-[-50%] grid gap-y-[15vh] max-[1024px]:left-[20%] max-[1024px]:translate-x-[-20%] max-[625px]:translate-x-[-35%] max-[625px]:left-[35%] max-[425px]:w-full max-[425px]:mx-[20px]">
        <div className={`test ${Isan ? "animate-ani2" : " "}`}>
          <div className=" relative flex items-center gap-5 rounded-[5px] divCat-slid">
            <img
              src={parA[curreA].src}
              alt=""
              className=" rounded-[100px] p-[10px] w-[10vh] bg-[#0000002e] img-slid  "
            />
            <span className="font-[700] text-[17px] text-[#242424cc] span2-slid ">
              Discover more products <br /> in the{" "}
              <span className=" border-b-[3px] border-colo1">
                {parA[curreA].span1}
              </span>{" "}
              catrgory
            </span>
          </div>
        </div>

        <div className={`test1 ${Isan ? "animate-ani1" : " "}`}>
          <div className=" relative grid gap-y-[6vh] divCat2-slid">
            <h1 className=" text-[50px] font-[700] text-[#242424cc] h11-slid ">
              {parA[curreA].h1} <br />{" "}
              <span className="flex items-center SliS2 span1-slid max-[625px]:block">
                <span className="flex items-center">
                  {" "}
                  by{" "}
                  <img
                    src={parA[curreA].src2}
                    alt=""
                    className="w-[60px] h-[60px] mx-3"
                  />{" "}

                </span>

                <span> {parA[curreA].h2}</span>
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <button className="bg-white rounded-[100px] capitalize font-[600] px-[20px] py-[9px] but-slid ">
                shop now
              </button>
              <span className="text-[35px] font-[700] text-[#242424cc] span2-slid ">
                {parA[curreA].prix}
              </span>
            </div>
          </div>
        </div>
      </div>

      <ul className="flex justify-between absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[99%] ul-slid ">
        <li
          className="flex items-center justify-center border cursor-pointer px-5 py-3  rounded-[90px] bg-white "
          onClick={pre}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </li>
        <li
          className="border py-3 cursor-pointer px-5 rounded-[90px] bg-white"
          onClick={next}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </li>
      </ul>



      <ul className="bg-white absolute bottom-5 w-[70px] h-[20px] left-1/2 rounded-[20px] flex justify-center items-center gap-2 ul2-slid">
        {images.map((_, index) => (
          <li
            key={index}
            className={`but-li ${index === curreA ? "act" : ""}`}
            onClick={() => hand(index)}
          />
        ))}
      </ul>
      <style jsx>{`
        .slide-image {
          transition: transform 1s;
          height: 100%;
        }
        .slide-image.transitioning {
          transform: translateX(${isrT && curreA === 0 ? "-100%" : "100%"});
        }
        .test {
          transition: 1s;
          top: 0vh;
          position: relative;
        }

        .test.animate-ani2 {
          top: -50vh;
        }
        .test1 {
          transition: 1s;
          bottom: 0vh;
          position: relative;
        }

        .test1.animate-ani1 {
          bottom: -55vh;
        }
      `}</style>
    </div>
  );
}
