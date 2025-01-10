import { configureStore, Store } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

export const store: Store = configureStore({
    reducer: {
        todo: todoReducer
    }
});