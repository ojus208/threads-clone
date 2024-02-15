'use server'

import { baseurl } from "./constants"

import { cookies } from "next/headers"
import axios from 'axios'


export const loginAction = async (prevstate,e)=>{
    console.log("working")
try {
    const res = await axios.post(baseurl+'auth/jwt/create/',{
        email:e.get('email'),
        password:e.get('password')
    })
    if (res.status == 200){
        cookies().set("token", res.data.access,{
            httpOnly:true,
            path:'/',
            secure:true
        })
        cookies().set("refresh", res.data.refresh,{
            httpOnly:true,
            path:'/',
            secure:true
        })
        return{
            redir:true
        }
    }
    else{
        console.log("else part not calling ")
        return {
            redir:false,
            message: "error"
        }
    }
    
} catch (error) {
    
}

}
