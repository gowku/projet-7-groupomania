import { useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";

const FormLogin = (props) => {
  const [userInput, setUserInput] = useState({
    enteredEmail: "",
    enteredPassword: "",
  });
  const submitEmailHandler = (e) => {
    setUserInput({ ...userInput, enteredEmail: e.target.value });
  };
  const submitPasswordHandler = (e) => {
    setUserInput({ ...userInput, enteredPassword: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/auth/login", {
        email: userInput.enteredEmail,
        password: userInput.enteredPassword,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="email">email :</label>
        <input type="email" id="email" onChange={submitEmailHandler} />
      </div>
      <div>
        <label htmlFor="password">mot de passe :</label>
        <input type="text" id="password" onChange={submitPasswordHandler} />
      </div>
      <button type="submit">se connecter</button>
      <p>Si vous n'avez pas encore de compte vous pouvez en creer un </p>
      {/* <button onClick={props.toggleBool} >
        Creer un compte
      </button> */}
      <NavLink to="/signup">S'inscrire </NavLink>
    </form>
  );
};

export default FormLogin;
