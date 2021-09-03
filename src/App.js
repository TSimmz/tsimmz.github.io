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
          <NavItem title='Home' href='#'/>
          <NavItem title='Portfolio' href='#'/>
          <NavItem title='About' href='#'/>
          <NavItem title='Contact' href='#'/>
        </Navbar> 
        <main>
          <section id="home">
            <div style={{height: '50vh'}}>
              <h1 className='hero-text'>Tyler Simoni</h1>
              <div className='hero-accent'></div>
              <h2 className='headline'>I'm a frontend developer and designer based in the Tampa Bay.</h2>
              <h2 className='headline progress'>{'[ Design in progress ]'}</h2>
              <button>
                <a href='https://linkedin.com/in/tylersimoni' target='_blank' rel='noreferrer'>Know more</a>
              </button>
            </div>
          </section>
        </main>
        <Footer/>
      </>
    );
  }
}

export default App;
