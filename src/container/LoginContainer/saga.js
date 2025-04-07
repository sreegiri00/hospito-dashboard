import { takeEvery, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from 'container/auth';
import config from 'config';

import {
  loginSuccess,
  loginFail,
  loginUserSuccess,
  loginUser,
  loginUserFail,

} from './slice';



function* login(action) {
  // console.log('======action======', action.payload);
  console.log("config",config.Ip);
  

  try {
    // const response = yield fetch(`${config.Ip}/login`, {
    const response = yield fetch(`${config.Ip}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(`${action.payload.mobileNo}:${action.payload.password}`)
      },
      body: JSON.stringify({
        number: action.payload.mobileNo,
        password: action.payload.password,
      }),
    });
console.log("gg",response);


    if (!response.ok) {
      yield toast.error('Invalid User', {
        autoClose: 5000
      });
      throw response;
    }


    else {
      const resJSON = yield response.json();
      // console.log('===============resJSON=====================', resJSON);
      yield localStorage.setItem(process.env.REACT_APP_TOKEN, resJSON.token);
      yield put(loginSuccess(resJSON));
      yield put(loginUser(action.payload));
    }
  } catch (error) {
    if (error.status && error.message) {
      yield put(loginFail(error.message));
      yield toast.error(error.message, {
        autoClose: 3000
      });
    }
  }
}


function* loginUserDetail(action) {
  try {
    let params = {
      // api: `${config.Ip}/users/me`,
      api: `${config.Ip}/user/getUserByPhone/${action.payload.mobileNo}`,
      method: 'GET',
      successAction: loginUserSuccess(),
      failAction: loginUserFail('Login failed. Please try again.'),
      authourization: 'token'
    };

    let res = yield call(auth.basicApi, params);
    console.log("==res==", res);
    console.log('======res.role==========-', res.role);

    if (
      res &&
      [
        'admin',
        'vendor',
        'doctor',
        'nurse',
        'patient',
        'pharmacy',

      ].includes(res.role)
    ) {

      let user = {
        user: res
      };
      console.log('======res.role==========', res.role);

      yield localStorage.setItem(process.env.REACT_APP_LOGINUSER, JSON.stringify(user));

      // Navigate to different dashboards based on user roles
      switch (res?.role) {
        case 'admin':

          yield action.payload.navigate('/admin-dashboard');


          break;
        case 'doctor':

          yield action.payload.navigate('/doctor-dashboard');


          break;
        case 'nurse':

          yield action.payload.navigate('/nurse-dashboard');


          break;
        case 'pharmacy':

          yield action.payload.navigate('/pharmacy-dashboard');


          break;
        case 'patient':

          yield action.payload.navigate('/patient-dashboard');


          break;
        case 'vendor':

          yield action.payload.navigate('/dashboard');

      }
      yield put(loginUser({ role: res.role }));

      yield toast.success('Login Successfull', {
        autoClose: 3000
      });
    }
  } catch (error) {
    if (error.status && error.message) {
      yield toast.error(error.message, {
        autoClose: 3000
      });
    }
  }
}



export default function* LoginActionWatcher() {
  yield takeEvery('login/userLogin', login);
  yield takeEvery('login/loginUser', loginUserDetail);

}
