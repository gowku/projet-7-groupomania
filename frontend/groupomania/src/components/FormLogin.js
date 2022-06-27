import Button from "./Button";

const FormLogin = () => {
  const clickHandler = () => {
    console.log("je suis la");
  };

  return (
    <form>
      <div>
        <label htmlFor="email">email :</label>
        <input type="email" id="email"></input>
      </div>
      <div>
        <label htmlFor="password">mot de passe :</label>
        <input type="text" id="password"></input>
      </div>
      <button>se connecter</button>
      <p>Si vous n'avez pas encore de compte vous pouvez en creer un </p>
      <button onClick={clickHandler} type="submit">
        Creer un compte
      </button>
    </form>
  );
};

export default FormLogin;
