import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector(state => state.status); // (it will tell if user is logged in or not)

  useEffect(() => {
    // WAY # 1 (EASY BUT NOT RECOMMENDED)
    if (authStatus === true) {
      navigate("/");
    } else if (authStatus === false) {
      navigate("/login");
    }

    // WAY # 2 (HARD BUT  RECOMMENDED)
    // true && false !==true  (true+true so final result = true)
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    // false  && true !== true  (false+false so final result = true)
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }

    setLoading(false); // it will run regardless of both conditions
  }, [authStatus, navigate, authentication]);

  return loading ? (
    <h1>...loading please wait (msg from AuthLayout.jsx)</h1>
  ) : (
    <>{children}</>
  );
}
