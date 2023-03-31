import * as Yup from 'yup';
import { inputErrors } from '../helpers/errors';
// Деструктуризировать errors
import { NAME_REGEXP, PASSWORD_REGEXP } from '../helpers/regexp';

// interface User {
//   fullName: string;
//   userName: string;
//   email: string;
// }
// type User = Yup.InferType<typeof registerSchema>;

// const user: User = {
//   // using interface instead of type generally gives nicer editor feedback
//   displayName: '',
//   username: '',
//   password: '',
//   confirmPassword: '',
// };

export const userSchemaSignIn = Yup.object({
  displayName: Yup.string()
    .matches(NAME_REGEXP, inputErrors.MISTAKE)
    .min(3, inputErrors.MISTAKE)
    .max(100, inputErrors.MISTAKE)
    .required(inputErrors.REQUIRED),
  password: Yup.string()
    .matches(PASSWORD_REGEXP, inputErrors.MISTAKE)
    .min(8, inputErrors.MISTAKE)
    .max(30, inputErrors.MISTAKE)
    .required(inputErrors.REQUIRED),
});

// const userSchemaRegister = registerSchema.isValidSync(user);
// export default userSchemaRegister;
