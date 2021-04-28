import { searchAction } from 'redux/ducks/search';
import { all, takeLatest, call, put, fork, throttle } from 'redux-saga/effects';
import { searchBookAPI, loadmoreAPI } from 'api/search';

function* searchBook(action) {
  const { SEARCH_SUCCESS, SEARCH_FAILURE } = searchAction;
  try {
    const result = yield call(searchBookAPI, action.payload);
    yield put(SEARCH_SUCCESS(result));
  } catch (err) {
    console.error(err);
    yield put(SEARCH_FAILURE(err));
  }
}

function* loadMore(action) {
  const { LOADMORE_SUCCESS, LOADMORE_FAILURE } = searchAction;
  try {
    const result = yield call(loadmoreAPI, action.payload);
    yield put(LOADMORE_SUCCESS(result));
  } catch (err) {
    console.error(err);
    yield put(LOADMORE_FAILURE(err));
  }
}

function* watchSearchBook() {
  const { SEARCH_REQUEST } = searchAction;
  yield takeLatest(SEARCH_REQUEST, searchBook);
}

function* watchLoadMore() {
  const { LOADMORE_REQUEST } = searchAction;
  yield throttle(5000, LOADMORE_REQUEST, loadMore);
}

export default function* searchSaga() {
  yield all([fork(watchSearchBook), fork(watchLoadMore)]);
}
