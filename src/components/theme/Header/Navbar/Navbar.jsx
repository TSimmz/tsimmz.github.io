//import '../../style.css';
import React from "react";
import { Container } from "../../../common";
import { Wrapper } from "./styles";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

const Navbar = () => {
  return (
    <Wrapper as={Container}>
      <NavbarLinks desktop />
    </Wrapper>

    // <nav className='navbar'>
    //     <ul className='navbar-list'>
    //       { children }
    //     </ul>
    //     <ul className='navbar-list'>
    //       <SocialIcon href={socialLinks.github} icon={<GithubIcon/>}/>
    //       <SocialIcon href={socialLinks.linkedIn} icon={<LinkedinIcon/>}/>
    //       <SocialIcon href={socialLinks.instagram} icon={<InstagramIcon/>}/>
    //       <SocialIcon href={socialLinks.twitter} icon={<TwitterIcon/>}/>
    //     </ul>
    // </nav>
  );
};

export default Navbar;
