import React from 'react';
import { useSelector } from 'react-redux';

const SearchList = () => {
  const { bookList } = useSelector((state) => state.search);
  return (
    <>
      <h1>책을 선택해주세요.</h1>
      <ul>
        {bookList.map((book, i) => (
          <li key={i} style={{ background: '#e5e5e5', border: '2px solid #000' }}>
            <a href={book.link} target="_blank" rel="noreferrer noopener">
              {book.image.length > 0 ? (
                <img src={book.image} alt={book.title} style={{ width: '100px' }} />
              ) : (
                <img src="/" alt="이미지가 없습니다." />
              )}
            </a>
            <div>
              <strong dangerouslySetInnerHTML={{ __html: `${book.title}` }} />
              <p dangerouslySetInnerHTML={{ __html: `${book.description}` }} />
              <p dangerouslySetInnerHTML={{ __html: `${book.author}` }} />
              <p dangerouslySetInnerHTML={{ __html: `${book.publisher}` }} />
              <p>출간일 : {book.pubdate}</p>
            </div>
            <a href={book.link} target="_blank" rel="noreferrer noopener">
              네이버에서 자세히 보기
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchList;
