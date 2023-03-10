import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'lightMode'
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        lightTheme: (state) => {
            state.theme = 'lightMode'
        },
        darkTheme: (state) => {
            state.theme = 'darkMode'
        }
    }
})

export const { lightTheme, darkTheme } = themeSlice.actions;
export default themeSlice.reducer;