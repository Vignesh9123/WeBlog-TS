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
   
      <Toaster/>
    <div className="flex flex-col items-center justify-center min-h-screen  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Explore insightful articles written by our talented writers
      </p>
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 font-bold dark:text-neutral-200 text-xs sm:text-base  ">
      The best part is you can write great articles too.
      </p>
      <div className="mt-5 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {signedIn?<AlertDialog>
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
        }
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
export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="absolute right-0" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}