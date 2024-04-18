import axios from "axios"
import toast from "react-hot-toast"
export default async function signOutHandler(){
    try {
        const response = await axios.get("/api/user/auth/logout")
        toast.success(response.data.message)
        location.reload()
    } catch (error) {
        toast.error("Sorry please try again")
    }
}