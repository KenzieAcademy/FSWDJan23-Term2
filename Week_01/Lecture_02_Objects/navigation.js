window.onload = () => {
  navigate();
  const aTags = document.querySelectorAll("a");
  // aTags.forEach((tag) =>
  //   tag.addEventListener("click", (e) => {
  //     e.preventDefault();
  //   })
  // );
  window.onhashchange = navigate;
};

function navigate() {
  const root = document.getElementById("root");
  switch (location.hash.replace("#", "")) {
    case "references": {
      root.innerHTML = `
      <h2>Memory References</h2>
    <p>
      Max and Alex leave dinner and decide they want a new car. So the next day, they go to the dealership. They talk to
      one of the salesmen, and they decided on a new car to buy together. They sign the paperwork, and they walk out
      with a 2023 Honda Civic.
    </p>
    <p>
      A few weeks go by, and Max decides "This car would look SO sick with some flames painted on it." Alex gets home
      from work, and screams "WHAT IN THE WORLD DID YOU DO TO MY CAR?!"
    </p>
    <p>This analogy represents how JavaScript handles <strong>complex</strong> datatypes in memory. Complex datatypes
      include:</p>
    <ul>
      <li>Any object</li>
      <li>Arrays</li>
    </ul>
    <p>
      Objects are stored in memory as <strong>pointers</strong> to another area of memory called a
      <strong>heap</strong>.
    </p>
      `;
      break;
    }
    case "values": {
      root.innerHTML = `
        <h2>Memory Values</h2>
        <p>
          Max and Alex are browsing Netflix, and they scroll past the Godfather. Alex turns to Max and says "Oh my goodness,
          I LOVE that movie! In fact, it's my all time favorite!" Max stores this information in his memory. Weeks later,
          Alex is watching Netflix at home alone, and puts on the Shawshank Redemption. After watching this movie, Alex
          decides her favorite movie is now Shawshank Redemption.
        </p>
        <p>
          Soon after, Max and Alex are getting dinner at an Italian restaurant, and the Godfather is on the TV behind the
          bar. Max says to Alex "Oh hey! That's your favorite movie!" Alex then informs Max that is no longer the case; her
          favorite movie is now the Shawshank Redemption.
        </p>
        <p>
          This analogy represents how JavaScript stores <strong>primitive</strong> datatypes in memory; by their literal
          value. Datatypes stored in memory in this manner are:
        </p>
        <ul>
          <li>Numbers</li>
          <li>Booleans</li>
          <li>Strings*</li>
        </ul>
        <p>
          Note that Strings are not truly primitive datatypes; we can use things like indexes to select individual
          characters. However, in memory, they are stored in the same manner as true primitives.
        </p>
        `;
      break;
    }
    case "": {
      root.innerHTML = `
        <h2>Lecture 2: Object Equality</h2>
          <p>
            In JavaScript, we are capable of storing all kinds of values in memory. In fact, that's what happens whenever we
            implement a variable; a value is assigned to the variable by storing it in memory for quick lookup. But the manner in
            which this data is stored in memory differs by its data type.
          </p>
          <p>
            In this lecture, we'll be looking at which datatypes are stored in memory by their literal value, and which
            datatypes are stored in memory as <em>pointers</em>. This distinction is commonly described as <strong>Reference
              vs Value</strong>
          </p>
          `;
      break;
    }
    case "shallow": {
      root.innerHTML = `
      <h2>Shallow Copies</h2>
      <p>
        Objects contain properties and values. Often times, these properties have values that are
        <strong>primitive</strong> datatypes (strings, numbers, booleans). But, you can always have other complex
        datatypes be the values of these properties.
      </p>
      <p>
        A <strong>shallow copy</strong> is a copy of an object in which only the top-most layer of properties is
        duplicated (i.e. the object itself does not share a memory address, but the property values can).
      </p>
      `;
    }
  }
}
