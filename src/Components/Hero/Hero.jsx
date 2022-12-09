import React from 'react';
import Header from '../Header/Header';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

import '../Hero/Hero.css';

const Hero = () => {

  const transition = {type: 'spring', duration: 3};
  const mobile= window.innerWidth <= 768 ? true : false ;
  return (
    <div className="hero"id="Home">
      <div className="blur blur-h"></div>
      <div className="left-h">

        <Header />

{/* the best ad */}
        <div className='the-best-ad'>
          <motion.div
          initial={{left: mobile ? '178px' : '238px'}}
          whileInView={{left:'9px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
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
          <span>
            <NumberCounter end={140} start={100} delay='4' preFix='+' />
          </span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>
          <NumberCounter end={978} start={800} delay='4' preFix='+' />
          </span>
          <span>Members Joined</span>
        </div>
        <div>
          <span>
          <NumberCounter end={50} start={0} delay='4' preFix='+' />
          </span>
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

        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
         className="heart-rate">
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span> 116 bpm</span>
        </motion.div>

        {/* Hero images */}
        <img src={HeroImage} className="hero-image" alt="hero" />
        <motion.img 
         initial={{right: '11rem'}}
         whileInView={{right: '20rem'}}
         transition={transition}
        src={HeroImageBack} className="hero-image-back"alt="back" />

        {/* calories */}
        <motion.div
         initial={{right: '37rem'}}
         whileInView={{right: '28rem'}}
         transition={transition}
        className="calories">
          <img src={Calories} alt="calories" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero