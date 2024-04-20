"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect,useRef } from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import ScrollButton from "./components/main/scrolltotopbutton";
import Link from "next/link";
import { getUserState } from "@/helpers/getUserfromToken";
import signOutHandler from "@/helpers/signOutHandler";
import { BentoGridSecondDemo } from './components/main/Grid'
import { InfiniteMovingCardsDemo } from './components/main/InfiniteScroll'
import { useMountEffect } from 'primereact/hooks';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Messages } from 'primereact/messages';
export default function AuroraBackgroundDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const [signedIn, setSignedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const msgs = useRef<Messages>(null);

  useMountEffect(() => {
      msgs.current?.clear();
      msgs.current?.show({
          severity: 'info',sticky: true,content: (
              <React.Fragment>
                  <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnwAJtBWl41ZIGBQ1HESUMATk2xSl5n9PYbyP160FSuERbpDcRz5kuT0TpizPjXCfoXQ&usqp=CAU" width="32" />
                  <div className="text-black dark:text-blue-500 ml-2">This is just a learning implementation project.</div>
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
      setLoading(true)
        let state = await getUserState()
        setSignedIn(state)
        setLoading(false)
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
   
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Explore insightful articles written by our talented writers
      </p>
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 font-bold dark:text-neutral-200 text-xs sm:text-base  ">
      The best part is you can write great articles too.
      </p>
      <div className="mt-5 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
       {!loading && <>{signedIn?<AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Sign out</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to sign out?</AlertDialogTitle>
         
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel  onClick={()=>console.log("Cancel")
          }>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={signOutHandler}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>:<><Link href={"/#content"}>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Know More
        </button></Link>
       <Link href={"/user/register"}> <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
        </Link></>
        }</>}
      </div>
    </div>


    <div className="w-[98vw] mx-auto h-[1px] bg-gray-500"></div>
    
    <div id="content"><BentoGridSecondDemo/>< InfiniteMovingCardsDemo/></div>
    <div className="w-[98vw] mx-auto h-[1px] bg-gray-500"></div>
    {isVisible && (
      <ScrollButton/>
    )}
    </>

  );
}
