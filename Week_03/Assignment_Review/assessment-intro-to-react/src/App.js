import ListItem from "./Components/ListItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Shopping List:</h1>
      <ol>
        <ListItem name="Avocados" amount={5} />
        <ListItem name="Tortilla Chips" amount={2} />
        <ListItem name="Veggie Platter" amount={2} />
      </ol>
    </div>
  );
}

export default App;
