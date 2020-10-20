import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

import './Team.css';
import Board from './Board';
import Team from './Team';




function Slider() {
  
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  return (
    <div className='zards'>
      <div className='car' data-aos="flip-up">
        <h1 style={{paddingBottom: '10px'}}>MEET OUR AMAZING TEAM </h1>
          <div className='zards__container'>
            <div className='zards__wrapper'>
              <ul className='zards__items' >
                < Team />
                < Board />
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Slider;