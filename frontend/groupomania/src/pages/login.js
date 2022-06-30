import Background from "../components/Background.js";

import Logo from "../components/LogoAcceuil";
import FormLogin from "../components/FormLogin";

const Login = () => {
  return (
    <div>
      <Background />
      <Logo />
      <div className="card">
        <h1>Bienvenue sur Groupomania</h1>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
