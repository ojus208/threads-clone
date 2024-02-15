"use server";
import axios from "axios";
import { baseurl } from "./constants";
import { cookies } from "next/headers";

export const addPost = async (prevstate, e) => {
  const token = cookies().get("token");
  console.log(token);
  const data = {
    "text": e.get("text"),
    "image": e.get("image"),
  }
  console.log(data)
  try {
    
    const res = await axios.post(
      baseurl + "post/new/",
      data,
      {
        headers: {
          Accept: "application/json",
          "Content-Type":
            "multipart/form-data; boundary=l3iPy71otz ; charset=UTF-8",
          Authorization: `JWT  ${token.value}`,
        },
      }
    );
    // console.log(e.get['image'].files[0])
    // const res = await fetch(baseurl+"post/new/",{
    //     method:'POST',
    //     headers:{
    //         // "Accept":"application/json",
    //         // "Content-Type": "multipart/form-data; boundary=l3iPy71otz ; charset=UTF-8",
    //         "Authorization":`JWT  ${token.value}`
    //     },
    //     body:{
    //         text:e.get("text"),
    //         image:e.get("image")
    //     }
    // })
    console.log(res);
  } catch (error) {
    console.log(error);
    return { error: "wtf" };
  }
};
