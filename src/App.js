import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product'; // Ensure this is used or remove if it's not needed
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header /> {/* Header moved outside Routes if it's common across all routes */}
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
