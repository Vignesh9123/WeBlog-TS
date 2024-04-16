"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect,useRef } from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import ScrollButton from "./components/main/scrolltotopbutton";
import Link from "next/link";
import { getUserState } from "@/helpers/getUserfromToken";
import signOutHandler from "@/helpers/signOutHandler";
import { Toaster } from "react-hot-toast";
import { BentoGridSecondDemo } from './components/main/Grid'
import { InfiniteMovingCardsDemo } from './components/main/InfiniteScroll'
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';
export default function AuroraBackgroundDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const [signedIn, setSignedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const msgs = useRef<Messages>(null);

  useMountEffect(() => {
      msgs.current?.clear();
      msgs.current?.show({
          severity: 'info',sticky: true,content: (
              <React.Fragment>
                  <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnwAJtBWl41ZIGBQ1HESUMATk2xSl5n9PYbyP160FSuERbpDcRz5kuT0TpizPjXCfoXQ&usqp=CAU" width="32" />
                  <div className="ml-2">This is just a learning implementation project.</div>
              </React.Fragment>
          )
      });
  });

  useEffect(() => {
   
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 300) {

        setIsVisible(true)
      } else {
        setIsVisible(false);
      }
    };

    const userState = async()=>{
        let state = await getUserState()
        setSignedIn(state)
    }
    userState()
    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const words = [
    {
      text: "Write",
    },
    {
      text: "your",
    },
    {
      text: "content",
    },
    {
      text: "on",
    },
    {
      text: "WeBlog",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (<>
   <Messages ref={msgs} />
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
      <Toaster/>
    <div className="flex flex-col items-center justify-center h-[25rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Explore insightful articles written by our talented writers
      </p>
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 font-bold dark:text-neutral-200 text-xs sm:text-base  ">
      The best part is you can write great articles too.
      </p>
      <div className="mt-5 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {signedIn?<button onClick={signOutHandler} className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Sign out
        </button>:<><Link href={"/#content"}>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Know More
        </button></Link>
       <Link href={"/user/register"}> <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
        </Link></>
        }
      </div>
    </div>

      </motion.div>
    </AuroraBackground>
    <div className="w-[98vw] mx-auto h-[1px] bg-gray-500"></div>
    <div id="content"><BentoGridSecondDemo/>< InfiniteMovingCardsDemo/></div>
    <div className="w-[98vw] mx-auto h-[1px] bg-gray-500"></div>
    {isVisible && (
      <ScrollButton/>
    )}
    </>

  );
}
