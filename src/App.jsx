
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/login.jsx";
import Profile from "./pages/profile";
import Register from "./pages/register";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Login />} />
<Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
