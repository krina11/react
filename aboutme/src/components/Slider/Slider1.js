import React from 'react'
import './Slider1.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
const data = require('.././../data/dummy_data.json');
console.log(data);
function Slider1() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        // variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <AiOutlineRight />,
      prevArrow: <AiOutlineLeft />,
      centerMode: true,
      };

   
  return (
    <Slider {...settings}>
    
       {data.mainSlider.map(mainSlide=>{
       return(
        <div>
        <div className="masthead-card">
            <div className="image-holder">
                <div className="imageloader loaded">
                    <img src={mainSlide.img} alt={mainSlide.title} className=""/></div>
                    <div className="container2"></div>
                </div>
                <div className="image-gradient"></div>
                <div className="masthead-data">
                    <div className="container2"></div>
                    <div className="masthead-badge">  </div>
                    <div className="slider-caption non-subs-caption">
                        <div className="container2"><div className="content-holder">
                            <div className="title ellipsize">{mainSlide.title}</div>
                            <div className="toptitle">
                            {mainSlide['meta-data'].map(meta=>{
                              return(  <span className="meta-data">{meta}</span>)
                            })}
        
                            </div>
                            <div className="description"> {mainSlide.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       )
   }) } 
    
  </Slider>
  )
}

export default Slider1