import "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="nav-bar">
      <div className="title">
        <NavLink className="title" to="/"><h1>blogApp</h1></NavLink>
      </div>
      <div className="links">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </nav>
  )
};

export default NavBar;