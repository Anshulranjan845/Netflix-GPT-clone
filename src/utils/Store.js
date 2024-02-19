
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GptSearchReducer from "./GptSearchToggleSlice"
import LangReducer from "./LanguageSlice"
import { configureStore } from "@reduxjs/toolkit";


const appStore = configureStore({
    reducer:{
        user : userSlice,
        movies:movieSlice,
        GptSearchToggle:GptSearchReducer,
        Language:LangReducer,
    }
})

export default appStore;