"use strict";

window.addEventListener("load", () => {
  var movie = {
    title: "Batman begins",
    year: 2013,
    country: "USA"
  };

  var movies = [
    { title: "The truth hurts", year: 2016, country: "France" },
    movie
  ];

  var movies_box = document.querySelector("#movies");
  var index;
  for (index in movies) {
    var p = document.createElement("p");
    p.append(movies[index].title + " - " + movies[index].year);
    movies_box.append(p);
  }

  console.log(movies);
  console.log(movie.title);
});
