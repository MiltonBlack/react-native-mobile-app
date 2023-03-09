import { configureStore } from "@reduxjs/toolkit";
import internetReducer from './src/features/internetSlice'

export const store = configureStore({
    reducer :{
        internet: internetReducer,
    },
})