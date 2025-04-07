import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import commonStyles from 'assets/style/Style';
import { getBankById } from 'module/admin/container/bankContainer/slice';

// Utility function to capitalize only the first letter
const capitalizeFirstLetter = (text) => {
  if (!text) return '-';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const ViewModal = ({ data }) => {
  const theme = useTheme();
  const style = commonStyles(theme);
  const dispatch = useDispatch();

  const bankById = useSelector((state) => state.adminReducer.bank.bankByIdData);

  useEffect(() => {
    if (data?.id) {
      dispatch(getBankById(data?.id));
    }
  }, [dispatch, data]);

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6} xl={6} md={6} sm={12}>
          <Typography sx={style.viewModalLab}>Name</Typography>
          <Typography sx={style.viewModalContent}>{capitalizeFirstLetter(bankById?.name)}</Typography>
        </Grid>
        <Grid item xs={12} lg={6} xl={6} md={6} sm={12}>
          <Typography sx={style.viewModalLab}>Code</Typography>
          <Typography sx={style.viewModalContent}>{bankById?.code || '-'}</Typography>
        </Grid>
        <Grid item xs={12} lg={6} xl={6} md={6} sm={12}>
          <Typography sx={style.viewModalLab}>Description</Typography>
          <Typography sx={style.viewModalContent}>{capitalizeFirstLetter(bankById?.desc)}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewModal;
