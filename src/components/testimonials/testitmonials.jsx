import React, { useState } from 'react'
import './testimonial.css'
import TestimonialData from './testimonialapi'
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testitmonials = () => {
const[data,setdata]=useState(TestimonialData);
  return (
    <section id='testimonials'>
  
    <h2>EDUCATION </h2>
    <Swiper className='container testimonial_container'
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
    {
        data.map((item)=>{
            return(
                <SwiperSlide className='testimonial' key={item.id}>
              <h5 className='edu'>{item.h2}</h5>
                <h5 className='client-name'>{item.h5}</h5>
                <small className='client-review'>{item.small}</small>
            </SwiperSlide>
            );
        })
    }

    </Swiper>
    </section>
  )
}

export default Testitmonials
