import { all, call } from 'redux-saga/effects';
import BankActionWatcher from '../container/bankContainer/saga';


function* adminSaga() {
  yield all([
    call(BankActionWatcher),
  ]);
}

export default adminSaga;
