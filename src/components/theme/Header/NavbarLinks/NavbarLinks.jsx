import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Wrapper } from "./styles";

// import { ReactComponent as GithubIcon } from "../../icons/Github.svg";
// import { ReactComponent as LinkedinIcon } from "../../icons/Linkedin.svg";
// import { ReactComponent as InstagramIcon } from "../../icons/Instagram.svg";
// import { ReactComponent as TwitterIcon } from "../../icons/Twitter.svg";

const NavbarLinks = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <AnchorLink href="">Home</AnchorLink>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#portfolio">Portfolio</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      {/* SOCIAL LINKS HERE */}
    </Wrapper>
  );
};

export default NavbarLinks;
