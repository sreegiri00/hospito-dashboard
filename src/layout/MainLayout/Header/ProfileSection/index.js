import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Typography
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import User1 from 'assets/images/users/5856.jpg';
import { IconLogout, IconSettings, IconUser } from '@tabler/icons';

const ProfileSection = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const customization = useSelector((state) => state.customization);

  const LoginProfile = useSelector((state) => state.login.user);
  const UserDetailse = useSelector((state) => state.profile?.profile?.profByIdData || '');
  const OrgDetails = useSelector((state) => state.profile.orgprof.orgByIdData || '');

  const getProfilePath = () => {
    if (LoginProfile) {
      const { userType } = LoginProfile;
      if (userType === 'ORG' || userType === 'AGNT') {
        return '/orgprofile';
      } else if (userType === 'INDV') {
        return '/profile';
      }
    }
    return '/profile';
  };

  const profilePath = getProfilePath();

  const handleLogout = async () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN);
    localStorage.removeItem(process.env.REACT_APP_LOGINUSER);
    navigate('/login');
  };

  const anchorRef = useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const getAvatarSrc = () => {
    if (LoginProfile?.userType === 'ORG' || LoginProfile?.userType === 'AGNT') {
      return OrgDetails?.imgUrl || User1;
    } else if (LoginProfile?.userType === 'INDV') {
      return UserDetailse?.imgUrl || User1;
    } else {
      return User1;
    }
  };

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={getAvatarSrc()}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                  <Box
                    sx={{
                      p: 2,
                      width: '250px'
                    }}
                  >
                    <List
                      component="nav"
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: '10px',
                        [theme.breakpoints.down('md')]: {
                          minWidth: '100%'
                        },
                        '& .MuiListItemButton-root': {
                          mt: 0.5
                        }
                      }}
                    >
                      <NavLink to={profilePath} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} onClick={handleClose}>
                          <ListItemIcon>
                            <IconUser stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant="body2">My Profile</Typography>} />
                        </ListItemButton>
                      </NavLink>

                      <ListItemButton sx={{ borderRadius: `${customization.borderRadius}px` }} onClick={handleLogout}>
                        <ListItemIcon>
                          <IconLogout stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                      </ListItemButton>
                    </List>
                  </Box>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
