import { styled } from '@material-ui/styles';
import { TextField } from '@mui/material';

export const WhiteTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiFormHelperText-root ': {
    color: 'red',
  },
  '& .css-nz481w-MuiInputBase-input-MuiInput-input ': {
    color: '#fff',
  },
  '& .MuiInput-underline:after:invalid': {
    borderBottomColor: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiInput-underline::before': {
    borderBottom: '2px solid #fff',
  },
  '& .css-2duac4': {
    color: '#fff',
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
});
