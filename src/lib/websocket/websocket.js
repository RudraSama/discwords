import { Client } from '@stomp/stompjs';


export const stompInit = (url, token, topic)=>{
    console.log(url);
    const stompClient = new Client({
        brokerURL: url,
        connectHeaders:{
            access_token : token,
        }
    });

    console.log("Activating Stomp client");
    stompClient.activate();

    stompClient.onConnect = ()=>{
        console.log("Successfully connected to Stomp Client");
        stompClient.subscribe('/topic/'+topic, (message)=>{
            console.log("new message received", message.body)
            
        });
    }

    //send message banana hai stomp client ka object jayega aur string mai message
    return stompClient;

}
export const sendMessage = (stompClient, destination , message) => {
    stompClient.publish({
        destination: "/app/topic/"+ destination, 
        body: JSON.stringify(message),
    });
}
