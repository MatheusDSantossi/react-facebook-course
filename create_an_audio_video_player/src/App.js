import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  const vidURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  return (
    <div className="App">
      <h1>React Player example</h1>
    <ReactPlayer 
    url={vidURL}
    playing={false}
    volume={0.5}
    />
    </div>
  );
}

export default App;
