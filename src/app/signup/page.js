"use client"
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";


const Signup = ()=>{

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) =>{
        setPassword(event.target.value);
    }

    const handleChangeUsername = (event)=>{
        setUsername(event.target.value);
    }


    const handleGoogleSignup = async(response)=>{
        const token = response.credential;
        
        try {
            const res = await axios.post('http://localhost:8080/api/signupUserWithGoogle', {tokenId: token});
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }


    const handleSignup = async(event)=>{
        event.preventDefault();
        try{
            const credentials = {
                username: username,
                email: email,
                password: password
            };

            const response = await axios.post("http://localhost:8080/api/registerUser", credentials);
            
            if(response.data){
                console.log(response.data);
            }

        }
        catch(error){
            console.log(error);
        }

    }

    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENT_ID}>
        <main className="bg-[url('/login_bg.jpg')] bg-center bg-cover w-full h-screen flex justify-center items-center flex-col">
            <div className="formContainer">
                <h1 className="form-heading">Signup</h1>
                <form className="formBox" onSubmit={handleSignup}>
                    <input onChange={handleChangeUsername} type="username" placeholder="Username"/>
                    <input onChange={handleChangeEmail} type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password" onChange={handleChangePassword}/>
                    <button>Signup</button>
                    <span>
                        <GoogleLogin
                        onSuccess={handleSignup}
                        onError={()=>{console.log("Signup failed")}}
                        />
                    </span>
                </form>
                <span className="ml-auto text-white">Existing User? <Link className=" underline" href="/login"> login</Link></span>
            </div>
        </main>
        </GoogleOAuthProvider>
    );
}

export default Signup;
