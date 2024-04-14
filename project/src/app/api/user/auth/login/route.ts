import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/user-schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
connectDB()
export async function POST(request:any){
   try {
     const reqBody = await request.json()
     const {email,password} = reqBody
     const existingUser =await User.findOne({email:email.toLowerCase()})
     if(!existingUser){
        return NextResponse.json({success:false,message:"User does not exist, please sign up"},{status:400})
     }
     const matchPassword = await bcrypt.compare(password,existingUser.password)
     if(!matchPassword){
        return NextResponse.json({success:false,message:"Invalid credentials"},{status:400})
     }
     const tokenPayload = {
        id:existingUser._id,
        username: existingUser.username
     }
     const token = jwt.sign(tokenPayload,process.env.TOKEN_SECRET!,{expiresIn:'1d'})
     cookies().set("token",token,{httpOnly:true})

     return NextResponse.json({success:true,message:"Log in succesfull"},{status:200})
} catch (error:any) {
    return NextResponse.json({success:false,message:error.message},{status:500})
   }
}