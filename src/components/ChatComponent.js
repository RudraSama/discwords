"use client" 

import { stompInit, sendMessage } from '@/lib/websocket/websocket';

const ChatComponent = () =>{

    const messages = [{profile_id: 1, conversation_id:1, message: "hello bro"},{profile_id: 2, conversation_id:1, message: "hey bro"}, {profile_id: 1, conversation_id:1, message: "how are you bro"},{profile_id: 2, conversation_id:1, message: "cool bro"}]

    const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4NjMxMDA3NDEzOCIsImVtYWlsIjoibHVja3kyQGx1Y2t5LmNvbSIsInN1YiI6ImdhdXJhdiIsImlhdCI6MTcyMzU4NjMxMSwiZXhwIjoxNzMxMzYyMzExfQ.LUboJiBNmXmdVCaCjuBXjchyFSzkkEdnfOOUyFU7ltI"
    

    const stompClient = stompInit("http://localhost:8080/ws", token, `conversation/1`); 

    const send = ()=>{
        const text = document.getElementById("messageInput").value;
        console.log(text);

        const message = {
            profile_id: 1,
            conversation_id: 1,
            message: text
        };

        sendMessage(stompClient, "/conversation/1", message);
    }



    return(
        <div className='h-full w-full flex flex-col justify-end items-end border-2 border-white p-4'>
            <div className='w-full h-full flex flex-col justify-end text-white'>
                {
                    messages.map(msg => (<OneChat obj={msg}/>))
                }
            </div>
            <div className='w-full bg-gray flex items-end bg-gray-bg-600 justify-center rounded-xl'>

                <input id='messageInput' type='text' placeholder='Send a message' className='w-full p-3 bg-transparent'/>
                <input id='profile_id' type='text' placeholder='Enter profile ID' className='w-full p-3 bg-transparent border-l-2'/>
                <button onClick={send} className='w-28 bg-gray-bg-800 text-gray-bg-500 p-3 rounded-xl'> Send </button>
            </div>
            
        </div>
    )


}

const OneChat = (props) =>{
    return(
        <div className={props.obj.profile_id==1?"self-end":"self-start"}>
            {props.obj.message}
        </div> 
    )
}

export default ChatComponent;