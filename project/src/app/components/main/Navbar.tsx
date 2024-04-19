"use client";
import React, { useEffect,useState } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { usePathname } from "next/navigation";
import { getUserState } from "@/helpers/getUserfromToken";
export function FloatingNavbar() {
  const [loggedIn, setLoggedIn] = useState(false)
  useEffect(()=>{
    (async()=>{
      const logg = await getUserState()
      setLoggedIn(logg)
    })()
  })
  const pathname = usePathname()
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: loggedIn?"Profile":"Login",
      link: loggedIn?"/user/profile":"/user/register",
       
    },
  ];
if(pathname=="/user/register")
  return (<></>)
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
