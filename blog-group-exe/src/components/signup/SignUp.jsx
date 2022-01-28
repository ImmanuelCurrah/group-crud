import React, { useEffect, useState } from 'react';
import "./SignUp.module.css";

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await
      /**
       * createUser
       */
      (newUser)
  }

  const handleInput = (e) => {
    const { id, value } = e.target
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value
    }))
  }
  
  useEffect(() => {
    console.log("validator")
    checkIfValid()
  }, [newUser.password, newUser.confirmPassword])

  const checkIfValid = () => {
    if ((newUser.password === "") || (newUser.confirmPassword === "")) {
      setValidationMessage("")
      setValid(false)
    }else if (newUser.password.length < 9) {
      setValidationMessage("Short password! Must be at least 8 characters")
    } else if (newUser.password !== newUser.confirmPassword) {
      setValidationMessage("Passwords must much!")
      setValid(false)
    } else {
      setValidationMessage("Password match!")
      setValid(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <h3>{validationMessage}</h3>
        <label>User name</label><br/>
        <input type="text" placeholder='create user name'
        id='userName' value={newUser.userName} onChange={handleInput}/><br/>
        <label>Upload avatar</label><br/>
        <input type="text" placeholder='avatar link'
        id='avatar' value={newUser.avatar} onChange={handleInput}/><br/>
        <label>First Name</label><br/>
        <input type="text" placeholder='first name'
        id='firstName' value={newUser.firstName} onChange={handleInput}/><br/>
        <label>Last Name</label><br/>
        <input type="text" placeholder='last name'
        id='lastName' value={newUser.lastName} onChange={handleInput}/><br/>
        <label>Email</label><br/>
        <input type="text" placeholder='email'
        id='email' value={newUser.email} onChange={handleInput}/><br/>
        <label>Password</label><br/>
        <input type="text" placeholder='create password'
        id='password' value={newUser.password} onChange={handleInput}/><br/>
        <label>Confirm password</label><br/>
        <input type="text" placeholder='confirm password'
          id='confirmPassword' value={newUser.confirmPassword} onChange={handleInput} /><br/>
        <br />
        <button disabled={!valid}>SIGH UP</button>
      </form>
    </div>
    )
}
