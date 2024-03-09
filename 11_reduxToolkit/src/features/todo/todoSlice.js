import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id: 1,text: "Hello world",completed: false}]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    

    })