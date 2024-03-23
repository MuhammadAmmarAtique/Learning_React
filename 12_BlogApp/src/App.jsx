import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/authentication";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";

function App() {
  // Whenever we are fetching data from anywhere like databases,appwrite it is good to make a loading state, on basis of
  // this state we can do "CONDITIONAL RENDERING".

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("App.jsx Error :: authService.getCurrentUser() :: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // CONDITIONAL RENDERING (using ternary operator)

  return !loading ? (

    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
      </div>
    </div>

  ) : null;
}

export default App;
