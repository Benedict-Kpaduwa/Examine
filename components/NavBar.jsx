import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Logo from "./Logo";

const NavBar=()=>{

    const[menu, setMenu] = useState(true);
    return(
        <div className="fixed top-0 left-0 z-1000 block w-full bg-white transition-colors duration-300 shadow-lg">
            <nav className="mx-auto flex h-16 w-full items-center py-3 md:justify-between lg:h-19 lg:bg-white lg:py-0 wide:max-w-fixed bg-examine-purple-600">
                <button type="button" aria-expanded="false" className="mx-2.5 h-[30pxx] w-8 rounded p-1.5 md:mx-4 lg:hidden bg-examine-purple-medium">
                <svg className="w-full text-white" viewBox="0 0 21 15" fill="none"><path d="M1.06201 1.31836H19.062" stroke="currentColor"></path><path d="M1.06201 7.31836H19.062" stroke="currentColor"></path><path d="M1.06201 13.3184H19.062" stroke="currentColor"></path></svg>
                </button>
                <div className="lg:px-6 2xl:!max-w-sm xxl:flex xxl:w-full xxl:max-w-[16rem]">
                    <Link href="">
                        <a className="block">
                            <Logo />
                        </a>
                    </Link>
                </div>
                <div className="sm:hidden lg:flex bg-gray-50 lg:flex-row lg:items-center lg:relative md:flex md:flex-row md:items-center md:relative w-3/5 h-full shadow-md px-5 rounded-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-purple-900 bg-inherit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" placeholder="What do you want to learn about?" className="text-sm w-1/2 border-b-2 border-gray-400 bg-inherit outline-none p-2 font-Inter text-purple-900 placeholder-purple-900"/>
                </div>
                <div className="hidden items-center pr-3 text-sm lg:flex xl:text-menu">
                    <Link href="/">
                        <a className="hover:text-stroke flex items-center px-1.5 py-1 decoration-2 hover:text-primary xl:px-2">
                            Login
                        </a>
                    </Link>
                    <Link href="/Signup">
                        <a className="mx-2.5 flex bg-yellow-400 justify-between items-center gap-2 rounded-full bg-premuim px-3 py-1.5 font-bold text-[#5E3B76] transition-colors hover:text-[#5E3B76] xl:py-2 xl:px-5">
                            <span>Sign</span><span>Up</span>
                        </a>
                    </Link>
                    <div onClick={()=>setMenu(!menu)} className="transition-ease-in-out">
                        {menu ? <FiMenu className="w-5 h-5 mx-2"/> : <AiOutlineClose className="w-5 h-5 mx-2"/> }
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}
export default NavBar