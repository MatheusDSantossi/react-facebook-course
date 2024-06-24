import './App.css';
import FeedbackForm from './FeedbackForm';

function App() {
  // Example 2
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="App">
      {/* Example 1 */}
      {/* <a href="https://littlelemon.com" className="App-link">
        Little Lemon Restaurant
      </a> */}
      {/* Example 2 */}
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

// https://youtu.be/cd3P3yXyx30?t=20460

export default App;


// react testing importante, testing 
// best practices, introduction to 
// Jest and React Testing Library and 
// Example of component testing
