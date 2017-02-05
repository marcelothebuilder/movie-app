(function() {
    'use strict';
    angular.module('movieApp').config(['$logProvider', function($logProvider) {
        $logProvider.debugEnabled(true);
    }]);
}());
