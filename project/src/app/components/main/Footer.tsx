import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='mt-5 bg-black flex flex-col items-center gap-4'>
        <div className="icons flex gap-5 items-center">
            <TiSocialTwitter cursor={"pointer"} size={25}/>
            <SlSocialInstagram cursor={"pointer"} size={25}/>
            <FaGithub cursor={"pointer"} size={25}/>
        </div>
        <div className="navs flex items-center gap-5">
            <div className="text-gray-400 underline cursor-pointer text-md">Home</div>
            <div className="text-gray-400 underline cursor-pointer text-md">About</div>
            <div className="text-gray-400 underline cursor-pointer text-md">Contact</div>
            <div className="text-gray-400 underline cursor-pointer text-md">FaQ</div>
        </div>
        <div className='mb-5'>Created with ❤ by Vignesh</div>
      </div>
    </div>
  )
}

export default Footer
