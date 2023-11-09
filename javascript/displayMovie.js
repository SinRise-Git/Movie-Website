const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2Y3OWMzZWM3N2IyNDAwZmNmNGNmNDRmNzhhYzMxNyIsInN1YiI6IjY1MjgwMDM3NjI5YjJjMDEzOWE4OTIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jF6WieOUacYXJMiMu_REUBQjVa9d_43QEGiXu9YZeeg'
    }
  };

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("Id");

if (movieId) {
  movieSearch(movieId);
}

function movieSearch(id) {
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then(response => response.json())
    .then(data => {
      const name = data.original_title;
      console.log(name);
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}
