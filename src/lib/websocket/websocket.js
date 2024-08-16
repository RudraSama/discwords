import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

export const stompInit = (url, token, topic)=>{
    console.log(url);
    const stompClient = new Client({
        brokerURL: url,
        connectHeaders:{
            access_token : token,
        }
    });

    stompClient.webSocketFactory = ()=>{
        return new SockJS(url);
    }

    console.log("Activating Stomp client");
    stompClient.activate();

    console.log("hu");

    stompClient.onConnect = ()=>{
        console.log("Successfully connected to Stomp Client");
        stompClient.subscribe('/topic/'+topic, (message)=>{
            console.log("new message received", message.body)
            
            
        });
    }

    return stompClient;

}
export const sendMessage = (stompClient, destination , message) => {
    console.log(message);
    stompClient.publish({
        destination: "/app/topic/"+ destination, 
        body: JSON.stringify(message),
    });
}
