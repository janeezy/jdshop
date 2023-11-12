import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header ()
{
    return (
        <div className='header'>
            <Link to=':/' style={ { textDecoration: 'none' } }>
                <div className='header__logo'>
      <         ShopIcon className='header__logoImage'                fontSize='large' />
                <h2 className='header__logoTitle'>Jdshop</h2>
                </div>
            </Link>


      <div className="header__search">
      <input type="text" className='header__searchInput' />
        < SearchIcon className='header__searchIcon' />
            </div>

      <div className="header__nav">

      <div className="nav__item"></div>
      <span className="nav__itemlineone"> Hello Guest</span>
                <span className="nav__itemlineTwo"> Sign in</span>
                </div>


      <div className="nav__item">
      <span className="nav__itemlineone "> Your</span>
                <span className="nav__itemlineTwo "> Shop</span>
            </div>

            <Link to = './Checkout'  style = { { textDecoration : 'none' } }>

      <div className="nav__itemBasket">
      <ShoppingBasketIcon />
                    <span className="nav__itemlineTwo nav__basketCount" > 0 </span>

                </div>
                </Link>
            </div>
    )
}

export default Header