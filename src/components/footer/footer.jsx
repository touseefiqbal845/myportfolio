import React from 'react'
import "./footer.css"
import '../header/header.css';
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
   <footer >
    <a href='#' className='footer_logo'>Touseef Iqbal</a>

    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#contact'>Contact</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
       <li><a href='#testimonials'>Education</a></li>
    </ul>
   <div className='footer_social'>
    <a href='https://github.com/touseefiqbal845' target="_blank"><BsGithub/></a>
      <a href='https://www.linkedin.com/in/touseef-iqbal-836400209' target="_blank"><BsLinkedin/></a>
      <a href='https://www.facebook.com/profile.php?id=100059104565070' target="_blank"><BsFacebook/></a>  
        <a href='https://twitter.com/touseef845' target="_blank"><BsTwitter/></a>  
     
   </div>
    
   </footer>
  )
}

export default Footer
