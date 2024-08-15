import React from 'react'
import FooterL from './FooterL'
import FooterR from './FooterR'

export default function FooterAll1() {

  const fot = [
    {
      h1: "usful links",
      li: 'about us',
      li2: 'contact us',
      li3: 'showrooms',
      li4: 'blog',
      li5: 'gift cards',
    },
    {
      h1: "categoties",
      li: 'chair',
      li2: 'tables',
      li3: 'sofa',
      li4: 'armchairs',
      li5: 'beds',
      li6: 'chair',
      li7: 'tables',
      li8: 'sofa',
      li9: 'armchairs',
      li10: 'beds',

      // link
      link: '#',
      link2: '#',
      link3: '#',
      link4: '#',
      link5: '#',
      link6: '#',
      link7: '#',
      link8: '#',
      link9: '#',
      link10: '#',
    },
  ]

  return (
    <footer className='bg-black mt-20 py-20 px-3 grid grid-cols-col1 max-[1024px]:grid-cols-col4 max-[900px]:grid-cols-1 gap-[15vh]'>


      <FooterL fot={fot} />
      <FooterR />
    </footer>
  )
}
