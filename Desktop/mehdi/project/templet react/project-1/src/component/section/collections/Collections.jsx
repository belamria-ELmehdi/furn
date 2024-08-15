import React from "react";
import CollTiter from "./CollTiter";
import CollPro from "./CollPro";

export default function Collections() {
  const coll = [
    {
      id: 1,
      img: "/public/img/wd-furniture-hotspot-1.jpg.webp",


      imgCard1: "/public/img/wd-furniture-armchairs-prod-2-1-430x491.jpg.webp",
      h1Card1: "belt",
      prixCard1: "$680.00",
      pCard1: "The compact and well-proportioned silhouette of both the seats and the small",
      // ===========================
      imgCard2: "/public/img/wd-furniture-lighting-prod-14-1-430x491.jpg.webp",
      h1Card2: "ice cream",
      prixCard2: "$850.00",
      pCard2: "The light, however, is not emitted by a bulb or by an LED board, but by the",
      // ===========================
      imgCard3: "/public/img/wd-furniture-textiles-prod-15-1-430x491.jpg.webp",
      h1Card3: "maya dune linel",
      prixCard3: "$530.00",
      pCard3: "Its modular structure, based on the combination of six irregularly shaped polygons",

      vidS: {
        width: "0",
      },

      style: {
        gridColumn: "1 / 1",
        gridRow: "1 / 6",
      },

      style1: {
        transform: "translate(-23%, -20%)",
        bottom: "20%",
        left: "23%",
        position: "absolute",

      },
      style2: {
        transform: "translate(-65%, -62%)",
        bottom: "62%",
        left: "65%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-5%, -80%)",
        bottom: "5%",
        left: "80%",
        position: "absolute",
      },
    },
    {
      id: 2,

      img: "/public/img/wd-furniture-hotspot-2.jpg.webp",

      imgCard1: "/public/img/wd-furniture-storage-prod-5-1-430x491.jpg.webp",
      h1Card1: "alessa",
      prixCard1: "$1,100.00",
      pCard1: "Cabinet collection is a series of floor standing and wall-hanging cabinets that",
      // ===========================
      imgCard2: "/public/img/wd-furniture-lighting-prod-10-1-430x491.jpg.webp",
      h1Card2: "floor lamp",
      prixCard2: "$320.00",
      pCard2: "The light, however, is not emitted by a bulb or by an LED board, but by the",
      // ===========================
      imgCard3: "/public/img/wd-furniture-armchairs-prod-12-1-430x491.jpg.webp",
      h1Card3: "elephant",
      prixCard3: "$1,820.00",
      pCard3: "The compact and well-proportioned silhouette of both the seats and the small",

      vidS: {
        width: "0",
      },

      style: {
        gridArea: "1 / 2 / 8 / 3",
      },
      style1: {
        transform: "translate(-30%, -35%)",
        bottom: "35%",
        left: "30%",
        position: "absolute",
      },
      style2: {
        transform: "translate(-83%, -53%)",
        bottom: "53%",
        left: "83%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-28%, -67%)",
        bottom: "28%",
        left: "67%",
        position: "absolute",
      },

    },
    {
      id: 3,
      vid: "/public/img/wd-furniture-hotspot-video-opt.mp4",

      imgCard1: "/public/img/wd-furniture-textiles-prod-4-1-430x491.jpg.webp",
      h1Card1: "hem",
      prixCard1: "$45.00",
      pCard1: "Its modular structure, based on the combination of six irregularly shaped polygons",
      // ===========================
      imgCard2: "/public/img/wd-furniture-decor-prod-16-1-430x491.jpg.webp",
      h1Card2: "tesse",
      prixCard2: "$22.00",
      pCard2: "The special inner foam moulds itself to accommodate and provide",
      // ===========================
      imgCard3: "/public/img/wd-furniture-decor-prod-12-1-430x491.jpg.webp",
      h1Card3: "edelstahl besteck",
      prixCard3: "$25.00",
      pCard3: "The special inner foam moulds itself to accommodate and provide",

      style: {
        gridColumn: "3 / 3",
        gridRow: "1 / 7",
      },

      imgS: {
        width: "0",
        height: "0",
      },


      style1: {
        transform: "translate(-15%, -45%)",
        bottom: "45%",
        left: "15%",
        position: "absolute",
      },
      style2: {
        transform: "translate(-73%, -47%)",
        bottom: "47%",
        left: "73%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-30%, -30%)",
        bottom: "30%",
        left: "30%",
        position: "absolute",
      },
    },
    {
      id: 4,

      h1: "hallan",
      p: "the new common language wili be more simple and regular than the existing languages",

      cla: 'cpro',
      vidS: {
        width: "0",
      },
      style: {
        // width: "50vh",
        height: "100%",
        background: "#cbd4d4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 30px",
        gridArea: "1 / 5 / 5 / 4",
      },


      style1: {
        display: "none"
      },
      style2: {
        display: "none"
      },
      style3: {
        display: "none"
      },
    },

    {
      id: 5,
      img: "/public/img/wd-furniture-hotspot-5.jpg.webp",
      vidS: {
        width: "0",
      },
      imgCard1: "/public/img/wd-furniture-armchairs-prod-5-1-430x491.jpg.webp",
      h1Card1: "albert",
      prixCard1: "$1,600.00",
      pCard1: "The compact and well-proportioned silhouette of both the seats and the small",
      // ===========================
      imgCard2: "/public/img/wd-furniture-lighting-prod-14-1-430x491.jpg.webp",
      h1Card2: "mademoiselle",
      prixCard2: "$1,100.00",
      pCard2: "The light, however, is not emitted by a bulb or by an LED board, but by the",
      // ===========================
      imgCard3: "/public/img/wd-furniture-decor-prod-2-1-430x491.jpg.webp",
      h1Card3: "metoe S",
      prixCard3: "$199.00",
      pCard3: "Its modular structure, based on the combination of six irregularly shaped polygons",

      style: {
        gridArea: "1 / 5 / 6 / 6",
      },

      style1: {
        transform: "translate(-45%, -20%)",
        bottom: "20%",
        left: "45%",
        position: "absolute",
      },
      style2: {
        transform: "translate(-80%, -80%)",
        bottom: "80%",
        left: "80%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-20%, -75%)",
        bottom: "20%",
        left: "75%",
        position: "absolute",
      },

      devCard1: {
        transform: "translate(-95%, -0%)",
        top: "0%",
        left: "95%",
      },
      devCard2: {
        transform: "translate(-95%, 0%)",
        top: "0%",
        left: "95%",
      },
      devCard3: {
        transform: "translate(-95%, 0%)",
        top: "0%",
        left: "95%",
      },
      Devlir:'Devlir',
    },
    {
      id: 6,
      img: "/public/img/wd-furniture-hotspot-6.jpg.webp",
      imgCard1: "/public/img/wd-furniture-lighting-prod-9-1-430x491.jpg.webp",
      h1Card1: "bela",
      prixCard1: "$240.00",
      pCard1: "The light, however, is not emitted by a bulb or by an LED board, but by the",
      // ===========================
      imgCard2: "/public/img/wd-furniture-armchairs-prod-15-1-430x491.jpg.webp",
      h1Card2: "lima",
      prixCard2: "$460.00",
      pCard2: "The compact and well-proportioned silhouette of both the seats and the small",
      // ===========================
      imgCard3: "/public/img/wd-furniture-textiles-prod-7-1-430x491.jpg.webp",
      h1Card3: "stoense",
      prixCard3: "$230.00",
      pCard3: "Its modular structure, based on the combination of six irregularly shaped polygons",

      vidS: {
        width: "0",
      },
      style: {
        gridColumn: "2 / 1",
        gridRow: "11 / 6",
      },

      style1: {
        transform: "translate(-28%, -37%)",
        bottom: "37%",
        left: "28%",
        position: "absolute",
      },
      style2: {
        transform: "translate(-65%, -45%)",
        bottom: "45%",
        left: "65%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-5%, -80%)",
        bottom: "5%",
        left: "80%",
        position: "absolute",
      },
    },
    {
      id: 7,
      h1: "GLADØM",
      p: "The new common language wili be more simple and regular than the existing languages",
      cla: 'cpro',

      vidS: {
        width: "0",
      },
      imgS: {
        width: "0",
      },
      style: {
        height: "100%",
        background: "#e1dbd4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 30px",
        gridColumn: "2 / 2",
        gridRow: "8 / 12",
      },

      style1: {
        display: "none"
      },
      style2: {
        display: "none"
      },
      style3: {
        display: "none"
      },
    },
    {
      id: 8,
      img: "/public/img/wd-furniture-hotspot-7.jpg.webp",

      imgCard1: "/public/img/wd-furniture-textiles-prod-2-1-430x491.jpg.webp",
      h1Card1: "mega dot",
      prixCard1: "$85.00",
      pCard1: "Its modular structure, based on the combination of six irregularly shaped polygons",
      // ===========================
      imgCard2: "/public/img/wd-furniture-beds-prod-14-1-430x491.jpg.webp",
      h1Card2: "be look",
      prixCard2: "$1,200.00",
      pCard2: "The compact and well-proportioned silhouette of both the seats and the small",
      // ===========================
      imgCard3: "/public/img/wd-furniture-storage-prod-4-1-430x491.jpg.webp",
      h1Card3: "comb. 401",
      prixCard3: "$110.00",
      pCard3: "Cabinet collection is a series of floor standing and wall-hanging cabinets that",
      style: {
        gridArea: "11 / 3 / 7 / 3",
      },

      vidS: {
        width: "0",
      },

      style1: {
        transform: "translate(-23%, -20%)",
        bottom: "20%",
        left: "23%",
        position: "absolute",
      },
      style2: {
        transform: "translate(-30%, -75%)",
        bottom: "75%",
        left: "30%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-35%, -70%)",
        bottom: "35%",
        left: "70%",
        position: "absolute",
      },

    },
    {
      id: 9,
      img: "/public/img/wd-furniture-hotspot-4.jpg.webp",

      imgCard1: "/public/img/wd-furniture-tables-prod-4-1-430x491.jpg.webp",
      h1Card1: "henry",
      prixCard1: "$2,090.00",
      pCard1: "A new classic for the contemporary dining room, the Mondrian table",
      // ===========================
      imgCard2: "/public/img/wd-furniture-lighting-prod-7-1-430x491.jpg.webp",
      h1Card2: "foglio",
      prixCard2: "$445.00",
      pCard2: "The light, however, is not emitted by a bulb or by an LED board, but by the",
      // ===========================
      imgCard3: "/public/img/wd-furniture-armchairs-prod-8-1-430x491.jpg.webp",
      h1Card3: "bluemine",
      prixCard3: "$1,620.00",
      pCard3: "The compact and well-proportioned silhouette of both the seats and the small",
      style: {
        gridArea: "5 / 5 / 12 / 4",
      },

      vidS: {
        width: "0",
      },
      style1: {
        transform: "translate(-50%, -20%)",
        bottom: "20%",
        left: "50%",
        position: "absolute",
      },
      style2: {
        transform: "translate(-50%, -62%)",
        bottom: "62%",
        left: "50%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-17%, -80%)",
        bottom: "17%",
        left: "80%",
        position: "absolute",
      },



    },
    {
      id: 10,
      img: "/public/img/wd-furniture-hotspot-8.jpg.webp",


      imgCard1: "/public/img/wd-furniture-storage-prod-13-1-430x491.jpg.webp",
      h1Card1: "moore",
      prixCard1: "$45.00",
      pCard1: "Cabinet collection is a series of floor standing and wall-hanging cabinets that",
      // ===========================
      imgCard2: "/public/img/wd-furniture-toys-prod-10-1-430x491.jpg.webp",
      h1Card2: "panda bear",
      prixCard2: "$16.00",
      pCard2: "The light, however, is not emitted by a bulb or by an LED board, but by the",
      // ===========================
      imgCard3: "/public/img/wd-furniture-toys-prod-8-1-430x491.jpg.webp",
      h1Card3: "baby key rattle",
      prixCard3: "$120.00",
      pCard3: "The light, however, is not emitted by a bulb or by an LED board, but by the",
      style: {
        gridArea: "6 / 5 / 11 / 5",
      },

      vidS: {
        width: "0",
      },

      style1: {
        transform: "translate(-33%, -33%)",
        bottom: "33%",
        left: "33%",
        position: "absolute",
      },
      style2: {
        transform: "translate(-82%, -47%)",
        bottom: "47%",
        left: "82%",
        position: "absolute",
      },
      style3: {
        transform: "translate(-15%, -73%)",
        bottom: "15%",
        left: "73%",
        position: "absolute",
      },

      devCard1: {
        transform: "translate(-95%, -0%)",
        top: "0%",
        left: "95%",
      },
      devCard2: {
        transform: "translate(-95%, 0%)",
        top: "0%",
        left: "95%",
      },
      devCard3: {
        transform: "translate(-95%, 0%)",
        top: "0%",
        left: "95%",
      },
      Devlir:"Devlir",
    },
  ];

  return (
    <>
      <CollTiter />
      <CollPro coll={coll} />
    </>
  );
}
