import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import UserTooltip from './UserTooltip';
import 'tippy.js/themes/light.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src="logob.png" 
        alt="bookverse logo"/>
      </div>

      <div className="menu-icon">
        <MenuIcon/>
      </div>

      <div className="search">
        <input type ="text" placeholder='Search your book'/>
        <SearchIcon/>
      </div>

      <div className="offer">
      <a href="/offer">Offer</a>
      </div>

      
      <div className="log-btn">
        <a href="/login">Login</a>
      </div>

      <div className="user">
        <Tippy
         theme="light" 
        //  visible={true} 
         content={<UserTooltip/>}
          interactive = {true} 
          offset={[0,15]}>
        <AccountCircleIcon/>
        </Tippy>
        
      </div>



      <div className="cartlogo">
      <a href="/cart"><ShoppingCartIcon/></a>
        
        
      </div> 

    </div>
  );
};

export default Header;