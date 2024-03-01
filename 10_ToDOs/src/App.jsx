import { useState } from "react";
import "./App.css";
import { ToDoContextProvider } from "./contexts/index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      [...prev, { id: Date.now(), ...todo }];
    });
  };

  const updatedTodo = (todo,id) => 
  {
    setTodos((prev)=> prev.map((eachTodo) =>(
     eachTodo.id === id ? todo: eachTodo
    )))
  }

  const deleteTodo = (id)=>{
     setTodos((prev)=>{
        prev.filter((eachTodo)=>(
          eachTodo.id !== id
        ))
     })
  }

  const ToggleComplete = (id) =>{
    setTodos((prev)=>
      prev.map((eachTodo)=> eachTodo.id === id ? {...eachTodo, checked: !eachTodo.checked } : eachTodo)
    )

  }

  return (
    <ToDoContextProvider value={{ todos, addTodo, updatedTodo, deleteTodo, ToggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
