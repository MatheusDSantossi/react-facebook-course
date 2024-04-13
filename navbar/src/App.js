import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import AboutMe from './AboutMe';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        {/* <a href="#" className="nav-item">Homepage</a> */}
        
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav">About Me</Link>
        {/* <a href="#" className="nav-item">About Me</a> */}
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
      {/* <Homepage />
      <AboutMe /> */}
    </div>
  );
}

export default App;
