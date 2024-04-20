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
import { useForm } from 'react-hook-form';
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "./loading-spinner";
import { TiTick } from "react-icons/ti";
import { useToast } from "@/components/ui/use-toast";
interface UserInput {
  email: string;
  username: string;
  regexMisMatch:string;
  password: string;
  confirmpassword:string;
  usernameExists:string;
}
export function SignUpForm() {
  const {toast} = useToast()
  const [username,setUsername] = useState('')
  const [goodUsername, setgoodUsername] = useState(false)
  const {register,handleSubmit, watch,formState:{errors,isSubmitting},setError,clearErrors} = useForm<UserInput>()
  const [loading,setLoading] = useState(false)
  const router = useRouter()
  
  useEffect(() => {
    (async()=>{
      const response = await axios.get(`/api/user/auth/username-exists-check?username=${username}`)
      if(username.length < 4 && username.length>0){
        setgoodUsername(false)
        clearErrors("regexMisMatch")
        setError("username",{message:"Username must be atleast four characters long"})
        return
      }
      const regex = /[^a-zA-Z0-9@_]/;
      if (regex.test(username)){
        setgoodUsername(false)
        clearErrors("usernameExists")
        clearErrors("username")

      return setError("regexMisMatch",{type:"regexMisMatch",message:"Username can only contain Alphabets,Numbers, @ and _"},{ shouldFocus: true })
      }
      if(username.length==0){
        setgoodUsername(false)
        clearErrors("regexMisMatch")
        clearErrors("username")
        clearErrors("usernameExists")
      }
      if(!response.data.success){
        setgoodUsername(false)
        clearErrors("username")
        clearErrors("regexMisMatch")
      return setError("usernameExists",{type:"custom", message:"Username already taken"})}
      if(username.length>=4 && !regex.test(username)){
      setgoodUsername(true)
      clearErrors("regexMisMatch")
      clearErrors("usernameExists")
      clearErrors("username")
      }
    }
    )();

  }, [username])
  

  const onSubmit = async(data:UserInput) => {
   try {
    setLoading(true)
    if(data.password != data.confirmpassword){
      setError("confirmpassword",{type:"custom", message:"Password and Confirm Password fields not matching"})
      setLoading(false)
      return
    }
     const response = await axios.post("/api/user/auth/signup",data)
     setLoading(false)
     toast({title:"Signed Up Successfully",description:"Please login to continue"}) 
     location.reload()
    } catch (error:any) {
      setLoading(false)
      toast({variant:"destructive",title:"An error occured",description:error.response.data.message || "An error occured please try again"})
   }
 
  };
  return (
    <div className="max-w-md w-full mx-auto my-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to WeBlog
      </h2>
     

      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
       
        <LabelInputContainer className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input id="username" value={username}  {...register("username" ,{required:{value:true, message:"Username is required"}, 
            minLength:{value:4, message: `Username must be atleast 4 characters long`}})} placeholder="This will be your public name" type="text" onChange={(e)=>setUsername(e.target.value)} />
        {errors.username? <div className={"text-sm text-yellow-500 font-bold"}>{errors.username.message}</div>:""}
        {errors.regexMisMatch && <div className="text-xs text-red-500 font-bold">{errors.regexMisMatch.message}
        </div>}
        {goodUsername && <div className="text-green-400 text-sm flex items-center">
          <TiTick color="green"/><div>Your username is unique</div></div>}
          {errors.usernameExists? <div className={"text-sm text-yellow-500 font-bold"}>{errors.usernameExists.message}</div>:""}
        </LabelInputContainer>
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
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmpassword">Confirm Password</Label>
          <Input
            id="confirmpassword"
            placeholder="••••••••"
            type="password"
            {...register("confirmpassword" ,{required:{value:true, message:"Confirm Password is required"},minLength:{value:3,message:"Password must be atleast 3 characters long"}})}

          />
        {errors.confirmpassword && <div className='text-sm text-yellow-500 font-bold'>{errors.confirmpassword.message}</div>}
        </LabelInputContainer>

{
       loading?<div><Loading/></div>: <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-600 dark:to-zinc-900 to-neutral-600 block bg-slate-200 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
}
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      </form>
    </div>
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
