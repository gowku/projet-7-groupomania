import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
  <nav>
    <Logo />
    <NavLink to={"/home"}>Home</NavLink>
    <NavLink to={"/user"}>User</NavLink>
    <NavLink to={"/posts"}>Post</NavLink>
  </nav>;
};
export default Nav;
