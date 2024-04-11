"use client";
import React from "react";
import { FloatingNav } from "../../ui/register-sm/floating-navbar";
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

  return (
    <div className={`relative  w-full ${pathname=="/user/register"?"block md:hidden":""}`}>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
