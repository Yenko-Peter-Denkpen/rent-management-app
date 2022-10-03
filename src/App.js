import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import DashBoard from "./components/DashBoard";
import Home from "./screens/Home";

function App() {
  return (
    <div>
    

      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
     
      </Routes>
    </div>
  );
}

export default App;
