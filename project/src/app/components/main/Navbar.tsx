"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
export function FloatingNavbar() {
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
      link: "/user/login",
       
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
