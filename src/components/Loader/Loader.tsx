import { ThreeCircles } from 'react-loader-spinner';
import { Container } from '@mui/material';

const Loader = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      {
        <ThreeCircles
          height="50"
          width="50"
          color="#f06292"
          outerCircleColor="grey"
          middleCircleColor="#f06292"
          innerCircleColor="grey"
        />
      }
    </Container>
  );
};
export default Loader;
