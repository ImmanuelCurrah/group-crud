// Laura
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navbar}>
      {/* <div> */}
        <div className={classes.title}>
          <NavLink to="/">
            <h1>blogApp</h1>
          </NavLink>
        </div>
        <div className={classes.links}>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
