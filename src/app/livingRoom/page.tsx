"use client"

import React, { useState } from 'react';
// get images from malhar
import plant1 from "public/plant1.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import plant2 from "public/plant2.jpg"
import plant3 from "public/plant3.jpg"
import plant4 from "public/plant4.jpg"
//import { Inter } from 'next/font/google';

const Bedroom1 = () => {
    const router = useRouter()
    const [value, onChange] = useState(new Date());
    return (
        <div className='flex flex-col h-screen bg-gray-300   font-test text-black'>
            <div className='flex justify-between  ext-4xl  bg-gray-200 p-4 rounded-lg border-3 border-black '>
                <h1 className='text-5xl'>WATERING WIZARD
                </h1>
                <button onClick={() => router.push("/user_page")} className='text-xl font-sans'>Home</button>
            </div>
            <div className='flex justify-center mt-20'>
                <h1 className='text-4xl font-sans '>Living Room</h1>
            </div>
            <div className='flex flex-grow mt-10 items-center justify-center'>
                <div className="border-2  p-2">
                    <Image src={plant1} alt="Living Room" className="mx-2  w-40% h-auto" onClick={() => { router.push("/monstera") }} />
                </div>
                <div className="border-2 p-2">
                    <Image src={plant2} alt="Living Room" className="mx-2  w-40% h-auto" onClick={() => { router.push("/plant2") }} />
                </div>
                <div className="border-2  p-2">
                    <Image src={plant3} alt="Living Room" className="mx-2  w-40% h-auto" onClick={() => { router.push("/plant3") }} />
                </div>
                <div className="border-2 p-2">
                    <Image src={plant4} alt="Living Room" className="mx-2  w-40% h-auto" onClick={() => { router.push("/plant4") }} />
                </div>
            </div>

        </div>

    );
};

export default Bedroom1;
