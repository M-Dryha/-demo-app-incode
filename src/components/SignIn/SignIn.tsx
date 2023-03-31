import { useFormik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { string } from 'yup';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hook';
// import { useDispatch, useSelector } from 'react-redux';
import { AuthOperations } from '../../redux/auth';
import UserInfoInput from '../UserInfoInput';
import { userSchemaSignIn } from '../../schemas/SignInSchema';

interface LoginData {
  password: string;
  displayName: string;
}

const SignIn: React.FC<LoginData> = () => {
  const dispatch = useAppDispatch();
  //   const isNotMobile = !useMediaQuery({ maxWidth: 767 });

  //   const isLoading = useSelector(userSelector.getIsLoading);
  // const resetPaste: HTMLButtonElement = event => event.preventDefault();

  // const isDisabled =
  //   Boolean(

  //       formik.errors.password ||
  //       formik.errors.username||
  //       formik.errors.confirmPassword
  //   ) || isLoading;

  // const handleSubmit = (data: UserData) => {
  //   console.log('data', data.password);
  //   dispatch(AuthOperations.register(data));
  // };

  const handleSubmit = (values: LoginData) => {
    console.log('signin', values);
    dispatch(
      AuthOperations.signIn({
        password: values.password,
        displayName: values.displayName,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      displayName: '',
    },
    validationSchema: userSchemaSignIn,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <UserInfoInput
            type="text"
            text="User name"
            placeholder="..."
            required={true}
            name="displayName"
            value={formik.values.displayName}
            onChange={formik.handleChange}
            errorText={formik.errors.displayName}
            showError={formik.touched.displayName}
            onBlur={formik.handleBlur}
          />

          <UserInfoInput
            type="password"
            text="Password"
            placeholder="..."
            required={true}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
            showError={formik.touched.password}
            onBlur={formik.handleBlur}
            maxLength={30}
            // className={
            //   formik.errors.password && formik.touched.password
            //     ? 'input-error'
            //     : ''
            // }
          />
          {formik.errors.password && formik.touched.password && (
            <p className="error">{formik.errors.password}</p>
          )}

          {/* <ErrorMessage
            name="confirmPassword"
            component="<div>ooooooooooooooooooooooo</div>"
          /> */}
        </div>
        {/* <button
          text="Зареєструватися"
          color="accent"
          textSize="big"
          type="submit"
          // disabled={isDisabled}
        /> */}
        <button type="submit">Sign Up</button>
        <Link to="/login">
          I have an account
          {/* <a href="#">Go to Sign In</a> */}
        </Link>
      </form>
    </div>
  );

  // return <div>this is reg</div>;
};

export default SignIn;
