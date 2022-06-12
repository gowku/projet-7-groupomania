import Joi from "joi";
import { joiPassword } from "joi-password";

const userValidation = (body) => {
  const userShema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
    password: joiPassword
      .string()
      .min(8)
      .minOfSpecialCharacters(2)
      .minOfLowercase(2)
      .minOfUppercase(2)
      .minOfNumeric(2)
      .noWhiteSpaces(),
    // repeat_password: Joi.ref('password'),
    firstName: Joi.string().min(3).max(30),
    lastName: Joi.string().min(3).max(30),
    birthDate: Joi.string(),
    birthDate: Joi.date(),
  });
  return userShema.validate(body);
};

export default userValidation;
