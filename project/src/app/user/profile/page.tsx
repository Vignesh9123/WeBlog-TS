"use client"
import { getUserFullDetails } from '@/helpers/getUserfromToken'
import React, {useState, useEffect } from 'react'
import Link from "next/link"
import { CircleUser, Menu, Package2, Search, UserRound } from "lucide-react"
import signOutHandler from '@/helpers/signOutHandler'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import { redirect, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
const page = () => {
  const {toast} = useToast()
  const router = useRouter()
    const [user, setUser] = useState({_id:"1234",username:"Unknown",email:"Unknown",isAdmin:false})     
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      try{
        (async()=>{
            const users = await getUserFullDetails()
            setUser(users)
            setLoading(false)
        })()}
        catch(error){
          toast({title:"An error from our side"})
        }
    },[])
    const handleSignout = async()=>{
      try {
        signOutHandler()
        toast({
          title: "Signed Out Succesfully",
          description: "You have been signed out successfully",
        })
        setLoading(true)
        
      } catch (error) {
        toast({
          variant:"destructive",
          title:"Some Error occurred"
        })
      }
    }
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
               {!loading && <div> {user.username}</div>}
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
                {!loading && <div> {user.email}</div>}
                </div>
                
             
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
              </CardFooter>
            </Card>
          </div>
        </div>
        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='w-fit mx-auto'>Sign out</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to sign out?</AlertDialogTitle>
         
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel  onClick={()=>console.log("Cancel")
          }>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSignout}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      </main>
    </div>
  )
}

export default page
