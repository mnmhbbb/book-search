import SearchForm from 'components/SearchForm';
import React, { Suspense } from 'react';
import { BookOutlined } from '@ant-design/icons';
import Layout from 'layout';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Layout>
        <a href="/">
          <h1>
            책 검색 <BookOutlined />
          </h1>
        </a>
      </Layout>
      <SearchForm />
    </Suspense>
  );
}

export default App;
