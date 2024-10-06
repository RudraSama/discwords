import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';



class StompClientSingleton{

    static connected = false;

    constructor(url, token){

        this.dipatch = null;

        if(!StompClientSingleton.instance && typeof window !== 'undefined'){

            this.client = new Client({
                brokerURL: url,
                connectHeaders: {
                    access_token: token,
                }
            });
            
            this.client.webSocketFactory = ()=>{
                return new SockJS(url);
            }

            console.log("Activating Stomp Client");
            this.client.activate();
            
            this.client.onConnect = ()=>{
                console.log("Connected to Stomp Client");
                this.connected = true;
            }

            StompClientSingleton.instance = this;
        }

        return StompClientSingleton.instance;

    }

    getClient(){
        return this.client;
    }

    sendMessage(topic, message){
        console.log(topic)

        this.client.publish({
            destination: topic, 
            body: JSON.stringify(message),
        });

    }

}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE2NzEwMDk2MzQ0NyIsImVtYWlsIjoiZ21zdGNoc0BnbWFpbC5jb20iLCJzdWIiOiJnYXVyYXYiLCJpYXQiOjE3MjYxNjcxMDIsImV4cCI6MTczMzk0MzEwMn0.N9-gM7-aM-16tw-7rqIkdABWXiCA9UnqP2vWkC5knz0";
const url = "http://localhost:8080/ws";


const instance = new StompClientSingleton(url, token);
//Object.freeze(instance);

export default instance;

