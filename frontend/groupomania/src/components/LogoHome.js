import { NavLink } from "react-router-dom";
import logo from "../images/icon-left-font-monochrome-black.svg";

const Logo = () => {
  return (
    <div className="logo-home">
      <NavLink to="/home">
        <img src={logo} alt="logo"></img>
      </NavLink>
    </div>
  );
};
export default Logo;
