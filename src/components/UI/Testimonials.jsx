import React from 'react';
import '../../styles/testimonials.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";


import { EffectCards } from "swiper";
import avatar01 from '../../assets/img/avatar01.png';
import avatar02 from '../../assets/img/avatar02.png';

export default function Testimonial() {
  return (
    <>
    <section>
        <div className="container sliders">
            <h2 className="section__title">
                Testimonials
            </h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
        <SwiperSlide>
            <div className="slide__item">
                <div className="slide__img-01">
                    <img src={avatar01} alt="" />
                </div>
                <h4>Lana Myers</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit minima, nulla officia corrupti quis at aliquid? Minima, quasi nam. Culpa, voluptatum pariatur earum nulla nesciunt repellat eveniet saepe possimus.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide__img-02">
                    <img src={avatar02} alt="" />
                </div>
                <h4>Silver Green</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit minima, nulla officia corrupti quis at aliquid? Minima, quasi nam. Culpa, voluptatum pariatur earum nulla nesciunt repellat eveniet saepe possimus.</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide__item">
                <div className="slide__img-03">
                    <img src={avatar01} alt="" />
                </div>
                <h4>Juliette Warner</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit minima, nulla officia corrupti quis at aliquid? Minima, quasi nam. Culpa, voluptatum pariatur earum nulla nesciunt repellat eveniet saepe possimus.</p>
            </div>
        </SwiperSlide>

      </Swiper>
      
        </div>
    </section>
    </>

  );
}