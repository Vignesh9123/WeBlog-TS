"use client"
import { getUserFullDetails } from '@/helpers/getUserfromToken'
import React, {useState, useEffect } from 'react'
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
const page = () => {
    const [user, setUser] = useState({_id:"",username:"",email:""}) 
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        (async()=>{
            const user = await getUserFullDetails()
            setUser(user)
            setLoading(false)
        })()
    })
  return (
    <div className="flex min-h-screen w-full flex-col">
    
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Profile</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 ">
         
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Username</CardTitle>
                <CardDescription>
                This is your public display name. It can be your real name or a pseudonym.                 </CardDescription>
              </CardHeader>
              <CardContent>
               {!loading && user.username}
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
               
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Email address</CardTitle>
                <CardDescription>
                  This is your registered email address.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-2'>
                {!loading && user.email}
                </div>
                
             
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
