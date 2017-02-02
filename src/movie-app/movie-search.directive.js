(function() {
    'use strict';
    angular.module('movieApp')
        .component('movieSearch', {
            templateUrl: 'movie-app/movie-search.directive.html',
            controller: 'SearchController',
            controllerAs: 'vm'
        });
}());
