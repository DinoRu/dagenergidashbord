import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://api.com/create")
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };
  return (
    <div className="d-flex justify-content-center aligin-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2>Login Page</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="false"
              placeholder="Enter email"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button
            className="btn btn-success w-100 rounded-0"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
