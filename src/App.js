import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProductDisplay from "../src/views/productDisplay/ProductDisplay";
import ProductDetail from "./components/productDisplay/ProductDetail";
import Signup from "./views/signup/Signup";
import Login from "./views/login/Login";
import UserProfile from "./components/userProfile/UserProfile";
import ProtectedRoute from "./routes/ProtectedRoute";
import ForgotPass from "./components/forgotPassword/ForgotPass";

function App() {
  return (
    <div className="App">
      <Toaster />
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
    </div>
  );
}

export default App;
