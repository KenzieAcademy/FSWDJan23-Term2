// Your Code Here!

const combinedMovies = movieDetails
  .map((detail) => {
    // Find the same movie in the other array
    const thisMovie = movies.find(
      (movie) =>
        detail.title === movie.title &&
        movie.year === parseInt(detail.release_date)
    );
    if (!thisMovie) {
      return undefined;
    }

    return { ...thisMovie, ...detail };
  })
  .filter((movie) => movie);

console.log("Combined Movies:", combinedMovies);

function MovieCard(movie) {
  // creates the HTML and returns it
}

if (0) {
  console.log("Yes");
}
