import React from 'react';
import loginformcss from "./LoginForm.module.css";
import { useState, useEffect } from "react"
import { loginHandler } from "../../services/apiConfig"
import Layout from '../layout/Layout';

const defaultInput = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

function LoginForm(props) {


  const [form, setForm] = useState(defaultInput)




  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      await loginHandler(form);
    };
    fetchData();
  }, [form]);

  const { userName, firstName, lastName, email, password } = props







  return (
    <div>
      <Layout />
      <div className={loginformcss.back}>
        <div className={loginformcss.form_body}>
          <form className={loginformcss.form}>
            <h3 className={loginformcss.login} >Login</h3>
            {/* <label className={loginformcss.label_container} >User Name</label> */}
            <br />
            <input
              required
              className={loginformcss.input_container}
              type="text"
              name="username"
              value={userName}
              placeholder="Username"
              onChange={handleChange}
            />
            <br />
            {/* <label className={loginformcss.label_container} >First Name</label> */}
            <br />
            <input
              required
              className={loginformcss.input_container}
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First Name"
              onChange={handleChange}
            />
            <br />
            {/* <label className={loginformcss.label_container} >Last Name</label> */}
            <br />
            <input
              required
              className={loginformcss.input_container}
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last Name"
              onChange={handleChange}
            />
            <br />
            {/* <label className={loginformcss.label_container}>Email</label> */}
            <br />
            <input
              required
              className={loginformcss.input_container}
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            <br />
            {/* <label className={loginformcss.label_container} >Password</label> */}
            <br />
            <input
              required
              className={loginformcss.input_container}
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <br />
            <input
              className={loginformcss.btn}
              type="button"
              value="Submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
