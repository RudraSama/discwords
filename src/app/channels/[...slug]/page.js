"use client"
import {useState, useEffect} from 'react';
import MainWindow from '../../../components/MainWindow';
import MemberList from './MemberList';
import {FormatDate} from '../../../lib/utils';
import Image from 'next/image';

const Server = ()=>{

    const [memberListWindow, setMemberListWindow] = useState(false);

    const toggleMemberList = ()=>{
        setMemberListWindow(!memberListWindow);
    }

    return (
        <div className="w-full">
            <NavBar channelName="general" callbacks={
                {memberList: toggleMemberList}
            }/>

            <MainWindow>
                <ChatArea />
                {memberListWindow?<MemberList/>:""}
            </MainWindow>
        </div>
    );
}



const NavBar = (props)=>{
    return (
        <div className="w-full flex justify-between h-14 p-4 bg-gray-bg-700  text-gray-bg-500 flex gap-4 border-b-2 border-gray-bg-800">
            <div>
                <i className="fa-regular fa-hashtag fa-xl"></i>
                <span className="font-bold text-gray-200">&nbsp;&nbsp;{props.channelName}</span>
            </div>

            <div className="[&>button]:mx-2.5 [&>button]:text-gray-400 hover:[&>button]:text-gray-200">
                <button> <i className="fa-solid fa-bell fa-xl"></i></button>
                <button> <i className="fa-solid fa-thumbtack fa-xl"></i></button>
                <button onClick={()=>{props.callbacks.memberList()}}> <i className="fa-solid fa-user-group fa-xl"></i></button> 
                <button> <i className="fas fa-inbox fa-xl"/></button>
                <button> <i className="fa-solid fa-question fa-xl"></i></button>
            </div>
        </div>
    );
}

const ChatArea = (props)=>{

    const [messages, setMessages] = useState([]);

      return (
        <div className="w-full flex flex-col h-[calc(100vh-56px)] bg-gray-bg-700">
            <div className="flex-1 mx-6 flex flex-col justify-end gap-4 overflow-auto">
                <div className="[&>div]:mt-6 max-h-full" id="chat-field">
                    {messages.map((message, index)=>{
                        return (<MessageTile icon_url={message.picture_url} username={message.username} timestamp={FormatDate.getFormatTimestamp(message.timestamp)} message={message.message} key={index}/>)
                    })}
               </div>
            </div>

            <InputBox/>
        </div>
    );
}

const InputBox = (props)=>{

    useEffect(()=>{

        const textField = document.getElementById("text-field");
        textField.addEventListener("beforeinput", (event)=>{

            if(event.target.innerHTML === "<br>"){
                event.target.innerHTML = "";
            }

            if(event.inputType === "insertParagraph" && event.target.innerText.trim() !== ""){
                event.preventDefault();

                //because Component is rendered twice when this event listener is triggered,
                //In first render conversation object is empty 
                    //            addMessageTile(user.username, user.pictureUrl, event.target.innerHTML, Date());
                props.callback(event.target.innerHTML);
                event.target.innerHTML = "";

            }

        });

    }, []);


    return (
        <div className="px-6 py-4 m-6 bg-gray-bg-600 rounded-lg">
            <div className="relative z-0">
                {/*<div className="absolute text-gray-bg-500 -z-[1]" id="text-field-placeholder">Message @Cattt</div>*/}
                <div id="text-field" contentEditable="true" className="text-white outline-none whitespace-pre-wrap">
                </div>
            </div>
        </div>
    );
}

const MessageTile = (props)=>{

    
    useEffect(()=>{
        const chatField = document.getElementById("chat-field");
        chatField.parentNode.scrollTop = chatField.parentNode.scrollTopMax;
    },[]);

    return (
        <div className="flex gap-4">
            <div className="w-11 h-11 rounded-full overflow-hidden">
                <Image src={props.icon_url === ""?"/icon-cat.png":props.icon_url} alt="" width={100} height={100}/>
            </div>

            <div className="gap-4">
                <span className="flex gap-3 text-base items-end text-white font-bold leading-5 mb-1">
                    {props.username}
                    <span className="text-gray-bg-500 text-xs font-normal">
                        {props.timestamp}
                    </span>
                </span>
                <div className="text-sm text-slate-300">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default Server;
