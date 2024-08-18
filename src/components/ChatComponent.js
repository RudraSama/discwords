"use client" 

import {useSelector, useDispatch} from 'react-redux';
import StompClientInstance from '../lib/websocket/websocket';

const ChatComponent = () =>{

    const messages = [{profile_id: 1, conversation_id:1, message: "hello bro"},{profile_id: 2, conversation_id:1, message: "hey bro"}, {profile_id: 1, conversation_id:1, message: "how are you bro"},{profile_id: 2, conversation_id:1, message: "cool bro"}]

    const dispatch = useDispatch();
    StompClientInstance.setDispatch(dispatch);


    const send = ()=>{
        const text = document.getElementById("messageInput").value;

        const message = {
            profile_id: 1,
            conversation_id: 1,
            message: text
        };

        StompClientInstance.sendMessage("/app/queue/conversation", message);

    }

    const {data} = useSelector((state)=>state.directMessage);
    console.log(data, "this is from data");



    return(
        <div className='h-full w-full flex flex-col justify-end items-end border-2 border-white p-4'>
            <div className='w-full h-full flex flex-col justify-end text-white'>
                {
                    messages.map((msg, index) => (<OneChat obj={msg} key={index}/>))
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
