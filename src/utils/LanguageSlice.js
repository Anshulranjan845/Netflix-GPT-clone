import { createSlice } from "@reduxjs/toolkit";


const LangSlice = createSlice({
    name: "Language",
    initialState:{
        LangInitial :"eng",
    },
    reducers:{
        changeLangValue:(state,action)=>{
           state.LangInitial= action.payload;
        }
    }
})

export const{changeLangValue}= LangSlice.actions;
export default LangSlice.reducer;
