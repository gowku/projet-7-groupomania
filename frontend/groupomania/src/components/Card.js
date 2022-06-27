import FormLogin from "./FormLogin";
import FormSignup from "./FormSignup";

const Card = () => {
  return (
    <div className="card">
      <h1>Bienvenue sur Groupomania</h1>
      <FormLogin />
      {/* <FormSignup /> */}
    </div>
  );
};
export default Card;
