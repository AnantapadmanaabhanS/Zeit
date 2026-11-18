
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Forgot_password from "./pages/forgot_password.jsx";
import Home from "./pages/home.jsx";
<<<<<<< HEAD
import Cart from "./pages/cart.jsx";
=======
import Payment from "./pages/payment";

>>>>>>> 280891d150fef2004b6ace096c3139019001b1d5
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
=======
         <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
         <Route path="/forgot_password" element={<Forgot_password />} />
         <Route path="/payment" element={<Payment />} />
>>>>>>> 280891d150fef2004b6ace096c3139019001b1d5
      </Routes>
    </BrowserRouter>
  );
}

export default App;
