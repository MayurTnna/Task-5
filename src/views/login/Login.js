import React, { useState } from "react";
import "../../assets/scss/login.scss";
import { useFormik } from "formik"; //for form handling
import { LoginSchema } from "../../validation/Schema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { decryption } from "../../utils/Utils";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "react-bootstrap/esm/Button";
import { userLogFail, userLogSuccess } from "../../constants/Constants";

const Login = () => {
  const [showPassword, setShowPassword] = useState("false");
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("../signup");
  };
  const initialValues = {
    // passing name attribute here for every input field
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,

      onSubmit: (values) => {
        const loggedUserData = JSON.parse(localStorage.getItem("user")); //converting again string to object to access properties;
        loggedUserData.map((item) => {
          if (
            values.email === item.email &&
            decryption(item.password) === values.password
          ) {
            const UpdatedUser = loggedUserData.map((item) => {
              if (item.email === values.email) {
                return {
                  ...item,
                  isLogin: true,
                };
              } else {
                return {
                  ...item,
                  isLogin: false,
                };
              }
            });
            toast.success(userLogSuccess);
            localStorage.setItem("user", JSON.stringify(UpdatedUser));
            navigate("/product");
          } else {
            console.log("add");
            toast.error(userLogFail);
          }
        });
      },
    });

  return (
    <>
      <div className="login_container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Login</h1>
              <p className="modal-desc"></p>
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <div className="float-end">
                    {errors.email && touched.email ? (
                      <p className="form-error float-end">{errors.email}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="input-block">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>

                  <input
                    type={showPassword ? "password" : "text"}
                    autoComplete="off"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Button
                    variant={"ghost"}
                    className=" text-center toggle-password_login  "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                  <div className="float-end">
                    {errors.password && touched.password ? (
                      <p className="form-error float-end">{errors.password}</p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="modal-buttons">
                  <a onClick={handleNavigate}>create new</a>
                  <button className="input-button_login" type="submit">
                    Log in
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-right">
              <img
                src="https://images.unsplash.com/photo-1679615845580-8691c78fd7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

// handleChange and handleBlur are used together to handle form validation and to update the state of the form in real-time as the user interacts with it.
