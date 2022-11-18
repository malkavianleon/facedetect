import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
      <div className="ma4 mt0">
          <Tilt style={{background: 'linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)', height: '150px', width: '150px' }} className="br2 shadow-2 ">
              <div className="pa3 ">
                  <img style={{paddingTop: '5px'}} alt="logo" src={brain}></img>
              </div>
          </Tilt>
      </div>
  )
}

export default Logo;