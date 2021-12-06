/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Validation from "./validation";

const SignupForm = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="containerr">
      <div className="app-wrapper">
        <div>
          <h2 className="title"> Create New Account </h2>{" "}
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label"> Full Name </label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              required
            />
            {errors.fullname && <p className="error"> {errors.fullname}</p>}
          </div>

          <div className="email">
            <label className="label"> Email </label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error"> {errors.email}</p>}
          </div>

          <div className="username">
            <label className="label"> Username </label>
            <input
              className="input"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              required
            />
            {errors.username && <p className="error"> {errors.username}</p>}
          </div>

          <div className="password">
            <label className="label"> Password </label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error"> {errors.password}</p>}
          </div>

          <div className="confirm-password">
            <label className="label"> Confirm Password </label>
            <input
              className="input"
              type="password"
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={handleChange}
              required
            />
            {errors.confirmpassword && (
              <p className="error"> {errors.confirmpassword}</p>
            )}
          </div>

          <div>
            <button className="submit" onClick={handleFormSubmit}>
              {" "}
              Register{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
