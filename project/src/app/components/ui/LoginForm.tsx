"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useForm } from 'react-hook-form';
import Loading from "./loading-spinner";

interface UserInput {
  email: string;
  password: string;
 
}
export function LoginForm() {
  const {register,handleSubmit, watch,formState:{errors,isSubmitting},setError} = useForm<UserInput>()
  const [loading,setLoading] = useState(false)
  const router = useRouter()
  

  const onSubmit = async(data:UserInput) => {
    setLoading(true)
    // Handle form submission here (e.g., send data to server)
    console.log(data);
     try {
      const response = await axios.post("/api/user/auth/login",data)
      setLoading(false)
      toast.success(response.data.message)
      // setLoggedIn(true)
      // await awaitDelay(2)
      router.push("/")
     } catch (error:any) {
      setLoading(false)
      toast.error(error.response.data.message || "An error from our side, please try again")
     }
     
      // Reset form fields
  }
  return (
    <div className="max-w-md w-full mx-auto my-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
    
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome Back to WeBlog
      </h2>
      
     

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="example@somemail.com" type="email"
           {...register("email" ,{required:{value:true, message:"Email is required"}})}
            />
          {errors.email? <div className='text-sm text-yellow-500 font-bold'>{errors.email.message}</div>:""}

        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password"
          {...register("password" ,{required:{value:true, message:"Password is required"},minLength:{value:3,message:"Password must be atleast 3 characters long"}})}
          />
      {errors.password? <div className='text-sm text-yellow-500 font-bold'>{errors.password.message}</div>:""}

        </LabelInputContainer>

        {
       loading?<div><Loading/></div>: <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>
}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      </form>    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
