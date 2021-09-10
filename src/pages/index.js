import React from 'react';
import { Layout } from '../components/common';
import { Home } from '../components/landing';

export const HomePage = () => {
  return (
    <Layout>
      <Home timeout={1000} />
    </Layout>
  );
};
