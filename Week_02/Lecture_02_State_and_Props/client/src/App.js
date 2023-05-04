import "./App.css";
import { useState } from "react";
// To render a component you must import it into the component you wish
// to render it
import UserListData from "./components/UserListData";
import CompWithChild from "./components/CompWithChild";

/**
 *
 * In React, using curly braces within the returned HTML will allow
 * you to input any string or number variable to display it.
 */

function App() {
  const [counter, setCounter] = useState(10); // the value of our counter in state

  console.log("App.js is rendering.");

  const addFiveToCounter = () => {
    // Steps for updating state through setState
    // 1. Create a copy (specifically when using complex data types)
    // 2. Modify the copy
    // 3. Pass the modified value into the setState function
    setCounter(counter + 5);
  };

  return (
    <div className="container">
      <p>Current Counter Value: {counter}</p>
      <button onClick={addFiveToCounter}>Add 5 to Count</button>
      <ul>
        {/* 
          Then, to render the component imported above, use 
          the name of the component as the element name 
        */}
        <UserListData name="Cody" age={32} location={`Boise, ID`} />
        <UserListData name="Jon" age={27} location="Somewhere, IDK" />
        <UserListData name="Kurt" age={30} location="Bozeman, MT" />
      </ul>
    </div>
  );
}

export default App;
