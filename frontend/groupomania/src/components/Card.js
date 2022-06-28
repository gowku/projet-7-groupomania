import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import FormLogin from "./FormLogin";
import FormSignup from "./FormSignup";

const Card = () => {
  // const [myBool, setmyBool] = useState(true);

  // function toggleBool() {
  //   setmyBool(!myBool);
  // }

  return (
    <div className="card">
      <h1>Bienvenue sur Groupomania</h1>
      {/* {myBool ? <FormLogin toggleBool={toggleBool} /> : <FormSignup />} */}
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/signup" element={<FormSignup />} />
      </Routes>
    </div>
  );
};
export default Card;
