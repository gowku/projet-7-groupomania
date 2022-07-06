const UserInfo = (props) => {
  return (
    <div className="div">
      {/* <p>info utilisateur</p> */}
      <img src={props.user.profilPic}></img>
      {/* <p>email</p> */}
      <p>{props.user.firstName}</p>
      <p>{props.user.lastName}</p>
      <p>{props.user.birthDate}</p>
      {/* <p>password</p> */}
    </div>
  );
};

export default UserInfo;
