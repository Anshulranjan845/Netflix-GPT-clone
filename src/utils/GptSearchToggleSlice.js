import { createSlice } from "@reduxjs/toolkit";



const GptSearchToggle = createSlice({
    name : 'GptSearchToggle',
    initialState:{
       GptToggle:false,
    },
    reducers: {
        addGptToggle:(state)=>{
             state.GptToggle = !state.GptToggle;
        },
    }   
})
export const {addGptToggle} = GptSearchToggle.actions;
export default GptSearchToggle.reducer;