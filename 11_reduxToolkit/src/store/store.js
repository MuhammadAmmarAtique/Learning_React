import {configureStore} from "@reduxjs/toolkit"
import todoSliceReducer from '../features/todo/todoSlice'; //importing todoSlice.reducer 

export const store = configureStore({
    reducer:todoSliceReducer
});