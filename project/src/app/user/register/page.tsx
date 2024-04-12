"use client";

import Image from "next/image";
import { Tabs } from "../../components/ui/tabs";
import { SignUpForm } from "../../components/ui/SignUpForm";
import { LoginForm } from "../../components/ui/LoginForm";
import { FloatingNavbar } from "@/app/components/main/sm/Navbar";
import { useEffect,useState } from "react";
import { Toaster } from "react-hot-toast";
export default function TabsDemo() {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false)
      } else {
        setIsVisible(true);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const tabs = [
   
    {
      title: "Login",
      value: "login",
      content: (
        <div className="w-full relative min-h-[40rem] my-auto p-5 rounded-2xl font-bold text-black bg-white">
         
         <LoginForm />
        </div>
      ),
    },
    {
      title: "Sign Up",
      value: "signup",
      content: (
        <div className="w-full relative min-h-full p-5 rounded-2xl font-bold text-black bg-white">
          <SignUpForm/>
        </div>
      ),
    },
   
  ];

  return (
    <>
    {isVisible && <FloatingNavbar/>}
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-10 mb-52">
    <Toaster toastOptions={{
    success: {
      style: {
        position:"relative",
        top:"30vh",
        background: 'green',
        color:"white"
      },
    },
    error: {
      style: {
        position:"relative",
        top:"30vh",
        background: 'red',
        color:"white"
      },
    },
  }} position="top-center"/>
      <Tabs tabs={tabs} />
    </div>
    </>
  );
}