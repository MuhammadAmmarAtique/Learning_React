// User is authenticated or not ? we will ask store everytime in this project!

import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from "./authSlice"; 

export const store = configureStore({
    reducer : authSliceReducer
    //TODO Make one more slice for post (for that i have to make a new file with an object inside)
});

 