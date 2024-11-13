"use client"
import React, { useState } from 'react';
// get images from malhar
import plant2 from "public/plant2.jpg"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
//import { Inter } from 'next/font/google';

function page() {
    const router = useRouter()
    return (
        <div className='flex flex-col bg-gray-300'>
            <div className='flex flex-col bg-gray-300 font-test text-black'>
                <div className='flex justify-between  ext-4xl  bg-gray-200 p-4 rounded-lg border-3 border-black '>
                    <h1 className='text-5xl my-3'>WATERING WIZARD
                    </h1>
                    <button onClick={() => router.push("/user_page")} className='text-xl font-sans'>Home</button>
                </div>

                <div className='flex flex items-start h-screen mx-60 my-40 '>
                    <Image src={plant2} alt="aaa" className='mx-2 rounded-lg w-40% h-auto' />
                    <div className='flex flex-col text-black text-2xl  p-4 '>
                        <h1 className='ml-4 text-black font-test text-3xl mb-1'>SILVER BLUSH</h1>
                        <h1 className='ml-4 text-black font-sans italic text-lg mb-20'>Anthurium crystallinum</h1>
                        <p className='ml-4 text-black font-sans  text-xl mb-12'>Days since watered: 3</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Last Watered: 28/05/2023</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Soil Moisture level: 60%</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Must be watered in: 4 days</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'>
                            Tips:
                            <br />
                            Optimal temperature is 15°C to 20°C,
                            <br />
                            Plant requires moderate humidity
                        </p>
                    </div>
                </div >
            </div >
        </div >

    )
}

export default page