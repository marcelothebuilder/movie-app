(function() {
    'use strict';
    angular.module('movieApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$location', '$timeout'];

    function SearchController($location, $timeout) {
        var vm = this;
        var autoSearchTimeout;

        var AUTO_SEARCH_AFTER_MS = 1000;

        vm.search = search;
        vm.searchInputChanged = searchInputChanged;
        vm.isInvalidQuery = isInvalidQuery;

        function search() {
            $timeout.cancel(autoSearchTimeout);
            if (isInvalidQuery()) return;
            $location.path('/results').search('q', vm.query);
        }

        function searchInputChanged() {
            $timeout.cancel(autoSearchTimeout);
            autoSearchTimeout = $timeout(vm.search, AUTO_SEARCH_AFTER_MS);
        }

        function isInvalidQuery() {
            return !isValidQuery();
        }

        function isValidQuery() {
            return vm.query && vm.query.length !== 0;
        }
    }
}());
