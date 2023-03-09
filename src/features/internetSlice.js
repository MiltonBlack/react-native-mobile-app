import NetInfo from '@react-native-community/netinfo'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useState } from 'react'

const [isOffline, setIsOffline] = useState(true);
const initialState = {
    conn: false,
    isLoading: false,
    iConn: isOffline
}

export const internetConnect = createAsyncThunk("internet/internetInfo", async()=> {
    NetInfo.fetch().then((state)=> { ; 
        setIsOffline(state.isConnected); 
        console.log(state.isConnected);
      })
})

const internetSlice = createSlice({
 name: "internet",
 initialState,
 extraReducers:{
    [internetConnect.pending]:(state)=> {
        state.conn = false;
        state.isLoading = true;
    },
    [internetConnect.fulfilled]:(state, action)=> {
        state.conn = action.payload;
        state.isLoading = false;
    },
    [internetConnect.rejected]:(state)=> {
        state.conn = false;
        state.isLoading = false;
    }
 }
})

export default internetSlice.reducer