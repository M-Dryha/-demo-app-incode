// import { useFormik, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/hook';
// import { getIsLoggedIn, getLoginError } from '../../redux/auth/selectors';
// import { Navigate } from 'react-router-dom';

import {
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  InputAdornment,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AuthOperations } from '../../redux/auth';
import { userSchemaSignIn } from '../../schemas/SignInSchema';
import { WhiteTextField } from './styledComponentSignIn';
import { getIsLoggedInLoading } from '../../redux/auth/selectors';
import s from './SignIn.module.scss';
import { LoginData } from '../.././types/type';
// import { store } from '../../redux/store';
// import { RootState } from '../../redux/store';

const SignIn: React.FC<LoginData> = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoggedInLoading);
  const isErrorLogged = useAppSelector(state => state.auth.isErrorLogin);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(true);
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPasswordLogin = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (values: LoginData) => {
    await dispatch(
      AuthOperations.signIn({
        password: values.password,
        username: values.username,
      })
    );
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
    },
    validationSchema: userSchemaSignIn,
    onSubmit: handleSubmit,
  });

  const isDisabled =
    Boolean(formik.errors.password || formik.errors.username) || isLoading;

  return (
    <Container>
      <Box
        sx={{
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
            sx={{
              color: '#fff',
              mb: '24px',
            }}
            size="small"
          />

          <WhiteTextField
            label="Password"
            variant="standard"
            required={true}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            sx={{
              color: 'primary.light',
              mb: '24px',
              borderBottom: '2px solid #fff',
            }}
            size="small"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: 'primary.light' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPasswordLogin}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={isDisabled}
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
          {isErrorLogged && (
            <Box sx={{ width: '100%' }}>
              <Collapse in={open}>
                <Alert
                  color="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {isErrorLogged}
                </Alert>
              </Collapse>
            </Box>
          )}

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
    </Container>
  );
};

export default SignIn;
//
