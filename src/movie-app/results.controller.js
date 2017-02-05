(function() {
    'use strict';
    angular.module('movieApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['OmdbApi', '$location', '$exceptionHandler', '$log'];

    function ResultsController(OmdbApi, $location, $exceptionHandler, $log) {
        var vm = this;

        vm.query = $location.search().q;

        vm.results = [];
        vm.clicked = clicked;

        $log.debug('Results controller loaded with query [' + vm.query + ']');

        OmdbApi.search(vm.query)
            .then(function(results) {
                $log.debug('Data returned for the query: ', results);
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
