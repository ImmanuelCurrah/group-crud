import Layout from "../../components/layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { findUserById } from "../../services/apiConfig";
import classes from "./LoggedIn.module.css";
import LoggedInNavBar from "../../UI/loggedInNavBar/LoggedInNavBar";
import Footer from "../../UI/footer/Footer";

export default function LoggedIn() {
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  console.log(loggedInUserData);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await findUserById(id);
      console.log(user);
      setLoggedInUserData(user.data.data.user);
    };
    fetchUserData();
  }, []);

  if (!loggedInUserData.posts) {
    return "Searching";
  }

  const createAPostHandler = () => {
    navigate(`/createPost/${id}`);
  };

  return (
    <div className={classes.container}>
      <LoggedInNavBar />
      <div className={classes.container}>
        <div className={classes.loggedIn}>
          <div className={classes.userData}>
            <h1 className={classes.userName}>{loggedInUserData.userName}</h1>
            <h3 className={classes.email}>{loggedInUserData.email}</h3>
            <h3 className={classes.memberSince}>
              {loggedInUserData.member_since}
            </h3>
          </div>
          <button onClick={createAPostHandler}>Create a Post!</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
