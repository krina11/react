import React from "react";
import './Slider2.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import CardMini from "../CardMini/CardMini";

interface OtherSlider {
  img:string,
  contentTitle:string,
  contentSubtitle:string,
  contentDesc:string,
  cardDirection:string
}
interface Props {
  category: string,
  children?: React.ReactNode;
  data:Array<OtherSlider>;
  onClick: () => void; 
  customClassName: string;
}
//Latest &amp; Trending


var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: "linear",
    nextArrow: <AiOutlineRight />,
    prevArrow: <AiOutlineLeft />, 
  };

const Slider2: React.FC<Props> = ({ 
    category,
    children,
    data,
    onClick, 
    customClassName
    
  }) => { 
  return (
      <div id="slideSec">
          <div className="tray-container">
          <div className="tray-wrapper">
          <div className="tray-carousel">
          <div className="container3">
          <h2 className="tray-title">
                {category}
            </h2>
            </div>
            <Slider  {...settings}>
              {data.map(item=>{
                return(<CardMini className={item.cardDirection} img={item.img} contentTitle={item.contentTitle} contentSubtitle={item.contentSubtitle}  contentDesc={item.contentDesc} ></CardMini>)
              })}
            </Slider>
            </div>
            </div>
          </div>
          </div>
    


  );
}

export default Slider2;