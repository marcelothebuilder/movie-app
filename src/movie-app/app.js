(function() {
    'use strict';
    angular.module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb']);

    angular.module('movieApp').config(configureRoutes);

    configureRoutes.$inject = ['$routeProvider'];

    function configureRoutes($routeProvider) {
        $routeProvider
            .when('/results', {
                templateUrl: 'movie-app/results.html',
                controller: 'ResultsController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
}());
