import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/user-schema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
connectDB()
export async function GET(){
   try {
      const token = cookies()?.get("token")?.value
      if(!token){
          return NextResponse.json({success:false,message:"Unauthorized user"},{status:401})
      }
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as jwt.JwtPayload
      const userId = decodedToken.id
      const user = await User.findOne({_id:userId}).select("username")
   cookies().delete("token")
   return NextResponse.json({success:true,message:`${user.username} signed out successfully`},{status:200})
} catch (error:any) {
    return NextResponse.json({success:false,message:error.message},{status:500})
   }
}