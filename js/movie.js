const topMovie = document.getElementById("topMovie");
const movieToggle = document.getElementById("movieToggle");

movieToggle.addEventListener("click", () => {

  if (topMovie.paused) {

    topMovie.play();

    movieToggle.textContent = "PAUSE";

  } else {

    topMovie.pause();

    movieToggle.textContent = "PLAY";

  }

});