// import { useFormik, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../helpers/hooks/hook';
import { Typography, Button, Box, Container } from '@mui/material';
import { AuthOperations } from '../../redux/auth';
import { userSchemaSignIn } from '../../schemas/SignInSchema';
import { WhiteTextField } from './styledComponentSignIn';

import s from './SignIn.module.scss';

interface LoginData {
  password: string;
  username: string;
}

const SignIn: React.FC<LoginData> = () => {
  const dispatch = useAppDispatch();

  //   const isLoading = useSelector(userSelector.getIsLoading);
  // const resetPaste: HTMLButtonElement = event => event.preventDefault();

  // const isDisabled =
  //   Boolean(

  //       formik.errors.password ||
  //       formik.errors.username||
  //   ) || isLoading;

  const handleSubmit = (values: LoginData) => {
    console.log('signin', values);
    dispatch(
      AuthOperations.signIn({
        password: values.password,
        username: values.username,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
    },
    validationSchema: userSchemaSignIn,
    onSubmit: handleSubmit,
  });

  return (
    <Container>
      <Box
        sx={{
          border: '1px dashed grey',
          width: '425px',
          pt: '48px',
          pl: '48px',
          pr: '48px',
          pb: '300px',
          bgcolor: '#1D283A',
          mx: 'auto',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: 'secondary.light',
              fontSize: '36px',
              fontWeight: 'bold',
            }}
          >
            InCode
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'primary.main', mb: '72px' }}
          >
            Finance
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: 'secondary.light',
              fontSize: '56px',
              fontWeight: 'bold',
              mb: '48px',
            }}
          >
            Sign In
          </Typography>
        </Box>

        <form onSubmit={formik.handleSubmit} className={s.form}>
          <WhiteTextField
            type="text"
            label="User Name"
            variant="standard"
            required={true}
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.username && formik.errors.username}
            sx={{ color: '#fff', mb: '24px' }}
            size="small"
          />

          <WhiteTextField
            type="password"
            label="Password"
            variant="standard"
            required={true}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            sx={{ color: '#fff', mb: '24px' }}
            size="small"
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              bgColor: 'primary.dark',
              height: '44px',
              mb: '24px',
              fontWeight: '600',
              fontSize: '16px',
              lineHeight: '1.55',
            }}
          >
            Sign In
          </Button>
          <Box
            sx={{
              display: 'flex',
              fontSize: '12px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: '12px',
                color: 'primary.light',
                lineHeight: '1.55',
                mr: '5px',
              }}
            >
              Don't have account yet?
            </Typography>
            <Link to="/" className={s.link}>
              New Account
            </Link>
          </Box>
        </form>
      </Box>
      {/* </Box> */}
    </Container>
  );
};

export default SignIn;
