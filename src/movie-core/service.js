(function() {
    'use strict';
    angular.module('movieCore', ['ngResource'])
        .factory('PopularMovies', PopularMovies);

    PopularMovies.$inject = ['$resource'];

    function PopularMovies($resource) {
        var BASE_URL = 'http://www.omdbapi.com/?v=1';

        var token = 'temporary';

        return $resource('popular/:movieId', { movieId: '@id' }, {
            update: {
                method: 'PUT',
                headers: {'authToken': token }
            },
            get: {
                method: 'GET',
                headers: {'authToken': token }
            },
            query: {
                method: 'GET',
                headers: {'authToken': token }
            },
            save: {
                method: 'POST',
                headers: {'authToken': token }
            },
            remove: {
                method: 'DELETE',
                headers: {'authToken': token }
            }
        });
    }
}());
