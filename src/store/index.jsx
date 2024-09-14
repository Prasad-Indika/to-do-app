import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import todoSlice from "./slice/todoSlice";

export default configureStore({
    reducer: {
        userSlice,
        todoSlice
    },
})