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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { redirect, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { TiTick } from 'react-icons/ti'
interface UserInput {
  username: string;
  regexMisMatch:string;
  usernameExists:string;
  
}
const page = () => {
  const [username,setUsername] = useState('')
  const [goodUsername, setgoodUsername] = useState(false)
  const {register,handleSubmit, watch,formState:{errors,isSubmitting},setError,clearErrors} = useForm<UserInput>()
  const {toast} = useToast()
  const router = useRouter()
    const [user, setUser] = useState({_id:"1234",username:"Unknown",email:"Unknown",isAdmin:false})     
    const [loading, setLoading] = useState(true)
    const onUsernamechange = async(data:UserInput)=>{
      try{
      const response = await axios.put("/api/user/auth/username-exists-check", {id:user._id, updatedUSN:username})
      toast({title:"Username Updated Successfully"})
      location.reload()
    }
    catch(error:any){
      console.log(error);
      
      toast({variant:"destructive",title:"Something went wrong", description:error.response.data.message||"Please try again"})
    }

          }
    useEffect(()=>{
      try{
        (async()=>{
            const users = await getUserFullDetails()
            setUser(users)
            setUsername(users.username)
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
    const [buttonDisabled, setButtonDisabled] = useState(false)
    useEffect(() => {
      (async()=>{
        const response = await axios.get(`/api/user/auth/username-exists-check?username=${username}`)
        if(username == user.username){
          clearErrors("regexMisMatch")
        clearErrors("usernameExists")
        clearErrors("username")
        setgoodUsername(false)
        setButtonDisabled(true)
          return setError("username",{message:"This is your current username"})
        }
        if(username.length < 4 && username.length>0){
          setgoodUsername(false)
          setButtonDisabled(true)
          clearErrors("regexMisMatch")
          setError("username",{message:"Username must be atleast four characters long"})
          return
        }
        const regex = /[^a-zA-Z0-9@_]/;
        if (regex.test(username)){
          setgoodUsername(false)
          clearErrors("usernameExists")
          clearErrors("username")
          setButtonDisabled(true)
        return setError("regexMisMatch",{type:"regexMisMatch",message:"Username can only contain Alphabets,Numbers, @ and _"},{ shouldFocus: true })
        }
        if(username.length==0){
          setgoodUsername(false)
          setButtonDisabled(true)
          clearErrors("username")
          clearErrors("regexMisMatch")
          clearErrors("usernameExists")
        }
        if(!response.data.success){
          setgoodUsername(false)
          setButtonDisabled(true)
          clearErrors("username")
          clearErrors("regexMisMatch")
        return setError("usernameExists",{type:"custom", message:"Username already taken"})}
        if(username.length>=4 && !regex.test(username)){
        setgoodUsername(true)
        clearErrors("regexMisMatch")
        clearErrors("usernameExists")
        clearErrors("username")
        setButtonDisabled(false)
        }
      }
      )();
  
    }, [username])
   
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
              <CardContent className='flex justify-between items-center'>
               {!loading && <div> {user.username}</div>}
               {!loading && <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Username</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit username</DialogTitle>
          <DialogDescription>
            Make changes to your username here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
            <form onSubmit={handleSubmit(onUsernamechange)} >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
            {...register("username",{required:true})}
              id="username"
              defaultValue={user.username}
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              className="col-span-3"
            />
            </div>
        </div>
              {errors.username? <div className={"text-sm bottom-0 text-yellow-500 font-bold"}>{errors.username.message}</div>:""}
        {errors.regexMisMatch && <div className="text-xs text-red-500 font-bold">{errors.regexMisMatch.message}
        </div>}
        {goodUsername && <div className="text-green-400 text-sm flex items-center">
          <TiTick color="green"/><div>Your username is unique</div></div>}
          {errors.usernameExists? <div className={"text-sm text-yellow-500 font-bold"}>{errors.usernameExists.message}</div>:""}
          
        <DialogFooter>
          <Button className='my-1' disabled={buttonDisabled} type="submit">Save changes</Button>
        </DialogFooter>
    </form>
      </DialogContent>
    </Dialog>}
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
