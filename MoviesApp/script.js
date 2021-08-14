const API_KEY = "cd7e153b3685dd2f843037620ae57a9b";
const API_URL = `http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_URL = `http://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// Get initial movies

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.map((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    
    <img
      src="${IMG_PATH + poster_path}"
      alt=""
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class=${getClassByRating(vote_average)}> ${vote_average} </span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
    ${overview}
    </div>
  
  `;
    main.appendChild(movieEl);
  });
}

function getClassByRating(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm) {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
