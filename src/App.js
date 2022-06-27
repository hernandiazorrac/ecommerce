import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
      
      <div className="App">
        <NavbarComp />
        <ItemListContainer />
        <ItemCount stock={5} initial={1} />
      </div>
  );
}

export default App;
