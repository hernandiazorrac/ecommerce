import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavbarComp';
import ItemListContainer from './components/Item/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import Armados from './components/Navbar/Armados/Armados';
import Tablas from './components/Navbar/Tablas/Tablas';
import ItemDetailContainer from './components/Item/ItemDetailContainer';

function App() {
  return (
      
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route path="/ecommerce" element={<ItemListContainer />}></Route>
          <Route path="ecommerce/armados" element={<Armados />}></Route>
          <Route path="ecommerce/tablas" element={<Tablas />}></Route>
          <Route path="ecommerce/producto/:productId" element={<ItemDetailContainer />}></Route>
        </Routes>
      </div>
  );
}

export default App;
