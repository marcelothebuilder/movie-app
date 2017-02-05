describe('from now filter', function() {
    var fromNow;
    var Clock;
    beforeEach(module('movieApp'));
    beforeEach(module('ngChrono'));
    beforeEach(inject(function(_$filter_, _Clock_) {
        fromNow = _$filter_('fromNow');
        Clock = _Clock_;
    }));

    it('should not throw error when undefined', function() {
        expect(function() {
            fromNow(undefined);
        }).not.toThrow();
    });

    it('should not throw error when null', function() {
        expect(function() {
            fromNow(null);
        }).not.toThrow();
    });

    it('should return an empty string when provided date is undefined', function() {
        expect(fromNow(null)).toBe('');
    });

    it("should return the provided value as output when it's not a date", function() {
        var value = 'melancia';
        expect(fromNow(value)).toBe(value);
    });

    it("should return the provided value as output when it's not a date", function() {
        var value = 'melancia';
        expect(fromNow(value)).toBe(value);
    });

    it('should return the years difference between 2016 and 2015', function() {
        var timeIn2015 = TzDate('2015-01-01');
        var timeIn2016 = TzDate('2016-01-01');

        spyOn(Clock, 'now').and.returnValue(timeIn2016);
        var output = fromNow(timeIn2015);

        expect(output).toBe('1 year ago');
    });

    it('should return the years difference between 2020 and 2015', function() {
        var timeIn2015 = TzDate('2015-01-01');
        bendTime('2020-01-01');
        var output = fromNow(timeIn2015);
        expect(output).toBe('5 years ago');
    });

    it('should return the years difference between 2020 and 2019', function() {
        var timeIn2015 = TzDate('2020-01-01');
        bendTime('2019-01-01');
        var output = fromNow(timeIn2015);
        expect(output).toBe('in 1 year');
    });

    it('should return the years difference between 2015 and 2020', function() {
        var timeIn2015 = TzDate('2020-01-01');
        bendTime('2015-01-01');
        var output = fromNow(timeIn2015);
        expect(output).toBe('in 5 years');
    });

    it('should return the months difference between february and january', function() {
        var timeIn2015 = TzDate('2015-01-01');
        bendTime('2015-02-01');
        var output = fromNow(timeIn2015);
        expect(output).toBe('1 month ago');
    });

    it('should return the months difference between march and january', function() {
        var timeIn2015 = TzDate('2015-01-01');
        bendTime('2015-03-01');
        var output = fromNow(timeIn2015);
        expect(output).toBe('2 months ago');
    });

    it('should return the days difference between august 3rd and august 1st', function() {
        var timeInAugust1st = TzDate('2015-08-01');
        bendTime('2015-08-03');
        var output = fromNow(timeInAugust1st);
        expect(output).toBe('2 days ago');
    });

    it('should return months of difference between 08-2017 and 12-2016', function() {
        var then = TzDate('2017-08-01');
        bendTime('2016-12-01');
        expect(fromNow(then)).toContain("months");
    });

    it('should return days of difference between 01-08-2017 and 28-07-2017', function() {
        var then = TzDate('2017-08-01');
        bendTime('2017-07-28');
        expect(fromNow(then)).toContain("days");
    });

    it('should return days of difference between 29-12-2016 and 01-01-2017', function() {
        var then = TzDate('2016-12-29');
        bendTime('2017-01-01');
        expect(fromNow(then)).toContain("days");
    });

    it('should return months of difference between 2016-11-01 and 2017-01-01', function() {
        var then = TzDate('2016-11-01');
        bendTime('2017-01-01');
        expect(fromNow(then)).toContain("months");
    });

    it('should return hours of difference between 2016-11-01 23:00 and 2016-11-02 00:01', function() {
        var then = TzDate('2016-11-01T23:00:00.000Z');
        bendTime('2016-11-02T01:00:00.000Z');
        expect(fromNow(then)).toContain("hours");
    });

    it('should return 1 day of difference between 2016-11-01 23:00 and 2016-11-02 23:00', function() {
        var then = TzDate('2016-11-01T01:00:00.000Z');
        bendTime('2016-11-02T01:00:00.000Z');
        expect(fromNow(then)).toContain("day");
    });

    it('should return 2 minutes of difference between 2016-12-31 23:59 and 2017-01-01 00:01', function() {
        var then = TzDate('2016-12-31T23:59:00.000Z');
        bendTime('2017-01-01T00:01:00.000Z');
        expect(fromNow(then)).toContain("2 minutes ago");
    });

    it('should return the seconds elapsed within a difference of less than 1 minute', function() {
        var then = TzDate('2016-11-01T00:00:00.000Z');
        bendTime('2016-11-01T00:00:15.000Z');
        expect(fromNow(then)).toContain("15 seconds ago");
    });

    it('should return now if the range of time is within miliseconds in the past', function() {
        var then = TzDate('2016-11-01T00:00:00.000Z');
        bendTime('2016-11-01T00:00:00.001Z');
        expect(fromNow(then)).toBe("now");
    });

    it('should return time elapsed when providing a string instead of a date object', function() {
        bendTime('2016-11-01T00:00:00.000Z');
        expect(fromNow('2016-11-05T00:00:00.000Z')).toContain("days");
    });

    it('should return 10 years of diff between 10 Nov 1999 and 11 Nov 2009', function() {
        bendTime('2009-11-11T10:00:00.000Z');
        expect(fromNow('10 Sep 1999')).toBe("10 years ago");
    });

    function bendTime(newTime) {
        spyOn(Clock, 'now').and.returnValue(TzDate(newTime));
    }

    function TzDate(dateString) {
        dateString = dateString + (dateString.length === 10 ? 'T00:00:00.000Z' : '');
        return new angular.mock.TzDate(0, dateString);
    }

});
