(function() {
    'use strict';
    angular.module('ngChrono')
        .filter('fromNow', fromNow);

    fromNow.$inject = ['Clock'];

    var A_SECOND = 1000;
    var A_MINUTE = A_SECOND * 60;
    var AN_HOUR = A_MINUTE * 60;
    var A_DAY = AN_HOUR * 24;

    function fromNow(Clock) {
        return function(date) {
            if (!date) throw "provided date can't be undefined";
            var isDate = date instanceof Date;

            if (typeof date === 'string') {
                var original = String(date);
                date = new Date(date);
                if (isNaN(date.getTime())) return original;
            }

            var now = Clock.now();

            var secondsDiff = computeSecondsDiff(now, date);
            if (secondsDiff && Math.abs(secondsDiff) <= 59) return makeTime('second', secondsDiff);

            var minutesDiff = computeMinutesDiff(now, date);
            if (minutesDiff && Math.abs(minutesDiff) <= 59) return makeTime('minute', minutesDiff);

            var hoursDiff = computeHoursDiff(now, date);
            if (hoursDiff && Math.abs(hoursDiff) <= 23) return makeTime('hour', hoursDiff);

            var daysDiff = computeDaysDiff(now, date);
            if (daysDiff && Math.abs(daysDiff) <= 30) return makeTime('day', daysDiff);

            var monthDiff = now.getMonth() - date.getMonth();
            if (monthDiff) return makeTime('month', monthDiff);

            var yearDiff = now.getFullYear() - date.getFullYear();
            if (yearDiff) return makeTime('year', yearDiff);

            return 'now';
        };
    }

    function computeSecondsDiff(dateOne, dateTwo) {
        return Math.round(computeMsDiff(dateOne, dateTwo) / A_SECOND);
    }

    function computeMinutesDiff(dateOne, dateTwo) {
        return Math.round(computeMsDiff(dateOne, dateTwo) / A_MINUTE);
    }

    function computeHoursDiff(dateOne, dateTwo) {
        return Math.round(computeMsDiff(dateOne, dateTwo) / AN_HOUR);
    }

    function computeDaysDiff(dateOne, dateTwo) {
        var msDiff = computeMsDiff(dateOne, dateTwo);
        return Math.round(msDiff / A_DAY);
    }

    function computeMsDiff(dateOne, dateTwo) {
        return dateOne.getTime() - dateTwo.getTime();
    }

    function makeTime(noun, quantity) {
        var suffix = (Math.abs(quantity) > 1) ? 's' : '';
        var base = Math.abs(quantity) + ' ' + noun + suffix;
        if (quantity > 0) {
            return base + ' ago';
        } else {
            return 'in ' + base;
        }

    }
}());
