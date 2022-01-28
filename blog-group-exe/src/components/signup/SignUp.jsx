import React, { useState } from 'react';

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input type="text" placeholder='create user name'
        id='userName' value={newStar.userName} onChange={handleInput}/>
        <label>Upload avatar</label>
        <input type="text" placeholder='avatar link'
        id='avatar' value={newStar.avatar} onChange={handleInput}/>
        <label>First Name</label>
        <input type="text" placeholder='first name'
        id='firstName' value={newStar.firstName} onChange={handleInput}/>
        <label>Last Name</label>
        <input type="text" placeholder='last name'
        id='lastName' value={newStar.lastName} onChange={handleInput}/>
        <label>Email</label>
        <input type="text" placeholder='email'
        id='email' value={newStar.email} onChange={handleInput}/>
        <label>Password</label>
        <input type="text" placeholder='create password'
        id='password' value={newStar.password} onChange={handleInput}/>
        <label>Confirm password</label>
        <input type="text" placeholder='confirm password'
        id='confirmPassword' value={newStar.confirmPassword} onChange={handleInput}/>
      </form>
    </div>
    )
}
