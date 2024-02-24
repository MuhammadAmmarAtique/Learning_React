import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Home, About, Contact, User, Github, GithubInfo  } from './components/index.js';

// Way 1 of creating router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "About-Us",
//         element: <About/>
//       },
//       {
//         path: "Contact-Us",
//         element: <Contact/>
//       }
//     ]
    
//   },
// ]);

// Way 2 of creating router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='About-Us' element={<About/>}/>
        <Route path='Contact-Us' element={<Contact/>}/>
        <Route path='User/:UserData' element={<User/>}/>   {/* Imp(getting gynamic values from url) */}
        <Route 
        loader={GithubInfo}
        path='Github' 
        element={<Github/>}/>                  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
