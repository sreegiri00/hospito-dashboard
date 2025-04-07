import PropTypes from 'prop-types';

// material-ui
import { Box } from '@mui/material';

// project import
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthCardWrapper = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: { xs: 390, lg: 395 },
      margin: { xs: 2.5, m: 3 },
      display: 'flex',
      alignItem: 'center',
      justifyItems: 'center',
      // height: '90%',
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    }}
    content={false}
    {...other}
  >
    <Box sx={{ p: { xs: 2, sm: 3, xl: 5 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{children}</Box>
  </MainCard>
);

AuthCardWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthCardWrapper;
