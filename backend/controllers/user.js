const signup = (req, res, next) => {
  console.log("inscription");
  console.log(req.body);
};

const login = (req, res, next) => {
  console.log("je me connecte");
  console.log(req.body);
};

const remove = (req, res, next) => {
  console.log("je supprime le user");
  console.log(req.body);
};

export { signup, login, remove };
