import React from 'react';
import '../../styles/exercises.css';
import lunges from '../../assets/img/lunges.png';
import yoga from '../../assets/img/yoga-pose.png';
import extended from '../../assets/img/extended.png';

const Exercises = () => {
  return <section id="schedule">
    <div className="container exercise__container">
        <div className="exercise__top">
            <h2 className="section_title">Benefits of <span className='highlights'>Exercise</span></h2>
            <p>Fitness is not about being better than someone else.<br/> It's about being better than you used to be.<br/> The greatest wealth is health.</p>
        </div>
        <div className="exercise__wrapper">
          <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>Eat a well-balanced, low-fat diet with lots of fruits, vegetables and whole grains.</p>
            </div>
          </div>


          <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Increased Flexibility</h4>
              <p>Improve your performance in physical activities. Decrease your risk of injuries.</p>
            </div>
          </div>


          <div className="exercise__item" data-aos='zoom-in' data-aos-duration='1500'>
            <span className="exercise__icon">
              <img src={extended} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Reducing Blood Pressure</h4>
              <p>Not only does it control high blood pressure, it also manages your weight, strengthen your heart and lower your stress level.</p>
            </div>
          </div>
        </div>
    </div>

  </section>
}

export default Exercises