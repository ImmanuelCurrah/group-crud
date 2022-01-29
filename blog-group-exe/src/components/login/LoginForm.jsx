import React from 'react';
import loginformcss from "./LoginForm.module.css";
import { useState } from "react"
import { loginHandler } from "../../services/apiConfig"
import Layout from '../layout/Layout';


const defaultInput = {
  email: "",
  password: "",
  isError: false,
  errorMsg: "",
};

function LoginForm(props) {
  const [form, setForm] = useState(defaultInput);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onLoginIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await loginHandler(form)
      setUser(user)
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      })
    }
  }

  const handelError = () => {
    const toggleForm = form.isError ? "danger" : ""
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button className={loginformcss.btn} type="submit" >Login In</button>
    }
  }




  const { email, password } = props;

  return (

    <Layout >
      <div className={loginformcss.container}>
        <div className={loginformcss.form_body}>
          <form className={loginformcss.form} onSubmit={onLoginIn}>
            <h3 className={loginformcss.login} >Login</h3>
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
            <input
              required
              className={loginformcss.input_container}
              type="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <br />
            {handelError()}
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default LoginForm;
