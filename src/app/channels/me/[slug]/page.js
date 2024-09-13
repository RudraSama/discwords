"use client"

import Image from "next/image";
import {useEffect} from 'react';
import {useSession} from 'next-auth/react';

const Chat = ()=>{

    const session = useSession();

    if(session){
      console.log(session)
    }
    else{

    }

    const addMessageTile = (user, message, date)=>{

    }

    useEffect(()=>{

        const textField = document.getElementById("text-field");
        textField.addEventListener("beforeinput", (event)=>{
            if(event.target.innerHTML.length > 0){
                document.getElementById("text-field-placeholder").style.display = "none";
            }
            if(event.target.innerHTML === "<br>"){
                document.getElementById("text-field-placeholder").style.display = "block";
            }


            if(event.inputType === "insertParagraph"){
                event.preventDefault();

            }

        });
    },[]);

    return (
        <div className="w-full">
            <NavBar username="Cattt"/>
            <div className="flex flex-col h-[calc(100vh-56px)] bg-gray-bg-700">

                <div className="flex-1 mx-6 flex flex-col justify-end gap-4">
                    <div className="[&>div]:mt-6" id="chat-field">
                        <MessageTile icon_url="/icon-cat.png" username="Cattt" date="24/09/2024 21:58" message="hello"/>
                        <MessageTile icon_url="/batman.jpeg" username="IamBatman" date="24/09/2024 21:58" message="hello"/>
                    </div>
                </div>

                <div className="px-6 py-4 m-6 bg-gray-bg-600 rounded-lg">
                    <div className="relative z-0">
                        <div className="absolute text-gray-bg-500 -z-[1]" id="text-field-placeholder">Message @Cattt</div>
                        <div id="text-field" contentEditable="true" className="text-white outline-none">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const NavBar = (props) =>{

    return (
        <div className="h-14 p-4 bg-gray-bg-700 text-gray-bg-500 flex gap-4 items-center border-b-2 border-[#202124]">
           
            <div className="flex">
                <UserIcon icon_url="/icon-cat.png" online="true"/>&nbsp;&nbsp;
                <span className="text-white font-bold leading-8">{props.username}</span>
            </div>

            <div className="flex gap-6 ml-auto hover:[&>button>i]:text-white [&>button]:px-1 [&>button]:py-0.5  [&>button]:text-md">
                <button><i className="fas fa-message text-xl text-gray-bg-500"/></button>
                <div className="w-0.5 bg-gray-bg-600 h-6 mx-"></div>
                <button><i className="fas fa-inbox text-xl text-gray-bg-500 "/></button>
                <button><i className="fas fa-question text-xl text-gray-bg-500"/></button>
            </div>
        </div>
    )
}


const MessageTile = (props)=>{
    return (
        <div className="flex gap-4">
            <div className="w-11 h-11 rounded-full overflow-hidden">
                <Image src={props.icon_url} alt="this is cat user" width={100} height={100}/>
            </div>

            <div className="gap-4">
                <span className="flex gap-3 text-base items-end text-white font-bold leading-5 mb-1">
                    {props.username}
                    <span className="text-gray-bg-500 text-xs font-normal">
                        {props.date}
                    </span>
                </span>
                <div className="text-sm text-slate-300">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

const UserIcon = (props)=>{

    return (
        <div className="relative text-xl">
            <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                <Image src={props.icon_url} alt="this is cat user" width={100} height={100}/>
            </div>
            <div className="absolute top-5 right-0 h-3 w-3 bg-gray-bg-800 rounded-full flex justify-center items-center">
                <div className={"h-2 w-2 rounded-full flex justify-center items-center " + (props.online?"bg-green-600":"bg-gray-bg-500 ")}>
                    <div className={"h-1 w-1 rounded-full bg-gray-bg-800 " + (props.online?"hidden":"")}>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Chat;
