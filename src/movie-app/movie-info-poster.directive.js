(function() {
  'use strict';
  angular.module('movieApp')
      .directive('movieInfoPoster', movieInfoPoster);

  movieInfoPoster.$inject = [];

  function movieInfoPoster() {
      return {
          restrict: 'E',
          templateUrl: 'movie-app/movie-info-poster.directive.html',
          // template: '<div>{{info.Title}}</div>',
          replace: false,
          scope: {
              info: '='
          }
      };
  }
}());
