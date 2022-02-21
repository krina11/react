import React from 'react'
import './Slider1.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'

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
    <div>
        <div class="masthead-card">
            <div class="image-holder">
                <div class="imageloader loaded">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/4296/1000194296/1000194296-h" alt="Baadshaho" class=""/></div>
                    <div class="container2"></div>
                </div>
                <div class="image-gradient"></div>
                <div class="masthead-data">
                    <div class="container2"></div>
                    <div class="masthead-badge">  </div>
                    <div class="slider-caption non-subs-caption">
                        <div class="container2"><div class="content-holder">
                            <div class="title ellipsize">Baadshaho</div>
                            <div class="toptitle">
                                <span class="meta-data">Hindi</span>
                                <span class="meta-data">Drama</span>
                                <span class="meta-data">2017</span>
                            </div>
                            <div class="description"> An Indian queen seeks her bodyguard's help to seize the gold, which the government had raided from her palace during the Emergency in 1975. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
    <div class="masthead-card">
            <div class="image-holder">
                <div class="imageloader loaded">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3594/753594-h" alt="Special Ops" class=""/></div>
                    <div class="container2"></div>
                </div>
                <div class="image-gradient"></div>
                <div class="masthead-data">
                    <div class="container2"></div>
                    <div class="masthead-badge">  </div>
                    <div class="slider-caption non-subs-caption">
                        <div class="container2"><div class="content-holder">
                            <div class="title ellipsize">Special Ops</div>
                            <div class="toptitle">
                                <span class="meta-data">Hotstar Specials</span>
                                <span class="meta-data">Action</span>
                                <span class="meta-data">2020</span>
                            </div>
                            <div class="description">One is a relentless hero, the other is a terror mastermind. In a race against time, Himmat Singh and his team are on a mission to end a nineteen-year long manhunt.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="masthead-card">
            <div class="image-holder">
                <div class="imageloader loaded">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/4296/1000194296/1000194296-h" alt="Baadshaho" class=""/></div>
                    <div class="container2"></div>
                </div>
                <div class="image-gradient"></div>
                <div class="masthead-data">
                    <div class="container2"></div>
                    <div class="masthead-badge">  </div>
                    <div class="slider-caption non-subs-caption">
                        <div class="container2"><div class="content-holder">
                            <div class="title ellipsize">Baadshaho</div>
                            <div class="toptitle">
                                <span class="meta-data">Hindi</span>
                                <span class="meta-data">Drama</span>
                                <span class="meta-data">2017</span>
                            </div>
                            <div class="description"> An Indian queen seeks her bodyguard's help to seize the gold, which the government had raided from her palace during the Emergency in 1975. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
    <div class="masthead-card">
            <div class="image-holder">
                <div class="imageloader loaded">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3594/753594-h" alt="Special Ops" class=""/></div>
                    <div class="container2"></div>
                </div>
                <div class="image-gradient"></div>
                <div class="masthead-data">
                    <div class="container2"></div>
                    <div class="masthead-badge">  </div>
                    <div class="slider-caption non-subs-caption">
                        <div class="container2"><div class="content-holder">
                            <div class="title ellipsize">Special Ops</div>
                            <div class="toptitle">
                                <span class="meta-data">Hotstar Specials</span>
                                <span class="meta-data">Action</span>
                                <span class="meta-data">2020</span>
                            </div>
                            <div class="description">One is a relentless hero, the other is a terror mastermind. In a race against time, Himmat Singh and his team are on a mission to end a nineteen-year long manhunt.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  </Slider>
  )
}

export default Slider1