import { configureStore } from "@reduxjs/toolkit";
import todoReduer from "./todoSlice"

export default configureStore({
    reducer: {
        todos: todoReduer,
    },
});