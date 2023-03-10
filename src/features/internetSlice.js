import NetInfo from '@react-native-community/netinfo'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    conn: false,
    isLoading: false,
}

export const internetConnect = createAsyncThunk("internet/internetInfo", async()=> {
    NetInfo.fetch().then((state)=> { ;  
        console.log(state.isConnected);
      })
})

const internetSlice = createSlice({
 name: "internet",
 initialState,
 reducers: {
    
 }
})

export default internetSlice.reducer