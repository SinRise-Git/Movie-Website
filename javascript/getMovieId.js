function movieId(){
  const getMovie = document.getElementById("searchInput").value;
  window.location.href = `movie-page.html?Id=${getMovie}`;
}

