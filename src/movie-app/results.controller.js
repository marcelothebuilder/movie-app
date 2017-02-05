(function() {
    'use strict';
    angular.module('movieApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['OmdbApi', '$location', '$exceptionHandler'];

    function ResultsController(OmdbApi, $location, $exceptionHandler) {
        var vm = this;

        vm.query = $location.search().q;

        vm.results = [];
        vm.clicked = clicked;

        OmdbApi.search(vm.query)
            .then(function(results) {
                vm.results = results;
            })
            .catch(function(e) {
                 $exceptionHandler(e);
            });

        function clicked(simpleMovieData) {
            if (simpleMovieData.fullData) return;
            OmdbApi.findById(simpleMovieData.imdbID)
                .then(function(fullMovieData) {
                    simpleMovieData.fullData = fullMovieData;
                });
        }


    }
}());
