import Head from 'next/head'
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsApple} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";


export default function Home() {
const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:min-h-screen py-2 pt-0
    bg-white">
      <Head>
        <title>Examine</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lora:wght@500&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="flex mb-auto">
        <div className="mx-auto w-full max-w-lg md:pb-60 md:pt-28 lg:max-w-[600px]">
          <div className='bg-white px-6 pt-0 pb-55 py-4 lg:rounded-[30px] lg:shadow-3xl items-center'>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center m-7">
              <div className='gap-[7px] flex flex-col -space-y-2'>
                <h2 className="text-[40px] my-3 text-[#212529] font-lora font-medium">
                  Create your account
                </h2>
                <p className="text-[#6C757D] font-Inter font-normal text-[18px] top-[62px] leading-[30px] h-[30px]">It includes a free 2 week trial!</p>
              </div>     
              <div className='flex flex-col justify-center my-2'>
                <div className='flex flex-row mt-3 justify-center m-1 mx-6 space-x-6'>
                  <Link href="#">
                    <a className='border-2 border-gray-100 rounded-lg p-2.5 mx-2'>
                      <FcGoogle className='text-2xl w-11 h-8'/>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className='border-2 border-gray-100 rounded-lg p-2 mx-2'>
                      <BsApple className='text-2xl w-11 h-8'/>
                    </a>
                  </Link>
                  <Link href='#'>
                    <a className='border-2 border-gray-100 rounded-lg p-2 mx-2'>
                      <ImFacebook className='text-2xl text-[#3B5999] w-11 h-8'/>
                    </a>
                  </Link>
                </div>
                <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
                  <hr className='border-[#EDF2F7]'></hr>
                  <p className='text-center text-[14px]'>OR</p>
                  <hr className='border-[#EDF2F7]'></hr>
                </div>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <input type='text' placeholder="Full Name"
                className="w-full mb-3 px-4 py-3 border rounded-[4.8px] dark:placeholder-gray" />
                <input type='text' placeholder="Email"
                className="w-full mb-3 px-4 py-3 border rounded-[4.8px] dark:placeholder-gray" />
                <div className='relative h-11 w-full'>
                  <input type={showPassword ? "text" : "password"} placeholder="Password"
                  className="w-full mb-3 px-4 py-3 border rounded-[4.8px] dark:placeholder-gray
                  focus:border-blue-500 dark:bg-transparent" />
                  <button onClick={()=>{setShowPassword(!showPassword)}} className='absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer text-xs text-[#5E3B76] font-bold uppercase tracking-wide'>show</button>
                </div>
                <div className="flex justify-center my-4">
                  <button type="submit" className="text-white text-center 
                  cursor-pointer w-full bg-[#5E3B76] rounded-[4.8px] p-4 font-Inter leading-[30px] items-center text-[20px] tracking-[0.01em]">Start your 2-week free trial</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}