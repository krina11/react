import PropTypes from 'prop-types'
import React from 'react';



class CardMini extends React.Component {
    render() {
      const cardOrient = this.props.className
      return (<div className={this.props.className}>
           <article className={'ripple show-card ' + this.props.className}>
              <a href="/in/tv/dahleez/7645"  target="">
                 <div className="thumbnail-container">
                    <div className="card card-img-container">
                       <img src={this.props.img} className="img-loader lazy-img-loader loaded" loading="lazy" alt=""/>
                    </div>
                 </div>
                 {cardOrient=='horizontal' ? (
                 <div class="meta-desc hide-on-expand">
                    <div class="play-icon"></div>
                    <div class="meta-wrapper">
                       <div class="title ellipsize">
                          <span class="content-title"> {this.props.contentTitle}</span>
                          </div>
                        </div>
                     </div>):('')}

                 {cardOrient=='vertical' ? (
                     
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
                     ):(<div class="details">
                        <div class="content-play">
                           <div class="play-icon pulsateIcon"></div>
                           <span class="content-title"> {this.props.contentTitle}</span>
                           </div>
                           <div class="description ellipsize">{this.props.contentDesc}</div>
                           <div class="action">
                              <div class="add-to-watchlist">
                                 <div class="click-icon" title="Add to Watchlist">
                                    <div class="click-icon-wrapper">
                                       <div class="watchlist-icon"></div>
                                       <p class="icon-title">Add to Watchlist</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                  )}
               </a>
            </article>
         </div>) ;
    }
  }


export default CardMini

