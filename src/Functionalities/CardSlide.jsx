import React from "react";
import Slider from "react-slick";
import './CardSlide.css';
import CardsHover from "./CardInSlide.jsx"; // Ensure this is the correct import
import houseOne from '../images/mh-1.jpg';

function UnevenSetsFinite() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Array.from({ length: 1 }).map((_, index) => (
          <div className="slide" key={index}>
            <CardsHover 
              title={`4bhk ${index + 1}`} 
              text={`tamilnadu,coimbatore ${index + 1}`} 
              imgSrc={houseOne} 
            />
          </div>
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <div className="slide" key={index}>
            <CardsHover 
              title={`3bhk ${index + 1}`} 
              text={`bengalore ${index + 1}`} 
              imgSrc={houseOne} 
            />
          </div>
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <div className="slide" key={index}>
            <CardsHover 
              title={`5bhk ${index + 1}`} 
              text={`tamilnadu,coimbatore ${index + 1}`} 
              imgSrc={houseOne} 
            />
          </div>
        ))}
        {Array.from({ length: 1 }).map((_, index) => (
          <div className="slide" key={index}>
            <CardsHover 
              title={`2bhk ${index + 1}`} 
              text={`tamilnadu,chennai ${index + 1}`} 
              imgSrc={houseOne} 
            />
          </div>
        ))}
        
      </Slider>
    </div>
  );
}

export default UnevenSetsFinite;