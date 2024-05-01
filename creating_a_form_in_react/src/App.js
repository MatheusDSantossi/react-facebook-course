import { useState } from "react";
import './App.css';

function App() {
  // first to change the code to a controlled version of
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Form submitted!");
  };

  return (
    // <div className="App">
    //   <form>
    //     <fieldset>
    //       <div className="Field">
    //         <label>Name</label>
    //         <input type="text" name="name" placeholder="Name"/>
    //       </div>
    //       <button type="submit">Submit</button>
    //     </fieldset>  
    //   </form>  
    // </div>

    // Transforming it in a controlled version
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
