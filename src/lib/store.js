import {configureStore} from '@reduxjs/toolkit';
import directMessageSlice from './features/directMessageSlice';
import websocketSlice from './features/websocketSlice';

export const makeStore = ()=>{
    return configureStore({
        reducer: {
            directMessage: directMessageSlice,
            webSocket: websocketSlice,
        }
    });
}
