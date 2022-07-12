import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import Logo from "./Logo";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // console.log(localStorage.getItem("loggedIn"));
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === true) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  }, []);

  let navigate = useNavigate();

  const [isLoggout, setIsLoggout] = useState(false);

  useEffect(() => {
    if (!isLoggout) {
      return;
    }
    localStorage.removeItem("userInfo");
    localStorage.setItem("isLoggedIn", false);
    navigate("/login", { replace: true });
  }, [isLoggout]);

  return (
    <nav className="Navbar">
      <Logo />
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/upload">Upload</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/home" onClick={() => setIsLoggout(true)}>
            Logout
          </NavLink>
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
