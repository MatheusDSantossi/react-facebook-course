import logo from './logo.svg';
import './App.css';

const data = [{
  id: "1",
  title: "Tiramisu",
  description: "The best tiramisu in town",
  price: "$5.00",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
},
{
  id: "2",
  title: "Lemon Ice Cream",
  description: "Mind blowing taste",
  price: "$4.50",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
},
{
  id: "3",
  title: "Chocolate mousse",
  description: "Unexplored flavour",
  price: "$6.50",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
},
];

const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  };
});

function App() {
  const listItems = topDesserts.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li>{itemText}</li>
  });
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default App;

// export default function App () {
//   console.log(topDessserts);
//   return <h1>Examine the console output</h1>;
// }

