import authService from "../../appwrite/authentication";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService 
      .logout()             //promise will be come here
      .then(() => {
        dispatch(logout());    //we will update store that user is loged out
      })
      .catch((error) => {
        console.log("LogoutBtn.jsx Error :: logout Handler Error :: ", error);
      });
  };

  return (
    <>
      <button
        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logoutHandler}
      >
        logout
      </button>
    </>
  );
}

export default LogoutBtn;
