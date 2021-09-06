import React from 'react';

export const About = () => {
  return (
    <section id='about'>
      <div style={{ height: '50vh' }}>
        <h1 className='hero-text'>About</h1>
        <div className='hero-accent'></div>
        <h2 className='headline'>
          I'm a frontend developer and designer based in the Tampa Bay area.
        </h2>
        <h2 className='headline progress'>{'[ Design in progress ]'}</h2>
        <button className='know-more'>
          <a
            href='https://linkedin.com/in/tylersimoni'
            target='_blank'
            rel='noreferrer'>
            Know more
          </a>
        </button>
      </div>
    </section>
  );
};
