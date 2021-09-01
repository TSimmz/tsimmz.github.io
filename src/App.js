import './style.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import NavItem from './components/NavItem/NavItem';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar>
          <NavItem title='Home' href='#home'/>
          <NavItem title='Portfolio' href='#portfolio'/>
          <NavItem title='About' href='#about'/>
          <NavItem title='Contact' href='#contact'/>
        </Navbar> 
        <main>
          <section id="home">
            <h1> Tyler Simoni</h1>
            <hr/>
            <p>I'm a frontend developer and designer based in the Tampa Bay.</p>
            <button>Know more</button>
          </section>
        </main>
        <Footer/>
      </>
    );
  }
}

export default App;
