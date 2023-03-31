import "./App.css";
import ProductDisplay from "./components/ProductDisplay";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route,Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Signup from "../src/Forms/Signup";
import Login from "./Forms/Login";
import UserProfile from "./Forms/UserProfile";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./routes/ProtectedRoute";
import ForgotPass from "./Forms/forgotPassword/ForgotPass";

function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<ProtectedRoute/>}>
            <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/product" element={<ProductDisplay />} />
          <Route path="/forgotpassword" element={<ForgotPass/>}/>
          </Route> 

           <Route path="/login" exact element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        
         {/* <ProductDisplay/>  */}

      </BrowserRouter>
    </div>
  );
}

export default App;
