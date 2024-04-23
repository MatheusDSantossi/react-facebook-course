import avatar from '../src/avatar.jpg';
import './App.css';

function Logo(props) {
  const userPic = <img src={avatar} />
  return userPic;
}

function App() {
  return (
   <div>
    <h1>Hello World!</h1>
    <Logo />
   </div>
  );
}

export default App;
