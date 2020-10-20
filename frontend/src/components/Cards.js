import React, { useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import AOS from "aos";
import 'aos/dist/aos.css';
import entry4 from './background/entry4.jpg';
import advo8 from './background/advo8.jpg';
import advo7 from './background/advo7.jpg';
import wash2 from './background/wash2.jpg';
import fd11 from './background/fd11.jpg';
import catch2 from './background/catch2.jpg';


function Cards() {

  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);
  

  return (
    <div className='cards' data-aos="flip-left">
      <div className = 'card'>
        <h1>CYVAT INTERVENTION AREAS</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items' >
              <CardItem
                src={catch2}
                text='WE DEVELOP AND IMPROVE INFRASTRUCTURE AS MEANS TO IMPROVE EDUCATION QUALITY IN UNDERDEVELOPED SCHOOLS'
                label='INFRASTRUCTURE DEVELOPMENT'
                data-aos="fade-right"
              />
              <CardItem
                src={fd11}
                text='WE HELP FEED SCHOOL CHILDREN IN SCHOOLS AND HUNGER STRICKEN COMMUNITIES'
                label='NUTRITION'
                data-aos="fade-left"
              />
              <CardItem
                src={wash2}
                text='WE INTERVENE IN PROVIDING WATER AND SANITATION TO COMMUNITIES'
                label='WASH'
                data-aos="fade-left"
              />
            </ul>
            
            <ul className='cards__items'>
              <CardItem
                src={advo8}
                text='WE CONSCIENTIZE COMMUNITIES ON THEIR HUMAN RIGHTS AND HELP THEM ADVOCATE FOR THEIR RIGHTS'
                label='ADVOCACY'
                data-aos="fade-up"
              />
              <CardItem
                src={entry4}
                text='WE INSTILL AN ENTREPRENEURIAL MINDSET IN COMMUNITIES AND ASSIST THE ENTREPRENEURS ACCESS THE MARKET'
                label='ENTREPRENEURSHIP'
                data-aos="fade-left"

              />
              <CardItem
                src={advo7}
                text='WE EMPOWER YOUNG PEOPLE THROUGH ADVOCACY AND SUSTAINABLE LIVELIHOODS'
                label='YOUTH EMPOWERMENT'
                data-aos="fade-right"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;






