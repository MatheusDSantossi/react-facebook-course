import './App.css';

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay"/>
      <div className="Alert">{children}</div>
    </>
  );
};

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};

function App() {
  return (
    <div className="App">
      <header>Little lemon Restaurant 🍕 </header>
      <Alert>
        <h4>Delete Account</h4>
        <p>
          Are you sure you want to proceed? You will miss all your delicious recipes!
        </p>
        <DeleteButton />
      </Alert>
    </div>
  );
};

export default App;

// https://youtu.be/cd3P3yXyx30?t=18129
