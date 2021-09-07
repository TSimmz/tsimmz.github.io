import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Seo } from './components/common';
import { Header } from 'components/theme';
import { Home, Portfolio, About, Contact } from 'components/landing';
import ThemeProvider from 'providers/ThemeProvider';
import Fade from '@material-ui/core/Fade';

const timeout = 1000;

export const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Seo />
        <Router>
          <Header timeout={timeout} />
          <Switch>
            <Route exact path='/'>
              <Home timeout={timeout} />
            </Route>
            <Route path='/about'>
              <About timeout={timeout} />
            </Route>
            <Route path='/portfolio'>
              <Portfolio timeout={timeout} />
            </Route>
            <Route path='/contact'>
              <Contact timeout={timeout} />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};
