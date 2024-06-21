import './App.css';

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    // Because the order of the spread operator {...buttonProps} this will override the alert on the App function
    // if this operator was in the end the output will be Signing up as in the App function
    <Button type="secondary" {...buttonProps} onClick={() => {
      alert("Logging in!")
    }}
  >
      {children}
    </Button>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
        Sign Up
      </Button>
      <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;

// https://youtu.be/cd3P3yXyx30?t=18865
