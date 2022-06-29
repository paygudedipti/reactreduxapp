
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { Routes,Route } from 'react-router-dom';

import Cart from './component/Cart';
import CardsDetails from './component/CardsDetails';


function App() {
  return (
    <div >
    <Header />
    <Routes>
      <Route path="/" element={<Cart />} />
      <Route path="/cards/:id" element={<CardsDetails />} />
     
    </Routes>
    </div>
  );
}

export default App;
