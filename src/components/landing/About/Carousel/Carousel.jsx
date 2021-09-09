import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImageWrapper } from './styles';
import nyc from 'assets/images/nyc.jpg';
import hiking from 'assets/images/hiking.jpg';
import drone from 'assets/images/drone.jpg';
import family from 'assets/images/family.jpg';

const Carousel = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 1,
    fade: true,
    speed: 1500,
  };
  return (
    <Slider {...settings}>
      <ImageWrapper>
        <img src={nyc} alt='times square' />
      </ImageWrapper>
      <ImageWrapper>
        <img src={hiking} alt='hiking on a mountain' />
      </ImageWrapper>
      <ImageWrapper>
        <img src={drone} alt='sitting with my drone' />
      </ImageWrapper>
      <ImageWrapper>
        <img src={family} alt='the whole family' />
      </ImageWrapper>
    </Slider>
  );
};

export default Carousel;

// <Image src='assets/images/hiking.jpg' />
// <Image src='assets/images/drone.jpg' />
// <Image src='assets/images/family.jpg' />

// <Slider {...settings}>
// <Image src='../../../../assets/images/nyc.jpg' />
// </Slider>
