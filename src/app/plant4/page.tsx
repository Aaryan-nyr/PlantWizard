"use client"
import React, { useState } from 'react';
// get images from malhar
import plant4 from "public/plant4.jpg"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function page() {
    const router = useRouter()
    return (
        <div className='flex flex-col bg-gray-300'>
            <div className='flex flex-col font-test text-black'>
                <div className='flex justify-between  ext-4xl  bg-gray-200 p-4 rounded-lg border-3 border-black '>
                    <h1 className='text-5xl my-3'>WATERING WIZARD
                    </h1>
                    <button onClick={() => router.push("/user_page")} className='text-xl font-sans'>Home</button>
                </div>
                <div className='flex flex items-start h-screen mx-60 my-40 '>
                    <Image src={plant4} alt="aaa" className="mx-2 rounded-lg w-40% h-auto" />
                    <div className='flex flex-col text-black text-2xl  p-4 '>
                        <h1 className='ml-4 text-black font-test text-3xl mb-1'>ZEBRINA</h1>
                        <h1 className='ml-4 text-black font-sans italic text-lg mb-20'>Tradescantia zebrina</h1>
                        <p className='ml-4 text-black font-sans  text-xl mb-12'>Days since watered: 4</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Last Watered: 27/05/2023</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Soil Moisture level: 50%</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Must be watered in: 5 days</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'>
                            Tips:
                            <br />
                            Optimal temperature is 18°C to 24°C,
                            <br />
                            Plant requires high humidity,
                        </p>
                    </div>
                </div >
            </div >
        </div >

    )
}

export default page