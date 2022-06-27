import Button from "./Button";

const FormInscription = () => {
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
      <div>
        <label htmlFor="password">mot de passe :</label>
        <input type="text" id="password"></input>
      </div>
      <div>
        <label htmlFor="firstname">Nom :</label>
        <input type="text" id="firstname"></input>
      </div>
      <div>
        <label htmlFor="lastname">Prénom :</label>
        <input type="text" id="lastname"></input>
      </div>
      <div>
        <label htmlFor="birthdate">Date de naissance :</label>
        <input type="date" id="birthdate "></input>
      </div>
      <button>s'inscrire</button>
    </form>
  );
};

export default FormInscription;
