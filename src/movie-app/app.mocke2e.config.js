(function() {
    'use strict';
    angular.module('movieApp').run(['$httpBackend', function($httpBackend) {
        $httpBackend.whenGET('popular').respond(['tt0176385', 'tt0110912', 'tt0119081']);
        $httpBackend.whenGET(/.*/).passThrough();

    }]);
}());
