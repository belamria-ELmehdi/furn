import React, { useState } from 'react'

export default function DecPart2() {
    const [showM, setshowM] = useState(false);


    const togglshow = () => {
        setshowM(!showM)
    }

    return (
        <div>
            <h1 className="capitalize font-[600] text-[25px]">Furniture production is a modern form of art</h1>
            <p className='p-Dec'>Furniture manufacturers, as well as manufacturers of other home goods, are full of amazing offers: we often come across both standard mass-produced products and unique creations
                – furniture from professional craftsmen, which will be appreciated by true connoisseurs of beauty. We have selected for you the best models from modern craftsmen who managed to ingeniously combine elegance, quality and practicality in each product unit. Our assortment includes products from proven companies.
                {!showM && <span>...</span>}
                {showM && (
                    <span>
                        Who for many years of continuous joint work did not give reason to doubt their reliability and honesty. All of them guarantee the high quality of their products, excellent operational characteristics, attractive appearance of the products, a long period of use of the furniture, as well as safety.

                    </span>
                )}
            </p>

            <span className='uppercase font-[600] border-red-800 border-b-[3px] text-[12px] cursor-pointer' onClick={togglshow}>{showM ? 'read less' : 'read more'}</span>
        </div>
    )
}
