'use server'
// import axios from 'axios'


export const  signupAction = async (prevstate,e)=>{
    const baseurl = "http://localhost:8000/"
    console.log(baseurl)
    var username = e.get('username')
    var fname = e.get('fname')
    var lname = e.get('lname')
    var email = e.get('email')
    var password = e.get('password')
    // console.log(email, username, fname, lname, password)
    try{
        console.log("called")
        const res = await fetch('http://localhost:8000/auth/users/',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                username:username,
                fname:fname,
                lname:lname,
                password:password,
                re_password:password
            })
        })
        return{
            redir:true,
            message:""
        }
    }
    catch(error){
        console.log(error)
        return{redir:false,
            message:"error eccoured"
        }
    }

}