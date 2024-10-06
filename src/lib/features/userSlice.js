import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUserByToken = createAsyncThunk("user/fetchUser", async (userObj)=>{

    const headers = {
        "x-access-token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY0MTk4NDY4NzI5NCIsImVtYWlsIjoiZ21zdGNoc0BnbWFpbC5jb20iLCJzdWIiOiJnYXVyYXYiLCJpYXQiOjE3Mjc2NDE5ODYsImV4cCI6MTczNTQxNzk4Nn0.rkflAHQwu-ZO4SE5dDB0qRn7GvIAyBhbmdxcGK5nPlY"
    };

    const res = await axios.get("http://localhost:8080/api/checkAuthorization", {
        headers: headers
    });

    res.data;
})

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

    extraReduces: {
        [fetchUserByToken.pending](state){
            state.loading = true
        },

        [fetchUserByToken.fullfilled](state){
            state.user = action.palyload;
            state.loading = false;

            //Have to change state of authenticated to true or false based on  returend payload
        }
    }
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
