'use client'

import { redirect, useSearchParams } from "next/navigation"
import { activateAction } from "@/app/actions/activate"
import { useTransition } from "react"
import { useFormState } from 'react-dom'



const Page = () => {
    const param = useSearchParams()
    const uid = param.get("uid") 
    const token = param.get('token')
    const initialState = {
        redir:false,
        uid:uid,
        token:token
    }

    const [isPending, startTransition] = useTransition()
    const [state, formAction] = useFormState(activateAction, initialState)


if (state.redir){
    redirect('/login')
}

if (uid != null && token != null){
    const formdata = {
        uid:uid,
        token:token

    }
    return(
<div className="max-w-[500px] p-5 items-center gap-5 flex flex-col text-white bg-bg-black-1 border border-gray-t-l rounded-[16px]">
            <h1 className="font-bold text-4xl text-center">
                Activate your Account!
            </h1>
            <p className="text-center leading-normal text-gray-t text-lg">
                Activate your account by clicking button activate. By clicking we can verify your email account for security purpose. After activating account you are abel to use our app
            </p>
            <button className="py-3 px-5 font-bold bg-white rounded-[16px] outline-none text-black" onClick={()=>startTransition(()=>formAction())}>
                {isPending ? "wait..." : "Activate"} 
            </button>
        </div>
    )
}
else{
    return (
    
        <div className="max-w-[500px] p-5 items-center gap-5 flex flex-col text-white bg-bg-black-1 border border-gray-t-l rounded-[16px]">
            <h1 className="font-bold text-4xl text-center">
                Activate your Account!
            </h1>
            <p className="text-center leading-normal text-gray-t text-lg">
                Activate your account by clicking link on the given email. By clicking we can verify your email account for security purpose. After activating account you are abel to use our app
            </p>
        </div>
    
  )
}
}

export default Page