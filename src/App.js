import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import CheckoutPage from './Components/Checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path = "*" element = {<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
