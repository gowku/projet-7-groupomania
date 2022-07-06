import { Routes, Route, Navigate, Router } from "react-router-dom";

import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
