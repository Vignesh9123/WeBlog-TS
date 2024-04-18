import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div>
      <div className='mt-5 flex flex-col items-center gap-4'>
        <div className="icons flex gap-5 items-center">
            <TiSocialTwitter cursor={"pointer"} size={25}/>
            <SlSocialInstagram cursor={"pointer"} size={25}/>
            <FaGithub cursor={"pointer"} size={25}/>
        </div>
        <div className="navs flex items-center gap-5">
            <Link href={"/"}><div className="text-gray-400 underline cursor-pointer text-md">Home</div></Link>
            <Link href={"/"}><div className="text-gray-400 underline cursor-pointer text-md">About</div></Link>
            <Link href={"/"}><div className="text-gray-400 underline cursor-pointer text-md">Contact</div></Link>
            <Link href={"/"}><div className="text-gray-400 underline cursor-pointer text-md">FaQ</div></Link>
        </div>
        <div className='mb-5'>Created with ❤ by Vignesh</div>
      </div>
    </div>
  )
}

export default Footer
