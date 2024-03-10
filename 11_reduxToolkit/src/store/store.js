import {configureStore} from "@reduxjs/toolkit"
import todoReducer from '../features/todo/todoSlice'; //importing todoSlice.reducer 

export const store = configureStore({
    reducer:todoReducer
});