import { useEffect, useState } from "react";
import { ToDoContextProvider } from "./contexts/TodoContext";
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos] = useState([]);  //This state is for allTodos which are in from of array of objects
  
  const addTodo = (todo) => {
    setTodos((prevTodos) => (
    [ ...prevTodos,{...todo } ]
    ))
  };

  const updateTodo = (id,todo) => 
  {
    setTodos((prevTodos)=> prevTodos.map((eachTodo) =>(
     eachTodo.id === id ? todo: eachTodo
    )))
  }

  const deleteTodo = (id)=>{
     setTodos((prevTodos)=>(
        prevTodos.filter((eachTodo)=>(
          eachTodo.id !== id
        ))
        ))
  }

  const toggleComplete = (id) =>{
    setTodos((prevTodos)=>
      prevTodos.map((eachTodo)=> eachTodo.id === id ? {...eachTodo, completed: !eachTodo.completed } : eachTodo)
    )
  }
  
  useEffect(()=>{
   const todos = JSON.parse(localStorage.getItem("todos"))
   if (todos && todos.length > 0) //JSON can be array so as we know in our app todos are in form of (array of objects)
   {                     //so we will check if the length of array is greater then 0 only then setTodos will be called.
    setTodos(todos);
  }
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])


  return (
    <ToDoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] h-[100vh] w-[100vw] py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          
          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">

            {todos.map((todo)=>(
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}/> 
                </div> 
            ))}

          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
