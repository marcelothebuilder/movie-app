(function() {
    'use strict';
    angular.module('omdb', [])
        .service('OmdbApi', OmdbApi);

    OmdbApi.$inject = ['$http'];

    function OmdbApi($http) {
        var self = this;

        var BASE_URL = 'http://www.omdbapi.com/?v=1';

        self.search = search;
        self.findById = findById;

        function search(query) {
            return $http.get(BASE_URL, {
                params: {
                    s: query,
                    plot: 'short'
                }
            }).then(function(responseData) {
                return responseData.data.Search;
            });
        }

        function findById(movieId) {
            return $http.get(BASE_URL, {
                params: {
                    i: movieId,
                    plot: 'short'
                }
            }).then(function(responseData) {
                return responseData.data;
            });
        }
    }
}());
