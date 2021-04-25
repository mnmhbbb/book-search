import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchList from '../SearchList';
import { searchAction } from '../../redux/ducks/search';

const SearchForm = () => {
  const dispatch = useDispatch();
  const { SEARCH_REQUEST } = searchAction;
  const { bookList } = useSelector((state) => state.search);
  const [keyword, setKeyword] = useState('');

  const onChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(keyword);
      dispatch(SEARCH_REQUEST(keyword));
    },
    [keyword, dispatch, SEARCH_REQUEST],
  );
  return (
    <>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onChange} placeholder="찾고 싶은 책 정보를 입력하세요." />
        <button>검색</button>
      </form>
      {bookList.length !== 0 && <SearchList />}
    </>
  );
};

export default SearchForm;
