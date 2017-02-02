(function() {
    'use strict';
    angular.module('movieApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['OmdbApi', '$location'];

    function ResultsController(OmdbApi, $location) {
        var vm = this;

        vm.query = $location.search().q;

        vm.results = [];
        vm.clicked = clicked;

        OmdbApi.search(vm.query)
            .then(function(results) {
                vm.results = results;
            })
            .catch(function() {
                vm.error = 'An error ocurred during the search';
            });

        function clicked(simpleMovieData) {
            OmdbApi.findById(simpleMovieData.imdbID)
                .then(function(fullMovieData) {
                    simpleMovieData.fullData = fullMovieData;
                });
        }


    }
}());
