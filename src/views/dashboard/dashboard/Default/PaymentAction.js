import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui

import { Avatar, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard'
// project imports
// import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'container/LoginContainer/slice';
import { useEffect } from 'react';

// assets
// import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
// import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const OrderAction = ({ isLoading }) => {
  const userDataDetailse = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userLogin());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              {/* <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
          
                </Grid>
              </Grid> */}

              <Grid item xs={12}>
                {/* <Grid justifyContent="space-between">

                   <Grid item> <h2>Orders</h2></Grid>
                   <Grid item><h4>View All</h4></Grid>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} /> */}
                <Grid container direction="column">
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <h2>Payments</h2>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          {/* <Link to="/Payments" style={{ textDecoration: 'none' }}>
                            <Typography variant="body2">View All</Typography>
                          </Link> */}
                          {!userDataDetailse?.ftLogin && (
                            <Link to="/Payments" style={{ textDecoration: 'none' }}>
                              <Typography variant="body2">View All</Typography>
                            </Link>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle1" color="inherit">
                        Active
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                            0
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Avatar
                            variant="rounded"
                            sx={{
                              width: 16,
                              height: 16,
                              borderRadius: '5px',
                              backgroundColor: '#b9f6ca',
                              color: '#00c853',
                              marginLeft: 1.875
                            }}
                          >
                            {/* <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" /> */}
                          </Avatar>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* </Grid> */}
                  <Grid item>
                    {/* <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                      10% loss
                    </Typography> */}
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          New
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              0
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#c7e4fd',
                                color: '#1e87e4',
                                ml: 2
                              }}
                            >
                              {/* <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" /> */}
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    {/* <Typography variant="subtitle2" sx={{ color: theme.palette.success.dark }}>
                      10% Profit
                    </Typography> */}
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Pending
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              0
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#dfdfdf',
                                color: '#807f7e',
                                ml: 2
                              }}
                            >
                              {/* <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" /> */}
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    {/* <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                      10% loss
                    </Typography> */}
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Converted
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <Typography variant="subtitle1" color="inherit">
                              0
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 16,
                                height: 16,
                                borderRadius: '5px',
                                backgroundColor: '#fff7bd',
                                color: '#f3c419',
                                ml: 2
                              }}
                            >
                              {/* <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" /> */}
                            </Avatar>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    {/* <Typography variant="subtitle2" sx={{ color: theme.palette.orange.dark }}>
                      10% loss
                    </Typography> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}></CardActions>
        </MainCard>
      )}
    </>
  );
};

OrderAction.propTypes = {
  isLoading: PropTypes.bool
};

export default OrderAction;
