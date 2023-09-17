import React from 'react'
import CV from '../../assets/CV.pdf';
import res from '../../assets/res.pdf';

const CTA = () => {
  return (
    <div className='cta'>
       <a href={res} download className='btn'>Download Resume</a>
       </div>
       // <a href={CV} download className='btn'>Download CV</a> 
       
        // <a href='#portfolio'  className='btn btn-primary'>React Projects</a>   
   
  )
}

export default CTA
