import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import Logo from "./Logo";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);

  let navigate = useNavigate();

  const [isLoggout, setIsLoggout] = useState(false);

  useEffect(() => {
    if (!isLoggout) {
      return;
    }
    localStorage.removeItem("userInfo");
    localStorage.setItem("loggedIn", false);
    navigate("/", { replace: true });
  }, [isLoggout]);

  return (
    <nav className="Navbar">
      <Logo />
      <NavLink to="/">Home</NavLink>
      {loggedIn ? (
        <>
          <NavLink to="/upload">Upload</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <button onClick={() => setIsLoggout(true)}>logout</button>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};
export default Navbar;
