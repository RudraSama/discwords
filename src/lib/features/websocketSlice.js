import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    stompClient: null
}

const websocketSlice = createSlice({
    name: 'stompClient',
    initialState,
    reduces: {
        createStompClient(state, action){
            state.stomClient = action;
        }
    }
});

export const {createStompClient} = websocketSlice.actions;
export default websocketSlice.reducer;
