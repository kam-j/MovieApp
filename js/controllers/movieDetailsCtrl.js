app.controller('MovieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl($routeParams,movieService,$location) {
  /*TODO #4: Load the movie from the movieService using the id from the route params*/
  var ctrl = this;
  ctrl.$routeParams = $routeParams;
  ctrl.movieService = movieService;
  ctrl.$location = $location;

  ctrl.movie = ctrl.movieService.getMovie(ctrl.$routeParams.movieId)
  console.log(ctrl.movie);
}