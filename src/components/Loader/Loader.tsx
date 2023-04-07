import { ThreeCircles } from 'react-loader-spinner';
import { Container } from '@mui/material';

const Loader = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
      {
        <ThreeCircles
          height="75"
          width="75"
          color="#f06292"
          outerCircleColor="grey"
          middleCircleColor="grey"
          innerCircleColor="grey"
        />
      }
    </Container>
  );
};
export default Loader;
