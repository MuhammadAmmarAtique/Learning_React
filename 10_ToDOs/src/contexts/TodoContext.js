import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos:[ //array of objects (every todo is an object)
        {
            id:1,
            todoText:"todos msg",
            completed:false
        }
    ],
    
    addTodo: (todo)=>{},
    updateTodo: (todo,id)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{},

});

export const ToDoContextProvider =ToDoContext.Provider;

export const useToDoContext = ()=>{
    return useContext(ToDoContext);
}