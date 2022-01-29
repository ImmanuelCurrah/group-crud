import React from "react";
import { useState, useEffect } from "react";
import { loginHandler } from "../../services/apiConfig";
import Layout from "../layout/Layout";

const defaultInput = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function LoginForm(props) {
  const [form, setForm] = useState(defaultInput);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await loginHandler(form);
    };
    fetchData();
  }, []);

  const { userName, firstName, lastName, email, password } = props;

  return (
    <div>
      <Layout />
      <h3>Login</h3>
      <form>
        <label>User Name</label>
        <br />
        <input
          required
          type="text"
          name="username"
          value={userName}
          placeholder="Username"
          onChange={handleChange}
        />
        <br />
        <label>First Name</label>
        <br />
        <input
          required
          type="text"
          name="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          required
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          required
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          required
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default LoginForm;
