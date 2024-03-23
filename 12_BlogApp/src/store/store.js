// User is authenticated or not ? we will ask store evertime in this project!

import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from "./authSlice"; 

export const store = configureStore({
    reducer : authSliceReducer
});
