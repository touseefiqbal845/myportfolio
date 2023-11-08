import React, { useState } from 'react'
import './portfolio.css'
import Portfolioitem from './portfolioapi'
const Portfolios = () => {
const[portfoliodata,setportfoliodata]=useState(Portfolioitem);
  return (
    <section  id='portfolio1'>
  <h5>Backend</h5>
<h2>Backend Work .NET C# (Web Form) </h2>
<div className='container portfolio_container'>
{

    portfoliodata.map((item)=>{
        return(
          
<article className='portfolio_item'>
<div className='portfolio_image'>
<img src={item.image}/>
</div>
<h3>{item.title}</h3>
<p>{item.p}</p>
<div className='portfolio_cta'>
<a href={item.github} target="_blank" className='btn btn-primary'>Github</a>
{/* <a href={item.demo} target="_blank" className='btn btn-primary'>Live Demo</a> */}
</div>
</article>
        );
    })
}

</div>
    </section>
  )
}

export default Portfolios
