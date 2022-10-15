import { useEffect, useState } from "react";
import {loginWithGithub,authStateChanged} from '../pages/firebase/client'

export default function useUser(){

    let [user,setUser]=useState(null);

    useEffect(()=>{
        authStateChanged(setUser)
    },[])

    return user
}