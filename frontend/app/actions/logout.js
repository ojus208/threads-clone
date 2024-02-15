'use server'

import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { NextResponse } from 'next/server'

export const logoutAction = (request)=>{
if (cookies().has('token') || cookies().has("refresh")){
    cookies().delete("token")
    cookies().delete("refresh")
    return redirect("login")

}
}