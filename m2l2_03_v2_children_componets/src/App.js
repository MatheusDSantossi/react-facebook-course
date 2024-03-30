import logo from './logo.svg';
import './App.css';
import Child from './Child';

function App() {
  const date = new Date();
  return (
    <div>
      {/* <h1>Insert the Child componet here.</h1> */}
      <Child message={date.toLocaleTimeString()}/>
    </div>
  );
}

export default App;
