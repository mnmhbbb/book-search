import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { searchBookAPI } from '../../api/search';
import { searchAction } from '../ducks/search';

function* searchBook(action) {
  console.log('searchBook(action): ', action);
  const { SEARCH_SUCCESS, SEARCH_FAILURE } = searchAction;
  try {
    const result = yield call(searchBookAPI, action.payload);
    // yield delay(1000);
    console.log('~api 요청해서 받아온 result:~', result);
    yield put(SEARCH_SUCCESS(result));
  } catch (err) {
    console.dir(err);
    yield put(SEARCH_FAILURE(err));
  }
}

function* watchsearchBook() {
  const { SEARCH_REQUEST } = searchAction;
  yield takeLatest(SEARCH_REQUEST, searchBook);
}

export default function* searchSaga() {
  yield all([fork(watchsearchBook)]);
}
