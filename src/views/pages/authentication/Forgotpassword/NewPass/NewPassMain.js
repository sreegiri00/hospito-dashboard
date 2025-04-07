import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormHelperText, OutlinedInput, Typography ,InputAdornment,IconButton} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import config from 'config';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// import { changePasswordRequest } from 'container/LoginContainer/slice';

const NewPassMain = ({ ...others }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendUesrIdData = useSelector((state) => state.otp.sendUesrIdData);
  const [showPassword,setShowPassword] = useState()
  const [showPassword2,setShowPassword2] = useState()
  
useEffect(() => {
  if(!sendUesrIdData.otp){
    navigate('/login')
  }
  return () => {
    
  };
}, []);

const handleClickShowPassword = () => {
  setShowPassword(!showPassword);
};
const handleClickShowPassword2 = () => {
  setShowPassword2(!showPassword2);
};
const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

  return (
    <Formik
      initialValues={{
        newPassword: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        newPassword: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
          .required('Confirm password is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          
          if(!values.newPassword===values.confirmPassword){
            setErrors({ submit: data.error || 'Something went wrong' });
          
          }
          const pwd = values.confirmPassword
          setStatus({ success: true });
          setSubmitting(false);

          const response = await fetch(`${config.Ip}/setpassword`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: sendUesrIdData.emailData,
              otp: sendUesrIdData.otp,
              password :pwd
            })
          });

          const data = await response.json();

          if (!response.ok) {
            setErrors({ submit: data.error || 'Something went wrong' });
            setSubmitting(false);
            return;
          }


          // dispatch(changePasswordRequest({ newPassword: values.newPassword, userData }));
          navigate('/'); // Navigate to Login3 page  /login
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit} {...others}>
          <FormControl fullWidth sx={{ mb: 2 }} error={Boolean(touched.newPassword && errors.newPassword)}>
            <Typography variant="body1">New Password</Typography>
            <OutlinedInput
              style={{ padding: '4px' }}
              value={values.newPassword}
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              onBlur={handleBlur}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {touched.newPassword && errors.newPassword && <FormHelperText error>{errors.newPassword}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }} error={Boolean(touched.confirmPassword && errors.confirmPassword)}>
            <Typography variant="body1">Confirm Password</Typography>
            <OutlinedInput
              style={{ padding: '4px' }}
              value={values.confirmPassword}
              name="confirmPassword"
              type={showPassword2 ? 'text' : 'password'}
              autoComplete="new-password"
              onBlur={handleBlur}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {touched.confirmPassword && errors.confirmPassword && <FormHelperText error>{errors.confirmPassword}</FormHelperText>}
          </FormControl>

          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}

          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                Confirm
              </Button>
            </AnimateButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default NewPassMain;
