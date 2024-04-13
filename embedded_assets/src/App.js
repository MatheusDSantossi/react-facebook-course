import logo from './logo.svg';
import './App.css';
import rooftops from './assets/images/central_park.png';

function App() {
  const randomImageUrl = "https://imgs.search.brave.com/2IproQY6bmYygOhTvU3fYPb69WJD70Nb9xDTknaGwHc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg3/MTAwODcxL3Bob3Rv/L2NlbnRyYWwtcGFy/ay1hdC1hdXR1bW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS1uWkQ0SFo4SmpB/NGdwbEdVVjBla2Zv/VldCS0phVmU2SG4z/TVlyXzdoQ1E9"; 
  return (
    <div className="App">
      <h1>
        Task: add three images with some styling
      </h1>
      <img
      height={200}
      src={rooftops}
      alt="An image of a rooftop in New York"
      />
      <img
      height={200}
      src={require("./assets/images/central_park.png")}
      alt="An image of Central Park"
      />
      <img
      src={randomImageUrl}
      height={200}
      alt="An image of a rooftop in New York"
      />
    </div>
  );
}

export default App;
