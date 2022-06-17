import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
      
      <div className="App">
        <NavbarComp />
        <ItemListContainer />
      </div>
  );
}

export default App;
