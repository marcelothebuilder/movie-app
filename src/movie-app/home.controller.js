(function() {
    'use strict';
    angular.module('movieApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['PopularMovies', '$interval', 'OmdbApi'];

    function HomeController(popularMovies, $interval, omdbApi) {
        var vm = this;
        var interval;
        var CHANGE_MOVIE_INTERVAL_MS = 5000;
        var popularMoviesIds = [];
        var currentMovieIndex = 0;

        vm.currentMovie = {};
        start();

        function start() {
            // popularMovies.get()
            //     .then(function(popularMoviesIds_) {
            var popularMoviesIds_ = ['tt0176385', 'tt0110912', 'tt0119081'];
            popularMoviesIds = popularMoviesIds_;
            populateMovieData();
            startRotateInterval();
            // });
        }

        function cycleMovieIndex() {
            if (popularMoviesIds.length === 0) return;
            if (currentMovieIndex === (popularMoviesIds.length - 1)) {
                currentMovieIndex = 0;
            } else {
                currentMovieIndex++;
            }
        }

        function startRotateInterval() {
            $interval(function() {
                cycleMovieIndex();
                populateMovieData();
            }, CHANGE_MOVIE_INTERVAL_MS);
        }

        function populateMovieData() {
            var movieId = popularMoviesIds[currentMovieIndex];

            return omdbApi.findById(movieId)
                .then(function(movieData) {
                    vm.currentMovie = movieData;
                });
        }
    }
}());
