import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos:[ //array of objects (every todo is an object)
        {
            id:1,
            todos:"todos msg",
            checked:false
        }
    ],
    
    addTodo: (todo)=>{},
    updatedTodo: (todo,id)=>{},
    deleteTodo: (id)=>{},
    ToggleComplete: (id)=>{},

});

export const ToDoContextProvider =ToDoContext.Provider;

export const useToDoContext = ()=>{
    return useContext(ToDoContext);
}