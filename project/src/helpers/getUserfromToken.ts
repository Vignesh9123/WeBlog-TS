"use server"

import { cookies } from "next/headers"

export async function getUserState(){
    return cookies().has('token')
}