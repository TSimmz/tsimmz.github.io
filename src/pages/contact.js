import React from 'react';
import { Layout } from '../components/common';
import { Contact } from '../components/landing';

export const ContactPage = () => {
  return (
    <Layout>
      <Contact timeout={1000} />
    </Layout>
  );
};
