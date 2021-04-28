import React from 'react';
import { useSelector } from 'react-redux';
import { Style } from './style';

const SearchList = () => {
  const { bookList } = useSelector((state) => state.search);
  return (
    <>
      <Style>
        {bookList.map((book, i) => (
          <li key={i}>
            <a href={book.link} target="_blank" rel="noreferrer noopener">
              <img alt={book.title} src={book.image} />
            </a>
            <h3 dangerouslySetInnerHTML={{ __html: `${book.title}` }} />
            <h4 dangerouslySetInnerHTML={{ __html: `${book.author}` }} />
            <p dangerouslySetInnerHTML={{ __html: `${book.publisher}` }} />
          </li>
        ))}
      </Style>
    </>
  );
};

export default SearchList;
