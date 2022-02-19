import React from 'react'
import SearchBar from '../SearchBar'
import './Header.scss'

import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'

import { ThemeProvider } from '@material-ui/styles';
import theme from '../../theme';

function Header() {
  return (
    <div className='header'> 
        <Menu></Menu>
        <Logo></Logo>
        
        <div className='menu-items'>TV</div>
        <div className='menu-items'>Movie</div>
        <div className='menu-items'>Sports</div>
        <div className='menu-items'>Disney+</div>
        
        <SearchBar></SearchBar>
    </div>
  )
}

export default Header