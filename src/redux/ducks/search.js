import { createSlice } from '@reduxjs/toolkit';

// 초기 상태값
export const initialState = {
  bookList: [], // 검색 결과 목록
  searchbookLoading: false, // 책 검색 시도 중
  searchbookDone: false,
  searchbookError: null,
  loadMoreLoading: false, // 추가 요청
  loadMoreDone: false,
  loadMoreError: null,
};

const reducers = {
  SEARCH_REQUEST: (state) => {
    state.searchbookLoading = true;
  },
  SEARCH_SUCCESS: (state, { payload: data }) => {
    state.searchbookLoading = false;
    state.searchbookDone = true;
    state.bookList = data;
  },
  SEARCH_FAILURE: (state, data) => {
    state.searchbookLoading = false;
    state.searchbookError = data.error;
  },
  LOADMORE_REQUEST: (state) => {
    state.loadMoreLoading = true;
  },
  LOADMORE_SUCCESS: (state, { payload: data }) => {
    state.loadMoreLoading = false;
    state.loadMoreDone = true;
    state.bookList = state.bookList.concat(data);
  },
  LOADMORE_FAILURE: (state, { payload: data }) => {
    state.loadMoreLoading = false;
    state.loadMoreError = data;
  },
};

// toolkit
const slice = createSlice({
  name: 'search',
  initialState,
  reducers,
});

// 리듀서이름, 리듀서함수, 액션
export const SEARCH = slice.name;
export const searchReducer = slice.reducer;
export const searchAction = slice.actions;
