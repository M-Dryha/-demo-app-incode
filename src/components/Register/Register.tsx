import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  InputAdornment,
  Alert,
  Collapse,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppDispatch } from '../../helpers/hooks/hook';
import { AuthOperations } from '../../redux/auth';
import { userSchemaRegister } from '../../schemas/RegisterSchema';
import { WhiteTextField } from './styledComponent';
import { useAppSelector } from '../../helpers/hooks/hook';
import { getIsLoggedInLoading } from '../../redux/auth/selectors';
import { UserData } from '../.././types/type';
import s from './Register.module.scss';

const Register: React.FC<UserData> = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoggedInLoading);
  const isErrorRegistered = useAppSelector(state => state.auth.isErrorRegister);
  const isRegistered = useAppSelector(state => state.auth.isRegister);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (values: UserData) => {
    dispatch(
      AuthOperations.register({
        password: values.password,
        username: values.username,
        displayName: values.displayName,
      })
    );
    formik.resetForm();
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

  const isDisabled =
    Boolean(
      formik.errors.password ||
        formik.errors.displayName ||
        formik.errors.username ||
        formik.errors.confirmPassword
    ) || isLoading;

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
          bgcolor: 'secondary.dark',
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
            label="Password"
            variant="standard"
            required={true}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            sx={{ color: '#fff', mb: '24px', borderBottom: '2px solid #fff' }}
            size="small"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <WhiteTextField
            label="Confirm password"
            variant="standard"
            required={true}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            onBlur={formik.handleBlur}
            sx={{ color: '#fff', mb: '32px', borderBottom: '2px solid #fff' }}
            size="small"
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: 'white', bgColor: 'transparent' }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
              '&$disabled': {
                bgColor: 'white',
              },
            }}
          >
            Sign Up
          </Button>
          {isErrorRegistered && (
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
                  {isErrorRegistered}
                </Alert>
              </Collapse>
            </Box>
          )}
          {isRegistered && (
            <Box sx={{ width: '100%' }}>
              <Collapse in={open}>
                <Alert
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
                  {' '}
                  <Link to="/login">Go to Sign In</Link>
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
