// User is authenticated or not ? we will ask store everytime in this project!

import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from "./authSlice"; 

const store = configureStore({
    reducer : authSliceReducer
});

export default store;