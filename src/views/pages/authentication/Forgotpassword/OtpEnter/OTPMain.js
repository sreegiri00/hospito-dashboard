import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormHelperText, Grid } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { checkOtpRequest, sendUesrId } from 'views/pages/authentication/Forgotpassword/container/slice';
import config from 'config';
import { useEffect } from 'react';
// import { lodinUserIds } from '../container/slice';

const OTPMain = ({ ...others }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendUesrIdData = useSelector((state) => state.otp.sendUesrIdData);
  console.log("2",sendUesrId);
  
  useEffect(() => {
    if (!sendUesrIdData.emailData){
      navigate('/login')
    }
    return () => {
      
    };
  }, []);

  return (
    <Formik
      initialValues={{
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: '',
        otp5: '',
        otp6: ''
      }}
      validationSchema={Yup.object().shape({
        otp1: Yup.string().matches(/^\d+$/, 'Must be a digit').required('Required OTP'),
        otp2: Yup.string().matches(/^\d+$/, 'Must be a digit').required('Required'),
        otp3: Yup.string().matches(/^\d+$/, 'Must be a digit').required('Required'),
        otp4: Yup.string().matches(/^\d+$/, 'Must be a digit').required('Required'),
        otp5: Yup.string().matches(/^\d+$/, 'Must be a digit').required('Required'),
        otp6: Yup.string().matches(/^\d+$/, 'Must be a digit').required('Required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}`;

          setStatus({ success: true });
          setSubmitting(false);

          const response = await fetch(`${config.Ip}/otp`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: sendUesrIdData.emailData,
              otp: otp
            })
          });
          

          const data = await response.json();

          if (!response.ok) {
            setErrors({ submit: data.error || 'Something went wrong' });
            setSubmitting(false);
            return;
          }

          // const data = userData?.user?.mobileNo;
          dispatch(checkOtpRequest({
            otp, values
            // , navigate
          }));
          dispatch(sendUesrId({ ...sendUesrIdData, otp }))
          navigate('/NewPassword');
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
        <form noValidate onSubmit={handleSubmit} {...others}>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Grid item key={index} xs={2}>
                <FormControl fullWidth error={Boolean(touched[`otp${index}`] && errors[`otp${index}`])}>
                  <input
                    type="text"
                    name={`otp${index}`}
                    value={values[`otp${index}`]}
                    onChange={(e) => {
                      setFieldValue(`otp${index}`, e.target.value);
                      if (e.target.value.length === 1 && index < 6) {
                        document.getElementsByName(`otp${index + 1}`)[0].focus();
                      }
                    }}
                    onBlur={handleBlur}
                    maxLength={1}
                    style={{
                      textAlign: 'center',
                      fontSize: 24,
                      borderRadius: 8,
                      padding: '12px 16px',
                      border: '1px solid #ccc',
                      outline: 'none'
                    }}
                  />
                </FormControl>
              </Grid>
            ))}
          </Grid>

          {Object.keys(touched).length > 0 && Object.keys(errors).length > 0 && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>{Object.values(errors)[0]}</FormHelperText>
            </Box>
          )}

          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </AnimateButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default OTPMain;
