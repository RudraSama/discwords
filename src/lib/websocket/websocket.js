import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import Cookies from 'js-cookie';


class StompClientSingleton{

    static connected = false;

    constructor(url, token){

        this.dipatch = null;

        if(!StompClientSingleton.instance && typeof window !== 'undefined'){

            this.client = new Client({
                brokerURL: url,
                connectHeaders: {
                    "x-access-token": token,
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
        this.client.publish({
            destination: topic, 
            body: JSON.stringify(message),
        });

    }

}

const token = Cookies.get("token");
const url = "http://localhost:8080/ws";


const instance = new StompClientSingleton(url, token);
//Object.freeze(instance);

export default instance;

