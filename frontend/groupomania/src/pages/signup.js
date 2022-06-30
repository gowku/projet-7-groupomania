import Background from "../components/Background.js";

import Logo from "../components/LogoAcceuil";
import FormSignup from "../components/FormSignup";

const Signup = () => {
  return (
    <div>
      <Background />
      <Logo />
      <div className="card">
        <h1>Bienvenue sur Groupomania</h1>
        <FormSignup />
      </div>
    </div>
  );
};

export default Signup;
