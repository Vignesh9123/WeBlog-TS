import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/user-schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
connectDB()
export async function POST(request:any){
   try {
     const reqBody = await request.json()
     const {username,email,password} = reqBody
     const existingUser =await User.findOne({email:email.toLowerCase()})
     //TODO:Lowercase email
     if(existingUser){
        return NextResponse.json({message:"User already exists"},{status:400})
     }
     const usnExists = await User.findOne({username})
     if(usnExists){
      return NextResponse.json({message:"Please use a different username"},{status:400})
     }
     const hashedPassword = await bcrypt.hash(password,10)
     const user = await User.create({email:email.toLowerCase(),username,password:hashedPassword})
     return NextResponse.json({message:"Signed up succesfully"},{status:200})
} catch (error:any) {
    return NextResponse.json({message:error.message},{status:500})
   }
}