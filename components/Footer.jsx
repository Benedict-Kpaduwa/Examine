import React from 'react'
import Link from 'next/link';
import Logo1 from './Logo1'
import { RiSendPlaneFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-[#5E3B76] py-12 mb-auto px-7 text-white xl:py-22 xxl:px-18 w-screen left-[0px] top-[1105px] inset-x-0 bottom-o '>
        <div className='mx-auto w-full text-center md:text-left lg:pb-16 wide:max-w-fixed w-[1223.4px] h-[406px] left-[317px] top-[86px]'>
            <div className='grid gap-5 gap-y-11 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:grid-cols-5'>
                <div className='order-2 md:order-none'>
                    <div className='flex justify-center md:block'>
                        <Logo1 className="h-8 w-36 text-white fill-white"/>
                    </div>
                    <div className='mt-6 text-sm w-[384px] h-[221.11px] left-[319px]'>
                        <h3 className='flex items-center font-Lora text-[30px] leading-[36px] font-medium'>Never miss an update!</h3>
                        <div className='flex justify-center gap-2 md:justify-start'>
                            <span className='font-Inter font-normal text-[18px] leading-[30px] text-[#E2D9F3] top-[207px] h-[90px] w-[383px]'>We are always updating our research and adding new stuff. Sign-up and always stay on top pf our updates!</span>
                        </div>
                        <div className='relative mt-6 h-[69.11px] w-[365.01px] overflow-hidden rounded-[76.3953px] bg-[#5E3B76] border border-[#E2D9F3]'>
                            <input type="email" required className='h-full w-full border-none bg-transparent px-3 text-sm placeholder-white' placeholder='Your Email Address'/>
                            <button type='submit' className='absolute top-1/2 right-2 -translate-y-1/2 p-[10px] bg-white w-[40.13px] h-[40.13px] rounded-full '>
                                <RiSendPlaneFill className='w-[20px] h-[20px] left-[622.23px] top-[320.86px] text-[#5E3B76]'/>
                            </button>
                        </div>
                    </div>
                    <div className='mt-4 flex items-center justify-center gap-4 md:justify-start'></div>
                    <form className='mt-10 hidden lg:block xl:hidden'></form>
                </div>
                <div className='order-1 grid gap-y-10 text-center md:col-span-2 md:grid-cols-3 md:gap-5 md:text-left lg:order-none lg:col-span-3 ml-[246px] space-x-18 w-full'>
                    <div className=' w-[177.75px] h-[264.77px] left-[846px] top-[103px]'>
                        <h4 className='font-Lora font-medium text-[25px] leading-[32px]'>About Us</h4>
                        <ul className='space-y-4 py-4 xl:py-6 font-Inter text-[18px] leading-[30px] text-[#E2D9F3] font-normal items-center'>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Our Story
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Our Team
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Our Editorial Policy
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Our Mistakes
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='h-[281px] w-[190.25px] top-[103px] left-[1099px]'>
                        <h4 className='font-meduim font-Lora text-[25px] leading-[32px] text-white'>Resources</h4>
                        <ul className='space-y-4 py-4 xl:py-6 font-Inter font-normal text-[18px] leading-[30px] text-[#E2D9F3]'>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Continuing Education
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            For Journalists
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Student Discount
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Senior Discount
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='w-[176.4px] h-[264.77px] left-[1364px] top-[103px]'>
                        <h4 className='font-meduim font-Lora text-[25px] leading-[32px] text-white'>Social</h4>
                        <ul className='space-y-4 py-4 xl:py-6 font-Inter font-normal text-[18px] leading-[30px] text-[#E2D9F3]'>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Facebook
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Twitter
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Linkedin
                                        </span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a className='group inline-flex items-center justify-center gap-2 md:justify-start'>
                                        <span className='first-letter:uppercase group-hover:underline'>
                                            Email Us
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border border-b-[0.901735px] border-inherit mt-12 top-[456px] w-[1150px] h-[0px]'></div>
            <div className='flex justify-between items-center'>
                <span className='text-[#E2D9F3] font-Inter font-normal text-[14px] leading-[22px] left-[1258px] mt-4 top-[487px] w-[236px] h-[22px]'>Copyright 2010-2021 Examine Inc</span>
                <div className='flex justify-between items-center gap-2 md:justify-start -mr-9'>
                    <a className='mt-1.5 h-[22px] top-[487px] left-[1258px] font-Inter font-normal text-[14px] leading-[22px] text-[#E2D9F3]'>Privacy Policy</a>
                    <span className='mt-1.5'>|</span>
                    <a className='mt-1.5 w-[210px] h-[22px] top-[487px] left-[1258px] font-Inter font-normal text-[14px] leading-[22px] text-[#E2D9F3]'>Website Terms</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer




