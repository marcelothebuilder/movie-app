(function() {
    'use strict';

    angular.module('ngChrono')
        .service('Clock', Clock);

    function Clock() {
        var self = this;
        self.now = now;

        function now() {
            return new Date();
        }
    }
}());
