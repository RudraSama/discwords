import {Client} from '@stomp/stompjs';


const stompInit = (url, token, topic)=>{
    const stompClient = new Client({
        brokerUrl: url,
        connectHeaders: {
            access_token: token
        }
    });

    console.log("Activating Stomp client");
    stompClient.activate();

    stompClient.onConnect = ()=>{
        console.log("Successfully connected to Stomp Client");
        stompClient.subscribe('/topic/'+topic, ()=>{

        })
    }

}


