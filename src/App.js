import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Products />
    </div>
  );
}

export default App;
