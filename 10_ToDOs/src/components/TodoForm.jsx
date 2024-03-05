import { useState } from "react";
import {useToDoContext} from "../contexts/index"


function TodoForm() {
    
    const [todo,SetTodo] = useState("");  //here state is for individual todo
    const {addTodo} = useToDoContext(); //Using addTodo function

   function add(e) {
    e.preventDefault();

    if (!todo) {return}  //if todo has no value then do nothing
    else{
        addTodo({    //Calling addTodo function by passing todo as an object
            id: Date.now(), 
            todoText:todo,
            completed:false
        })}
        //clearing input feild
        SetTodo("");
   }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                value={todo} //wiring this input with above defined state
                onChange={(e)=> SetTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;