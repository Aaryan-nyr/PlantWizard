"use client"
import React, { useState } from 'react';
// get images from malhar
import plant1 from "public/plant1.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Days from 'react-calendar/dist/cjs/MonthView/Days';

function page() {
    const router = useRouter()
    return (
        <div className='flex flex-col font-test bg-gray-300 '>
            <div className='flex flex-col  bg-gray-300  text-black'>
                <div className='flex justify-between  ext-4xl  bg-gray-200 p-4 rounded-lg border-3 border-black '>
                    <h1 className='text-5xl my-3'>WATERING WIZARD
                    </h1>
                    <button onClick={() => router.push("/user_page")} className='text-xl font-sans'>Home</button>
                </div>
                <div className='flex flex items-start h-screen mx-60 my-40 '>
                    <Image src={plant1} alt="aaa" className='mx-2 rounded-lg w-40% h-auto ' />
                    <div className='flex flex-col text-black text-2xl  p-4 '>
                        <h1 className='ml-4 text-black font-test text-3xl mb-1'>MONSTERA</h1>
                        <h1 className='ml-4 text-black font-sans italic text-lg mb-20'>Monstera deliciosa</h1>
                        <p className='ml-4 text-black font-sans  text-xl mb-12'>Days since watered: 5</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Last Watered: 22/05/2023</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Soil Moisture level: 40%</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'> Must be watered in: 3 days</p>
                        <p className='ml-4 text-black font-sans text-xl mb-12'>
                            Tips:
                            <br />
                            Optimal temperature is 17°C to 23°C,
                            <br />
                            Plant requires high humidity,
                            <br />
                            Toxic to pets
                        </p>
                    </div>
                </div >
            </div >
        </div>

    )
}

export default page