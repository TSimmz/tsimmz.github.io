import React from 'react';
import { Layout } from '../components/common';
import { Portfolio } from '../components/landing';

export const PortfolioPage = () => {
  return (
    <Layout>
      <Portfolio timeout={1000} />
    </Layout>
  );
};
