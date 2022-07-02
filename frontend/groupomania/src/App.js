import { Routes, Route, Navigate, Router } from "react-router-dom";
import HomePost from "./pages/homePost";
import HomeUser from "./pages/homeUser";
import Signup from "./pages/signup";
import Login from "./pages/login";
// import UserInfo from "./pages/UserInfo";
// import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Navigate to={"/home/posts"} replace />} />
        <Route path="/home/posts" element={<HomePost />} />
        <Route path="/home/:userId" element={<HomeUser />} />
      </Routes>
    </div>
  );
}

export default App;
