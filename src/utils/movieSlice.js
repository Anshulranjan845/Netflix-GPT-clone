import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState :{
        getPlayingMovies:null,
        getTrailerMovie:null,
        getPopularMovie:null,
        getTopRatedMovie:null,
        getUpcomingMovie:null,
    },
    reducers:{
        addMoviesList:(state,action)=>{
           state.getPlayingMovies = action.payload;
        },
        addVideoList:(state,action)=>{
            state.getTrailerMovie = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.getPopularMovie = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.getTopRatedMovie = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.getUpcomingMovie = action.payload;
        }
    }
})

export const{addMoviesList , addVideoList , addPopularMovies , addTopRatedMovies,addUpcomingMovies} = movieSlice.actions; 
export default movieSlice.reducer;