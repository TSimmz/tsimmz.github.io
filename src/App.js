import './style.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Seo } from './components/common';
import { Header } from 'components/theme';
import { Home, Portfolio, About, Contact } from 'components/landing';

export const App = () => {
  return (
    <Layout>
      <Seo />
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </Layout>
  );
};
