import PropTypes from 'prop-types'
import React from 'react';
// interface props {
//   contentTitle: string;
//   contentSubtitle:string;
//   contentDesc: string;
//   children?: React.ReactNode;
//   customClassName: string;
// }



class CardMini extends React.Component {
    render() {
      return (<div className="vertical">
           <article className="ripple show-card vertical">
              <a href="/in/tv/dahleez/7645"  target="">
                 <div className="thumbnail-container">
                    <div className="card card-img-container">
                       <img src="https:img1.hotstarext.com/image/upload/f_auto,t_web_vl_2x/sources/r1/cms/prod/old_images/vertical/SHOW/7645/7645/7645-v" className="img-loader lazy-img-loader loaded" loading="lazy" alt=""/>
                    </div>
                 </div>
                 <div className="details">
                    <span className="content-title ellipsise"> {this.props.contentTitle}</span>
                    <div className="sub-info">
                       <span className="subtitle">{this.props.contentSubtitle}</span>
                    </div>
                    <div className="description ellipsize">{this.props.contentDesc}</div>
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
        </div>) ;
    }
  }


export default CardMini

