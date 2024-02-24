import { createSlice } from "@reduxjs/toolkit";



const GptSearchToggle = createSlice({
    name : 'GptSearchToggle',
    initialState:{
       GptToggle:false,
       movieName:null,
       movieResult:null
    },
    reducers: {
        addGptToggle:(state)=>{
             state.GptToggle = !state.GptToggle;
        },
        addMovieDesc:(state,action)=>{
             const {movieName , movieList}= action.payload
             state.movieName = movieName
             state.movieResult = movieList
        }
    }   
})
export const {addGptToggle ,addMovieDesc} = GptSearchToggle.actions;
export default GptSearchToggle.reducer;