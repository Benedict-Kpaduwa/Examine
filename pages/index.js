import Head from 'next/head'
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsApple} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

export default function Home() {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center lg:min-h-screen md:min-h-screen py-2 pt-0
    bg-white">
      <Head>
        <title>Examine</title>
      </Head>

      <main className="flex flex-col items-center justify-center
      w-full flex-1 lg:px-20 md:px-20 sm:px-1 bg-white">
        <div className="bg-white w-full lg:w-3/5 md:2/5 lg:mx-auto md:mx-auto sm:h-screen
        lg:rounded-xl md:rounded-xl lg:px-24 lg:py-4 lg:shadow-lg md:shadow-lg sm:shadow-none sm:mt-7 sm:px-12">
          <div className="text-center m-7 ">
            <h2 className="my-3 text-3xl text-[#212529]
            font-lora font-medium">Welcome back! 👋</h2>
            <p className="text-gray-500 font-Inter">Let's build someting great</p>
          </div>
          <div className='flex flex-col justify-center my-2'>
            <div className='flex flex-row mt-3 justify-center m-1 mx-6'>
              <a href="#" className='border-2 border-gray-100 rounded-lg p-2.5 mx-2'>
                <FcGoogle className='text-xl'/>
              </a>
              <a href="#" className='border-2 border-gray-100 rounded-lg p-2 mx-2'>
                <BsApple className='text-xl'/>
              </a>
              <a href='#' className='border-2 border-gray-100 rounded-lg p-2 mx-2'>
                <ImFacebook className='text-xl text-blue-600'/>
              </a>
            </div>
            <div className='mt-10 grid grid-cols-3 items-center text-gray-400'>
              <hr className='border-gray-300'></hr>
              <p className='text-center text-xs'>OR</p>
              <hr className='border-gray-300'></hr>
            </div>
          </div>
          <input type='text' placeholder="Email"
            className="w-full mb-3 px-4 py-3 border rounded dark:placeholder-gray
            focus:border-blue-500 dark:bg-transparent" />
          <div className='relative'>
            <input type={showPassword ? "text" : "password"} placeholder="Password"
            className="w-full mb-3 px-4 py-3 border rounded dark:placeholder-gray
            focus:border-blue-500 dark:bg-transparent" />
            <button onClick={()=>{setShowPassword(!showPassword)}} className='absolute top-1/2 right-3 -translate-y-1/2 text-xs text-purple-900 font-bold'>SHOW</button>
          </div>
          <div className="flex justify-center my-4">
            <button type="submit" className="text-white text-center 
            cursor-pointer w-full bg-purple-900 rounded p-4">Login</button>
          </div>
          <div className='border-2 border-dashed rounded-sm p-4 flex flex-col text-center bg-cyan-100 border-sky-400 text-cyan-600'>
            <span className='text-base'>Click here</span>
            <p className='text-xs'>to sign up for the complete Examine Membership. Includes a free 2 week trial!</p>
          </div>
        </div>
      </main>
    </div>
  )
}

