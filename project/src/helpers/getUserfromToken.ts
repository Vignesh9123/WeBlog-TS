"use server"

import connectDB from "@/dbConfig/dbConfig"
import User from "@/models/user-schema"
import  jwt, { JwtPayload }  from "jsonwebtoken"
import { cookies } from "next/headers"

connectDB()
export async function getUserState(){
    return cookies().has('token')
}

export async function getUserFullDetails(){
    const token = cookies().get("token")?.value
    if(!token){
        return
    }
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload
    const id = decodedToken.id;
    const user = await User.findById(id).select("-password -isVerified")
    return user;
}