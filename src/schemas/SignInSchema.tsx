import * as Yup from 'yup';
import { inputErrors } from '../helpers/errors';
import { NAME_REGEXP, PASSWORD_REGEXP } from '../helpers/regexp';

export const userSchemaSignIn = Yup.object({
  username: Yup.string()
    .matches(NAME_REGEXP, inputErrors.MISTAKE)
    .min(3, 'Не менше 3 символів')
    .max(100, 'Не більше 100 символів')
    .required(inputErrors.REQUIRED),
  password: Yup.string()
    .matches(PASSWORD_REGEXP, inputErrors.MISTAKE)
    .min(8, 'Не менше 8 символів')
    .max(30, 'Не більше 30 символів')
    .required(inputErrors.REQUIRED),
});
