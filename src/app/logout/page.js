"use client"
import {useEffect} from 'react'
import {useRouter} from "next/navigation"
import Cookies from 'js-cookie'

const Logout = ()=>{

    const router = useRouter();

    useEffect(()=>{
        Cookies.remove("token");
        router.push("/login");
    }, []);


    return (
        <>
        </>
    );
}

export default Logout;
