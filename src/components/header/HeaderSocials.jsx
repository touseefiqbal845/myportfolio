import React from 'react'
import './header.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
const HeaderSocials = () => {
  return (
    <div className='header_social'>
      <a href='https://github.com/touseefiqbal845' target="_blank"><BsGithub/></a>
      <a href='https://www.linkedin.com/in/touseef-iqbal-836400209' target="_blank"><BsLinkedin/></a>
      <a href='https://www.facebook.com/profile.php?id=100059104565070' target="_blank"><BsFacebook/></a>  
        <a href='https://twitter.com/touseef845' target="_blank"><BsTwitter/></a>  
    
    </div>
  )
}

export default HeaderSocials
