import axios from "axios";
import { useEffect, useState } from "react";

const UserInfo = (props) => {
  // console.log(props);
  const token = props.token;

  const [putIsClicked, setPutIsClicked] = useState(false);
  const togglePutIsClicked = () => {
    setPutIsClicked((current) => !current);
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(props.user.isAdmin);
  }, [localStorage.getItem("userInfo")]);

  // const [userInput, setUserInput] = useState({
  //   enteredEmail: "",
  //   enteredPassword: "",
  //   enteredPassword2: "",
  //   enteredFirstname: "",
  //   enteredLastname: "",
  //   enteredBirthdate: "",
  // });
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPassword2, setEnteredPassword2] = useState("");
  const [enteredFirstname, setEnteredFirstname] = useState("");
  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredBirthdate, setEnteredBirthdate] = useState("");
  const [enteredProfilPic, setEnteredProfilPic] = useState("");

  const submitEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const submitPasswordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const submitPassword2Handler = (e) => {
    setEnteredPassword2(e.target.value);
  };
  const submitFirstnameHandler = (e) => {
    setEnteredFirstname(e.target.value);
  };
  const submitLastnameHandler = (e) => {
    setEnteredLastname(e.target.value);
  };
  const submitBirthdateHandler = (e) => {
    setEnteredBirthdate(e.target.value);
  };
  const submitProfilPicHandler = (e) => {
    setEnteredProfilPic(e.target.files[0]);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(userInput);
    let formData = new FormData();

    formData.append("email", enteredEmail);
    formData.append("password", enteredPassword);
    formData.append("password2", enteredPassword2);
    formData.append("firstName", enteredFirstname);
    formData.append("lastName", enteredLastname);
    formData.append("birthDate", enteredBirthdate);
    formData.append("file", enteredProfilPic);
    axios({
      method: "put",
      url: `http://localhost:3000/api/auth/${props.user.id}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token} `,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const DeleteUserHandler = () => {
    axios
      .delete(`http://localhost:3000/api/auth/${props.user.id}`, {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="div">
      <p>info personnel</p>
      {putIsClicked ? (
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="image">image</label>
            <input type="file" id="imageUrl" name="imageUrl" onChange={submitProfilPicHandler} />
          </div>
          <div>
            <label htmlFor="email">email :</label>
            <input type="email" id="email" placeholder={props.user.email} onChange={submitEmailHandler} />
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
            <input type="text" id="firstname" placeholder={props.user.firstName} onChange={submitFirstnameHandler} />
          </div>
          <div>
            <label htmlFor="lastname">Prénom :</label>
            <input type="text" id="lastname" placeholder={props.user.lastName} onChange={submitLastnameHandler} />
          </div>
          <div>
            <label htmlFor="birthdate">Date de naissance :</label>
            <input type="date" id="birthdate" onChange={submitBirthdateHandler} />
          </div>
          <button type="submit">envoyer</button>
        </form>
      ) : (
        <>
          <img src={props.user.profilPic}></img>
          <p>{props.user.email}</p>
          <p>{props.user.firstName}</p>
          <p>{props.user.lastName}</p>
          <p>{props.user.birthDate}</p>
        </>
      )}

      <button onClick={togglePutIsClicked}>modifier info utilisateur</button>
      <button onClick={DeleteUserHandler}>supprimer utilisateur</button>
      {/* {isAdmin ? }  */}
    </div>
  );
};

export default UserInfo;
