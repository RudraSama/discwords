import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    component: 'friendsList'
}

const windowSlicer = createSlice({
    name: 'middleComponentChanger',
    initialState,
    reducers: {
        changeComponent(state, action){
            state.component = 
        }
    }
})