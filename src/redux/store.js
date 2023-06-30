import { configureStore } from "@reduxjs/toolkit";
import user from "./userAction/userReducer.js"
export const store = configureStore({
    reducer: {
        user
    }
})