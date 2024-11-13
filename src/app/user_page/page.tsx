"use client"
import React from 'react'

import { MouseEventHandler, useEffect, useState } from 'react'
import Image from 'next/image'
import living_img from "public/next.jpg"
import bedroom1 from "public/bedroom1.jpg"
import bedroom2 from "public/bedroom2.jpg"
import { useRouter } from 'next/navigation'


export const Home = () => {
    const router = useRouter()
    return (

        <div className="flex flex-col bg-gray-300  font-test text-black">

            <div className='flex justify-between  ext-4xl  bg-gray-200 p-4 rounded-lg border-3 border-black '>
                <h1 className='text-5xl my-3'>WATERING WIZARD
                </h1>
                <button onClick={() => router.push("/")} className='text-xl font-sans'>Logout</button>
            </div>

            <div className='flex justify-center '>
                <h1 className='text-4xl font-light mt-36 '>Hello there!</h1>
            </div>
            <div className='h-screen'>
                <div className="flex justify-center items-center w-4/5 mx-auto box-border absolute w-3/4 h-3/5 left-0 right-0 top-1/4 bg-opacity-25 bg-white border border-white shadow-lg rounded-3xl mt-40">
                    <div className="flex justify-center items-center">
                        <div className="flex text-1 font-bold font-sans text-center ">
                            <div className="flex justify-start">
                                <div className="flex grid grid-cols-3 gap-4">
                                    <div className="flex justify-center">
                                        <button type="button" onClick={() => { router.push("/livingRoom") }} className="w-96 h-96 rounded-lg overflow-hidden ">
                                            <Image src={living_img} alt="Living Room" className="object-cover w-full h-full" />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button onClick={() => { router.push("/bedroom1") }} className="rounded-xl overflow-hidden">
                                            <Image src={bedroom1} alt="Bedroom 1" className="object-cover h-96 w-96" />
                                        </button>
                                    </div>
                                    <div className="w-96 h-96 flex justify-center" onClick={() => { router.push("/bedroom2") }}>
                                        <button className="w-full h-full rounded-lg overflow-hidden bg-white">
                                            <Image src={bedroom2} alt="Bedroom 2" className="object-cover w-full h-full" />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;



