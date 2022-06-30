import { NavLink } from "react-router-dom";
import Logo from "./LogoHome";

const Nav = () => {
  return (
    <nav>
      <Logo />
      <div className="links">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/home/:userId"}>User</NavLink>
      </div>
    </nav>
  );
};
export default Nav;
