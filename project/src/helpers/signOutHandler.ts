"use client"
import axios from "axios"

export default async function signOutHandler(){
    try {
        const response = await axios.get("/api/user/auth/logout")
        location.replace("/")
    } catch (error) {
    }
}