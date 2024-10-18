"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useRouter} from 'next/navigation';
import {axiosConfig} from '../../lib/utils';

import {useSelector, useDispatch} from 'react-redux';
import {fetchUserByToken, setUser} from '../../lib/features/userSlice';


const Login = ()=>{
    
    const router = useRouter();

    const {user, authenticated, loading} = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleLogin = async(event) => {
        event.preventDefault();

        const res = await axios.post('http://localhost:8080/loginUser', {
               email: email,
               password: password
        });
   
           
        if(res.data.profile){
            dispatch(setUser(res.data.profile));
            Cookies.set("token", res.data.token);
            router.push("/channels/me");
        }

    }

    const handleLoginSuccess = async(response)=>{
        
        const token = response.credential;

        try{
            const res = await axios.post('http://localhost:8080/loginUserWithGoogle', {tokenId: token});

            if(res.data.profile){
                dispatch(setUser(res.data.user));
                Cookies.set("token", res.data.token);
                router.push("/channels/me");
            }

        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        dispatch(fetchUserByToken());
    }, []);


    useEffect(()=>{
        if(!loading && authenticated){
            router.push("/channels/me");
        }
    }, [loading]);

    
    return (
        <>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
            <main className="bg-[url('/login_bg.jpg')] bg-center bg-cover w-full h-screen flex justify-center items-center flex-col">
                <div className="formContainer">
                    <h1 className="form-heading">Login</h1>
                    <form className="formBox" onSubmit={handleLogin}>
                        <input onChange={handleChangeEmail} type="email" placeholder="email"/>
                        <input onChange={handleChangePassword} type="password" placeholder="password" />
                        <button>Login</button>
                        <span className="self-center mt-10 mb-8">
                            <GoogleLogin 
                            onSuccess={handleLoginSuccess}
                            onError={() => { console.log('Login Failed'); }}
                            />
                        </span>
                    </form>
                    <span className="ml-auto text-white">New User? <Link className="hover:underline" href="/signup"> Signup</Link></span>

                </div>
            </main>
        </GoogleOAuthProvider>
        </>
    );
}

export default Login;
