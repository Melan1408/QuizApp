import { Button, styled } from '@mui/material';

const BasicButton = styled(Button)(() => ({
  p: '7px 15px',
  color: '#696F79',
  background: 'white',
  borderRadius: '12px',
  fontFamily: 'Poppins',
  fontWeight: '600',
  border: '2px solid #696F79',
  ':hover': { color: 'white', background: '#696F79' },
}));

export default BasicButton;
