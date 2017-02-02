(function() {
    'use strict';
    angular.module('movieApp')
        .component('movieInfoPoster', {
            templateUrl: 'movie-app/movie-info-poster.directive.html',
            bindings: {
                info: '='
            }
        });
}());
