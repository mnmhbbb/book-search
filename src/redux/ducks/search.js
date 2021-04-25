import { createSlice } from '@reduxjs/toolkit';

// 초기 상태값
export const initialState = {
  mainList: [], // 현재 화면에 그려진 영화 목록
  bookList: [], // API 요청을 통해 받아온 책 정보들 (최대 100개)
  searchBookLoading: false, // 책 검색 시도 중
  searchBookDone: false,
  searchBookError: null,
  loadMoreLoading: false, // 10개 더 불러오기 시도
  loadMoreDone: false,
  loadMoreError: null,
};

const reducers = {
  SEARCH_REQUEST: (state) => {
    console.log('~SEARCH_REQUEST 시작~');
    state.searchBookLoading = true;
  },
  SEARCH_SUCCESS: (state, { payload: data }) => {
    console.log('~SEARCH_SUCCESS 시작~');
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
//   (state) => state.searchBookLoading,
//   (state) => state.searchBookDone,
//   (state) => state.searchBookError,
//   (searchBookLoading, searchBookDone, searchBookError) => {
//     return { searchBookLoading, searchBookDone, searchBookError };
//   },
// );

// export const searchSelector = {
//   all: (state) => selectAllState(state[SEARCH]),
// };

// 리듀서이름, 리듀서함수, 액션
export const SEARCH = slice.name;
export const searchReducer = slice.reducer;
export const searchAction = slice.actions;
