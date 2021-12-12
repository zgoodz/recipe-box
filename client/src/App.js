import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">RB</div>
        <div className="menu">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Find Recipe</a></li>
            <li><a href="/">What 2 Eat?</a></li>
            <li><a href="/">About</a></li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <Home/>
      </div>
    </div>
  );
}

export default App;
