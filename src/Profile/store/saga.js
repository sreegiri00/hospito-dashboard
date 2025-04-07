import { all, call } from 'redux-saga/effects';

import UserProfActionWatcher from '../container/profileContainer/saga';
import orgProfActionWatcher from '../container/orgprofContainer/saga';
function* profileSaga() {
  yield all([call(orgProfActionWatcher, UserProfActionWatcher)]);
}

export default profileSaga;
