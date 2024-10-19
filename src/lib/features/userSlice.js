import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {axiosConfig} from '../utils';

export const fetchUserByToken = createAsyncThunk("userSlice/fetchUserByToken", async ()=>{
    
    const axios = axiosConfig();
    const res = await axios.get("http://localhost:8080/api/checkAuthorization");

    if(res.data.profileId){
        return {user: res.data, auth: true};
    }
    
    return {auth : false}

});

const initialState = {
    user : {},
    authenticated: false,
    loading: true 
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
            
            if(action.payload.auth){
                state.user = action.payload.user;
                state.authenticated = true;
            }
            else{
                state.authenticated = false;
            }
            state.loading = false;
        }).addCase(fetchUserByToken.rejected, (state, action)=>{
            state.loading = false;
        })
    }

});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
