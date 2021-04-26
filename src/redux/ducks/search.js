import { createSlice } from '@reduxjs/toolkit';

// 초기 상태값
export const initialState = {
  bookList: [], // API 요청을 통해 받아온 책 정보들 (최대 50개)
  searchBookLoading: false, // 책 검색 시도 중
  searchBookDone: false,
  searchBookError: null,
};

const reducers = {
  SEARCH_REQUEST: (state) => {
    state.searchBookLoading = true;
  },
  SEARCH_SUCCESS: (state, { payload: data }) => {
    state.searchBookLoading = false;
    state.searchBookDone = true;
    state.bookList = data;
    console.log('~bookList는~', state.bookList);
  },
  SEARCH_FAILURE: (state, data) => {
    state.searchBookError = data.error;
  },
};

// toolkit
const slice = createSlice({
  name: 'search',
  initialState,
  reducers,
});

// 추가 공부 필요
// const selectAllState = createSelector(
//   (state) => state.bookList,
//   (bookList) => {
//     return { bookList };
//   },
// );

// export const searchSelector = {
//   all: (state) => selectAllState(state[SEARCH]),
// };

// 리듀서이름, 리듀서함수, 액션
export const SEARCH = slice.name;
export const searchReducer = slice.reducer;
export const searchAction = slice.actions;
