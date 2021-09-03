import '../../style.css';
import React from 'react';

import config from '../../content/meta/config';

import { ReactComponent as GithubIcon } from '../../icons/Github.svg';
import { ReactComponent as LinkedinIcon } from '../../icons/Linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../icons/Instagram.svg';
import { ReactComponent as TwitterIcon } from '../../icons/Twitter.svg';
import SocialIcon from '../SocialIcon/SocialIcon';

class Navbar extends React.Component {

  render() {
    const { children } = this.props;
    const { socialLinks } = config;
    

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
              { children }
            </ul>
            <ul className='navbar-list'>
              <SocialIcon href={socialLinks.github} icon={<GithubIcon/>}/>
              <SocialIcon href={socialLinks.linkedIn} icon={<LinkedinIcon/>}/>
              <SocialIcon href={socialLinks.instagram} icon={<InstagramIcon/>}/>
              <SocialIcon href={socialLinks.twitter} icon={<TwitterIcon/>}/>
            </ul>
        </nav>
    );
  };
}

export default Navbar;