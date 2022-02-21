import React from "react";
import './Slider2.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
interface Props {
  category: string,
  children?: React.ReactNode;
  onClick: () => void; 
  customClassName: string;
}
//Latest &amp; Trending


var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    // variableWidth: true,
    cssEase: "linear",
    nextArrow: <AiOutlineRight />,
  prevArrow: <AiOutlineLeft />,
  
 
  };

const Slider2: React.FC<Props> = ({ 
    category,
    children,
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
            <div className="vertical">
                <article className="ripple show-card vertical">
                    <a href="/in/tv/dahleez/7645"  target="">
                        <div className="thumbnail-container">
                            <div className="card card-img-container">
                                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2x/sources/r1/cms/prod/old_images/vertical/SHOW/7645/7645/7645-v" className="img-loader lazy-img-loader loaded" loading="lazy" alt=""/>
                                </div>
                            </div>
                            <div className="details">
                                <span className="content-title ellipsise"> Dahleez</span>
                                <div className="sub-info">
                                    <span className="subtitle">Romance, StarPlus</span>
                                </div>
                                <div className="description ellipsize">Budding lawyer Swadheenta and Adarsh's love is caught in a power-struggle, the reins of which are in ...</div>
                                <div className="action">
                                    <div className="add-to-watchlist">
                                        <div className="click-icon" title="Add to Watchlist">
                                            <div className="click-icon-wrapper">
                                                <div className="watchlist-icon"></div>
                                                <p className="icon-title">Add to Watchlist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                </article>
            </div>
            <div className="vertical">
                <article className="ripple show-card vertical">
                    <a href="/in/tv/dahleez/7645"  target="">
                        <div className="thumbnail-container">
                            <div className="card card-img-container">
                                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2x/sources/r1/cms/prod/old_images/vertical/SHOW/7645/7645/7645-v" className="img-loader lazy-img-loader loaded" loading="lazy" alt=""/>
                                </div>
                            </div>
                            <div className="details">
                                <span className="content-title ellipsise"> Dahleez</span>
                                <div className="sub-info">
                                    <span className="subtitle">Romance, StarPlus</span>
                                </div>
                                <div className="description ellipsize">Budding lawyer Swadheenta and Adarsh's love is caught in a power-struggle, the reins of which are in ...</div>
                                <div className="action">
                                    <div className="add-to-watchlist">
                                        <div className="click-icon" title="Add to Watchlist">
                                            <div className="click-icon-wrapper">
                                                <div className="watchlist-icon"></div>
                                                <p className="icon-title">Add to Watchlist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                </article>
            </div>
            <div className="vertical">
                <article className="ripple show-card vertical">
                    <a href="/in/tv/dahleez/7645"  target="">
                        <div className="thumbnail-container">
                            <div className="card card-img-container">
                                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2x/sources/r1/cms/prod/old_images/vertical/SHOW/7645/7645/7645-v" className="img-loader lazy-img-loader loaded" loading="lazy" alt=""/>
                                </div>
                            </div>
                            <div className="details">
                                <span className="content-title ellipsise"> Dahleez</span>
                                <div className="sub-info">
                                    <span className="subtitle">Romance, StarPlus</span>
                                </div>
                                <div className="description ellipsize">Budding lawyer Swadheenta and Adarsh's love is caught in a power-struggle, the reins of which are in ...</div>
                                <div className="action">
                                    <div className="add-to-watchlist">
                                        <div className="click-icon" title="Add to Watchlist">
                                            <div className="click-icon-wrapper">
                                                <div className="watchlist-icon"></div>
                                                <p className="icon-title">Add to Watchlist</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </a>
                </article>
            </div>
            </Slider>
            </div>
            </div>
          </div>
          </div>
    


  );
}

export default Slider2;