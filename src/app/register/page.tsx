"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { auth } from '../../../firebase/clientApp';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Register = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [cred, setCred] = useState(false);

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await signUp(email, pass);
        router.push("/");
    };

    return (

        <div className='flex flex-col bg-gray-300 text-bold h-screen font-test text-black'>
            <div className='flex justify-between  ext-4xl bg-gray-200 p-4 rounded-lg border-3 border-black '>
                <h1 className='text-5xl my-3'>WATERING WIZARD
                </h1>
                <button onClick={() => router.push("/")} className='text-xl font-sans'>Login</button>
            </div>
            <div className="flex flex justify-center mx-auto p-12  bg-white rounded-lg shadow-lg my-40 font-sans text-black">
                <div className="flex flex-col space-y-4 items-center">
                    <div className='flex flex-col font-bold'>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label className="block text-lg mb-2" htmlFor="name">Full name:</label>
                                <input className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded font-light" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" type="text" required={true} />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-lg mb-2" htmlFor="age">Age:</label>
                                <input className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded font-light" value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter your age" required={true} />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-lg mb-2" htmlFor="email">Email:</label>
                                <input className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded font-light" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" required={true} />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-lg mb-2" htmlFor="password">Password:</label>
                                <input className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded font-light" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="***********" required={true} />
                            </div>
                            <div className="flex flex-col">
                                <button className="w-full px-4 py-2 mt-4 text-white bg-indigo-800 rounded hover:bg-indigo-700" type="submit">Submit</button>
                            </div>
                        </form>

                        <button className="block mt-4 text-lg text-center underline hover:text-indigo-700 font-light" onClick={() => (router.push("/"))}>Already a member? Login here</button>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Register;
