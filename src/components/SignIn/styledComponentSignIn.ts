import { styled } from '@material-ui/styles';
import { TextField } from '@mui/material';

export const WhiteTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiFormHelperText-root ': {
    color: 'red',
  },
  '& .css-nz481w-MuiInputBase-input-MuiInput-input ': {
    color: 'white',
  },
  '& .MuiInput-underline:after:invalid': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInput-underline::before': {
    borderBottom: '2px solid #fff',
  },
});
