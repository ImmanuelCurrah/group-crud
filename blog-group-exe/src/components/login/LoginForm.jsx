import loginformcss from "./LoginForm.module.css";
import { useState } from "react";
import { loginHandler } from "../../services/apiConfig";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

const defaultInput = {
  email: "",
  password: "",
  isError: false,
  errorMsg: "",
};

function LoginForm() {
  const [form, setForm] = useState(defaultInput);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const user = await loginHandler(form);
      console.log(user.data);
      navigate(`/loggedInUser/${user.data.data._id}`);
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const handelError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return (
        <button className={loginformcss.btn} type="submit">
          Login In
        </button>
      );
    }
  };

  return (
    <Layout>
      <div className={loginformcss.container}>
        <div className={loginformcss.form_body}>
          <form className={loginformcss.form} onSubmit={submitHandler}>
            <h3 className={loginformcss.login}>Login</h3>
            <br />
            <input
              required
              className={loginformcss.input_container}
              type="text"
              id="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <br />
            <input
              required
              className={loginformcss.input_container}
              type="password"
              id="password"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <br />
            {handelError()}
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default LoginForm;
