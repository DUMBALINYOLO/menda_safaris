import React, { useEffect }  from 'react';
import '../App.css';
import AOS from "aos";
import 'aos/dist/aos.css'
import HeroSlider, {
  Slide,
  OverlayContainer,
} from 'hero-slider'
import styled from "styled-components";
import './HeroSection.css';
import catch1 from './background/catch1.jpg';
import cyv5 from './background/cyv5.jpg';
import cyv4 from './background/cyv4.jpg';
import cyv6 from './background/cyv6.jpg';
import cyv7 from './background/cyv7.jpg';
import cyv8 from './background/cyv8.jpg';
import cyv9 from './background/cyv9.jpg';
import ed9 from './background/ed9.jpg';
import entr1 from './background/entr1.jpg';
import entr11 from './background/entr11.jpg';
import entr12 from './background/entr12.jpg';
import fd10 from './background/fd10.jpg';
import fd6 from './background/fd6.jpg';
import h1 from './background/h1.jpg';
import h2 from './background/h2.jpg';
import h3 from './background/h3.jpg';
import h5 from './background/h5.jpg';
import h6 from './background/h6.jpg';
import h7 from './background/h7.jpg';
import h8 from './background/h8.jpg';
import rec7 from './background/rec7.jpg';
import rec8 from './background/rec8.jpg';
import rec9 from './background/rec9.jpg';
import wash from './background/wash.jpg';
import wash2 from './background/wash2.jpg';
import hr1 from './background/hr1.jpeg';
import hr2 from './background/hr2.jpeg';
import hr5 from './background/hr5.jpeg';
import hr6 from './background/hr6.jpeg';
import hr7 from './background/hr7.jpeg';
import hr8 from './background/hr8.jpeg';
import hr9 from './background/hr9.jpeg';
import hr10 from './background/hr10.jpeg';
import hr11 from './background/hr11.jpeg';
import hr12 from './background/hr12.jpeg';
import hr15 from './background/hr15.jpeg';




function HeroSection() {
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  return (
    <div className='hero-containe' data-aos="flip-up">
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="horizontal"
        initialSlide={1}
        style={{
          color: '#FFF',
        }}
        settings={{
          slidingDuration: 300,
          slidingDelay: 50,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 2000,
          height: '90vmin',
        }}
      >
        <OverlayContainer>
          <Wrapper>
            <h1>
              WELCOME  TO CHRISTIAN YOUTH VOLUNTERS TRUST
              
            </h1>
          </Wrapper>
        </OverlayContainer>
          <Slide
            background={{
              backgroundImage: hr9
            }}
          >
          </Slide>


          <Slide
            background={{
              backgroundImage: catch1
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr1
            }}
          >
          </Slide>




          <Slide
            background={{
              backgroundImage: cyv4
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr2
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr5
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr6
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr7
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: cyv5
            }}
          >

          </Slide>

          <Slide
            background={{
              backgroundImage: cyv6
            }}
          >
          </Slide>
          <Slide
            background={{
              backgroundImage: cyv7
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr8
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr10
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr11
            }}
          >
          </Slide>




          <Slide
            background={{
              backgroundImage: cyv8
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: cyv9
            }}
          >

          </Slide>

          <Slide
            background={{
              backgroundImage: ed9
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr12
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: hr15
            }}
          >
          </Slide>





          <Slide
            background={{
              backgroundImage: entr1
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: entr11
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: entr12
            }}
          >

          </Slide>

          <Slide
            background={{
              backgroundImage: fd10
            }}
          >
          </Slide>


          <Slide
            background={{
              backgroundImage: fd6
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: h1
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: h2
            }}
          >

          </Slide>

          <Slide
            background={{
              backgroundImage: h3
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: h5
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: h6
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: h7
            }}
          >

          </Slide>

          <Slide
            background={{
              backgroundImage: h8
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: rec7
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: rec8
            }}
          >

          </Slide>

          <Slide
            background={{
              backgroundImage: rec9
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: wash
            }}
          >
          </Slide>

          <Slide
            background={{
              backgroundImage: wash2
            }}
          >
          </Slide>

          
      </HeroSlider>
      
    </div>
  );
}

export default HeroSection;


// Libraries



const Wrapper = styled.div`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    H2, H3 {
      margin: 0 36px;
    }
  }
`;

