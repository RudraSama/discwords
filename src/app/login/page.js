"use client"
import Link from "next/link";
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';

const Login = ()=>{

    const handleLoginSuccess = async(response)=>{
        
        const token = response.credential;

        console.log(response);
        try{
            const res = await axios.post('http://localhost:8080/api/auth/google', {tokenId: token});
            console.log(res.data);
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <>
        <GoogleOAuthProvider clientId="976168075960-icen3ef92hdfkq7ca4mkaqdo29gfstk7.apps.googleusercontent.com">
            <main className="bg-[url('/login_bg.jpg')] bg-center bg-cover w-full h-screen flex justify-center items-center flex-col">
                <div className="w-72 flex flex-col">
                    <form className="flex flex-col [&>input]:px-4 [&>input]:py-2 [&>input]:mb-3 [&>input]:text-black">
                        <input type="username" placeholder="username"/>
                        <input type="password" placeholder="password" />
                        <button className="w-fit bg-navy-blue px-6 py-2 text-white rounded-2xl">Login</button>
                        <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={() => { console.log('Login Failed'); }}
                        />
                    </form>
                    <span className="ml-auto text-white">New User? <Link className=" underline" href="/signup"> Signup</Link></span>

                </div>
            </main>
        </GoogleOAuthProvider>
        </>
    );
}

export default Login;
