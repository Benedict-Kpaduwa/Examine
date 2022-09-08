import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavBar=()=>{

    const[menu, setMenu] = useState(true);
    return(
        <>
            <nav className="flex justify-between items-center py-4 shadow-3xl w-full h-20 bg-gray-100">
                <div className="sm:hidden lg:flex lg:flex-row lg:items-center lg:relative md:flex md:flex-row md:items-center md:relative w-3/4 h-20 shadow-md rounded-none">
                    <svg aria-hidden="true" className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" placeholder="What do you want to learn about?" className="text-2xl w-1/2 border-b-2 border-gray-400 outline-none focus:border-gray-400 p-2 font-Inter text-purple-900 placeholder-purple-900 bg-gray-100"/>
                </div>
                <div className="lg:flex lg:space-x-4 w-1/4 lg:items-center md:flex md:space-x-4 md:items-center justify-end bg-white h-20 shadow-md shadow-gray-500 sm:hidden border-solid border-2 border-gray-100">
                    <Link href="/">
                        <a className="px-3 py-2 text-xl text-black font-Inter font-normal items-center inline-flex">Login</a>
                    </Link>
                    <Link href="/Signup">
                        <a className="rounded-xl bg-yellow-400 px-3 py-2 text-xl text-purple-900 font-Inter font-bold justify-between items-center "><span>Sign</span> <span>up</span></a>
                    </Link>
                    <div onClick={()=>setMenu(!menu)} className="transition ease-in-out">
                        {menu ? 
                            <FiMenu className="w-8 h-8 mx-2"/> : 
                            // <div className="flex items-center w-54 bg-white h-20">
                            //     <Link href="/catergories">
                            //         <a className="px-3 py-2 text-lg text-black font-Inter font-normal items-center inline-flex">Catergories</a>
                            //     </Link>
                            //     <Link href="/conditions">
                            //         <a className="px-3 py-2 text-lg text-black font-Inter font-normal items-center inline-flex">Conditions</a>
                            //     </Link>
                            //     <Link href="/interventions">
                            //         <a className="px-3 py-2 text-lg text-black font-Inter font-normal items-center inline-flex">Interventions</a>
                            //     </Link>
                            //     <Link href="/outcomes">
                            //         <a className="px-3 py-2 text-lg text-black font-Inter font-normal items-center inline-flex">Outcomes</a>
                            //     </Link>
                            //     <Link href="/membership">
                            //         <a className="px-3 py-2 text-lg text-black font-Inter font-normal items-center inline-flex">Membership</a>
                            //     </Link>
                            //     <Link href="/aboutus">
                            //         <a className="px-3 py-2 text-lg justify-between text-black font-Inter font-normal items-center inline-flex">About Us</a>
                            //     </Link> </div>  
                            <AiOutlineClose className="w-8 h-8 mx-2"/>      
                        }
                    </div>
                </div>
                {/* for mobile screen */}
                <div className="md:hidden lg:hidden justify-between flex items-center py-4 shadow-3xl w-full h-20 bg-purple-900">
                    <div className="flex flex-row items-center relative h-20 space-x-2">
                        <FiMenu className="w-8 h-8 text-white bg-purple-600 rounded ml-3"/>
                        <h2 className="text-white text-3xl">Examine</h2>
                    </div>
                    <div>
                        <svg aria-hidden="true" className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar