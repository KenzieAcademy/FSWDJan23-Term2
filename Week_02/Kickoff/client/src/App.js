import logo from "./logo.svg";
import "./App.css";

function App() {
  const alertWithTheWordYes = () => alert("Yes");

  return (
    <div className="App">
      <button onClick={alertWithTheWordYes}>Click to Alert Yes</button>
    </div>
  );
}

export default App;
