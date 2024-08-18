import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data : {}
}


const directMessageSlice = createSlice({
    name: "directMessage",
    initialState,

    reducers: {
        sendDirectMessage(state, action){
            state.data = action;
        },

        receiveDirectMessage(state, action){
            state.data = action;
        }
    }
});

export const {sendDirectMessage, receiveDirectMessage} = directMessageSlice.actions;
export default directMessageSlice.reducer;
