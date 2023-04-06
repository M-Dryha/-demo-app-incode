import { Typography, Button, Box, Container } from '@mui/material';
import { useAppDispatch } from '../helpers/hooks/hook';
import { AuthOperations } from '../redux/auth';
import Vector from '../pictures/Vector.png';

export const Home: React.FC = () => {
  const styles: any = {
    Container: {
      backgroundImage: `url(${Vector})
    `,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '220px',
      height: '168px',
      position: 'absolute',
      bottom: '2%',
      right: '41%',
    },
  };
  const dispatch = useAppDispatch();

  const onLogOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(AuthOperations.logOut());
    console.log(event);
  };
  return (
    <Container
      sx={{
        width: '100vw',
        height: '100vh',
        pt: '48px',
        pl: '60px',
        bgcolor: 'secondary.dark',
        position: 'relative',
      }}
    >
      <Box sx={{ ml: '60px', mb: '50px' }}>
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
        <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
          Finance
        </Typography>
      </Box>
      <Box sx={{ width: '510px', mx: 'auto' }}>
        <Typography
          variant="h1"
          sx={{
            mt: '0px',
            fontSize: '48px',
            fontWeight: '600',
            color: 'primary.light',
            lineHeight: '1.5',
            textAlign: 'center',
            mb: '38px',
          }}
        >
          Congratulations
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '1.55',
            color: 'primary.light',
            textAlign: 'center',
            mr: '0px',
            mb: '48px',
          }}
        >
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </Typography>

        <Button
          variant="contained"
          onClick={onLogOut}
          type="button"
          sx={{
            bgColor: 'primary.dark',
            height: '44px',
            width: '100px',
            display: 'block',
            alignItems: 'center',
            mx: 'auto',
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '1.55',
          }}
        >
          Log out
        </Button>
      </Box>
      <div style={styles.Container}></div>
    </Container>
  );
};
