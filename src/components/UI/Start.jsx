import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
  return <section id="courses">
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                <img src={trainerImg} alt="" data-aos='fade-left' data-aos-duration='1500' />
            </div>
            <div className="start__content" data-aos='fade-right' data-aos-duration='1500'>
                <h2 className="section__title">
                    Ready to make a <span className="highlights">change</span> ?
                </h2>
                <p>
                Whether you’re training for a marathon or your biggest season yet, we’re here to help you make serious progress. Exercise with certified personal trainers whether you’re at home or on the road.
                </p>
                <button className="register__btn">
                    Get Started
                </button>
            </div>
        </div>
    </div>
  </section>
}

export default Start