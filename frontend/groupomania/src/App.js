import { Routes, Route, Navigate, Router } from "react-router-dom";
// import HomePost from "./pages/homePost";
// import HomeUser from "./pages/homeUser";
// import Signup from "./pages/signup";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Upload from "./pages/Upload/Upload";
import Profile from "./pages/Profile/Profile";
// import UserInfo from "./pages/UserInfo";
// import Posts from "./components/Posts";

function App() {
  return (
    // <div>
    //   <Routes>
    //     <Route path="/" element={<Navigate to={"/login"} replace />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/home" element={<Navigate to={"/home/posts"} replace />} />
    //     <Route path="/home/posts" element={<HomePost />} />
    //     <Route path="/home/:userId" element={<HomeUser />} />
    //   </Routes>
    // </div>
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
