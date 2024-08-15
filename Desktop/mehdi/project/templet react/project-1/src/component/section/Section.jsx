import React from "react";
import Stitre from "./sec1/Stitre";
import Catego from "./sec1/Catego";
import Bestsellers from "./sec1/Bestsellers";
import Collections from "./collections/Collections";
import OfWeek from "./OfWeek/OfWeek";
import Rules from "./rules/Rules";
import ArtAll from "./art/ArtAll";
import DecAll from "./dec/DecAll";
import Brands from "./sec1/brands/Brands";

export default function Section() {
  const images = [
    {
      id: 1,
      src: "/img/wd-furniture-category-armchairs.jpg.webp",
      text: "armchairs",
    },
    { id: 2, src: "/img/wd-furniture-category-toys.jpg.webp", text: "toys" },
    { id: 3, src: "/img/wd-furniture-category-beds.jpg.webp", text: "beds" },
    {
      id: 4,
      src: "/img/wd-furniture-category-chairs.jpg.webp",
      text: "chairs",
    },
    { id: 5, src: "/img/wd-furniture-category-decor.jpg.webp", text: "decor" },
    {
      id: 6,
      src: "/img/wd-furniture-category-lighting.jpg.webp",
      text: "lighting",
    },
    { id: 7, src: "/img/wd-furniture-category-sofas.jpg.webp", text: "sofas" },
    {
      id: 8,
      src: "/img/wd-furniture-category-storage.jpg.webp",
      text: "storage",
    },
    {
      id: 9,
      src: "/img/wd-furniture-category-tables.jpg.webp",
      text: "tables",
    },
    {
      id: 10,
      src: "/img/wd-furniture-category-textiles.jpg.webp",
      text: "textiles",
    },
  ];

  const li = [
    { id: 1, text: "all" },
    { id: 2, text: "chairs" },
    { id: 3, text: "sofas" },
    { id: 4, text: "armchairs" },
    { id: 5, text: "tables" },
  ];

  return (
    <section className="px-3 pt-[18vh] overflow-hidden">
      <Stitre />

      <div className="grid grid-cols-5  gap-[17px] py-12 Cate ">
        <Catego images={images} />
      </div>

      <Bestsellers b1={li} />
      <Brands/>
       <Collections/>
      <OfWeek/>
      <Rules/>
      <ArtAll/>
      <DecAll/>
    </section>
  );
}
