import { Routes, Route, Navigate, Router } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/:userId" element={<UserInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
