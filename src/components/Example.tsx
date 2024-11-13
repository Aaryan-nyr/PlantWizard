import React from 'react'
import Example_img from "../../public/bedroom1.jpg"
import Image from 'next/image'

const Example = () => {
    return (
        <div>
            <Image src={Example_img} alt="AAAAAAAAAAAA" height={200} width={200} />
        </div>
    )
}

export default Example