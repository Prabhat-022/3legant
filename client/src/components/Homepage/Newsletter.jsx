import { useState } from 'react';
import Newsletters from '../../assets/Newsletter.jpg';
import { AiOutlineMail } from "react-icons/ai";
import axiosInstance from '../../lib/axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form'

const Newsletter = () => {
    const [loading, setloading] = useState(false)
    const {
        register,
        handleSubmit,
        resetField
    } = useForm()

    const setnewslatterEmail = async (data) => {
        const { newslatterEmail } = data
        try {
            setloading(true)
            const res = await axiosInstance.post('/api/set-newslatter-email',  {newslatterEmail} )
            console.log('newslatter res: ', res)

            if (res.data.success) {
                toast.success('Thankyou for joining us')
                resetField('newslatterEmail', '')
                setloading(false)
            } else {
                toast.error(res.data.message)
                setloading(false)
            }
        } catch (error) {
            resetField('newslatterEmail', '')
            toast.error(error.response.data.message)
            setloading(false)
        }
    }

    return (
        <div className="relative">
            <img src={Newsletters} alt="Newsletter" className='w-full h-auto' />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-50">
                <h1 className="text-black text-xl xl:text-3xl md:text-3xl font-bold mb-2">Join Our Newsletter</h1>
                <p className="text-black mb-4">Sign up for deals, new products and promotions</p>

                <div className="border-b-2 flex items-center p-2 mb-3">
                    <AiOutlineMail />

                    <input type="text" placeholder='Email address' className='outline-none p-2 bg-transparent' {...register('newslatterEmail')} />

                    <button className=' text-black p-2 font-bold' onClick={handleSubmit(setnewslatterEmail)} disabled={loading}>join</button>


            
                </div>
            </div>
        </div>
    )
}

export default Newsletter;
