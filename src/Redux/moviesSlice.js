import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        officialTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addOfficialTrailer: (state, action) => {
            state.officialTrailer = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addOfficialTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;