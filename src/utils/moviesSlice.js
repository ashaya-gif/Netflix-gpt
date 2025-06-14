import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies :(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies :(state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies :(state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies :(state, action) => {
            state.upcomingMovies = action.payload;
        },
        addAiringTodayMovies :(state, action) => {
            state.airingTodayMovies = action.payload;
        },
        addLatestMovies :(state, action) => {
            state.latestMovies = action.payload;
        },
        addTrailervideo :(state, action) =>{
            state.trailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies, addTrailervideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addAiringTodayMovies, addLatestMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
