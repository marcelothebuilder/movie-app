(function() {
    'use strict';
    angular.module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb', 'movieCore']);

    angular.module('movieApp').config(configureRoutes);

    configureRoutes.$inject = ['$routeProvider'];

    function configureRoutes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'movie-app/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
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
