import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavbarComp';
import ItemListContainer from './components/Item/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/Item/ItemDetailContainer'

function App() {
  return (
      
      <div className="App">
        <NavbarComp />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={'destacados'}/>}></Route>
          <Route path="/categoria/:catId" element={<ItemListContainer greetings={'filtrado'}/>}></Route>
          <Route path="/producto/:productoId" element={<ItemDetailContainer />}></Route>
        </Routes>
      </div>
  );
}

export default App;
