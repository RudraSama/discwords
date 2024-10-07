import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export const fetchUserByToken = createAsyncThunk("userSlice/fetchUserByToken", async ()=>{
    
    const token = Cookies.get("token");

    if(token == undefined)
        return {};

    const headers = {
        "x-access-token": token 
    };

    const res = await axios.get("http://localhost:8080/api/checkAuthorization", {
        headers: headers
    });

    return res.data;
});

const initialState = {
    user : {},
    authenticated: false,
    loading: false
}


const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUser(state, action){
            state.user = action.payload;
        },
    },

    extraReducers: (builder)=>{
        builder.addCase(fetchUserByToken.pending, (state, action)=>{
            state.loading = true;
        }).addCase(fetchUserByToken.fulfilled, (state, action)=>{
            if(action.payload.error){
                state.authenticated = false;
            }
            else{
                state.user = action.payload;
                state.authenticated = true;
            }
            state.loading = false;
        })
    }

});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
