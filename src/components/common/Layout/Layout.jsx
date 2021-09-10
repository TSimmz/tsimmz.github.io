import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Global } from './styles';
import './fonts.css';
import { Seo } from '..';
import { Header } from '../../theme';

export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      <Seo />
      <Header />
      {children}
    </>
  );
};
