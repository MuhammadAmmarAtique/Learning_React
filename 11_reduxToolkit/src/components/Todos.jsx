import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

 // State to store edited text for each todo item
 const [editedText, setEditedText] = useState({});

   // Function to handle editing of a todo item
  const handleEdit = (id) => {
    // console.log(editedText, editedText[id]); ([id] is dynamically assigned property to (object) i.e editedText state)
    dispatch(updateTodo({ id, newText: editedText[id] }));
    setEditedText({ ...editedText, [id]: "" }); // Clear the edited text for the specific todo item
  };

   // Function to handle change in the input field for a todo item
   const handleChange = (id, newText) => {
    setEditedText({ ...editedText, [id]: newText });
  };

  return (
    <>
      <div className="text-3xl  mt-2 ">Your Todos:</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex  justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Flex item 1 */}
            <div className="text-white">{todo.text}</div>

            {/* Flex item 2 */}

              <div className="flex-1 flex flex-wrap justify-end space-x-4">
              <input
                type="text"
                value={editedText[todo.id] || ""}
                onChange={(e) => handleChange(todo.id, e.target.value)}
                className="border-b border-gray-400 focus:outline-none p-1"
                />
                {/* Edit button */}
              <button
                onClick={() => handleEdit(todo.id)}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                Edit
              </button>
              
              {/* Delete button */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>

            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
