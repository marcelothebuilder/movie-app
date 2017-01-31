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

        function search() {
            $timeout.cancel(autoSearchTimeout);
            if (!vm.query) return;
            $location.path('/results').search('q', vm.query);
        }

        function searchInputChanged() {
            $timeout.cancel(autoSearchTimeout);
            autoSearchTimeout = $timeout(vm.search, AUTO_SEARCH_AFTER_MS);
        }
    }
}());
