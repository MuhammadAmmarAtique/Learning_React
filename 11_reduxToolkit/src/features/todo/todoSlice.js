import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }], //by default this todo will appear in our application
};

 const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    //reducer 1
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //jab bhi addtodo() call hoga, tooh jo bhi values as an argument aengee wo 
      };                     //"action.payload" mai store honee hongee. (text aayga yahan)

      state.todos.push(todo); // **IMP NOTE** (contextApi mai haam pahlaay pichil tamam values ko access kartaay hain 
    },                       //phir unhain spread kartaay hain aur new value add kartaay hain, jabkaay yahan par asa
                             //khud ba khud behind the scenen sara kaam ho raha hai 
    //reducer 2
    removeTodo: (state, action) => { //"filter()" jin ki values true hotee hain sirf un ko return karta hai, yahan par
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); }, //tamam todos sirf aik ko chor kar.

                       //jab bhi removeTodo() call hoga, tooh jo bhi values as an argument aengee wo 
                      //"action.payload" mai store honee hongee. (id aay gee yahan)
   

    //reducer 3
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = newText;
      }
      // yahan par aik todo update hojaiy ga, saraay todos mai saay
    },
  },
});

export const { addTodo, removeTodo,updateTodo } = todoSlice.actions;

export default todoSlice.reducer; //This is the reducer function generated by createSlice that contains
//  all the reducers. This reducer function will be used in our store to update the state.
