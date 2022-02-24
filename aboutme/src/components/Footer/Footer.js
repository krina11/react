import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left col-xs-12 col-sm-12 col-sm-7">
          <ul>
            <li>
              <a href="/in/about-us" target="_blank" rel="noopener noreferrer" className="link">About Disney+ Hotstar</a>
            </li>
            <li>
              <a href="/in/terms-of-use" target="_blank" rel="noopener noreferrer" className="link">Terms of Use</a>
            </li>
            <li>
              <a href="/in/privacy-policy" target="_blank" rel="noopener noreferrer" className="link">Privacy Policy</a>
            </li>
            <li>
              <a href="https://help.hotstar.com/support/home" target="_blank" rel="noopener noreferrer" className="link">FAQ</a>
            </li>
            <li>
              <a href="https://help.hotstar.com/support/tickets/new" target="_blank" rel="noopener noreferrer" className="link">Feedback</a>
            </li>
            <li>
              <a href="https://jobs.lever.co/hotstar" target="_blank" rel="noopener noreferrer" className="link">Careers</a>
            </li>
          </ul>
          <p className="copyright">© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
        </div>
       
        <div className="footer-right col-xs-12 col-sm-12 col-sm-5">
        <div className="social-unit col-xs-4">
          <div>
            <p>Connect with us</p>
            <a className="fb" href="https://www.facebook.com/DisneyPlusHotstar" target="_blank" rel="noopener noreferrer">&nbsp;</a>
            <a className="tw" href="https://twitter.com/DisneyPlusHS" target="_blank" rel="noopener noreferrer">&nbsp;</a>
          </div>
        </div>  
          <div className="app-unit col-xs-8"><div className="store-wrapper">
            <p>Disney+ Hotstar App</p>
            <a className="playstore" href="https://play.google.com/store/apps/details?id=in.startv.hotstar" target="_blank" rel="noopener noreferrer">&nbsp;</a>
            <a className="appstore" href="https://itunes.apple.com/in/app/hotstar/id934459219?mt=8" target="_blank" rel="noopener noreferrer">&nbsp;</a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Footer