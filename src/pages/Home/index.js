import React from 'react';
import SearchForm from 'components/SearchForm';
import Layout from 'layouts/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>여기는 홈</h1>
      <SearchForm />
    </Layout>
  );
};

export default Home;
