import React from 'react';
import Header from '../Header/Header';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';


import '../Hero/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">

        <Header />

{/* the best ad */}
        <div className='the-best-ad'>
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
{/* Hero heading */}

      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span> In here we will help you to build your ideal body and live up your life to the fullest</span>
          </div>
      </div>

      {/* figures */}
      <div className="figures">
        <div>
          <span>+140</span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>+978</span>
          <span>Members Joined</span>
        </div>
        <div>
          <span>+50</span>
          <span>Fitness Program</span>
        </div>
      </div>

      {/* Hero Buttons */}
      <div className="hero-buttons">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
      </div>
      </div>


      <div className="right-h">
        <button className='btn'>Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span> 116 bpm</span>
        </div>

        {/* Hero images */}
        <img src={HeroImage} className="hero-image" alt="hero" />
        <img src={HeroImageBack} className="hero-image-back"alt="back" />

        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="calories" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero