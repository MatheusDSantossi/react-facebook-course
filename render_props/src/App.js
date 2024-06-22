import './App.css';
import { useState, useEffect } from'react';

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "candy", "ice cream", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, []);

  return render(data);
};

const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};

const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
}

export default App;

// https://youtu.be/cd3P3yXyx30?t=19714

// learning about cross-cutting 
//concerns in applicatons, components 
//and reusing behavior. Plus the 
//patterns for common functionality 
// in React


