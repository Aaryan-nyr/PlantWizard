"use client"

import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/clientApp';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import React from 'react';

import { MouseEventHandler, useEffect, useState } from 'react'
import { get } from 'http';



export const login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cred, setCred] = useState(false);
  const router = useRouter()
  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setCred(false)
    try {
      await logIn(email, pass);
      router.push("/user_page");
    } catch (error: any) {
      console.log(error.message);
      setCred(true)
    }


  }
  return (
    // <div className="flex flex-col justify-center items-center h-screen bg-blue-200">
    //   <h1 className="text-5xl font-bold text-center text-blue-800 mb-8 font-test">Water Wizard</h1>

    < div className='flex flex-col  bg-gray-300 text-bold font-bold font-test text-black' >
      <div className='flex justify-between  ext-4xl bg-gray-200 p-4 rounded-lg border-3 border-black '>
        <h1 className='text-5xl my-3'>WATERING WIZARD
        </h1>
        <button onClick={() => router.push("/register")} className='text-xl font-sans font-light'>Sign up</button>
      </div>
      <div className="flex flex justify-center mx-auto p-12 bg-white rounded-lg shadow-lg my-60 font-sans">
        <div className="flex flex-col space-y-4 items-center">
          <div className='flex flex-col'>
            <form className='login-form' onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-bold 800 mb-2" htmlFor='email'>Email:</label>
                <input className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded font-light" value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' required={true} />
              </div>
              <div>
                <label className="block text-lg font-bold 800 mb-2" htmlFor='password'>Password:</label>
                <input className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded font-light" value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Enter your password' required={true} />
              </div>
              <div>
                <button className="w-full px-4 py-2 mt-4 font-bold text-white bg-indigo-800 rounded hover:bg-indigo-700" type='submit'>Submit</button>
              </div>
            </form>
            <button className="block mt-4 text-lg font-bold text-center 800 underline hover:700 font-light" onClick={() => (router.push("/register"))}>New member? Sign up here</button>
          </div>
        </div>
      </div>
    </div >

  )
}
export default login;
