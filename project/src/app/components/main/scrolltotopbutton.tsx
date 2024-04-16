"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      // Function to handle scroll event
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false);
        }
      };
  
      // Add event listener when component mounts
      window.addEventListener('scroll', handleScroll);
  
      // Remove event listener when component unmounts
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
  return (
    <div className='z-10'>
       <button
          className="fixed bottom-8 right-8 p-3 rounded-full text-gray-300 hover:text-white shadow-md focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp size={40}/>
        </button>
    </div>
  )
}

export default ScrollButton
