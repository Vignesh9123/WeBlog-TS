import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/user-schema";
import { NextRequest } from "next/server";
connectDB()

export async function GET(request:NextRequest){
    try {
        const {searchParams} = new URL(request.url)
        const username = searchParams.get("username")
        const user = await User.findOne({username})
        if(user){
            return Response.json({message:"Username already exists",success:false},{status:201})
        }
        return Response.json({message:"Good username",success:true},{status:200})
    } catch (error) {
        return Response.json({message:"Some error occurred",success:false},{status:400})
    }
    
}