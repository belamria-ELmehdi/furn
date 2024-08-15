import React from 'react'
import BranTitre from './BranTitre'
import Bran from './Bran'

export default function Brands() {

    const bra = [
        {
            id:1,
            logo:"/public/img/wd-furniture-circle-brand-hay-64x64.png",
            titre:"hay",
            pay:"barcelona / spanin",
            bag:"url('/img/wd-furniture-brand-bg-hay-1.jpg')"
        },
        {
            id:2,
            logo:"/public/img/wd-furniture-circle-brand-elitis-64x64.png",
            titre:"hay",
            pay:"barcelona / spanin",
            bag:"url('/public/img/wd-furniture-brand-bg-elitis-1.jpg')"

        },
        {
            id:3,
            logo:"/public/img/wd-furniture-circle-brand-kettal-64x64.png",
            titre:"hay",
            pay:"barcelona / spanin",
            bag : "url('img/wd-furniture-brand-bg-kettal-1.jpg')"
        },
        {
            id:4,
            logo:"/public/img/wd-furniture-circle-brand-lladro-64x64.png",
            titre:"hay",
            pay:"barcelona / spanin",
            bag : "url('img/wd-furniture-brand-bg-lladro-1.jpg')"

            
        },
        {
            id:5,
            logo:"/public/img/wd-furniture-circle-brand-poliform-64x64.png",
            titre:"hay",
            pay:"barcelona / spanin",
            bag : "url('img/wd-furniture-brand-bg-poliform-1.jpg')"

        },
    ]
  return (
  <div className="py-20">
      <BranTitre/>
      <Bran brans={bra}/>
  </div>

  )
}
