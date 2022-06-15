import './App.css';
import logo from './construction.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <img src={logo} className="App-logo" alt="logo" />
        <p className="display-6">
          Site under construction.
        </p>
    </div>
  );
}

export default App;
