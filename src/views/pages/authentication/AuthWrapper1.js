// material-ui
import { styled } from '@mui/material/styles';
import MainSvg from 'assets/images/auth/wave.svg';
// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  minHeight: '100vh',
  objectFit: 'cover',
  backgroundImage: `url(${MainSvg})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%'
}));

export default AuthWrapper1;
