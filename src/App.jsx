
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

<<<<<<< HEAD
import Login from "./pages/login.jsx";
import Profile from "./pages/profile";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot_password.jsx";
import Home from "./pages/home.jsx";
=======
import Register from "./pages/register";
import Login from "./pages/login";
import Profile from "./pages/profile";

>>>>>>> 6334fba3d69e3e1f09b4709758ae448d846e4e5f

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
=======
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/login" element={<Login />} />
>>>>>>> 6334fba3d69e3e1f09b4709758ae448d846e4e5f
      </Routes>

    </BrowserRouter>
  );
}

export default App;
