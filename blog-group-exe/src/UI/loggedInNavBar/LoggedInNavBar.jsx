// Laura
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { currentUserHandler } from "../../services/apiConfig";
import classes from "./LoggedInNavBar.module.css";

const LoggedInNavBar = () => {
  const [userId, setUserId] = useState("");
  console.log(userId);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("username");

  useEffect(() => {
    const fetchUser = async () => {
      const user = await currentUserHandler(token, userName);
      setUserId(user.data.data._id);
    };
    fetchUser();
  }, []);

  return (
    <nav className={classes.navbar}>
      {/* <div> */}
      <div className={classes.title}>
        <NavLink to="/">
          <h1>blogApp</h1>
        </NavLink>
      </div>
      <div className={classes.links}>
        <NavLink to={`/loggedInUser/${userId}`}>Account</NavLink>
        <NavLink onClick={logout} to="/">
          LogOut
        </NavLink>
      </div>
    </nav>
  );
};

export default LoggedInNavBar;
