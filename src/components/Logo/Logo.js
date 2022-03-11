import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <Tilt>
    <div className='Tilt ma2 mt0 br2 shadow-2' style={{ height: '150px', width: '150px'}}>
      <h1 className='pa3'><img style={{paddingTop: '5px'}} src={brain} alt='logo'></img></h1>
    </div>
  </Tilt>
  );
}


export default Logo;
