import React, { useState }  from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import logoKids from '../../asset/disney-hotstar-kids.svg';
import Button from '../Buttons/Button.tsx'
import globalvar from '../../App.scss';

const CSS = {
  backgroundColor: globalvar
}
function Header() {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = e => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = e => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };
  return (
    <div className='header-wrapper'> 
      <div  className='header'>
        <div className='header-left'>
          <Menu></Menu>
          <Logo></Logo>
          <ul className='menu-items'>
            <li className='menu-item' onMouseEnter={e => showButton(e)} >TV</li>
            <li className='menu-item'>Movie</li>
            <li className='menu-item'>Sports</li>
            <li className='menu-item'>Disney+</li>
            <li className='menu-item'><img  src={logoKids} alt="logoKids"/></li>
          </ul>
        </div>
        <div className={display} onMouseLeave={e => hideButton(e)}><ul className='sub-menu-items'>
            <li className='menu-item' onMouseEnter={e => showButton(e)} >TV</li>
            <li className='menu-item'>Movie</li>
            <li className='menu-item'>Sports</li>
            <li className='menu-item'>Disney+</li>
            <li className='menu-item'><img  src={logoKids} alt="logoKids"/></li>
          </ul>
        </div>
        <div className='header-right'>
        <div className='header-items'>
          <SearchBar></SearchBar>
         
         
          <Button 
            border="none"
            bgcolor= "#1f80e0"
            color= "#fff"
            height = "35px"
            onClick={() => alert("You clicked on Subcribe!")}
            radius = "5px"
            width = "100px"
            children = "SUBSCRIBE"
          />

          <Button 
            border="none"
            bgcolor= "transparent"
            color="rgba(255, 255, 255, 0.8)"
            height = "35px"
            onClick={() => console.log("You clicked on Login!")}
            radius = "5px"
            width = "100px"
            children = "LOGIN"
          />
        
          
          
        </div>
        </div>
        
      </div>
      
        
    </div>
  )
}

export default Header