import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    counter: 10
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCounter(state, action){
            state.counter++
        },
        
        decrementCounter(state, action){
            state.counter--;
        }
    }    
});

export const {incrementCounter, decrementCounter} = counterSlice.actions;
export default counterSlice.reducer;