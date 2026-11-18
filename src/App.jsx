
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

<<<<<<< Updated upstream
import Login from "./pages/login.jsx";
import Profile from "./pages/profile.jsx";
=======
import Profile from "./pages/profile";
import NewAccount from "./pages/new_account";
>>>>>>> Stashed changes

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Login />} />
=======
        <Route path="/new-account" element={<NewAccount />} />
>>>>>>> Stashed changes
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
