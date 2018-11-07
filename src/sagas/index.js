import { all } from 'redux-saga/effects';
import ideas from './ideas';

export default function* rootSaga() {
  yield all([
    ideas(),
  ]);
};
