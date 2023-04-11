import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "../components/userProfile/UserProfile";
import ProductDisplay from "../views/productDisplay/ProductDisplay";
import ForgotPass from "../components/forgotPassword/ForgotPass";
import Login from "../views/login/Login";
import Signup from "../views/signup/Signup";
import ProductDetail from "../components/productDisplay/ProductDetail";

import React from "react";

const RouterPath = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/product" element={<ProductDisplay />} />
            <Route path="/forgotpassword" element={<ForgotPass />} />
          </Route>

          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};

export default RouterPath;
