import React from 'react';
import Layout from '../../layouts/Layout';
import SearchForm from '../../components/SearchForm';

const Home = () => {
  return (
    <Layout>
      <h1>여기는 홈</h1>
      <SearchForm />
    </Layout>
  );
};

export default Home;
