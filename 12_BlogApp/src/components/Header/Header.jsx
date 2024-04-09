//Our "Header/Navigation Bar" component will be optional, like we will show log-out screen to those who are logged in.

import { LogoutBtn, Container, Logo } from "../index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.status); // use "state.status" instead of "state.auth.status" 
  // It will check if user is logged in or not i.e ( true or false )

  // Imp note for "navItems"
  // 1) Jab bhi haam asa navigation bar/header bnataay hain tooh actually mai aik "Array" bnaya jata hai aur aus par loop kia jata hai.
  // 2) Iska faida ya hai kaay haam naay naviagtion bar par agar aik aur button show karna hai tooh simply is array kaay andar aik aur object add kar deingy.(Future proof code)
  // 3) Wo navItems jinka active : true hoga wo show kardiaay jaingaay.
  // 4) We used not operator for login and signup objects below b/c ( agar active:true hai, yani user login hai tooh keu hee usaay login aur signup ka button dekhana hai ? )

  const navItems = [
    {
      name: "Home",
      slug: "/", // We can also name it as url ( slug ya bta raha hai kaay url kahan par ja raha hai )
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className=" py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          {/* 1)LOGO */}
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* 2)NAVITEMS */}
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? ( //agar item active hai tooh hee li kaay andar button show hoga.
                <li key={item.name}>
                  <button
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* 3) LOGOUT BUTTON */}
            {/* {authStatus && ()} "Here if authstatus is true then only code inside parenthesis will be displayed" */}
            {authStatus && (
              <li>
                  <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
