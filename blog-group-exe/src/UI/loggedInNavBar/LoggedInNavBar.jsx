// Laura
import { NavLink, useParams } from "react-router-dom";
import classes from "./LoggedInNavBar.module.css";

const LoggedInNavBar = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };

  const { id } = useParams();

  const trueId = id;

  console.log(trueId);

  return (
    <nav className={classes.navbar}>
      {/* <div> */}
      <div className={classes.title}>
        <NavLink to="/">
          <h1>blogApp</h1>
        </NavLink>
      </div>
      <div className={classes.links}>
        <NavLink to={`/loggedInUser/${trueId}`}>Account</NavLink>
        <NavLink onClick={logout} to="/">
          LogOut
        </NavLink>
      </div>
    </nav>
  );
};

export default LoggedInNavBar;
