import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Seo } from 'components/common';
import { Header } from 'components/theme';
import { Home, About, Portfolio, Contact } from 'components/landing';
import { Resume } from './components/landing/Resume/Resume.jsx';
import ThemeProvider from 'providers/ThemeProvider';

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
            <Route path='/resume'>
              <Resume timeout={timeout} />
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
