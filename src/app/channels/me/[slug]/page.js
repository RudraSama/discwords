"use client"

import Image from "next/image";
import StompClient from "../../../../lib/websocket/websocket";
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import { Stomp } from "@stomp/stompjs";
import {useSelector} from 'react-redux';
import axios from 'axios';
import {FormatDate} from '../../../../lib/utils';

const Chat = ({params})=>{

    const router = useRouter();
    const conversation_id = params.slug;

    const {user} = useSelector((state)=>state.user);
    

    /*
     * convseration should have this JSON object - 
     * {
     *     conversation_id: _,
     *     profile_id1: _,
     *     profile_id2: _,
     *
     *     friend_profile: {
     *          profile_id: _,
     *          user_id: _,
     *          username: _,
     *          email: _,
     *          picture_url: _
     *     }
     * }
    */
    const [conversation, setConversation] = useState({});

    const [messages, setMessage] = useState([]);
    const [stompConnected, setStompConnected] = useState(false);

    
    const addMessageTile = (username, picture_url = "/icon-cat.png", message, timestamp)=>{
        
        const messageObj = {
            username : username,
            picture_url: picture_url,
            timestamp: timestamp,
            message: message
        };

        messages.push(messageObj)

        setMessage([...messages]);
        sendMessage(message);
    }



    useEffect(()=>{

        axios.get(`http://localhost:8080/api/fetchConversation/${conversation_id}`).then(res=>{
            if(res.data){
                setConversation(res.data);

                axios.get(`http://localhost:8080/api/fetchMessages/conversation/${conversation_id}`).then(res=>{
                    if(res.data){
                        res.data.map((message)=>{
                            const messageObj = {
                                username: message.sender_profile.username,
                                picture_url: message.sender_profile.pictureUrl,
                                timestamp: message.timestamp,
                                message: message.message
                            };
                            messages.push(messageObj);
                            setMessage([...messages]);2
                    }
                });
            }
        });


    },[]);

    useEffect(()=>{


        //setTimeout because It takes few microseconds before websocket get connected
        setTimeout(() => {
            
            if(StompClient.connected){
                
                StompClient.getClient().subscribe(`/topic/conversation/${conversation_id}/${user.profileId}`, (message)=>{
                    const parsedMessage = JSON.parse(message.body);
                    const messageObj = {
                        username : parsedMessage.sender_profile.username,
                        picture_url: parsedMessage.sender_profile.pictureUrl,
                        timestamp: parsedMessage.timestamp,
                        message: parsedMessage.message 
                    };
                    //because Component is rendered twice when this event listener is triggered,
                    //In first render conversation object is empty 
                    if(Object.keys(conversation).length > 0){
                        messages.push(messageObj);
                        setMessage([...messages]);
                    }
                    
                });
            }

        }, 500);

        const textField = document.getElementById("text-field");
        textField.addEventListener("beforeinput", (event)=>{

            if(event.target.innerHTML === "<br>"){
                event.target.innerHTML = "";
            }

            if(event.inputType === "insertParagraph" && event.target.innerText.trim() !== ""){
                event.preventDefault();

                //because Component is rendered twice when this event listener is triggered,
                //In first render conversation object is empty 
                if(Object.keys(conversation).length > 0){
                    addMessageTile(user.username, user.pictureUrl, event.target.innerHTML, Date());
                    event.target.innerHTML = "";
                }

            }

        });

    }, [conversation]);

    const sendMessage = (message) =>{

        const new_msg = {
            message_id: 0,
            conversation_id: parseInt(conversation_id),
            sender_profile: user,
            message: message,
            timestamp: new Date(),
        };
        StompClient.sendMessage(`/app/topic/conversation/${conversation_id}/${conversation.friend_profile.profileId}`, new_msg);
    }

    return (
        <div className="w-full">
            <ChatHead username={conversation.friend_profile?.username} icon_url={conversation.friend_profile?.pictureUrl}/>
            <div className="flex flex-col h-[calc(100vh-56px)] bg-gray-bg-700">

                <div className="flex-1 mx-6 flex flex-col justify-end gap-4 overflow-auto">
                    <div className="[&>div]:mt-6 max-h-full" id="chat-field">
                        {messages.map((message, index)=>{
                            return (<MessageTile icon_url={message.picture_url} username={message.username} timestamp={FormatDate.getFormatTimestamp(message.timestamp)} message={message.message} key={index}/>)
                        })}
                   </div>
                </div>

                <div className="px-6 py-4 m-6 bg-gray-bg-600 rounded-lg">
                    <div className="relative z-0">
                        {/*<div className="absolute text-gray-bg-500 -z-[1]" id="text-field-placeholder">Message @Cattt</div>*/}
                        <div id="text-field" contentEditable="true" className="text-white outline-none whitespace-pre-wrap">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const ChatHead = (props) =>{

    return (
        <div className="h-14 p-4 bg-gray-bg-700 text-gray-bg-500 flex gap-4 items-center border-b-2 border-[#202124]">
           
            <div className="flex">
                <UserIcon icon_url={(props.icon_url === "" || props.icon_url == undefined)?"/icon-cat.png":props.icon_url} online="true"/>&nbsp;&nbsp;
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
