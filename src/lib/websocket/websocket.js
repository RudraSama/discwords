import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

import {receiveDirectMessage} from '../features/directMessageSlice';



class StompClientSingleton{

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

                this.client.subscribe('/queue/conversation', (message)=>{
                    this.dispatch(receiveDirectMessage(JSON.parse(message.body)));
                });

            }

            StompClientSingleton.instance = this;
        }


        return StompClientSingleton.instance;

    }

    getClient(){
        return this.client;
    }

    setDispatch(dispatch){
        this.dispatch = dispatch;
    }


    sendMessage(topic, message){

        console.log(message);
        this.client.publish({
            destination: "/app/queue/conversation", 
            body: JSON.stringify(message),
        });

    }

}

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4NjMxMDA3NDEzOCIsImVtYWlsIjoibHVja3kyQGx1Y2t5LmNvbSIsInN1YiI6ImdhdXJhdiIsImlhdCI6MTcyMzU4NjMxMSwiZXhwIjoxNzMxMzYyMzExfQ.LUboJiBNmXmdVCaCjuBXjchyFSzkkEdnfOOUyFU7ltI"
const url = "http://localhost:8080/ws";


const instance = new StompClientSingleton(url, token);
//Object.freeze(instance);

export default instance;

