import { Box, Button, FormControl, FormHelperText, OutlinedInput, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useNavigate } from 'react-router-dom';
import config from 'config';
import { useDispatch } from 'react-redux';
import { sendOtpRequest, sendUesrId } from '../container/slice';

const ForgetMain = ({ ...others }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        mobileNo: '',
        emailData: ''
      }}
      validationSchema={Yup.object().shape({
        mobileNo: Yup.string()
          .matches(/^[0-9]+$/, 'Must be a valid mobile number')
          .required('Mobile number is required'),
        emailData: Yup.string()
          .email('Must be a valid email')
          .required('Email is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          setStatus({ success: true });
          setSubmitting(true);

          const response = await fetch(`${config.Ip}/register`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: values.emailData,
              phone: values.mobileNo
            })
          });

          const data = await response.json();

          if (!response.ok) {
            setErrors({ submit: data.error || 'Something went wrong' });
            setSubmitting(false);
            return;
          }

          dispatch(sendOtpRequest(data));
          dispatch(sendUesrId(values))
          navigate('/EnterOTP');
        } catch (err) {
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit} {...others}>
          <FormControl fullWidth error={Boolean(touched.emailData && errors.emailData)} sx={{ mb: 2 }}>
            <Typography variant="body1">Email</Typography>
            <OutlinedInput
              style={{ padding: '4px' }}
              value={values.emailData}
              name="emailData"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {touched.emailData && errors.emailData && <FormHelperText error>{errors.emailData}</FormHelperText>}
          </FormControl>

          <FormControl fullWidth error={Boolean(touched.mobileNo && errors.mobileNo)} sx={{ mb: 2 }}>
            <Typography variant="body1">Mobile</Typography>
            <OutlinedInput
              style={{ padding: '4px' }}
              value={values.mobileNo}
              name="mobileNo"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {touched.mobileNo && errors.mobileNo && <FormHelperText error>{errors.mobileNo}</FormHelperText>}
          </FormControl>

          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}

          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Get OTP
              </Button>
            </AnimateButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default ForgetMain;