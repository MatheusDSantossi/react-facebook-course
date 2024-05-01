import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    console.log("Form submitted!");
    setComment("");
    setScore(10);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback form</h2>
          <div className="Field">
            <lable>Score: {score} s3</lable>
            <input 
            type="range" 
            min="0" 
            max="10" 
            value={score}
            onChange={e => setScore(e.target.value)}
            />
          </div>
          <div className="Field">
            <lable>Comment:</lable>
            <textarea value={comment} onChange={e => setComment(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
