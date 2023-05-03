import "./App.css";

function App() {
  const timeOfRender = new Date();
  const handleInputChange = (e) => {
    console.log(e.target.name + " has changed to " + e.target.value);
  };

  const handleAlertTimeDifference = (e, timeOfClick) => {
    alert(
      timeOfClick - timeOfRender + " ms has occurred between render and click"
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // This stops the page from refreshing on a form submission!
    e.stopPropagation(); // this prevents the event from "bubbling up" to any parent components
    // that may have the same event listener attached
    const truckName = e.target[0].value;
    const truckCuisine = e.target[1].value;

    alert(truckName + " serves " + truckCuisine);
  };

  // const disableForm = (e) => {
  //   alert("Thanks for your submission!");
  // };

  const turnBoxBlue = (e) => {
    e.target.classList.add("blue");
  };

  const turnBoxRed = (e) => {
    e.target.classList.remove("blue");
  };

  return (
    <div className="container">
      <section>
        <h2>onClick Event Handler</h2>
        <button onClick={() => alert(new Date())}>Click Me</button>
      </section>
      <section>
        <h2>onChange Event Handler</h2>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            // React's onChange is almost a combination of the change and keypress events
          />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
      </section>
      <section>
        <h2>Passing additional arguments into an event handler</h2>
        <button onClick={(e) => handleAlertTimeDifference(e, new Date())}>
          Click The Thing
        </button>
      </section>
      <section>
        <h2>onSubmit Event Handler</h2>
        <h3>Make a Food Truck</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Cuisine Style:
            <input type="text" name="cuisine" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
      <section>
        <h2>onMouseOver and onMouseOut</h2>
        <div
          className="box"
          onMouseOver={turnBoxBlue}
          onMouseOut={turnBoxRed}
        ></div>
      </section>
    </div>
  );
}

export default App;
