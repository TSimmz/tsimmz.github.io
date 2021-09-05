import './style.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/common';
import { Header } from 'components/theme';
import { Home, Portfolio, About, Contact } from 'components/landing';

export const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Layout>
    </Router>
  );
};
