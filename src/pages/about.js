import React from 'react';
import { Layout } from '../components/common';
import { About } from '../components/landing';

export const AboutPage = () => {
  return (
    <Layout>
      <About timeout={1000} />
    </Layout>
  );
};
