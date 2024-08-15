import React from 'react'
import OfWeek1 from './OfWeek1'
import OfWeek2 from './OfWeek2'

export default function OfWeek() {

    const coll = [
        {
            id: 10,
            img: "/public/img/wd-furniture-hotspot-9.jpg.webp",
      
      
            imgCard1: "/public/img/wd-furniture-chair-prod-10-1-350x400.jpg",
            h1Card1: "moore",
            prixCard1:"$45.00",
            pCard1: "Cabinet collection is a series of floor standing and wall-hanging cabinets that",
            // ===========================
            imgCard2: "/public/img/wd-furniture-lighting-prod-4-1-430x491.jpg.webp",
            h1Card2: "panda bear",
            prixCard2:"$16.00",
            pCard2: "The light, however, is not emitted by a bulb or by an LED board, but by the",
            // ===========================
            imgCard3: "/public/img/wd-furniture-sofas-prod-9-1-430x491.jpg.webp",
            h1Card3: "baby key rattle",
            prixCard3:"$120.00",
            pCard3: "The light, however, is not emitted by a bulb or by an LED board, but by the",
         
      
      
            style1: {
              transform: "translate(-18%, -32%)",
              bottom: "32%",
              left: "18%",
              position: "absolute",
            },
            style2: {
              transform: "translate(-28%, -56%)",
              bottom: "56%",
              left: "28%",
              position: "absolute",
            },
            style3: {
              transform: "translate(-73%, -20%)",
              bottom: "20%",
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
            }
          },
    ]
    return (
        <div className='grid grid-cols-col1 gap-[23px] ofweek max-[800px]:pt-[20vh]'>

            <OfWeek1 />
            <OfWeek2 coll={coll}/>
        </div>
    )
}
