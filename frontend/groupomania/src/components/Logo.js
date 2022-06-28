import { NavLink } from "react-router-dom";
import logo from "../images/icon-left-font-monochrome-white.svg";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src={logo} alt="logo"></img>
      </NavLink>
    </div>
  );
};
export default Logo;
