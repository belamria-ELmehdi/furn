import React from 'react'
import OfWeekTit from './OfWeekTit'
import OfWeekpro from './OfWeekpro'

export default function OfWeek1() {

    const best2 = [
        {
          id: 1,
          text: "Curve",
          star: "4.5",
          cat: "Chairs",
          prix: "$320.00",
          img: "/public/img/wd-furniture-chair-prod-10-2-350x400.jpg",
          img1: "/public/img/wd-furniture-chair-prod-10-3-350x400.jpg",
          img2: "/public/img/wd-furniture-chair-prod-10-4-350x400.jpg",
          span: " ",
          sold: "5%",
          proPrix: "$400.00",
        },
        {
          id: 2,
          img: "/img/wd-furniture-lighting-prod-4-1-430x491.jpg.webp",
          img1: "/img/wd-furniture-lighting-prod-4-2-350x400.jpg",
          img2: "/img/wd-furniture-lighting-prod-4-3-350x400.jpg",
          text: "Curve",
          star: "4.5",
          cat: "Chairs",
          prix: "$320.00",
          span: " ",
          sold: " ",
        },
        {
          id: 3,
          text: "Curve",
          star: "4.5",
          cat: "Chairs",
          prix: "$320.00",
          img: "/public/img/wd-furniture-sofas-prod-9-1-430x491.jpg.webp",
          img1: "/public/img/wd-furniture-sofas-prod-9-2-350x400.jpg",
          img2: "/public/img/wd-furniture-sofas-prod-9-3-350x400.jpg",

          span: "new",
          sold: " ",
          proPrix: "",
        },
        {
          id: 4,
          img: "/public/img/wd-furniture-tables-prod-10-1-350x400.jpg",
          img1: "/public/img/wd-furniture-tables-prod-10-2-350x400.jpg",
          img2: "/public/img/wd-furniture-tables-prod-10-3-350x400.jpg",
          text: "Curve",
          star: "4.5",
          cat: "Chairs",
          prix: "$320.00",
          span: " ",
          sold: " ",
          proPrix: "",
        },
          ];
    
      const art4 = [
        { src: "/img/wd-furniture-chair-prod-1-1-350x400.jpg" },
        { src: "/img/wd-furniture-chair-prod-1-2-350x400.jpg" },
        { src: "/img/wd-furniture-chair-prod-1-3-350x400.jpg" },
      ];
  return (
    <div className='grid gap-y-9'>
        <OfWeekTit/>
        <OfWeekpro art3={best2} art4={art4}/>
    </div>
  )
}
