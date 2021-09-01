import '../../style.css';
import React from 'react';

class Navbar extends React.Component {

  render() {
    const { children } = this.props;

    return (
        <nav className='navbar'>
          <div className='logo'>
            <svg src={'../../images/simoni-logo.svg'} alt='simoni logo'/>
          </div>
          <ul className='navbar-list'>
            { children }
          </ul>
        </nav>
    );
  };
}

export default Navbar;