import '../../style.css';
import React from 'react';

class NavItem extends React.Component {

  render() {

    return (
        <li className='nav-item'>
          <a className='button-color' href={this.props.href}>
              {this.props.title}
          </a>
        </li>
    )
  };
}

export default NavItem;