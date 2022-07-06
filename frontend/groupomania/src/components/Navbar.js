import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    console.log(localStorage.getItem("loggedIn"));
    setLoggedIn(localStorage.getItem("loggedIn"));
    console.log(loggedIn);
  }, [localStorage.getItem("loggedIn")]);

  return (
    <nav className="Navbar">
      <Logo />
      <NavLink to="/">Home</NavLink>
      {loggedIn ? (
        <>
          <NavLink to="/upload">Upload</NavLink>
          <NavLink to="/profile">Profile</NavLink>
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
