import { put, call, takeLatest, takeEvery, all } from 'redux-saga/effects';
import { createIdea, updateIdea, getAllIdeas, deleteIdea } from '../api';

function* addIdea() {
  const payload = yield call(createIdea);

  yield put({ type: 'NEW_IDEA_RECEIVED', payload });
}

function* setBody({ payload: { id, body } }) {
  yield call(updateIdea, id, { body });
}

function* setTitle({ payload: { id, title } }) {
  yield call(updateIdea, id, { title });
}

function* initIdeas() {
 const payload = yield call(getAllIdeas);

 yield put({ type: 'IDEAS_RECEIVED', payload });
}

function* removeIdea({ payload: { id }}) {
  yield call(deleteIdea, id);
}

export default function* ideasSaga() {
  yield all([
    initIdeas(),
    takeLatest('ADD_IDEA', addIdea),
    takeEvery('DELETE_IDEA', removeIdea),
    takeEvery('SET_BODY', setBody),
    takeEvery('SET_TITLE', setTitle)
  ]);
};
