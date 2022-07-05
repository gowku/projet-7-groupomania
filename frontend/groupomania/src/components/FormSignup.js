import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormInscription = (props) => {
  let navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    enteredEmail: "",
    enteredPassword: "",
    enteredPassword2: "",
    enteredFirstname: "",
    enteredLastname: "",
    enteredBirthdate: "",
  });

  const submitEmailHandler = (e) => {
    setUserInput({ ...userInput, enteredEmail: e.target.value });
  };
  const submitPasswordHandler = (e) => {
    setUserInput({ ...userInput, enteredPassword: e.target.value });
  };
  const submitPassword2Handler = (e) => {
    setUserInput({ ...userInput, enteredPassword2: e.target.value });
  };
  const submitFirstnameHandler = (e) => {
    setUserInput({ ...userInput, enteredFirstname: e.target.value });
  };
  const submitLastnameHandler = (e) => {
    setUserInput({ ...userInput, enteredLastname: e.target.value });
  };
  const submitBirthdateHandler = (e) => {
    setUserInput({ ...userInput, enteredBirthdate: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(userInput);
    axios
      .post("http://localhost:3000/api/auth/signup", {
        email: userInput.enteredEmail,
        password: userInput.enteredPassword,
        password: userInput.enteredPassword2,
        firstName: userInput.enteredFirstname,
        lastName: userInput.enteredLastname,
        birthDate: new Date(userInput.enteredBirthdate),
      })
      .then(function (response) {
        console.log(response);
        navigate("/login", { replace: true });
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
      <div>
        <label htmlFor="password2">mot de passe :</label>
        <input type="text" id="password2" onChange={submitPassword2Handler} />
      </div>
      <div>
        <label htmlFor="firstname">Nom :</label>
        <input type="text" id="firstname" onChange={submitFirstnameHandler} />
      </div>
      <div>
        <label htmlFor="lastname">Prénom :</label>
        <input type="text" id="lastname" onChange={submitLastnameHandler} />
      </div>
      <div>
        <label htmlFor="birthdate">Date de naissance :</label>
        <input type="date" id="birthdate " onChange={submitBirthdateHandler} />
      </div>
      <button type="submit">s'inscrire</button>
    </form>
  );
};

export default FormInscription;
