import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavbarComp';
import ItemListContainer from './components/Item/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/Item/ItemDetailContainer'
import { CartProvider } from './components/Context/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
      <div className="App">
        <CartProvider>
          <NavbarComp />
            <Routes>
              <Route path="/" element={<ItemListContainer greetings={'todos los productos'}/>}></Route>
              <Route path="/categoria/:catId" element={<ItemListContainer />}></Route>
              <Route path="/producto/:productoId" element={<ItemDetailContainer />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </CartProvider>
      </div>
  );
}

export default App;
