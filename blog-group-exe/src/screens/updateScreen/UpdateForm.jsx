import React from "react";
import { useState } from "react";
import Footer from "../../UI/footer/Footer";
import LoggedInNavBar from "../../UI/loggedInNavBar/LoggedInNavBar";
import { updateUserHandler } from "../../services/apiConfig";
import classes from "./UpdateForm.module.css";

function UpdateForm() {
  const [updatedUser, setUpdatedUser] = useState({
    userName: "",
  });

  const username = localStorage.getItem("username");
  console.log(username);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdatedUser((prevUserName) => ({
      ...prevUserName,
      [id]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = await updateUserHandler(updatedUser, username);
    console.log(newUser);
  };

  return (
    <>
      <LoggedInNavBar />
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <input
            className="updateUsername"
            placeholder="User Name"
            id="userName"
            value={updatedUser.userName}
            name="UserName"
            required
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default UpdateForm;
