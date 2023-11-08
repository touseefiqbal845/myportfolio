

import React, { useEffect, useRef } from 'react';
import Me from '../../assets/me3.jpeg';

import './header.css';
import CTA from './CTA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerContainer = headerRef.current;
    const headerText = headerContainer.querySelectorAll('.header_text ');
    let delay = 0;

    headerText.forEach((textElement) => {
      textElement.style.animationDelay = `${delay}s`;
      delay += 0.3;
    });
  }, []);

  return (
    <>
      <header>
     <div ref={headerRef} className="container header_container">
      <h2 className="header_text">Hello I'm</h2>
<h1 className="m-3 text-bold text-base font-xlg header_text text-align-center">Touseef Iqbal</h1>

{/* <h2 className="header_text m-3"></h2> */}
<HeaderSocials />

<br />

<h2 className="header_text m-3 text-center">ReactJs Developer(NextJs)</h2>

<br />

<h2 className="header_text m-3">Web Developer</h2>

             
          <CTA /> 
  
       
          <div className="me">
            <img src={Me} alt="me" />
          </div>
             
       <a href="#contact" className="scroll_down">
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
           
          
        </div>
      </header>
    </>
  );
};

export default Header;
