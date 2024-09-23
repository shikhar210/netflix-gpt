import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        prefferedLanguage: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.prefferedLanguage  = action.payload;
        }
    }
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;