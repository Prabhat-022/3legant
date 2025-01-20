import { useState } from 'react';
import Newsletters from '../assets/Newsletter.jpg';
import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
    const [email, setEmail] = useState(false);


    return (
        <div className="relative">
            <img src={Newsletters} alt="Newsletter" className='w-full h-auto' />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50">
                <h1 className="text-black text-3xl font-bold mb-2">Join Our Newsletter</h1>
                <p className="text-black mb-4">Sign up for deals, new products and promotions</p>
                <div className="border-b-2 flex items-center   p-2">
                    <AiOutlineMail />
                    {
                        email ? (
                            <input type="text" placeholder='Password' className='border-none outline-none p-2 bg-transparent' />
                        ) : (
                            <input type="text" placeholder='Email address' className='border-none outline-none p-2 bg-transparent' />
                        )
                    }
                    <button className=' text-black p-2 font-thin'>Singin</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;
