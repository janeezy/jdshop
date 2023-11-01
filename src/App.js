
import './App.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
      <div className='header__logo'></div>
      <ShopIcon className='header__logoImage' fontSize='large' />
      <h2 className='header__logoTitle'>Jdshop</h2>

      <div className="header__search">
      <input type="text" className='header__searchInput' />
        < SearchIcon className='header__searchIcon' />
        </div>


      <div className="header__nav"></div>

      <div className="nav__item"></div>
      <span className="nav__itemlineone"> Hello Guest</span>
      <span className="nav__itemlineone"> Sign in</span>


      <div className="nav__item"></div>
      <span className="nav__itemlineone"> Your</span>
      <span className="nav__itemlineone"> Shop</span>

      <div className="nav__item"></div>
      <ShoppingBasketIcon fontSize='large'/>
      <span className="nav__itemlineone"> 0 </span>
    </div>

  );
}

export default App;
