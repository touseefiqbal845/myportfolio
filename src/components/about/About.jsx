import React, { useState } from 'react'
import './About.css'
import Me from '../../assets/me3.jpeg'
import AboutCards from './AboutApi'
const About = () => {
const[Aboutcard,setAboutcard]=useState(AboutCards);
  return (
    <div id='about' className='about'>
     {/* <h5>Get to Know</h5>
      <h2>About Me</h2> */}
     {/* <div className='container about_container row'> */}
    {/* <div className='col-lg-3 col-sm-3'> */}
     {/* <div className='about_me'> */}
    {/* <div className='about_me_image'>
    <img src={Me} atl="About Image"/>
    </div>
     </div>
     </div> */}
{/* <div className='col-lg-6'>
<div className='about_content'>

<div className='row'>
{Aboutcard.map((curlElem)=>{
return(
<div className='about_card col-lg-4 col-md-3 col-sm-3'>
<i className='about_icons'>{curlElem.icon}</i>
<h5>{curlElem.h5}</h5>
<small>{curlElem.small}</small>
</div>
);
})}
</div>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
</div>
</div> */}
     {/* </div> */}
    </div>
  )
}

export default About
