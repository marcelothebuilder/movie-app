(function() {
    'use strict';
    angular.module('movieApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$location'];

    function SearchController($location) {
        var vm = this;
        vm.search = search;

        function search() {
            if (!vm.query) return;
            $location.path('/results').search('q', vm.query);
        }
    }
}());
