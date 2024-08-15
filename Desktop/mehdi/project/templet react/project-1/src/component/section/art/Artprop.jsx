import React from 'react'
import ArtS from './ArtS'

export default function Artprop() {

    const doc = [
        {
            id : 1,
            img :"/public/img/wd-furniture-blog-1-650x459.jpg",
            img1:"/public/img/avatar-home.jpg.webp",
            name:"Mr. Mehdi",
            cat:"Decoration",
            dat:"26 May 2023",
            h1:"In the heart of Valencia",
            p:"As an alternativee theory,(and because latina scholars do this sort of thing) spmeone tracked down a ...",

        },
        {
            id : 1,
            img :"/public/img/wd-furniture-blog-2-650x459.jpg",
            img1:"/public/img/avatar-home.jpg.webp",
            name:"Mr. Mackay",
            cat:"Furniture",
            dat:"9 May 2023",
            h1:"Ethimo mountain style",
            p:"So how did the classical latin become so incoherent? According to McClintock, a 15th century typeset...",

        },
        {
            id : 1,
            img :"/public/img/wd-furniture-blog-3-650x459.jpg",
            img1:"/public/img/avatar-home.jpg.webp",
            name:"Mr. Mehdi",
            cat:"wooden accessories",
            dat:"30 Apr 2023",
            h1:"For clear thinking",
            p:"The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr...",

        },
        {
            id : 1,
            img :"/public/img/wd-furniture-blog-4-650x459.jpg",
            img1:"/public/img/avatar-home.jpg.webp",
            name:"Mr. Mehdi",
            cat:"Design trends",
            dat:"18 Apr 2023",
            h1:"The clean series",
            p:"So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging. It’s like the prop...",

        },
    ]
    
  return (
    <div className=' relative overflow-y-hidden max-[1024px]:h-[110vh] max-[694px]:h-[94vw] max-[500px]:h-[100vh]'>
        <ArtS artS={doc}/>
    </div>
  )
}
