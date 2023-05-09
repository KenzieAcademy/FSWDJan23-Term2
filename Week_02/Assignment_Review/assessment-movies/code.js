// Your Code Here!

const combinedMovies = movieDetails
  .map((mD) => {
    const matchingMovie = movies.find(
      (movie) =>
        movie.title.toLowerCase() === mD.title.toLowerCase() &&
        Number(movie.year) === parseInt(mD.release_date)
    );

    if (matchingMovie) {
      return { ...matchingMovie, ...mD };
    }
  })
  .filter((m) => m);

function MovieCard(movie) {
  return `
    <div class="card">
      <h3>${movie.title}</h3>
      <img class="poster" src="${movie.imageUrl}" alt="${movie.title} poster" />
      <h5>Cast</h5>
      <p>
        ${movie.cast.join(", ")}
      </p>
    </div>
  `;
}

function renderMovies(movies) {
  const display = document.getElementById("results");
  if (movies.length === 0) {
    display.innerHTML = "<strong>No matches</strong>";
    return;
  } else {
    display.innerHTML = movies
      .map((movie) => MovieCard(movie))
      .reduce((html, card) => html + card);
  }
}

function filterMovies(e) {
  e.preventDefault();
  const form = e.target;

  const titleValue = form[0].value;
  const castValue = form[1].value;

  const filteredMovies = combinedMovies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(titleValue.toLowerCase()) &&
      movie.cast.some((name) =>
        name.toLowerCase().includes(castValue.toLowerCase())
      )
    );
  });

  renderMovies(filteredMovies);

  // form[0].value = "";
  // form[1].value = "";
}

const form = document.getElementById("search");
form.addEventListener("submit", filterMovies);

renderMovies(combinedMovies);
