"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { usePathname } from "next/navigation";
export function FloatingNavbar() {
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
      name: "Login",
      link: "/user/register",
       
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
