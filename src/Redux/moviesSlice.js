import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        searchedText: "",
        searchedMovies: null,
        officialTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addSearchedText: (state, action) => {
            state.searchedText = action.payload;
        },
        addSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload;
        },
        addOfficialTrailer: (state, action) => {
            state.officialTrailer = action.payload;
        }
    }
});

export const {
    addNowPlayingMovies, addOfficialTrailer, addPopularMovies, addTopRatedMovies,
    addSearchedText, addUpComingMovies, addSearchedMovies } = moviesSlice.actions;
export default moviesSlice.reducer;