import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchList from 'components/SearchList';
import { searchAction } from 'redux/ducks/search';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { SEARCH_REQUEST, LOADMORE_REQUEST } = searchAction;
  const { bookList, loadMoreLoading } = useSelector((state) => state.search);
  const [keyword, setKeyword] = useState('');
  const count = useRef(1);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 30
      ) {
        if (!loadMoreLoading && bookList.length > 1) {
          count.current += 10;
          dispatch(LOADMORE_REQUEST({ data: keyword, start: count }));
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [keyword, dispatch, loadMoreLoading, LOADMORE_REQUEST, bookList, count]);

  const onChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(keyword);
      dispatch(SEARCH_REQUEST(keyword));
      count.current = 1; // 검색결과의 다음페이지를 불러오는 숫자를 초기화
    },
    [keyword, dispatch, SEARCH_REQUEST, count],
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onChange} placeholder="책 정보를 검색해보세요!" />
        <button>검색</button>
      </form>
      {bookList.length !== 0 && <SearchList />}
    </>
  );
};

export default SearchForm;
