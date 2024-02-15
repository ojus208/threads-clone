'use server'

import { baseurl } from "./constants"


export const activateAction = async (prevstate,formdata)=>{

try {
    const res = await fetch(baseurl+'account/activation/',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                uid:prevstate["uid"],
                token:prevstate["token"]
            })
        })
    console.log(res)
    return{
        redir:true
    }
} catch (error) {
    console.log(error)
}
}