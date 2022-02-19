import React from 'react'
import SearchBar from '../SearchBar'
import './Header.scss'

import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'


function Header() {
  return (
    <div className='header'> 
        <Menu></Menu>
        <Logo></Logo>
        <ul className='menu-items'>
          <li className='menu-item'>TV</li>
          <li className='menu-item'>Movie</li>
          <li className='menu-item'>Sports</li>
          <li className='menu-item'>Disney+</li>
          <li className='menu-item'><img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"/></li>
        </ul>
       
        
        <SearchBar></SearchBar>
    </div>
  )
}

export default Header