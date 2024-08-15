import React, { useEffect, useState } from "react";
import Nloge from "./nave/Nloge";
import Nsearch from "./nave/Nsearch";
import Nbut from "./nave/Nbut";
import Ncati from "./nave/Ncati";
import SlidImg from "./SlidImg";
import NbutR from "./nave/NbutR";
import NbagAll from "./nave/NbagAll";


export default function Header() {
  const images = [
    { src: "/img/wd-furniture-slider-1-opt-1.jpg", alt: "Image 1" },
    { src: "/img/wd-furniture-slider-2-opt-1.jpg", alt: "Image 2" },
    { src: "/img/wd-furniture-slider-3-opt-1.jpg", alt: "Image 3" },
  ];

  const par = [
    {
      src: "/public/img/wd-furniture-decor-1.svg",
      span1: "decor",
      src2: "/public/img/furniture-2-slider-1-author-1.png.webp",
      h1: "Terracotta vase",
      h2: " Courtney Henry",
      prix: "$182",
    },
    {
      src: "/public/img/Chair.svg",
      span1: "chair",
      src2: "/public/img/furniture-2-slider-2-author-1.png.webp",
      h1: "Upholstered chair",
      h2: "Esther Howard",
      prix: "$468",
    },
    {
      src: "/public/img/wd-furniture-sofas-1.svg",
      span1: "sofas",
      src2: "/public/img//furniture-2-slider-3-author-1.png",
      h1: "Sectional fabric sofa",
      h2: " Romon Estev",
      prix: "$3620",
    },
  ];

  const [scro , setscro] = useState();

useEffect(()=>{
  const tog = () =>{
    if (window.pageYOffset > 200) {
      setscro(true)
    }else {
      setscro(false)
    }
  }

  window.addEventListener('click' , tog);


},[]);


  return (
    <>
    {/* style={{position : scro ? 'fixed' : 'relative'}} */}
          <header>
        <nav className=" px-[3vh] border bg-[#fbfaf7] z-[999] w-full duration-500 relative"  >
          <div className="flex justify-between items-center py-[20px] max-[1024px]:py-2">
            <NbutR/>
            <Nloge />
            <Nsearch />
            <Nbut />
            {/* <NbagAll/> */}
          </div>

          <Ncati />
        </nav>
        <SlidImg images={images} parA={par} />
      </header>

    </>
  );
}

