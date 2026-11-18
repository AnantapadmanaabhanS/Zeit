
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Forgot_password from "./pages/forgot_password.jsx";
import Home from "./pages/home.jsx";
import Payment from "./pages/payment";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
         <Route path="/forgot_password" element={<Forgot_password />} />
         <Route path="/payment" element={<Payment />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
