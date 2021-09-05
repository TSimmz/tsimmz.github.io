import '../../style.css';
import React from 'react';

class SocialIcon extends React.Component {

  render() {

    return (
        <li className='social-item'>
          <a className='icon-button button-color' href={this.props.href}>
              {this.props.icon}
          </a>
        </li>
    )
  };
}

export default SocialIcon;