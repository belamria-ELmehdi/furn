import React from "react";
import Bestcat from "./Bestcat";
import Brands from "./brands/Brands";

export default function Bestsellers({ b1 }) {
  const best = [
    {
      id: 1,
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      img: "/public/img/wd-furniture-sofas-prod-10-1-350x400.jpg",
      img1: "/public/img/wd-furniture-sofas-prod-10-2-350x400.jpg",
      img2: "/public/img/wd-furniture-sofas-prod-10-3-350x400.jpg",
      span: " ",
      sold: "5%",
      proPrix: "$400.00",
    },
    {
      id: 2,
      img: "/img/wd-furniture-chair-prod-1-1-350x400.jpg",
      img1: "/img/wd-furniture-chair-prod-1-2-350x400.jpg",
      img2: "/img/wd-furniture-chair-prod-1-3-350x400.jpg",
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
      img: "/public/img/wd-furniture-armchairs-prod-2-1-350x400.jpg",
      img1: "/public/img/wd-furniture-armchairs-prod-2-2-350x400.jpg",
      img2: "/public/img/wd-furniture-armchairs-prod-2-3-350x400.jpg",
      img3: "/public/img/wd-furniture-armchairs-prod-2-4-350x400.jpg",
      span: "new",
      sold: " ",
      proPrix: "",
    },
    {
      id: 4,
      img: "/public/img/wd-furniture-tables-prod-13-1-350x400.jpg",
      img1: "/public/img/wd-furniture-tables-prod-13-2-350x400.jpg",
      img2: "/public/img/wd-furniture-tables-prod-13-3-350x400.jpg",
      img3: "/public/img/wd-furniture-tables-prod-13-3-350x400.jpg",
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      span: " ",
      sold: " ",
      proPrix: "",
    },
    {
      id: 5,
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      img: "/public/img/wd-furniture-chair-prod-13-1-350x400.jpg",
      img1: "/public/img/wd-furniture-chair-prod-13-2-350x400.jpg",
      img2: "/public/img/wd-furniture-chair-prod-13-3-350x400.jpg",
      img3: "/public/img/wd-furniture-chair-prod-13-4-350x400.jpg",
      span: " ",
      sold: " ",
      proPrix: "",
    },
    {
      id: 6,
      img: "/img/wd-furniture-chair-prod-1-1-350x400.jpg",
      img1: "/img/wd-furniture-chair-prod-1-2-350x400.jpg",
      img2: "/img/wd-furniture-chair-prod-1-3-350x400.jpg",
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      span: " ",
      sold: " ",
      proPrix: "",
    },
    {
      id: 7,
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      img: "/public/img/wd-furniture-sofas-prod-10-1-350x400.jpg",
      img1: "/public/img/wd-furniture-sofas-prod-10-2-350x400.jpg",
      img2: "/public/img/wd-furniture-sofas-prod-10-3-350x400.jpg",
      span: "new",
      sold: " ",
      proPrix: "",
    },
    {
      id: 8,
      img: "/img/wd-furniture-chair-prod-1-1-350x400.jpg",
      img1: "/img/wd-furniture-chair-prod-1-2-350x400.jpg",
      img2: "/img/wd-furniture-chair-prod-1-3-350x400.jpg",
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      span: " ",
      sold: " ",
      proPrix: "",
    },
    {
      id: 9,
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      img: "/public/img/wd-furniture-sofas-prod-10-1-350x400.jpg",
      img1: "/public/img/wd-furniture-sofas-prod-10-2-350x400.jpg",
      img2: "/public/img/wd-furniture-sofas-prod-10-3-350x400.jpg",
      span: " ",
      sold: " ",
      proPrix: "",
    },
    {
      id: 10,
      img: "/img/wd-furniture-chair-prod-1-1-350x400.jpg",
      img1: "/img/wd-furniture-chair-prod-1-2-350x400.jpg",
      img2: "/img/wd-furniture-chair-prod-1-3-350x400.jpg",
      text: "Curve",
      star: "4.5",
      cat: "Chairs",
      prix: "$320.00",
      span: " ",
      sold: "10%",
      proPrix: "$400.00",
    },
  ];

  const art2 = [
    { src: "/img/wd-furniture-chair-prod-1-1-350x400.jpg" },
    { src: "/img/wd-furniture-chair-prod-1-2-350x400.jpg" },
    { src: "/img/wd-furniture-chair-prod-1-3-350x400.jpg" },
  ];
  return (
    <div className="mt-11">
      <div className="b1 flex justify-between items-center div1-bstS   w-full">
        <h1 className="font-[700] text-[32px] capitalize h1-bstS ">
          weekly bestsellers
        </h1>
        <div className="div2-bstS overflow-hidden ">
           <ul className="flex gap-x-7 max-[400px]:gap-[15px]">
          {b1.map((li) => (
            <li
              key={li.id}
              className="capitalize font-[600] relative  before:contents-[''] before:w-0 before:h-[2px] before:bottom-0 before:bg-colo1 before:absolute before:hover:w-full before:duration-300"
            >
              <a href="#">{li.text}</a>{" "}
            </li>
          ))}
        </ul>
        </div>
       
      </div>

      <Bestcat art={best} art2={art2} />
    </div>
  );
}
