import { searchAction } from 'redux/ducks/search';
import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { searchBookAPI } from 'api/search';

function* searchBook(action) {
  const { SEARCH_SUCCESS, SEARCH_FAILURE } = searchAction;
  try {
    const result = yield call(searchBookAPI, action.payload);
    yield put(SEARCH_SUCCESS(result));
  } catch (err) {
    console.dir(err);
    yield put(SEARCH_FAILURE(err));
  }
}

function* watchSearchBook() {
  const { SEARCH_REQUEST } = searchAction;
  yield takeLatest(SEARCH_REQUEST, searchBook);
}

export default function* searchSaga() {
  yield all([fork(watchSearchBook)]);
}
