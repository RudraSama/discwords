import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';

export const makeStore = ()=>{
    return configureStore({
        reducer: {
            counter: counterSlice,
        }
    });
}