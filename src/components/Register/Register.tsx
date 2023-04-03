import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Container } from '@mui/material';
import { useAppDispatch } from '../../helpers/hooks/hook';
import { AuthOperations } from '../../redux/auth';
import { userSchemaRegister } from '../../schemas/RegisterSchema';
import { WhiteTextField } from './styledComponent';
// import { useAppSelector } from '../../helpers/hooks/hook';
import s from './Register.module.scss';

interface UserData {
  password: string;
  username: string;
  displayName: string;
}

const Register: React.FC<UserData> = () => {
  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector(state => state.auth.isLoggedIn);
  // const resetPaste: HTMLButtonElement = event => event.preventDefault();

  const handleSubmit = (values: UserData) => {
    console.log('values', values);
    dispatch(
      AuthOperations.register({
        password: values.password,
        username: values.username,
        displayName: values.displayName,
      })
    );
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
      displayName: '',
      confirmPassword: '',
    },
    validationSchema: userSchemaRegister,
    onSubmit: handleSubmit,
  });
  console.log(formik.values);

  // const isDisabled =
  //   Boolean(
  //     formik.errors.password ||
  //       formik.errors.displayName ||
  //       formik.errors.username ||
  //       formik.errors.confirmPassword
  //   ) || isLoading;

  return (
    <Container>
      <Box
        sx={{
          border: '1px dashed grey',
          width: '425px',
          pt: '48px',
          pl: '48px',
          pr: '48px',
          pb: '140px',
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
            Sign Up
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <WhiteTextField
            type="text"
            label="Full Name"
            variant="standard"
            required={true}
            name="displayName"
            value={formik.values.displayName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.displayName && formik.errors.displayName}
            sx={{
              color: '#fff',
              mb: '24px',
            }}
            size="small"
          />
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

          <WhiteTextField
            type="password"
            variant="standard"
            label="Confirm password"
            required={true}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            onBlur={formik.handleBlur}
            sx={{ color: '#fff', mb: '32px' }}
            size="small"
            //  onPaste={resetPaste}
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
            Sign Up
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
              I have an account
            </Typography>
            <Link to="/login" className={s.link}>
              Go to Sign In
            </Link>
          </Box>
        </form>
      </Box>
      {/* </Box> */}
    </Container>
  );
};

export default Register;
