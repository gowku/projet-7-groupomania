import axios from "axios";

const User = (props) => {
  console.log(props);
  const token = props.token;

  const deleteUserHandler = () => {
    axios
      .delete(`http://localhost:3000/api/admin/user/${props.user.id}`, {
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
    <>
      <div>
        <p>nom:</p>
        <p>{props.user.firstName}</p>
      </div>
      <div>
        <p>prenom:</p>
        <p>{props.user.lastName}</p>
      </div>
      <div>
        <img src={props.user.profilPic}></img>
      </div>
      <button onClick={deleteUserHandler}>supprimer utilisateur</button>
    </>
  );
};
export default User;
