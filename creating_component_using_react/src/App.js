
import Btn from './btn/Btn';
import BtnOnMouseOver from './btn/Btn';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';



// function Header() {
//   return <h1>Hello World!</h1>;
// }

// function App() {
//   return (
//     // <div className='App'>
//     //   <Header name="Matheus" color="Purple"/>;
//     //   <div>
//     //     <Main userName="Mack"  num={5} greet="Howdy"/>;
//     //     <Sidebar greet="Hi"/>;
//     //   </div>
//     // </div>
//     // <></> // fragment (an HTML open and close without a name)

//     // BTN EXAMPLE (https://youtu.be/cd3P3yXyx30?t=3991)
//     // <Btn />

//     <BtnOnMouseOver />

//   );
// }

// Ternary operations and dynamic rendering (https://youtu.be/cd3P3yXyx30?t=8195)

function App() {
  const time = new Date();
  const day = time.toLocaleString("en-US", {weekday: "long"});
  const morning = time.getHours() >= 6 && time.getHours() < 12 && time.getHours() <= 19;
  let dayMessage;

  if(day.toLowerCase() === "monday") {
    dayMessage = `Happy ${day}`;
  } else if(day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go`;
  } else if(day.toLowerCase() === "wednesday") {
    dayMessage = `${day}, half way there`;
  } else if(day.toLowerCase() === "thursday") {
    dayMessage = `${day}, start planing the weekend`;
  } else if(day.toLowerCase() === "saturday") {
    dayMessage = "Woo - hoo, the weekend is coming!";
  } else {
    dayMessage = "Stay calm and keep having fun";
  }
  return (
    <div className='App'>
       <h1>
        {dayMessage}
       </h1>
       {morning ? <h2>Have you had breakfast yet?</h2> : ""}
    </div>
  )
}


export default App;
